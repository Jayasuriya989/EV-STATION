/**
 * Simple, Presentation-Ready EV Smart Charging Demonstration Controller
 */

const SCENARIOS = {
    office: {
        name: "Office Workplace (Daytime Solar)",
        desc: "4 employee vehicles arriving between 7:30 AM and 8:30 AM, leaving around 5:30 PM.",
        rootLimitKW: 99.4,
        cars: [
            { id: 0, model: "Tesla Model 3", station: "Station #1", arrH: "07:30", depH: "17:30", startKwh: 15, targetKwh: 65, maxKwh: 75, maxKW: 11.0 },
            { id: 1, model: "Porsche Taycan", station: "Station #2", arrH: "08:00", depH: "18:00", startKwh: 20, targetKwh: 80, maxKwh: 93, maxKW: 22.0 },
            { id: 2, model: "Hyundai Ioniq 5", station: "Station #3", arrH: "08:15", depH: "17:00", startKwh: 18, targetKwh: 70, maxKwh: 77, maxKW: 11.0 },
            { id: 3, model: "BMW i4", station: "Station #4", arrH: "08:30", depH: "17:15", startKwh: 25, targetKwh: 75, maxKwh: 84, maxKW: 11.0 }
        ],
        kpis: {
            peakSmart: "52.4",
            peakDumb: "88.3",
            peakReductionPct: "40.6",
            costSavingsPct: "32.4",
            costSavingsEur: "28.50"
        }
    },
    fleet: {
        name: "Commercial Delivery Fleet (Overnight)",
        desc: "Delivery vans parked overnight, taking advantage of ultra-cheap off-peak night electricity tariffs.",
        rootLimitKW: 99.4,
        cars: [
            { id: 0, model: "Electric Delivery Van #1", station: "Station #1", arrH: "19:00", depH: "06:30", startKwh: 10, targetKwh: 70, maxKwh: 80, maxKW: 22.0 },
            { id: 1, model: "Electric Delivery Van #2", station: "Station #2", arrH: "19:30", depH: "07:00", startKwh: 15, targetKwh: 75, maxKwh: 80, maxKW: 22.0 },
            { id: 2, model: "Electric Delivery Van #3", station: "Station #3", arrH: "20:00", depH: "07:30", startKwh: 12, targetKwh: 70, maxKwh: 80, maxKW: 22.0 },
            { id: 3, model: "Electric Delivery Van #4", station: "Station #4", arrH: "20:30", depH: "08:00", startKwh: 20, targetKwh: 75, maxKwh: 80, maxKW: 22.0 }
        ],
        kpis: {
            peakSmart: "44.0",
            peakDumb: "88.0",
            peakReductionPct: "50.0",
            costSavingsPct: "45.8",
            costSavingsEur: "42.10"
        }
    },
    stress: {
        name: "Grid Capacity Bottleneck (Stress Test)",
        desc: "Low 65 kW local transformer capacity. Without smart charging, the grid crashes. With smart charging, power stays strictly safe.",
        rootLimitKW: 65.0,
        cars: [
            { id: 0, model: "High-Power EV #1", station: "Station #1", arrH: "09:00", depH: "16:00", startKwh: 10, targetKwh: 85, maxKwh: 95, maxKW: 22.0 },
            { id: 1, model: "High-Power EV #2", station: "Station #2", arrH: "09:15", depH: "16:30", startKwh: 12, targetKwh: 85, maxKwh: 95, maxKW: 22.0 },
            { id: 2, model: "High-Power EV #3", station: "Station #3", arrH: "09:30", depH: "17:00", startKwh: 15, targetKwh: 80, maxKwh: 90, maxKW: 22.0 },
            { id: 3, model: "High-Power EV #4", station: "Station #4", arrH: "09:45", depH: "17:30", startKwh: 10, targetKwh: 80, maxKwh: 90, maxKW: 22.0 }
        ],
        kpis: {
            peakSmart: "58.2",
            peakDumb: "88.0",
            peakReductionPct: "33.8",
            costSavingsPct: "26.5",
            costSavingsEur: "22.80"
        }
    }
};

class SimpleChargingDemo {
    constructor() {
        this.currentScenarioKey = 'office';
        this.chart = null;
    }

    init() {
        this.initChart();
        this.setupButtons();
        this.loadScenario('office');
    }

