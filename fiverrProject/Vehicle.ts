export class Vehicle {
    xPosition: number = 0;
  
    moveForward(distance: number): void {
      this.xPosition += distance;
    }
  }
  