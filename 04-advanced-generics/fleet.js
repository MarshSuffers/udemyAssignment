"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isHeavyMachinery(vehicle) {
    return "maxLiftingCapacity" in vehicle;
}
class FleetManager {
    constructor() {
        this.vehicles = [];
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
        console.log(`${vehicle.make} ${vehicle.model} added to fleet.`);
    }
    scheduleService(input) {
        if (typeof input === "number") {
            if (input < 0) {
                return "Miles until service cannot be negative.";
            }
            return `Service scheduled after ${input} miles.`;
        }
        return `Service scheduled for ${input.toDateString()}.`;
    }
    calculateLoadLimit(vehicle) {
        if (isHeavyMachinery(vehicle)) {
            return `${vehicle.make} ${vehicle.model} has a maximum lifting capacity of ${vehicle.maxLiftingCapacity} kg.`;
        }
        return `${vehicle.make} ${vehicle.model} is not classified as heavy machinery.`;
    }
    listVehicles() {
        console.log(this.vehicles);
    }
}
const fleet = new FleetManager();
const truck = {
    VIN: "TRUCK123456",
    make: "Ford",
    model: "F-150",
    lastServiceDate: new Date("2026-01-15"),
    engineHours: 1200,
};
const crane = {
    VIN: "CRANE987654",
    make: "Caterpillar",
    model: "320 GC",
    lastServiceDate: new Date("2026-03-10"),
    engineHours: 2500,
    maxLiftingCapacity: 5000,
};
fleet.addVehicle(truck);
fleet.addVehicle(crane);
console.log(fleet.scheduleService(5000));
console.log(fleet.scheduleService(new Date("2026-11-01")));
console.log(fleet.calculateLoadLimit(truck));
console.log(fleet.calculateLoadLimit(crane));
fleet.listVehicles();
//# sourceMappingURL=fleet.js.map