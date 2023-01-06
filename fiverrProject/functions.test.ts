import { Vehicle } from './Vehicle';
import { AirVehicle } from './AirVehicle';
import { moveVehiclesForward } from './functions';

describe('moveVehiclesForward', () => {
  test('should increase xPosition of both vehicles by given distance', () => {
    const vehicle1 = new Vehicle();
    const vehicle2 = new AirVehicle(0);
    moveVehiclesForward([vehicle1, vehicle2], 10);
    expect(vehicle1.xPosition).toBe(10);
    expect(vehicle2.xPosition).toBe(10);
  });
});

import { describeVehicleXPosition } from './functions';

describe('describeVehicleXPosition', () => {
  test('should return description of xPosition', () => {
    const vehicle = new Vehicle();
    expect(describeVehicleXPosition(vehicle)).toBe('This vehicle is at X position 0.');
  });
});
