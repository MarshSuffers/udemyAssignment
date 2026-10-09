interface IVehicle {
  VIN: string;
  make: string;
  model: string;
}

interface IMaintenance {
  lastServiceDate: Date;
  engineHours: number;
}

type FleetVehicle = IVehicle & IMaintenance;

interface IHeavyMachinery extends FleetVehicle {
  maxLiftingCapacity: number;
}

function isHeavyMachinery(
  vehicle: FleetVehicle | IHeavyMachinery,
): vehicle is IHeavyMachinery {
  return "maxLiftingCapacity" in vehicle;
}

class FleetManager {
  private vehicles: FleetVehicle[] = [];

  addVehicle(vehicle: FleetVehicle): void {
    this.vehicles.push(vehicle);
    console.log(`${vehicle.make} ${vehicle.model} added to fleet.`);
  }

  scheduleService(milesUntilNext: number): string;

  scheduleService(nextServiceDate: Date): string;

  scheduleService(input: number | Date): string {
    if (typeof input === "number") {
      if (input < 0) {
        return "Miles until service cannot be negative.";
      }

      return `Service scheduled after ${input} miles.`;
    }

    return `Service scheduled for ${input.toDateString()}.`;
  }

  calculateLoadLimit(vehicle: FleetVehicle | IHeavyMachinery): string {
    if (isHeavyMachinery(vehicle)) {
      return `${vehicle.make} ${vehicle.model} has a maximum lifting capacity of ${vehicle.maxLiftingCapacity} kg.`;
    }

    return `${vehicle.make} ${vehicle.model} is not classified as heavy machinery.`;
  }

  listVehicles(): void {
    console.log(this.vehicles);
  }
}

const fleet = new FleetManager();

const truck: FleetVehicle = {
  VIN: "TRUCK123456",
  make: "Ford",
  model: "F-150",
  lastServiceDate: new Date("2026-01-15"),
  engineHours: 1200,
};

const crane: IHeavyMachinery = {
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
