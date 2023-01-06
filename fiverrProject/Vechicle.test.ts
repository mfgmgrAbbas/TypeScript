import { Vehicle } from './Vehicle';

describe('Vehicle', () => {
  test('should have xPosition set to 0', () => {
    const vehicle = new Vehicle();
    expect(vehicle.xPosition).toBe(0);
  });

  test('should increase xPosition by given distance', () => {
    const vehicle = new Vehicle();
    vehicle.moveForward(10);
    expect(vehicle.xPosition).toBe(10);
  });

  test('should increase xPosition by combined distance', () => {
    const vehicle = new Vehicle();
    vehicle.moveForward(10);
    vehicle.moveForward(20);
    expect(vehicle.xPosition).toBe(30);
  });
});
