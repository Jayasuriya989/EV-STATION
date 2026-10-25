/**
 * ChartManager - High-performance EV Charging & Load Profile Visualizer
 * Integrates Chart.js with stepped curves, capacity limits, and dynamic tariffs.
 */

class ChartManager {
    constructor(canvasId) {
        this.canvasId = canvasId;
        this.chart = null;
        this.showDumbBaseline = true;
        this.showTariff = true;
        this.showCapacityLimit = true;
        this.showIndividualCars = false;
        this.palette = [
            '#00F0FF', '#10B981', '#F59E0B', '#8B5CF6', 
            '#EC4899', '#3B82F6', '#14B8A6', '#F97316'
        ];
    }

    init() {
        const ctx = document.getElementById(this.canvasId);
        if (!ctx) return;

        // Generate 96 slot labels (00:00, 00:15, ..., 23:45)
        this.labels = [];
        for (let i = 0; i < 96; i++) {
            const h = String(Math.floor(i / 4)).padStart(2, '0');
            const m = String((i % 4) * 15).padStart(2, '0');
            this.labels.push(`${h}:${m}`);
        }

        const config = {
            type: 'line',
            data: {
                labels: this.labels,
                datasets: []
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        display: false // Using custom UI legend
                    },
                    tooltip: {
                        backgroundColor: 'rgba(7, 11, 20, 0.95)',
                        titleColor: '#00F0FF',
                        titleFont: { family: 'Outfit', size: 14, weight: '700' },
                        bodyColor: '#F3F4F6',
                        bodyFont: { family: 'Inter', size: 12 },
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 10,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    if (context.dataset.yAxisID === 'yTariff') {
                                        label += context.parsed.y.toFixed(2) + ' €/kWh';
                                    } else {
                                        label += context.parsed.y.toFixed(1) + ' kW';
                                    }
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.04)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#64748B',
                            font: { family: 'JetBrains Mono', size: 11 },
                            maxTicksLimit: 12
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Charging Load (kW)',
                            color: '#94A3B8',
                            font: { family: 'Inter', size: 12, weight: '600' }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94A3B8',
                            font: { family: 'JetBrains Mono', size: 11 },
                            callback: value => value + ' kW'
                        },
                        min: 0
                    },
                    yTariff: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Spot Electricity Tariff (€/kWh)',
                            color: '#F59E0B',
                            font: { family: 'Inter', size: 12, weight: '600' }
                        },
                        grid: {
                            drawOnChartArea: false,
                            drawBorder: false
                        },
                        ticks: {
                            color: '#F59E0B',
                            font: { family: 'JetBrains Mono', size: 11 },
                            callback: value => value.toFixed(2) + ' €'
                        },
                        min: 0,
                        suggestedMax: 0.50
                    }
                }
            }
        };

        this.chart = new Chart(ctx, config);
    }

    update(scheduleData, stateData, tariffHistory) {
        if (!this.chart) this.init();
        if (!this.chart) return;

        const cars = scheduleData.cars || [];
        const datasets = [];

        // 1. Grid Fuse Limit (Constant horizontal boundary)
        const rootFuse = stateData.fuseTree ? stateData.fuseTree.rootFuse : null;
        let rootLimitKW = 99.36; // 144A * 230V * 3
        if (rootFuse) {
            const totalA = (rootFuse.fusePhase1 + rootFuse.fusePhase2 + rootFuse.fusePhase3);
            rootLimitKW = (totalA * 230) / 1000;
        }

        if (this.showCapacityLimit) {
            datasets.push({
                label: 'Grid Capacity Fuse Limit',
                data: Array(96).fill(rootLimitKW),
                borderColor: '#EF4444',
                borderWidth: 2,
                borderDash: [6, 6],
                pointRadius: 0,
                fill: false,
                yAxisID: 'y'
            });
        }

        // 2. Dynamic Electricity Price Curve
        let prices = (tariffHistory && tariffHistory.energyPrices) ? tariffHistory.energyPrices : this.getDefaultTariff();
        if (this.showTariff && prices) {
            datasets.push({
                label: 'Electricity Tariff',
                data: prices,
                borderColor: 'rgba(245, 158, 11, 0.75)',
                backgroundColor: 'rgba(245, 158, 11, 0.04)',
                borderWidth: 2,
                pointRadius: 0,
                fill: true,
                tension: 0.35,
                yAxisID: 'yTariff'
            });
        }

        // 3. Compute Smart Optimized Load (kW per timeslot)
        const smartLoadKW = Array(96).fill(0);
        cars.forEach(car => {
            const plan = car.currentPlan || [];
            const phases = (car.canLoadPhase1 || 1) + (car.canLoadPhase2 || 1) + (car.canLoadPhase3 || 1);
            for (let i = 0; i < 96; i++) {
                const amp = plan[i] || 0;
                const kw = (amp * 230 * phases) / 1000;
                smartLoadKW[i] += kw;
            }
        });

        // 4. Compute Uncoordinated "Dumb" Baseline Charging for Comparison
        const dumbLoadKW = Array(96).fill(0);
        cars.forEach(car => {
            const arrSlot = Math.floor(car.timestampArrival / 900);
            const phases = (car.canLoadPhase1 || 1) + (car.canLoadPhase2 || 1) + (car.canLoadPhase3 || 1);
            const maxKw = (car.maxCurrentPerPhase * 230 * phases) / 1000;
            const neededKwh = Math.max(0, (car.minLoadingState || car.maxCapacity * 0.8) - (car.startCapacity || 0));
            const hoursNeeded = neededKwh / (maxKw * 0.9); // with efficiency
            const slotsNeeded = Math.ceil(hoursNeeded * 4);

            for (let s = arrSlot; s < Math.min(96, arrSlot + slotsNeeded); s++) {
                dumbLoadKW[s] += maxKw;
            }
        });

        if (this.showDumbBaseline) {
            datasets.push({
                label: 'Uncoordinated Dumb Charging (Baseline)',
                data: dumbLoadKW,
                borderColor: 'rgba(148, 163, 184, 0.55)',
                borderWidth: 2,
                borderDash: [4, 4],
                pointRadius: 0,
                stepped: 'before',
                fill: false,
                yAxisID: 'y'
            });
        }

        // 5. Smart Optimized Load
        datasets.push({
            label: 'Smart Charging Plan (Optimized)',
            data: smartLoadKW,
            borderColor: '#00F0FF',
            backgroundColor: 'rgba(0, 240, 255, 0.15)',
            borderWidth: 2.5,
            pointRadius: 0,
            stepped: 'before',
            fill: true,
            yAxisID: 'y'
        });

        // 6. Individual Car Datasets if selected
        if (this.showIndividualCars) {
            cars.forEach((car, index) => {
                const carLoad = Array(96).fill(0);
                const plan = car.currentPlan || [];
                const phases = (car.canLoadPhase1 || 1) + (car.canLoadPhase2 || 1) + (car.canLoadPhase3 || 1);
                for (let i = 0; i < 96; i++) {
                    carLoad[i] = ((plan[i] || 0) * 230 * phases) / 1000;
                }
                const color = this.palette[index % this.palette.length];
                datasets.push({
                    label: `${car.name || 'EV ' + car.id}`,
                    data: carLoad,
                    borderColor: color,
                    borderWidth: 1.5,
                    pointRadius: 0,
                    stepped: 'before',
                    fill: false,
                    yAxisID: 'y'
                });
            });
        }

        this.chart.data.datasets = datasets;

        // Auto adjust y max
        const maxSmart = Math.max(...smartLoadKW, 0);
        const maxDumb = Math.max(...dumbLoadKW, 0);
        const highestPower = Math.max(maxSmart, maxDumb, rootLimitKW);
        this.chart.options.scales.y.suggestedMax = Math.ceil(highestPower * 1.15);

        this.chart.update('none');

        // Return calculated KPIs for UI metrics
        return this.calculateKPIs(smartLoadKW, dumbLoadKW, prices, cars, rootLimitKW);
    }

    calculateKPIs(smartLoad, dumbLoad, prices, cars, capacityLimit) {
        const peakSmart = Math.max(...smartLoad, 0);
        const peakDumb = Math.max(...dumbLoad, 0);
        const peakReductionKW = Math.max(0, peakDumb - peakSmart);
        const peakReductionPct = peakDumb > 0 ? ((peakReductionKW / peakDumb) * 100).toFixed(1) : 0;

        // Energy (kWh) = sum(kW * 0.25h)
        const totalSmartEnergyKWh = smartLoad.reduce((a, b) => a + b * 0.25, 0);
        
        // Total Cost (€) = sum(kW * 0.25h * price €/kWh)
        let smartCost = 0;
        let dumbCost = 0;
        for (let i = 0; i < 96; i++) {
            const p = prices[i] || 0.20;
            smartCost += smartLoad[i] * 0.25 * p;
            dumbCost += dumbLoad[i] * 0.25 * p;
        }
        const costSavingsEur = Math.max(0, dumbCost - smartCost);
        const costSavingsPct = dumbCost > 0 ? ((costSavingsEur / dumbCost) * 100).toFixed(1) : 0;

        // Fleet fulfillment
        const totalCars = cars.length;
        const fullyChargedCars = cars.filter(c => {
            const plan = c.currentPlan || [];
            const phases = (c.canLoadPhase1 || 1) + (c.canLoadPhase2 || 1) + (c.canLoadPhase3 || 1);
            const totalAh = plan.reduce((sum, a) => sum + (a * 0.25), 0);
            const totalKwh = (totalAh * 230 * phases) / 1000;
            return ((c.startCapacity || 0) + totalKwh) >= (c.minLoadingState || c.maxCapacity * 0.8) - 1.0;
        }).length;

        return {
            peakSmart: peakSmart.toFixed(1),
            peakDumb: peakDumb.toFixed(1),
            peakReductionKW: peakReductionKW.toFixed(1),
            peakReductionPct,
            totalSmartEnergyKWh: totalSmartEnergyKWh.toFixed(1),
            smartCost: smartCost.toFixed(2),
            costSavingsEur: costSavingsEur.toFixed(2),
            costSavingsPct,
            totalCars,
            fullyChargedCars,
            capacityLimit: capacityLimit.toFixed(1),
            gridUtilizationPct: capacityLimit > 0 ? ((peakSmart / capacityLimit) * 100).toFixed(1) : 0
        };
    }

    getDefaultTariff() {
        // 96 intervals of typical European spot market pricing:
        // Night low (0.12 - 0.15), Morning peak (0.28 - 0.35), Midday Solar drop (0.14 - 0.18), Evening peak (0.32 - 0.42)
        const tariff = [];
        for (let i = 0; i < 96; i++) {
            const hour = i / 4;
            if (hour < 6) {
                tariff.push(0.12 + Math.sin(hour / 6 * Math.PI) * 0.03);
            } else if (hour < 10) {
                tariff.push(0.24 + Math.sin((hour - 6) / 4 * Math.PI) * 0.11);
            } else if (hour < 16) {
                tariff.push(0.15 + Math.sin((hour - 10) / 6 * Math.PI) * 0.04);
            } else if (hour < 21) {
                tariff.push(0.28 + Math.sin((hour - 16) / 5 * Math.PI) * 0.12);
            } else {
                tariff.push(0.18 - ((hour - 21) / 3) * 0.05);
            }
        }
        return tariff;
    }
}
window.ChartManager = ChartManager;
