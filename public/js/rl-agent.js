/**
 * Safe Station Environment ⚡ - Continuous 10-Second Simulation & RL Engine
 * Simulates car details, charging info, reward details, and learning details every 10 seconds.
 */

class SafeStationSimulator {
    constructor() {
        this.bessCapacity = 100.0;
        this.maxStepsPerEpisode = 96; // 24h * 4 intervals
        
        // 10-Second Simulation Loop Configuration
        this.stepIntervalMs = 10000; // 10 seconds
        this.timeRemainingMs = 10000;
        this.timerTickMs = 100;
        this.isPaused = false;
        this.simulationTimer = null;
        
        // RL Hyperparameters (Q-Learning)
        this.alpha = 0.20;       // Learning rate
        this.gamma = 0.95;       // Discount factor
        this.epsilon = 0.25;     // Exploration rate
        this.minEpsilon = 0.05;
        this.epsilonDecay = 0.995;
        this.qTable = {};
        
        // Simulation Environment State
        this.hour = 8; // Start at 08:00 morning peak
        this.minute = 0;
        this.gridPrice = 8.50;
        this.bessLevel = 60.0;
        this.carPresent = 1;
        this.carBatteryNeed = 40.0;
        this.carStartSoc = 20;
        this.carCurrentSoc = 20;
        this.carTargetSoc = 80;
        this.carMaxKwh = 75;
        this.carModel = "Tesla Model 3";
        this.carPlate = "EV-8042";
        this.carArrTime = "08:00 AM";
        this.carDepTime = "05:30 PM";
        
        // Active Action & Energy Breakdown
        this.currentAction = 1; // Start with Battery Charge
        this.powerFromGrid = 0.0;
        this.powerFromBess = 20.0;
        this.sourceDescription = "Station BESS Only (Peak-Shaving)";
        
        // Performance & Rewards Telemetry
        this.stepCount = 1;
        this.episodeCount = 1;
        this.episodeReward = 0.0;
        this.totalProfit = 240.0;
        this.lastStepReward = 50.0;
        this.lastRewardExplanation = "Avoided high morning peak grid tariff (₹8.50/unit) by drawing 20 units from BESS. +50.0 Peak-Shaving bonus granted!";
        this.rewardHistory = [];
        
        // Bellman Update Telemetry
        this.lastBellmanDelta = "+3.42";
        this.lastBellmanText = "Q(s, a) ← 51.4 + 0.20 × [50.0 + 0.95(52.1) - 51.4] = 54.82";
        
        // Chart reference & History
        this.chart = null;
        this.historyEpisodes = [1];
        this.historyRewards = [0];
        this.historyProfits = [240];
        
        this.carFleetPresets = [
            { model: "Tesla Model 3", maxKwh: 75, targetSoc: 85, maxPower: 11 },
            { model: "Tata Nexon EV", maxKwh: 40.5, targetSoc: 90, maxPower: 7.2 },
            { model: "Hyundai Ioniq 5", maxKwh: 77.4, targetSoc: 80, maxPower: 11 },
            { model: "Porsche Taycan", maxKwh: 93.4, targetSoc: 85, maxPower: 22 },
            { model: "MG ZS EV", maxKwh: 50.3, targetSoc: 90, maxPower: 7.4 },
            { model: "Commercial Van", maxKwh: 65, targetSoc: 95, maxPower: 22 }
        ];
    }

    init() {
        this.initChart();
        this.setupEventListeners();
        this.startSimulationClock();
        this.updateAllPanels();
    }

