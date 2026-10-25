"""
Safe Station Environment ⚡
An advanced Reinforcement Learning environment for managing a hard-constrained EV Smart-Station.
Compatible with Gymnasium / OpenEnv framework.
"""

import numpy as np

class SafeStationEnv:
    """
    Safe Station RL Environment
    
    Goal: Maximize profit by smart charging EVs while minimizing grid costs.
    State Space: [hour, grid_price, station_battery_level, car_present, car_battery_need]
    Action Space:
        0: Grid Charge (20 units from Grid directly to EV)
        1: Battery Charge (20 units from BESS to EV)
        2: Top-Up BESS (Refill up to 30 units from Grid into BESS)
        3: Hybrid Charge (40 units total: 20 from Grid + 20 from BESS)
        
    Reward System:
        +200.0: Successfully charging a car to completion.
        +50.0: Peak-Shaving bonus (using BESS during expensive hours).
        +Profit: Reward for topping up BESS during off-peak hours (price <= ₹4.0).
        -Cost: Penalties for grid usage and car wait times.
    """
    
    def __init__(self, bess_capacity=100.0, max_steps=96):
        self.bess_capacity = bess_capacity
        self.max_steps = max_steps
        self.step_count = 0
        
        # Action definitions
        self.ACTION_GRID_CHARGE = 0
        self.ACTION_BESS_CHARGE = 1
        self.ACTION_TOPUP_BESS = 2
        self.ACTION_HYBRID_CHARGE = 3
        
        self.reset()
        
    def reset(self):
        self.step_count = 0
        self.hour = 0
        self.bess_level = 50.0  # Start half full
        self.car_present = 1 if np.random.rand() > 0.3 else 0
        self.car_battery_need = float(np.random.choice([20, 40, 60])) if self.car_present else 0.0
        self.grid_price = self._get_grid_price(self.hour)
        
        return self._get_obs()
        
    def _get_grid_price(self, hour):
        # Off-peak night: ₹2.0 - ₹3.5
        # Morning peak (07:00 - 10:00): ₹8.0 - ₹12.0
        # Afternoon solar drop (11:00 - 15:00): ₹3.5 - ₹5.0
        # Evening peak (17:00 - 21:00): ₹9.0 - ₹14.0
        if hour < 6:
            return round(2.5 + 0.5 * np.sin(hour), 2)
        elif 6 <= hour < 11:
            return round(8.5 + 3.5 * np.sin((hour - 6) / 5 * np.pi), 2)
        elif 11 <= hour < 16:
            return round(4.0 + 1.0 * np.sin((hour - 11) / 5 * np.pi), 2)
        elif 16 <= hour < 22:
            return round(9.5 + 4.5 * np.sin((hour - 16) / 6 * np.pi), 2)
        else:
            return round(3.5 - 1.0 * ((hour - 22) / 2), 2)
            
    def _get_obs(self):
        return np.array([
            float(self.hour),
            float(self.grid_price),
            float(self.bess_level),
            float(self.car_present),
            float(self.car_battery_need)
        ], dtype=np.float32)
        
    def step(self, action):
        self.step_count += 1
        reward = 0.0
        info = {
            "action": action,
            "bess_used": 0.0,
            "grid_used": 0.0,
            "car_completed": False,
            "peak_shaved": False,
            "profit_gained": 0.0
        }
        
        is_expensive_hour = self.grid_price >= 8.0
        is_cheap_hour = self.grid_price <= 4.0
        
        # Action 0: Grid Charge (20 units from Grid to EV)
        if action == self.ACTION_GRID_CHARGE:
            if self.car_present and self.car_battery_need > 0:
                charged = min(20.0, self.car_battery_need)
                self.car_battery_need -= charged
                grid_cost = charged * self.grid_price
                reward -= grid_cost * 0.1  # Cost penalty
                info["grid_used"] = charged
                
                # Penalty for using expensive grid when BESS was available
                if is_expensive_hour and self.bess_level >= 20.0:
                    reward -= 25.0
            else:
                reward -= 10.0  # Invalid action penalty (no car to charge)
                
        # Action 1: Battery Charge (20 units from BESS to EV)
        elif action == self.ACTION_BESS_CHARGE:
            if self.car_present and self.car_battery_need > 0:
                if self.bess_level >= 20.0:
                    charged = min(20.0, self.car_battery_need)
                    self.bess_level -= 20.0
                    self.car_battery_need -= charged
                    info["bess_used"] = 20.0
                    
                    # +50.0 Peak-Shaving bonus if used during expensive hours!
                    if is_expensive_hour:
                        reward += 50.0
                        info["peak_shaved"] = True
                    else:
                        reward += 10.0
                else:
                    reward -= 20.0  # Battery empty penalty
            else:
                reward -= 10.0  # Invalid action penalty
                
        # Action 2: Top-Up BESS (Refill up to 30 units from Grid into BESS)
        elif action == self.ACTION_TOPUP_BESS:
            space = self.bess_capacity - self.bess_level
            refill = min(30.0, space)
            if refill > 0:
                self.bess_level += refill
                cost = refill * self.grid_price
                info["grid_used"] = refill
                
                # Reward for topping up during off-peak hours (<= ₹4.0)
                if is_cheap_hour:
                    reward += 35.0  # Profit bonus
                    reward -= cost * 0.05
                    info["profit_gained"] = 35.0
                else:
                    # Penalty for charging BESS during expensive peak hours!
                    reward -= cost * 0.2
            else:
                reward -= 5.0  # BESS already full
                
        # Action 3: Hybrid Charge (40 units: 20 Grid + 20 BESS)
        elif action == self.ACTION_HYBRID_CHARGE:
            if self.car_present and self.car_battery_need > 0:
                bess_avail = min(20.0, self.bess_level)
                self.bess_level -= bess_avail
                grid_draw = 20.0
                total_power = bess_avail + grid_draw
                charged = min(total_power, self.car_battery_need)
                self.car_battery_need -= charged
                
                info["bess_used"] = bess_avail
                info["grid_used"] = grid_draw
                
                grid_cost = grid_draw * self.grid_price
                reward -= grid_cost * 0.08
                
                if is_expensive_hour and bess_avail >= 20.0:
                    reward += 30.0
                    info["peak_shaved"] = True
            else:
                reward -= 15.0
                
        # Check car completion (+200 Reward!)
        if self.car_present and self.car_battery_need <= 0:
            reward += 200.0
            info["car_completed"] = True
            self.car_present = 0
            self.car_battery_need = 0.0
        elif self.car_present:
            # Small waiting penalty for uncharged car
            reward -= 5.0
            
        # Advance time (15 mins per step, 4 steps per hour)
        if self.step_count % 4 == 0:
            self.hour = (self.hour + 1) % 24
            self.grid_price = self._get_grid_price(self.hour)
            
        # Random car arrival if empty
        if not self.car_present and np.random.rand() > 0.4:
            self.car_present = 1
            self.car_battery_need = float(np.random.choice([20, 40, 60]))
            
        done = self.step_count >= self.max_steps
        
        return self._get_obs(), reward, done, info
