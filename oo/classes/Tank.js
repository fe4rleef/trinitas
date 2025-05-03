import Automobile from "./Automobile.js";
import Projectile from "./Projectile.js";

export default class Tank extends Automobile {
  rounds;
  maxRounds;
  projectiles;

  constructor(options = {}) {
    const defaults = {
      rounds: 100,
      maxRounds: 100, // Maximum rounds the tank can hold
    };

    const opts = { ...defaults, ...options };

    super(opts);

    this.rounds = opts.rounds;
    this.maxRounds = opts.maxRounds;
    this.projectiles = []; // Track active projectiles

    console.log("Your tank is alive");
  }

  fire() {
    if (this.rounds > 0) {
      this.rounds--;
      console.log("Firing a bullet! Rounds left:", this.rounds);

      const projectile = new Projectile(this.location, this.angle);
      this.projectiles.push(projectile);

      const interval = setInterval(() => {
        const isActive = projectile.update();
        if (!isActive) {
          clearInterval(interval);
          this.projectiles = this.projectiles.filter((p) => p !== projectile);
        }
      }, 100); // Update every 100ms
    } else {
      console.log("Out of rounds! Reload your tank.");
    }
  }

  reload() {
    this.rounds = this.maxRounds;
    console.log("Tank reloaded! Rounds available:", this.rounds);
  }
}