    initChart() {
        const ctx = document.getElementById('rlChart');
        if (!ctx) return;
        
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Step 1'],
                datasets: [
                    {
                        label: 'Step Reward',
                        data: [50],
                        borderColor: '#00F0FF',
                        backgroundColor: 'rgba(0, 240, 255, 0.12)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.3,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Station Cumulative Profit (₹)',
                        data: [240],
                        borderColor: '#10B981',
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.3,
                        yAxisID: 'yProfit'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 300 },
                plugins: {
                    legend: {
                        labels: { color: '#94A3B8', font: { family: 'Plus Jakarta Sans', weight: '600' } }
                    }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(255, 255, 255, 0.04)' },
                        ticks: { color: '#64748B', font: { family: 'JetBrains Mono', size: 10 } }
                    },
                    y: {
                        type: 'linear',
                        position: 'left',
                        title: { display: true, text: 'Reward Points', color: '#00F0FF' },
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#94A3B8', font: { family: 'JetBrains Mono', size: 10 } }
                    },
                    yProfit: {
                        type: 'linear',
                        position: 'right',
                        title: { display: true, text: 'Profit (₹)', color: '#10B981' },
                        grid: { drawOnChartArea: false },
                        ticks: { color: '#10B981', font: { family: 'JetBrains Mono', size: 10 } }
                    }
                }
            }
        });
    }

    startSimulationClock() {
        if (this.simulationTimer) clearInterval(this.simulationTimer);
        
        this.simulationTimer = setInterval(() => {
            if (this.isPaused) return;
            
            this.timeRemainingMs -= this.timerTickMs;
            
            // Update countdown progress bar & text
            const pct = Math.max(0, (this.timeRemainingMs / this.stepIntervalMs) * 100);
            const secondsText = (this.timeRemainingMs / 1000).toFixed(1) + 's';
            
            const timerBar = document.getElementById('timerProgressBar');
            const timerBadge = document.getElementById('timerCountdownBadge');
            if (timerBar) timerBar.style.width = `${pct}%`;
            if (timerBadge) timerBadge.textContent = secondsText;
            
            // When timer reaches 0, trigger new simulation step!
            if (this.timeRemainingMs <= 0) {
                this.timeRemainingMs = this.stepIntervalMs;
                this.executeSimulatedStep();
            }
        }, this.timerTickMs);
    }

    computeGridPrice(hour) {
        if (hour < 6) {
            return +(2.4 + 0.6 * Math.sin(hour)).toFixed(2); // Off-peak night ₹2.4 - ₹3.0
        } else if (hour >= 6 && hour < 11) {
            return +(8.5 + 4.0 * Math.sin(((hour - 6) / 5) * Math.PI)).toFixed(2); // Morning peak ₹8.5 - ₹12.5
        } else if (hour >= 11 && hour < 16) {
            return +(3.8 + 1.2 * Math.sin(((hour - 11) / 5) * Math.PI)).toFixed(2); // Midday solar valley ₹3.8 - ₹5.0
        } else if (hour >= 16 && hour < 22) {
            return +(9.5 + 4.5 * Math.sin(((hour - 16) / 6) * Math.PI)).toFixed(2); // Evening peak ₹9.5 - ₹14.0
        } else {
            return +(3.2 - 0.8 * ((hour - 22) / 2)).toFixed(2);
        }
    }

    getStateHash() {
        const hourBucket = Math.floor(this.hour / 4);
        const priceBucket = this.gridPrice <= 4.0 ? 0 : (this.gridPrice < 8.0 ? 1 : 2);
        const bessBucket = Math.floor(this.bessLevel / 25);
        const carPres = this.carPresent ? 1 : 0;
        const needBucket = Math.ceil(this.carBatteryNeed / 20);
        return `${hourBucket}_${priceBucket}_${bessBucket}_${carPres}_${needBucket}`;
    }

    getQValues(stateHash) {
        if (!this.qTable[stateHash]) {
            // Seed Q-values intelligently:
            // If price >= ₹8.0 -> Action 1 (BESS) is best (+50 Peak Shaving)
            // If price <= ₹4.0 -> Action 2 (Top-Up) or Action 0 (Grid) is best (+Profit)
            const isExpensive = this.gridPrice >= 8.0;
            const isCheap = this.gridPrice <= 4.0;
            this.qTable[stateHash] = [
                isCheap ? 22.0 : -15.0,
                isExpensive ? 58.0 : 15.0,
                isCheap ? 42.0 : -30.0,
                30.0
            ];
        }
        return this.qTable[stateHash];
    }

    selectAction(stateHash) {
        if (Math.random() < this.epsilon) {
            return Math.floor(Math.random() * 4); // Exploration
        }
        const qVals = this.getQValues(stateHash);
        let maxQ = -Infinity;
        let bestAct = 0;
        for (let a = 0; a < 4; a++) {
            if (qVals[a] > maxQ) {
                maxQ = qVals[a];
                bestAct = a;
            }
        }
        return bestAct; // Exploitation
    }

    executeSimulatedStep() {
        this.stepCount++;
        const stateHash = this.getStateHash();
        const action = this.selectAction(stateHash);
        this.currentAction = action;

        let reward = 0.0;
        let explanation = "";
        const isExpensiveHour = this.gridPrice >= 8.0;
        const isCheapHour = this.gridPrice <= 4.0;

        // Reset power breakdown
        this.powerFromGrid = 0.0;
        this.powerFromBess = 0.0;

        // Action 0: Grid Charge (20 units from Grid to EV)
        if (action === 0) {
            this.sourceDescription = "Electrical Grid (Direct 20 kW)";
            if (this.carPresent && this.carBatteryNeed > 0) {
                const charged = Math.min(20.0, this.carBatteryNeed);
                this.carBatteryNeed -= charged;
                this.powerFromGrid = charged;
                const cost = charged * this.gridPrice;
                this.totalProfit -= cost;
                reward -= (cost * 0.08);

                if (isExpensiveHour && this.bessLevel >= 20.0) {
                    reward -= 25.0; // Penalty for using grid during peak when BESS was available
                    explanation = `Drawn ${charged} kW from Grid during peak tariff (₹${this.gridPrice}). Penalty: -25 applied (BESS had power).`;
                } else {
                    explanation = `Drawn ${charged} kW from Grid at standard tariff ₹${this.gridPrice}/unit.`;
                }
            } else {
                reward -= 10.0;
                explanation = "Attempted grid charge but no car was waiting in bay.";
            }
        }
        // Action 1: Battery Charge (20 units from BESS to EV)
        else if (action === 1) {
            this.sourceDescription = "Station BESS Battery (Peak-Shaving 20 kW)";
            if (this.carPresent && this.carBatteryNeed > 0) {
                if (this.bessLevel >= 20.0) {
                    const charged = Math.min(20.0, this.carBatteryNeed);
                    this.bessLevel -= 20.0;
                    this.carBatteryNeed -= charged;
                    this.powerFromBess = 20.0;

                    if (isExpensiveHour) {
                        reward += 50.0; // +50 Peak Shaving!
                        explanation = `🏆 Peak-Shaved! Discharged 20 units from BESS during expensive peak hours (₹${this.gridPrice}). +50.0 bonus!`;
                    } else {
                        reward += 10.0;
                        explanation = `Supplied 20 units from BESS to EV cleanly without grid draw.`;
                    }
                } else {
                    reward -= 20.0;
                    explanation = "Failed: Station BESS level is depleted (<20 units). Penalty: -20.0.";
                }
            } else {
                reward -= 10.0;
                explanation = "Wasted battery discharge (charging bay empty).";
            }
        }
        // Action 2: Top-Up BESS (Refill up to 30 units from Grid)
        else if (action === 2) {
            this.sourceDescription = "Grid ➔ BESS Refill (+30 kW)";
            const space = this.bessCapacity - this.bessLevel;
            const refill = Math.min(30.0, space);
            if (refill > 0) {
                this.bessLevel += refill;
                this.powerFromGrid = refill;
                const cost = refill * this.gridPrice;
                this.totalProfit -= cost;

                if (isCheapHour) {
                    reward += 35.0; // +Profit reward for buying cheap energy!
                    reward -= (cost * 0.04);
                    explanation = `⚡ Arbitrage! Refilled ${refill.toFixed(0)} units into BESS during cheap tariff (₹${this.gridPrice}). +35.0 Profit bonus!`;
                } else {
                    reward -= (cost * 0.18);
                    explanation = `Warning: Refilled BESS during high electricity price (₹${this.gridPrice}). Cost penalty deducted.`;
                }
            } else {
                reward -= 5.0;
                explanation = "Attempted BESS top-up but storage tank is already at 100% capacity.";
            }
        }
        // Action 3: Hybrid Charge (40 units total: 20 Grid + 20 BESS)
        else if (action === 3) {
            this.sourceDescription = "Hybrid Turbo (20 kW Grid + 20 kW BESS)";
            if (this.carPresent && this.carBatteryNeed > 0) {
                const bessAvail = Math.min(20.0, this.bessLevel);
                this.bessLevel -= bessAvail;
                const gridDraw = 20.0;
                this.powerFromBess = bessAvail;
                this.powerFromGrid = gridDraw;
                const totalPower = bessAvail + gridDraw;
                const charged = Math.min(totalPower, this.carBatteryNeed);
                this.carBatteryNeed -= charged;

                const cost = gridDraw * this.gridPrice;
                this.totalProfit -= cost;

                if (isExpensiveHour && bessAvail >= 20.0) {
                    reward += 30.0;
                    explanation = `Turbo Fast Charge: 40 units delivered (20 BESS + 20 Grid) while buffering peak tariff!`;
                } else {
                    explanation = `Fast Hybrid Charge: ${charged.toFixed(0)} units delivered to vehicle.`;
                }
            } else {
                reward -= 15.0;
                explanation = "Attempted hybrid charge with no car in bay.";
            }
        }

        // Update Car SoC
        if (this.carPresent) {
            const addedKwh = this.powerFromGrid + this.powerFromBess;
            const socIncrease = Math.round((addedKwh / this.carMaxKwh) * 100);
            this.carCurrentSoc = Math.min(this.carTargetSoc, this.carCurrentSoc + socIncrease);
        }

        // Check if car successfully reached 100% target demand (+200 Reward!)
        if (this.carPresent && this.carBatteryNeed <= 0) {
            reward += 200.0;
            this.totalProfit += 160.0; // Payment from EV owner
            explanation = `🎉 SUCCESS: ${this.carModel} reached 100% target SoC (${this.carCurrentSoc}%)! +200.0 Completion Reward earned!`;
            
            // Log completion before car departs
            this.recordReward(this.currentAction, reward, explanation);
            
            // Vehicle departs, next car arrives after short interval
            this.carPresent = 0;
            this.carBatteryNeed = 0.0;
        } else {
            this.recordReward(this.currentAction, reward, explanation);
        }

        this.episodeReward += reward;

        // Advance simulation time (15 minutes per step)
        this.minute += 15;
        if (this.minute >= 60) {
            this.minute = 0;
            this.hour = (this.hour + 1) % 24;
            this.gridPrice = this.computeGridPrice(this.hour);
        }

        // Spawn next car if bay is empty
        if (!this.carPresent && Math.random() > 0.3) {
            this.spawnNewCar();
        }

        // Bellman Q-Learning Update
        const nextStateHash = this.getStateHash();
        const nextQValues = this.getQValues(nextStateHash);
        const maxNextQ = Math.max(...nextQValues);
        const currentQValues = this.getQValues(stateHash);
        
        const oldQ = currentQValues[action];
        const tdError = (reward + this.gamma * maxNextQ) - oldQ;
        currentQValues[action] += this.alpha * tdError;
        
        this.lastBellmanDelta = (tdError * this.alpha >= 0 ? '+' : '') + (tdError * this.alpha).toFixed(2);
        this.lastBellmanText = `Q(s, a) ← ${oldQ.toFixed(2)} + ${this.alpha}[${reward.toFixed(1)} + ${this.gamma}(${maxNextQ.toFixed(1)}) - ${oldQ.toFixed(2)}] = ${currentQValues[action].toFixed(2)}`;

        // Check Episode Reset (every 96 steps)
        if (this.stepCount % this.maxStepsPerEpisode === 0) {
            this.episodeCount++;
            this.epsilon = Math.max(this.minEpsilon, this.epsilon * this.epsilonDecay);
            this.historyEpisodes.push(`Ep #${this.episodeCount}`);
            this.historyRewards.push(+this.episodeReward.toFixed(1));
            this.historyProfits.push(+this.totalProfit.toFixed(1));
            this.episodeReward = 0;
        }

        // Update Live Chart
        if (this.chart) {
            const stepLabel = `Step ${this.stepCount}`;
            this.chart.data.labels.push(stepLabel);
            this.chart.data.datasets[0].data.push(+reward.toFixed(1));
            this.chart.data.datasets[1].data.push(+this.totalProfit.toFixed(1));
            
            if (this.chart.data.labels.length > 25) {
                this.chart.data.labels.shift();
                this.chart.data.datasets[0].data.shift();
                this.chart.data.datasets[1].data.shift();
            }
            this.chart.update('none');
        }

        this.updateAllPanels();
    }

    spawnNewCar() {
        this.carPresent = 1;
        const preset = this.carFleetPresets[Math.floor(Math.random() * this.carFleetPresets.length)];
        this.carModel = preset.model;
        this.carPlate = "EV-" + Math.floor(1000 + Math.random() * 9000);
        this.carMaxKwh = preset.maxKwh;
        this.carStartSoc = Math.floor(15 + Math.random() * 20);
        this.carCurrentSoc = this.carStartSoc;
        this.carTargetSoc = preset.targetSoc;
        
        const possibleNeeds = [20, 40, 60];
        this.carBatteryNeed = possibleNeeds[Math.floor(Math.random() * possibleNeeds.length)];
        
        const hArr = String(this.hour).padStart(2, '0') + ':' + String(this.minute).padStart(2, '0');
        const hDep = String((this.hour + 8) % 24).padStart(2, '0') + ':30';
        this.carArrTime = `${hArr}`;
        this.carDepTime = `${hDep}`;
    }

    recordReward(action, reward, explanation) {
        this.lastStepReward = +reward.toFixed(1);
        this.lastRewardExplanation = explanation;
        
        const actionNames = ["Grid Charge", "Battery Charge", "Top-Up BESS", "Hybrid Charge"];
        this.rewardHistory.unshift({
            action: actionNames[action],
            pts: this.lastStepReward,
            text: explanation,
            time: String(this.hour).padStart(2, '0') + ':' + String(this.minute).padStart(2, '0')
        });
        
        if (this.rewardHistory.length > 8) {
            this.rewardHistory.pop();
        }
    }

    updateAllPanels() {
        // --- 1. Car Details ---
        document.getElementById('carModelText').textContent = this.carModel;
        document.getElementById('carPlateText').textContent = `Plate: ${this.carPlate} • ${this.carMaxKwh} kWh Capacity`;
        document.getElementById('carSocCurrent').textContent = `${this.carCurrentSoc}%`;
        document.getElementById('carSocTarget').textContent = `Target: ${this.carTargetSoc}%`;
        document.getElementById('carBatteryBar').style.width = `${this.carCurrentSoc}%`;
        document.getElementById('carArrDepTime').textContent = `${this.carArrTime} ➔ ${this.carDepTime}`;
        document.getElementById('carNeedUnits').textContent = `${this.carBatteryNeed.toFixed(0)} units`;
        
        const statusEl = document.getElementById('carStatusBadge');
        if (this.carPresent) {
            if (this.currentAction === 1) {
                statusEl.innerHTML = `<i class="fas fa-bolt"></i> Fast Discharging from BESS`;
                statusEl.style.color = '#00F0FF';
            } else if (this.currentAction === 0) {
                statusEl.innerHTML = `<i class="fas fa-plug"></i> Grid Direct Charging`;
                statusEl.style.color = '#10B981';
            } else if (this.currentAction === 3) {
                statusEl.innerHTML = `<i class="fas fa-rocket"></i> Hybrid Fast Charge (40 kW)`;
                statusEl.style.color = '#C084FC';
            } else {
                statusEl.innerHTML = `<i class="fas fa-clock"></i> Plugged In (Waiting)`;
                statusEl.style.color = '#F59E0B';
            }
        } else {
            statusEl.innerHTML = `<i class="fas fa-check-circle"></i> Bay Empty (Car Departed)`;
            statusEl.style.color = '#64748B';
        }

        // --- 2. Charging Info ---
        document.getElementById('activeSourceText').textContent = this.sourceDescription;
        document.getElementById('powerBessText').textContent = `${this.powerFromBess.toFixed(0)} kW`;
        document.getElementById('powerGridText').textContent = `${this.powerFromGrid.toFixed(0)} kW`;
        
        const priceEl = document.getElementById('chargingGridPrice');
        priceEl.textContent = `₹${this.gridPrice.toFixed(2)}`;
        if (this.gridPrice >= 8.0) {
            priceEl.style.color = '#EF4444';
            document.getElementById('priceCategoryTag').textContent = "Peak Tariff Rate";
        } else if (this.gridPrice <= 4.0) {
            priceEl.style.color = '#10B981';
            document.getElementById('priceCategoryTag').textContent = "Cheap Off-Peak / Solar";
        } else {
            priceEl.style.color = '#F59E0B';
            document.getElementById('priceCategoryTag').textContent = "Moderate Tariff";
        }
        
        document.getElementById('bessTankLevelText').textContent = `${this.bessLevel.toFixed(1)} / 100 units (${this.bessLevel.toFixed(0)}%)`;
        document.getElementById('bessTankFill').style.width = `${(this.bessLevel / this.bessCapacity) * 100}%`;

        // --- 3. Reward Details ---
        const ptsEl = document.getElementById('rewardPtsDisplay');
        const isPos = this.lastStepReward >= 0;
        ptsEl.textContent = `${isPos ? '+' : ''}${this.lastStepReward} pts`;
        ptsEl.style.color = isPos ? '#34D399' : '#F87171';
        document.getElementById('rewardExplanationText').textContent = this.lastRewardExplanation;
        document.getElementById('totalProfitText').textContent = `₹${this.totalProfit.toFixed(1)}`;
        document.getElementById('episodeRewardText').textContent = `${this.episodeReward.toFixed(1)} pts`;
        
        this.renderRewardHistory();

        // --- 4. Learning Details ---
        const sHash = this.getStateHash();
        const qVals = this.getQValues(sHash);
        
        for (let a = 0; a < 4; a++) {
            const scoreEl = document.getElementById(`qScore_${a}`);
            const cardEl = document.getElementById(`qBox_${a}`);
            if (scoreEl) scoreEl.textContent = `Q = ${qVals[a].toFixed(2)}`;
            if (cardEl) {
                if (a === this.currentAction) cardEl.classList.add('active-action');
                else cardEl.classList.remove('active-action');
            }
        }

        document.getElementById('epsilonText').textContent = `${Math.round(this.epsilon * 100)}%`;
        document.getElementById('bellmanDeltaText').textContent = `ΔQ = ${this.lastBellmanDelta}`;
        document.getElementById('bellmanFormulaText').textContent = this.lastBellmanText;

        // Top Telemetry Header
        document.getElementById('headStep').textContent = `${this.stepCount} (Time: ${String(this.hour).padStart(2, '0')}:${String(this.minute).padStart(2, '0')})`;
        document.getElementById('headEpisode').textContent = `#${this.episodeCount}`;
        document.getElementById('headProfit').textContent = `₹${this.totalProfit.toFixed(1)}`;
    }

    renderRewardHistory() {
        const container = document.getElementById('rewardHistoryList');
        if (!container) return;
        
        let html = '';
        this.rewardHistory.forEach(item => {
            const isPos = item.pts >= 0;
            html += `
                <div class="reward-history-item ${isPos ? 'positive' : 'negative'}">
                    <div>
                        <span style="color: #64748B;" class="font-mono">[${item.time}]</span>
                        <strong style="color: #FFFFFF;">${item.action}:</strong> ${item.text}
                    </div>
                    <span class="font-mono" style="font-weight: 800; color: ${isPos ? '#34D399' : '#F87171'};">
                        ${isPos ? '+' : ''}${item.pts}
                    </span>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    setupEventListeners() {
        // Pause / Resume
        const btnPause = document.getElementById('btnPauseResume');
        if (btnPause) {
            btnPause.addEventListener('click', () => {
                this.isPaused = !this.isPaused;
                btnPause.innerHTML = this.isPaused ? `<i class="fas fa-play"></i> Resume 10s Timer` : `<i class="fas fa-pause"></i> Pause Timer`;
            });
        }

        // Simulate Step Now (Manual Force)
        const btnStepNow = document.getElementById('btnStepNow');
        if (btnStepNow) {
            btnStepNow.addEventListener('click', () => {
                this.timeRemainingMs = this.stepIntervalMs; // Reset timer
                this.executeSimulatedStep();
            });
        }

        // Speed Toggle (10s vs 3s)
        const btnSpeed = document.getElementById('btnSpeedToggle');
        if (btnSpeed) {
            btnSpeed.addEventListener('click', () => {
                if (this.stepIntervalMs === 10000) {
                    this.stepIntervalMs = 3000;
                    this.timeRemainingMs = 3000;
                    btnSpeed.innerHTML = `<i class="fas fa-forward"></i> Speed: 3s (Fast)`;
                } else {
                    this.stepIntervalMs = 10000;
                    this.timeRemainingMs = 10000;
                    btnSpeed.innerHTML = `<i class="fas fa-clock"></i> Speed: 10s (Standard)`;
                }
            });
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.sim = new SafeStationSimulator();
    window.sim.init();
});
