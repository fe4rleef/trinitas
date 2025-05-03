export default class Projectile {
  constructor(startLocation, angle) {
    this.location = { ...startLocation };
    this.angle = angle;
    this.distance = 0;
    this.speed = 10; // Units per update
    this.maxDistance = 100; // Maximum travel distance
    this.element = this.render();
  }

  render() {
    const element = document.createElement("div");
    element.style.width = "5px";
    element.style.height = "5px";
    element.style.backgroundColor = "red";
    element.style.position = "absolute";
    element.style.borderRadius = "50%";
    document.body.appendChild(element);
    return element;
  }

  update() {
    this.distance += this.speed;
    this.location.x += this.speed * Math.cos(this.angle);
    this.location.y += this.speed * Math.sin(this.angle);

    this.element.style.left = `${this.location.x}px`;
    this.element.style.top = `${this.location.y}px`;

    if (this.distance >= this.maxDistance) {
      this.destroy();
      return false; // Indicates the projectile should stop
    }
    return true; // Indicates the projectile is still active
  }

  destroy() {
    this.element.remove();
    console.log("Projectile destroyed.");
  }
}