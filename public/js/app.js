/**
 * VOLTIQ Smart EV Charging Platform - Main Application Logic
 * Integrates directly with Spring Boot REST API: POST /api/v1/OptimizeChargingProfiles
 */

const EV_PRESETS = [
    {
        name: "Tesla Model 3 Long Range",
        carType: "BEV",
        maxCapacity: 75,
        startCapacity: 20,
        minLoadingState: 65,
        minCurrentPerPhase: 6,
        maxCurrentPerPhase: 16,
        phases: 3,
        image: "tesla"
    },
    {
        name: "Porsche Taycan 4S",
        carType: "BEV",
        maxCapacity: 93.4,
        startCapacity: 18,
        minLoadingState: 80,
        minCurrentPerPhase: 6,
        maxCurrentPerPhase: 32,
        phases: 3,
        image: "porsche"
    },
    {
        name: "Hyundai Ioniq 5",
        carType: "BEV",
        maxCapacity: 77.4,
        startCapacity: 25,
        minLoadingState: 70,
        minCurrentPerPhase: 6,
        maxCurrentPerPhase: 16,
        phases: 3,
        image: "hyundai"
    },
    {
        name: "Nissan Leaf e+",
        carType: "BEV",
        maxCapacity: 62,
        startCapacity: 15,
        minLoadingState: 50,
        minCurrentPerPhase: 6,
        maxCurrentPerPhase: 32,
        phases: 1, // Single phase
        image: "nissan"
    },
    {
        name: "BMW i4 eDrive40",
        carType: "BEV",
        maxCapacity: 83.9,
        startCapacity: 30,
        minLoadingState: 75,
        minCurrentPerPhase: 6,
        maxCurrentPerPhase: 16,
        phases: 3,
        image: "bmw"
    },
    {
        name: "Audi e-tron GT",
        carType: "BEV",
        maxCapacity: 93,
        startCapacity: 22,
        minLoadingState: 85,
        minCurrentPerPhase: 6,
        maxCurrentPerPhase: 32,
        phases: 3,
        image: "audi"
    }
];

class SmartChargingApp {
    constructor() {
        this.chartManager = new ChartManager('chargingChart');
        this.apiEndpoint = '/api/v1/OptimizeChargingProfiles';
        this.isOptimizing = false;
        this.lastResponse = null;

        // Default Model State
        this.state = {
            currentTimeSeconds: 12 * 3600, // 12:00:00
            fuseTree: this.createDefaultFuseTree(),
            cars: [],
            carAssignments: [],
            energyPriceHistory: {
                energyPrices: this.chartManager.getDefaultTariff()
            }
        };

        this.optimizerSettings = {
            weightObjectiveFairShare: 1.0,
            weightObjectivePeakShaving: 1.0,
            weightObjectiveEnergyCosts: 0.8,
            weightObjectiveLoadImbalance: 0.5
        };

        // Active editing node for modal
        this.activeModalContext = null;
    }

    init() {
        this.chartManager.init();
        this.setupEventListeners();
        this.loadScenario('corporate'); // Load corporate campus scenario by default
        this.optimize(false);
    }

    createDefaultFuseTree() {
        return {
            rootFuse: {
                "@type": "Fuse",
                id: 0,
                name: "Main Transformer Grid Fuse",
                fusePhase1: 144,
                fusePhase2: 144,
                fusePhase3: 144,
                children: [
                    {
                        "@type": "Fuse",
                        id: 1,
                        name: "North Parking Branch",
                        fusePhase1: 77,
                        fusePhase2: 77,
                        fusePhase3: 77,
                        children: [
                            this.createChargingStation(0, "Station #01"),
                            this.createChargingStation(1, "Station #02")
                        ]
                    },
                    {
                        "@type": "Fuse",
                        id: 2,
                        name: "South Parking Branch",
                        fusePhase1: 77,
                        fusePhase2: 77,
                        fusePhase3: 77,
                        children: [
                            this.createChargingStation(2, "Station #03"),
                            this.createChargingStation(3, "Station #04")
                        ]
                    }
                ]
            }
        };
    }

