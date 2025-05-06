import Machine from "./Machine.js";

export default class Automobile extends Machine {
  fuel;
  moveSpeed;
  turnSpeed;

  constructor(options = {}) {

    const defaults = {
      fuel: 100,
      moveSpeed: 5,
      turnSpeed: 0.15,
    };

    const opts = { ...defaults, ...options };

    super(opts);

    this.fuel = opts.fuel;
    this.moveSpeed = opts.moveSpeed;
    this.turnSpeed = opts.turnSpeed
  }

  driveForward() {
    const newX = this.location.x + Math.cos(this.angle) * this.moveSpeed;
    const newY = this.location.y + Math.sin(this.angle) * this.moveSpeed;
    // Move in the direction the vehicle is pointing
    this.location.x = Math.max(0, Math.min(innerWidth, newX));
    this.location.y = Math.max(0, Math.min(innerHeight, newY));
  }

  driveBackward() {
    const newX = this.location.x - Math.cos(this.angle) * this.moveSpeed;
    const newY = this.location.y - Math.sin(this.angle) * this.moveSpeed;
    // Move in the opposite direction the vehicle is pointing
    this.location.x = Math.max(0, Math.min(innerWidth, newX));
    this.location.y = Math.max(0, Math.min(innerHeight, newY));
  }

  turnLeft() {
    this.angle -= this.turnSpeed; // Turn counterclockwise
    console.log("You're turning left");
  }

  turnRight() {
    this.angle += this.turnSpeed; // Turn clockwise
    console.log("You're turning right");
  }

  startMovement() {
    const moveAndSpin = () => {
      this.driveBackward(); // Move backward
      this.turnRight(); // Spin clockwise
      this.update(); // Update the tank's position and rotation on the screen

      // Continue the loop
      requestAnimationFrame(moveAndSpin);
    };

    // Start the loop
    moveAndSpin();
  }

}