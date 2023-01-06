
  import { Vehicle } from './Vehicle';
  import { AirVehicle } from './AirVehicle';
  import { moveVehiclesForward, describeVehicleXPosition } from './functions';
  
  const vehicle = new Vehicle();
  const airVehicle = new AirVehicle(5);
  
  console.log(describeVehicleXPosition(vehicle));  // "This vehicle is at X position 0."
  console.log(describeVehicleXPosition(airVehicle));  // "This vehicle is at X position 0."
  
  moveVehiclesForward([vehicle, airVehicle], 10);
  
  console.log(describeVehicleXPosition(vehicle));  // "This vehicle is at X position 10."
  console.log(describeVehicleXPosition(airVehicle));  // "This vehicle is at X position 10."
  