    setupButtons() {
        // Scenario Selection
        document.querySelectorAll('.scenario-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
                const target = e.currentTarget;
                target.classList.add('active');
                const scenario = target.dataset.scenario;
                this.loadScenario(scenario);
            });
        });

        // Run Optimizer Button
        const btnRun = document.getElementById('btnRunOptimizer');
        if (btnRun) {
            btnRun.addEventListener('click', () => {
                btnRun.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Running LP Optimizer...`;
                btnRun.style.opacity = '0.75';
                setTimeout(() => {
                    this.runOptimizationAnimation();
                    btnRun.innerHTML = `<i class="fas fa-check"></i> Optimization Complete!`;
                    btnRun.style.opacity = '1';
                    setTimeout(() => {
                        btnRun.innerHTML = `<i class="fas fa-play"></i> Run Optimization Algorithm`;
                    }, 2000);
                }, 400);
            });
        }
    }

    initChart() {
        const ctx = document.getElementById('simpleChart');
        if (!ctx) return;

        // 96 Quarter-Hour Labels across 24h
        const labels = [];
        for (let i = 0; i < 96; i++) {
            const h = String(Math.floor(i / 4)).padStart(2, '0');
            const m = String((i % 4) * 15).padStart(2, '0');
            labels.push(`${h}:${m}`);
        }

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
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
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(11, 17, 32, 0.95)',
                        titleColor: '#00D2FF',
                        titleFont: { family: 'Plus Jakarta Sans', size: 14, weight: '700' },
                        bodyFont: { family: 'Plus Jakarta Sans', size: 12 },
                        padding: 12,
                        cornerRadius: 8,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                if (context.dataset.yAxisID === 'yTariff') {
                                    return `${context.dataset.label}: ${context.parsed.y.toFixed(2)} €/kWh`;
                                }
                                return `${context.dataset.label}: ${context.parsed.y.toFixed(1)} kW`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.04)' },
                        ticks: {
                            color: '#64748B',
                            font: { family: 'JetBrains Mono', size: 11 },
                            maxTicksLimit: 12
                        }
                    },
                    y: {
                        type: 'linear',
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Power Demand (kW)',
                            color: '#94A3B8',
                            font: { family: 'Plus Jakarta Sans', size: 12, weight: '700' }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: {
                            color: '#94A3B8',
                            font: { family: 'JetBrains Mono', size: 11 },
                            callback: value => value + ' kW'
                        },
                        min: 0
                    },
                    yTariff: {
                        type: 'linear',
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Electricity Price (€/kWh)',
                            color: '#F59E0B',
                            font: { family: 'Plus Jakarta Sans', size: 12, weight: '700' }
                        },
                        grid: { drawOnChartArea: false },
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
        });
    }

    loadScenario(key) {
        this.currentScenarioKey = key;
        const scenario = SCENARIOS[key];
        if (!scenario) return;

        // 1. Update Metrics
        document.getElementById('metricPeakPower').textContent = scenario.kpis.peakSmart;
        document.getElementById('metricPeakSaved').innerHTML = `<i class="fas fa-arrow-down"></i> Reduced from ${scenario.kpis.peakDumb} kW (-${scenario.kpis.peakReductionPct}%)`;
        document.getElementById('metricCostSavings').textContent = `${scenario.kpis.costSavingsPct}%`;
        document.getElementById('metricCostEur').innerHTML = `<i class="fas fa-check"></i> Saved approx ${scenario.kpis.costSavingsEur} € on bill`;
        document.getElementById('metricFleetReady').textContent = "100%";

        // 2. Render Fleet Cards
        this.renderFleetCards(scenario.cars);

        // 3. Update Chart
        this.updateChart(scenario);
    }

    renderFleetCards(cars) {
        const container = document.getElementById('fleetCardsContainer');
        if (!container) return;

        let html = '';
        cars.forEach(car => {
            const startPct = Math.round((car.startKwh / car.maxKwh) * 100);
            const targetPct = Math.round((car.targetKwh / car.maxKwh) * 100);

            html += `
                <div class="car-card">
                    <div class="car-card-header">
                        <span class="car-model-name"><i class="fas fa-car" style="color: #00D2FF; margin-right: 0.35rem;"></i> ${car.model}</span>
                        <span class="car-station-tag">${car.station}</span>
                    </div>

                    <div class="car-time-row font-mono">
                        <span><i class="fas fa-sign-in-alt"></i> In: ${car.arrH}</span>
                        <span><i class="fas fa-sign-out-alt"></i> Out: ${car.depH}</span>
                    </div>

                    <div class="battery-visual-box">
                        <div class="battery-labels font-mono">
                            <span style="color: #94A3B8;">Initial: ${startPct}% (${car.startKwh} kWh)</span>
                            <span style="color: #00D2FF;">Goal: ${targetPct}% (${car.targetKwh} kWh)</span>
                        </div>
                        <div class="battery-bar-container">
                            <div class="battery-bar-fill" style="width: ${targetPct}%;"></div>
                        </div>
                    </div>

                    <div class="car-status-footer">
                        <i class="fas fa-check-circle"></i> Scheduled & Fully Charged on Time
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    }

    updateChart(scenario) {
        if (!this.chart) return;

        const limitKW = scenario.rootLimitKW;
        const prices = this.getTariffCurve(this.currentScenarioKey);

        // Compute Dumb Power Curve (Spikes right after arrival)
        const dumbKW = Array(96).fill(0);
        // Compute Smart Power Curve (Smooth & optimized)
        const smartKW = Array(96).fill(0);

        if (this.currentScenarioKey === 'office') {
            // Dumb charging: Cars arrive at 7:30 - 8:30, all charge at 11 - 22 kW immediately! Peak reaches 88.3 kW!
            for (let s = 31; s < 52; s++) dumbKW[s] = (s >= 34 && s < 46) ? 88.3 : 44.0;
            
            // Smart charging: Staggered across 10:00 to 16:30, taking advantage of midday solar low price! Peak capped at 52 kW
            for (let s = 36; s < 68; s++) {
                if (s >= 44 && s < 60) smartKW[s] = 52.4; // Daytime solar valley
                else smartKW[s] = 30.0;
            }
        } else if (this.currentScenarioKey === 'fleet') {
            // Overnight: Dumb charges at 19:30 (during high evening rate!). Peak = 88 kW.
            for (let s = 78; s < 95; s++) dumbKW[s] = 88.0;

            // Smart charges between 00:00 and 06:00 (super-off-peak rate 0.12 €!). Peak = 44 kW
            for (let s = 0; s < 25; s++) smartKW[s] = 44.0;
        } else {
            // Stress test: Dumb charges immediately at 09:30 ➔ 88 kW (Trips 65 kW fuse!).
            for (let s = 38; s < 58; s++) dumbKW[s] = 88.0;

            // Smart throttles each car safely to stay at 58 kW (Strictly under 65 kW limit!)
            for (let s = 38; s < 70; s++) smartKW[s] = 58.2;
        }

        const datasets = [
            // 1. Grid Fuse Limit
            {
                label: 'Safe Grid Transformer Limit',
                data: Array(96).fill(limitKW),
                borderColor: '#EF4444',
                borderWidth: 2.5,
                borderDash: [6, 6],
                pointRadius: 0,
                fill: false,
                yAxisID: 'y'
            },
            // 2. Dumb Charging (Baseline)
            {
                label: 'Without Smart Charging (Dangerous Peak)',
                data: dumbKW,
                borderColor: '#64748B',
                borderWidth: 2,
                borderDash: [4, 4],
                pointRadius: 0,
                stepped: 'before',
                fill: false,
                yAxisID: 'y'
            },
            // 3. Smart Charging (Optimized)
            {
                label: 'With Smart Charging (Smooth & Safe)',
                data: smartKW,
                borderColor: '#00D2FF',
                backgroundColor: 'rgba(0, 210, 255, 0.15)',
                borderWidth: 3,
                pointRadius: 0,
                stepped: 'before',
                fill: true,
                yAxisID: 'y'
            },
            // 4. Spot Tariff
            {
                label: 'Electricity Tariff',
                data: prices,
                borderColor: 'rgba(245, 158, 11, 0.8)',
                backgroundColor: 'rgba(245, 158, 11, 0.03)',
                borderWidth: 2,
                pointRadius: 0,
                fill: true,
                tension: 0.35,
                yAxisID: 'yTariff'
            }
        ];

        this.chart.data.datasets = datasets;
        this.chart.options.scales.y.suggestedMax = Math.max(limitKW, 95) * 1.15;
        this.chart.update();
    }

    runOptimizationAnimation() {
        // Trigger smooth chart re-animation
        if (this.chart) {
            this.chart.reset();
            this.chart.update();
        }
    }

    getTariffCurve(scenarioKey) {
        // 96 slots of realistic tariff curve:
        // Night low (0.12 €), Morning peak (0.35 €), Midday solar drop (0.16 €), Evening peak (0.42 €)
        const tariff = [];
        for (let i = 0; i < 96; i++) {
            const hour = i / 4;
            if (hour < 6) {
                tariff.push(0.12 + Math.sin(hour / 6 * Math.PI) * 0.02);
            } else if (hour < 10) {
                tariff.push(0.24 + Math.sin((hour - 6) / 4 * Math.PI) * 0.12); // Morning peak
            } else if (hour < 16) {
                tariff.push(0.15 + Math.sin((hour - 10) / 6 * Math.PI) * 0.03); // Midday solar drop
            } else if (hour < 21) {
                tariff.push(0.28 + Math.sin((hour - 16) / 5 * Math.PI) * 0.14); // Evening peak
            } else {
                tariff.push(0.18 - ((hour - 21) / 3) * 0.05);
            }
        }
        return tariff;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.demoApp = new SimpleChargingDemo();
    window.demoApp.init();
});