    createChargingStation(id, name) {
        return {
            "@type": "ChargingStation",
            id: id,
            name: name,
            fusePhase1: 32,
            fusePhase2: 32,
            fusePhase3: 32,
            phaseToGrid: { PHASE_1: "PHASE_1", PHASE_2: "PHASE_2", PHASE_3: "PHASE_3" },
            phaseToChargingStation: { PHASE_1: "PHASE_1", PHASE_2: "PHASE_2", PHASE_3: "PHASE_3" },
            isBEVAllowed: true,
            isPHEVAllowed: true,
            status: "Available"
        };
    }

    setupEventListeners() {
        // Time Slider
        const timeSlider = document.getElementById('timeSlider');
        if (timeSlider) {
            timeSlider.addEventListener('input', (e) => {
                this.state.currentTimeSeconds = parseInt(e.target.value);
                this.updateTimeDisplay();
            });
        }

        // Optimize Button
        const btnOptimize = document.getElementById('btnRunOptimization');
        if (btnOptimize) {
            btnOptimize.addEventListener('click', () => this.optimize(true));
        }

        // Scenario Pills
        document.querySelectorAll('.scenario-pill').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.scenario-pill').forEach(p => p.classList.remove('active'));
                const pill = e.currentTarget;
                pill.classList.add('active');
                const scenario = pill.dataset.scenario;
                this.loadScenario(scenario);
                this.optimize(true);
            });
        });

        // Legend Toggles
        document.querySelectorAll('.legend-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                const type = chip.dataset.type;
                chip.classList.toggle('active');
                if (type === 'baseline') this.chartManager.showDumbBaseline = chip.classList.contains('active');
                if (type === 'tariff') this.chartManager.showTariff = chip.classList.contains('active');
                if (type === 'capacity') this.chartManager.showCapacityLimit = chip.classList.contains('active');
                if (type === 'individual') this.chartManager.showIndividualCars = chip.classList.contains('active');
                if (this.lastResponse) {
                    this.chartManager.update(this.lastResponse, this.state, this.state.energyPriceHistory);
                }
            });
        });

        // Time Jump Buttons
        document.querySelectorAll('.time-preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const hour = parseInt(e.currentTarget.dataset.hour);
                this.setTime(hour * 3600);
            });
        });

        // Weight Sliders
        const bindWeight = (id, prop) => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', (e) => {
                    this.optimizerSettings[prop] = parseFloat(e.target.value);
                    const valEl = document.getElementById(`${id}Val`);
                    if (valEl) valEl.textContent = parseFloat(e.target.value).toFixed(1);
                });
            }
        };
        bindWeight('weightFairShare', 'weightObjectiveFairShare');
        bindWeight('weightPeakShaving', 'weightObjectivePeakShaving');
        bindWeight('weightEnergyCosts', 'weightObjectiveEnergyCosts');
        bindWeight('weightLoadImbalance', 'weightObjectiveLoadImbalance');
    }

    setTime(seconds) {
        this.state.currentTimeSeconds = seconds;
        const slider = document.getElementById('timeSlider');
        if (slider) slider.value = seconds;
        this.updateTimeDisplay();
        this.optimize(false);
    }

    updateTimeDisplay() {
        const totalSec = this.state.currentTimeSeconds;
        const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
        const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
        const s = String(totalSec % 60).padStart(2, '0');
        const timeDisplay = document.getElementById('currentTimeDisplay');
        if (timeDisplay) timeDisplay.textContent = `${h}:${m}:${s}`;
    }

    loadScenario(name) {
        if (name === 'corporate') {
            // Corporate Campus Scenario: 4 stations, 4 cars with staggered morning arrivals and afternoon departures
            this.state.fuseTree = this.createDefaultFuseTree();
            this.state.cars = [
                this.createCarFromPreset(0, 0, 7.5 * 3600, 17.5 * 3600, 15, 65), // Tesla
                this.createCarFromPreset(1, 1, 8.0 * 3600, 18.0 * 3600, 25, 80), // Taycan
                this.createCarFromPreset(2, 2, 8.25 * 3600, 16.5 * 3600, 20, 70), // Ioniq 5
                this.createCarFromPreset(3, 4, 8.5 * 3600, 17.0 * 3600, 30, 75)  // BMW i4
            ];
            this.state.carAssignments = [
                { carID: 0, chargingStationID: 0 },
                { carID: 1, chargingStationID: 1 },
                { carID: 2, chargingStationID: 2 },
                { carID: 3, chargingStationID: 3 }
            ];
            this.showToast('Loaded scenario: Corporate Campus (Daytime solar & peak shaving)', 'info');
        } else if (name === 'fleet') {
            // Commercial Overnight Delivery Depot
            this.state.fuseTree = this.createDefaultFuseTree();
            this.state.cars = [
                this.createCarFromPreset(0, 3, 19.0 * 3600, 6.5 * 3600, 10, 55), // Leaf
                this.createCarFromPreset(1, 0, 20.0 * 3600, 7.0 * 3600, 15, 70), // Tesla
                this.createCarFromPreset(2, 2, 21.0 * 3600, 8.0 * 3600, 18, 65), // Ioniq 5
                this.createCarFromPreset(3, 5, 20.5 * 3600, 7.5 * 3600, 20, 85)  // Audi e-tron
            ];
            this.state.carAssignments = [
                { carID: 0, chargingStationID: 0 },
                { carID: 1, chargingStationID: 1 },
                { carID: 2, chargingStationID: 2 },
                { carID: 3, chargingStationID: 3 }
            ];
            this.showToast('Loaded scenario: Overnight Fleet (Off-peak tariff optimization)', 'info');
        } else if (name === 'stress') {
            // Grid Capacity Bottleneck Stress Test: Large demand that exceeds simultaneous capacity
            this.state.fuseTree = this.createDefaultFuseTree();
            // Lower root fuse capacity to induce heavy competition
            this.state.fuseTree.rootFuse.fusePhase1 = 90;
            this.state.fuseTree.rootFuse.fusePhase2 = 90;
            this.state.fuseTree.rootFuse.fusePhase3 = 90;
            this.state.cars = [
                this.createCarFromPreset(0, 1, 9.0 * 3600, 15.0 * 3600, 10, 90), // Taycan heavy
                this.createCarFromPreset(1, 5, 9.25 * 3600, 15.5 * 3600, 15, 90), // Audi heavy
                this.createCarFromPreset(2, 0, 9.5 * 3600, 16.0 * 3600, 12, 75), // Tesla
                this.createCarFromPreset(3, 2, 9.0 * 3600, 16.5 * 3600, 14, 75)  // Ioniq
            ];
            this.state.carAssignments = [
                { carID: 0, chargingStationID: 0 },
                { carID: 1, chargingStationID: 1 },
                { carID: 2, chargingStationID: 2 },
                { carID: 3, chargingStationID: 3 }
            ];
            this.showToast('Loaded scenario: Grid Capacity Bottleneck (Heuristic Peak Shaving)', 'info');
        }

        this.renderTree();
        this.renderFleetTable();
    }

    createCarFromPreset(carId, presetIndex, arrTime, depTime, startSoc, targetSoc) {
        const p = EV_PRESETS[presetIndex % EV_PRESETS.length];
        const phases = p.phases;
        return {
            id: carId,
            name: `${p.name} #${carId + 1}`,
            modelName: p.name,
            carType: p.carType,
            startCapacity: startSoc,
            maxCapacity: p.maxCapacity,
            minLoadingState: targetSoc,
            timestampArrival: arrTime,
            timestampDeparture: depTime,
            minCurrent: p.minCurrentPerPhase * phases,
            minCurrentPerPhase: p.minCurrentPerPhase,
            maxCurrent: p.maxCurrentPerPhase * phases,
            maxCurrentPerPhase: p.maxCurrentPerPhase,
            canLoadPhase1: 1,
            canLoadPhase2: phases >= 2 ? 1 : 0,
            canLoadPhase3: phases >= 3 ? 1 : 0,
            suspendable: true,
            canUseVariablePower: true,
            immediateStart: false,
            currentPlan: Array(96).fill(0)
        };
    }

    renderTree() {
        const container = document.getElementById('treeContainer');
        if (!container) return;

        const root = this.state.fuseTree.rootFuse;
        const totalKW = ((root.fusePhase1 + root.fusePhase2 + root.fusePhase3) * 230 / 1000).toFixed(1);

        let html = `
            <div class="fuse-node-card root-fuse">
                <div class="fuse-node-header">
                    <div class="fuse-identity">
                        <div class="fuse-icon-box"><i class="fas fa-bolt"></i></div>
                        <div>
                            <div class="fuse-title">${root.name || 'Root Transformer'} (ID: ${root.id})</div>
                            <div class="fuse-specs font-mono">Limit: ${root.fusePhase1}A × 3 Ph (${totalKW} kW)</div>
                        </div>
                    </div>
                    <div class="fuse-actions">
                        <button class="icon-btn" title="Add Distribution Sub-Fuse" onclick="app.openAddFuseModal(${root.id})"><i class="fas fa-plus"></i></button>
                        <button class="icon-btn" title="Edit Fuse Limit" onclick="app.openEditFuseModal(${root.id})"><i class="fas fa-cog"></i></button>
                    </div>
                </div>
            </div>
        `;

        // Render Branches and Chargers
        (root.children || []).forEach(child => {
            if (child["@type"] === "Fuse") {
                const branchKW = ((child.fusePhase1 + child.fusePhase2 + child.fusePhase3) * 230 / 1000).toFixed(1);
                html += `
                    <div class="fuse-node-card" style="margin-left: 1.25rem;">
                        <div class="fuse-node-header">
                            <div class="fuse-identity">
                                <div class="fuse-icon-box" style="background: rgba(139, 92, 246, 0.15); color: #A78BFA;"><i class="fas fa-project-diagram"></i></div>
                                <div>
                                    <div class="fuse-title">${child.name || 'Sub-Branch Fuse'} (ID: ${child.id})</div>
                                    <div class="fuse-specs font-mono">${child.fusePhase1}A × 3 Ph (${branchKW} kW)</div>
                                </div>
                            </div>
                            <div class="fuse-actions">
                                <button class="icon-btn" title="Add Charger to Branch" onclick="app.openAddChargerModal(${child.id})"><i class="fas fa-plus"></i></button>
                                <button class="icon-btn delete" title="Delete Branch" onclick="app.deleteNode(${child.id}, 'Fuse')"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                        
                        <div class="chargers-subgrid">
                            ${(child.children || []).map(charger => this.renderChargerCard(charger)).join('')}
                        </div>
                    </div>
                `;
            } else if (child["@type"] === "ChargingStation") {
                html += `
                    <div class="chargers-subgrid" style="margin-left: 1.25rem;">
                        ${this.renderChargerCard(child)}
                    </div>
                `;
            }
        });

        container.innerHTML = html;
    }

    renderChargerCard(charger) {
        const assignment = this.state.carAssignments.find(a => a.chargingStationID === charger.id);
        const assignedCar = assignment ? this.state.cars.find(c => c.id === assignment.carID) : null;
        const kw = ((charger.fusePhase1 * 3 * 230) / 1000).toFixed(1);

        return `
            <div class="charger-card ${assignedCar ? 'occupied' : ''}">
                <div class="charger-card-header">
                    <span class="charger-id font-mono">
                        <i class="fas fa-charging-station" style="color: ${assignedCar ? '#10B981' : '#64748B'}"></i> 
                        ${charger.name || 'Station ' + charger.id}
                    </span>
                    <span class="station-status-dot ${assignedCar ? 'active' : ''}"></span>
                </div>
                <div style="font-size: 0.68rem; color: #64748B;">Max: ${kw} kW (32A)</div>

                ${assignedCar ? `
                    <div class="charger-ev-slot filled">
                        <div class="charger-ev-info">
                            <span class="charger-ev-name">${assignedCar.name}</span>
                            <span class="charger-ev-battery font-mono">${assignedCar.startCapacity} ➔ ${assignedCar.minLoadingState} kWh</span>
                        </div>
                        <button class="icon-btn delete" style="width: 20px; height: 20px; font-size: 0.65rem;" title="Disconnect EV" onclick="app.unassignCar(${assignedCar.id})">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                ` : `
                    <div class="charger-ev-slot" style="cursor: pointer;" onclick="app.openAssignCarModal(${charger.id})">
                        <span style="color: #64748B;"><i class="fas fa-plus-circle"></i> Plug In EV</span>
                    </div>
                `}
            </div>
        `;
    }

    renderFleetTable() {
        const tbody = document.getElementById('fleetTableBody');
        if (!tbody) return;

        if (this.state.cars.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #64748B; padding: 2rem;">No vehicles connected. Click "+ Plug In EV" on a station.</td></tr>`;
            return;
        }

        let html = '';
        this.state.cars.forEach(car => {
            const assignment = this.state.carAssignments.find(a => a.carID === car.id);
            const station = assignment ? `Station #${assignment.chargingStationID}` : 'Unassigned';
            
            const arrH = String(Math.floor(car.timestampArrival / 3600)).padStart(2, '0') + ':' + String(Math.floor((car.timestampArrival % 3600) / 60)).padStart(2, '0');
            const depH = String(Math.floor(car.timestampDeparture / 3600)).padStart(2, '0') + ':' + String(Math.floor((car.timestampDeparture % 3600) / 60)).padStart(2, '0');
            
            const startPct = Math.round((car.startCapacity / car.maxCapacity) * 100);
            const targetPct = Math.round((car.minLoadingState / car.maxCapacity) * 100);
            const maxKW = ((car.maxCurrentPerPhase * (car.canLoadPhase1 + car.canLoadPhase2 + car.canLoadPhase3) * 230) / 1000).toFixed(1);

            html += `
                <tr>
                    <td>
                        <div style="font-weight: 600;">${car.name}</div>
                        <div style="font-size: 0.7rem; color: #64748B;">ID: ${car.id} &bull; ${car.modelName || 'Electric Vehicle'}</div>
                    </td>
                    <td><span class="${car.carType === 'BEV' ? 'badge-bev' : 'badge-phev'}">${car.carType}</span></td>
                    <td class="font-mono">${station}</td>
                    <td class="font-mono">${arrH} ➔ ${depH}</td>
                    <td>
                        <div class="battery-progress-cell">
                            <div style="display: flex; justify-content: space-between; font-size: 0.72rem;" class="font-mono">
                                <span>${startPct}%</span>
                                <span style="color: #00F0FF;">Target: ${targetPct}%</span>
                            </div>
                            <div class="battery-bar-bg">
                                <div class="battery-bar-fill" style="width: ${startPct}%;"></div>
                            </div>
                        </div>
                    </td>
                    <td class="font-mono">${maxKW} kW (${car.maxCurrentPerPhase}A)</td>
                    <td>
                        <button class="icon-btn delete" title="Remove Car" onclick="app.deleteCar(${car.id})"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
            `;
        });

        tbody.innerHTML = html;
    }

    async optimize(showToastNotice = true) {
        if (this.isOptimizing) return;
        this.isOptimizing = true;

        const btn = document.getElementById('btnRunOptimization');
        if (btn) {
            btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Optimizing Schedule...`;
            btn.style.opacity = '0.7';
        }

        const requestPayload = {
            state: {
                currentTimeSeconds: this.state.currentTimeSeconds,
                fuseTree: this.state.fuseTree,
                cars: this.state.cars,
                carAssignments: this.state.carAssignments,
                energyPriceHistory: this.state.energyPriceHistory
            },
            event: {
                eventType: "Reoptimize"
            },
            optimizerSettings: this.optimizerSettings,
            verbosity: 1
        };

        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestPayload)
            });

            if (!response.ok) {
                throw new Error(`Server returned HTTP ${response.status}`);
            }

            const data = await response.json();
            this.lastResponse = data;

            // Merge optimized plans into state cars
            if (data.cars) {
                data.cars.forEach(resCar => {
                    const localCar = this.state.cars.find(c => c.id === resCar.id);
                    if (localCar && resCar.currentPlan) {
                        localCar.currentPlan = resCar.currentPlan;
                    }
                });
            }

            // Update chart and calculate KPIs
            const kpis = this.chartManager.update(data, this.state, this.state.energyPriceHistory);
            this.updateKPIDisplay(kpis);

            if (showToastNotice) {
                this.showToast(`Optimization complete! Peak shaved by ${kpis.peakReductionPct}% (${kpis.peakReductionKW} kW)`, 'success');
            }
        } catch (err) {
            console.warn("Backend API call failed, running local heuristic solver fallback:", err);
            // Run client-side heuristic solver so UI NEVER breaks!
            const fallbackData = this.runLocalFallbackSolver();
            this.lastResponse = fallbackData;
            const kpis = this.chartManager.update(fallbackData, this.state, this.state.energyPriceHistory);
            this.updateKPIDisplay(kpis);
            if (showToastNotice) {
                this.showToast(`Schedule optimized using local solver (${kpis.peakReductionPct}% peak shaved)`, 'success');
            }
        } finally {
            this.isOptimizing = false;
            if (btn) {
                btn.innerHTML = `<i class="fas fa-bolt"></i> Run Smart Optimization`;
                btn.style.opacity = '1';
            }
        }
    }

    runLocalFallbackSolver() {
        // High quality heuristic scheduler mimicking SAP LP algorithm:
        // Spreads EV charging across available timeslots while respecting fuse tree limit and favoring low prices
        const cars = JSON.parse(JSON.stringify(this.state.cars));
        const rootFuse = this.state.fuseTree.rootFuse;
        const rootMaxKW = ((rootFuse.fusePhase1 + rootFuse.fusePhase2 + rootFuse.fusePhase3) * 230) / 1000;
        const prices = this.state.energyPriceHistory.energyPrices;

        const slotLoadsKW = Array(96).fill(0);

        cars.forEach(car => {
            const plan = Array(96).fill(0);
            const arrSlot = Math.max(Math.floor(this.state.currentTimeSeconds / 900), Math.floor(car.timestampArrival / 900));
            const depSlot = Math.min(96, Math.floor(car.timestampDeparture / 900));
            const neededKwh = Math.max(0, (car.minLoadingState || car.maxCapacity * 0.8) - (car.startCapacity || 0));
            const phases = (car.canLoadPhase1 || 1) + (car.canLoadPhase2 || 1) + (car.canLoadPhase3 || 1);
            const maxKw = (car.maxCurrentPerPhase * 230 * phases) / 1000;
            const slotsCount = Math.max(1, depSlot - arrSlot);

            // Sort slots by price & current load to achieve peak shaving + price minimization
            const candidateSlots = [];
            for (let s = arrSlot; s < depSlot; s++) {
                candidateSlots.push({ slot: s, price: prices[s] || 0.2, currentLoad: slotLoadsKW[s] });
            }
            candidateSlots.sort((a, b) => (a.price * 100 + a.currentLoad) - (b.price * 100 + b.currentLoad));

            let energyRemaining = neededKwh;
            const kwhPerSlot = maxKw * 0.25;

            for (let item of candidateSlots) {
                if (energyRemaining <= 0) break;
                const s = item.slot;
                const headroomKW = Math.max(0, rootMaxKW - slotLoadsKW[s]);
                if (headroomKW >= 2.0) {
                    const assignKW = Math.min(maxKw, headroomKW, energyRemaining * 4);
                    const assignAmp = (assignKW * 1000) / (230 * phases);
                    plan[s] = Math.round(assignAmp);
                    slotLoadsKW[s] += assignKW;
                    energyRemaining -= assignKW * 0.25;
                }
            }

            car.currentPlan = plan;
        });

        return { cars };
    }

    updateKPIDisplay(kpis) {
        if (!kpis) return;
        const elPeak = document.getElementById('kpiPeakPower');
        const elPeakDumb = document.getElementById('kpiPeakDumb');
        const elSavings = document.getElementById('kpiCostSavings');
        const elSavingsPct = document.getElementById('kpiCostSavingsPct');
        const elEnergy = document.getElementById('kpiTotalEnergy');
        const elGrid = document.getElementById('kpiGridUtil');

        if (elPeak) elPeak.textContent = kpis.peakSmart;
        if (elPeakDumb) elPeakDumb.textContent = `Baseline: ${kpis.peakDumb} kW (-${kpis.peakReductionPct}%)`;
        if (elSavings) elSavings.textContent = `${kpis.costSavingsEur} €`;
        if (elSavingsPct) elSavingsPct.textContent = `-${kpis.costSavingsPct}% vs dumb charging`;
        if (elEnergy) elEnergy.textContent = kpis.totalSmartEnergyKWh;
        if (elGrid) elGrid.textContent = `${kpis.gridUtilizationPct}%`;
    }

    // Modal Operations
    openAssignCarModal(stationId) {
        this.activeModalContext = { stationId };
        const modal = document.getElementById('assignCarModal');
        const selectContainer = document.getElementById('presetCarGrid');
        
        let html = '';
        EV_PRESETS.forEach((preset, idx) => {
            html += `
                <div class="preset-car-card ${idx === 0 ? 'selected' : ''}" onclick="app.selectPresetCar(${idx}, this)">
                    <div class="preset-car-name">${preset.name}</div>
                    <div class="preset-car-spec font-mono">${preset.maxCapacity} kWh &bull; ${preset.phases}-Phase</div>
                </div>
            `;
        });
        selectContainer.innerHTML = html;
        this.selectedPresetIndex = 0;

        document.getElementById('modalCarArrTime').value = "08:00";
        document.getElementById('modalCarDepTime').value = "17:30";
        document.getElementById('modalCarStartSoc').value = "20";
        document.getElementById('modalCarTargetSoc').value = "65";

        modal.classList.add('open');
    }

    selectPresetCar(index, el) {
        this.selectedPresetIndex = index;
        document.querySelectorAll('.preset-car-card').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        const preset = EV_PRESETS[index];
        document.getElementById('modalCarStartSoc').value = preset.startCapacity;
        document.getElementById('modalCarTargetSoc').value = preset.minLoadingState;
    }

    confirmAssignCar() {
        if (!this.activeModalContext) return;
        const stationId = this.activeModalContext.stationId;
        const arrTimeStr = document.getElementById('modalCarArrTime').value || "08:00";
        const depTimeStr = document.getElementById('modalCarDepTime').value || "17:30";
        const startSoc = parseFloat(document.getElementById('modalCarStartSoc').value) || 20;
        const targetSoc = parseFloat(document.getElementById('modalCarTargetSoc').value) || 65;

        const parseH = s => {
            const p = s.split(':');
            return (parseInt(p[0]) * 3600) + (parseInt(p[1]) * 60);
        };

        const newCarId = this.state.cars.length > 0 ? Math.max(...this.state.cars.map(c => c.id)) + 1 : 0;
        const car = this.createCarFromPreset(
            newCarId, 
            this.selectedPresetIndex || 0, 
            parseH(arrTimeStr), 
            parseH(depTimeStr), 
            startSoc, 
            targetSoc
        );

        this.state.cars.push(car);
        this.state.carAssignments.push({ carID: newCarId, chargingStationID: stationId });

        this.closeModal('assignCarModal');
        this.renderTree();
        this.renderFleetTable();
        this.optimize(true);
    }

    unassignCar(carId) {
        this.deleteCar(carId);
    }

    deleteCar(carId) {
        this.state.cars = this.state.cars.filter(c => c.id !== carId);
        this.state.carAssignments = this.state.carAssignments.filter(a => a.carID !== carId);
        this.renderTree();
        this.renderFleetTable();
        this.optimize(true);
    }

    openEditFuseModal(fuseId) {
        this.activeModalContext = { fuseId };
        const root = this.state.fuseTree.rootFuse;
        document.getElementById('modalFuseLimit').value = root.fusePhase1;
        document.getElementById('editFuseModal').classList.add('open');
    }

    confirmEditFuse() {
        const val = parseFloat(document.getElementById('modalFuseLimit').value) || 144;
        const root = this.state.fuseTree.rootFuse;
        root.fusePhase1 = val;
        root.fusePhase2 = val;
        root.fusePhase3 = val;
        this.closeModal('editFuseModal');
        this.renderTree();
        this.optimize(true);
    }

    openAddFuseModal(parentId) {
        const newId = Math.max(1, ...this.state.fuseTree.rootFuse.children.map(c => c.id || 0)) + 1;
        this.state.fuseTree.rootFuse.children.push({
            "@type": "Fuse",
            id: newId,
            name: `Branch Sub-Fuse #${newId}`,
            fusePhase1: 77,
            fusePhase2: 77,
            fusePhase3: 77,
            children: [
                this.createChargingStation(newId * 10, `Station #${newId}0`)
            ]
        });
        this.renderTree();
        this.showToast(`Added branch fuse #${newId}`, 'info');
        this.optimize(false);
    }

    openAddChargerModal(branchId) {
        const branch = this.state.fuseTree.rootFuse.children.find(c => c.id === branchId);
        if (!branch) return;
        const existingStations = [];
        this.state.fuseTree.rootFuse.children.forEach(b => {
            (b.children || []).forEach(s => {
                if (s["@type"] === "ChargingStation") existingStations.push(s.id);
            });
        });
        const newStationId = existingStations.length > 0 ? Math.max(...existingStations) + 1 : 0;
        branch.children.push(this.createChargingStation(newStationId, `Station #${newStationId}`));
        this.renderTree();
        this.showToast(`Added charging station #${newStationId}`, 'info');
    }

    deleteNode(nodeId, type) {
        const root = this.state.fuseTree.rootFuse;
        root.children = root.children.filter(c => c.id !== nodeId);
        this.renderTree();
        this.optimize(true);
    }

    closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.remove('open');
    }

    openJsonInspector() {
        const modal = document.getElementById('jsonModal');
        const reqPayload = {
            state: this.state,
            event: { eventType: "Reoptimize" },
            optimizerSettings: this.optimizerSettings
        };
        document.getElementById('jsonRequestText').textContent = JSON.stringify(reqPayload, null, 2);
        document.getElementById('jsonResponseText').textContent = JSON.stringify(this.lastResponse || {}, null, 2);
        modal.classList.add('open');
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle';
        toast.innerHTML = `<i class="fas fa-${icon}"></i> <span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
    window.app = new SmartChargingApp();
    window.app.init();
});
