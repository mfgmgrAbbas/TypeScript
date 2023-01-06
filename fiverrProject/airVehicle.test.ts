import { AirVehicle } from './AirVehicle';

describe('AirVehicle', () => {
  test('should have yPosition set from constructor and xPosition set to 0', () => {
    const airVehicle = new AirVehicle(5);
    expect(airVehicle.yPosition).toBe(5);
    expect(airVehicle.xPosition).toBe(0);
  });

  test('should increase yPosition by 1', () => {
    const airVehicle = new AirVehicle(5);
    airVehicle.moveUp();
    expect(airVehicle.yPosition).toBe(6);
  });

  test('should not increase yPosition if already 10 or higher', () => {
    const airVehicle = new AirVehicle(10);
    airVehicle.moveUp();
    expect(airVehicle.yPosition).toBe(10);
  });
});

