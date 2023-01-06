import { Vehicle } from './Vehicle';



export function moveVehiclesForward(vehicles: Vehicle[], distance: number): void {
  vehicles.forEach(vehicle => {
    vehicle.moveForward(distance);
  });
}


export function describeVehicleXPosition(vehicle: Vehicle): string {
  return `This vehicle is at X position ${vehicle.xPosition}.`;
}


