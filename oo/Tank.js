import Automobile from "./Automobile.js";

export default class Tank extends Automobile {
  fuel;
  color = "gray"
  constructor( options = {}) {

    const defaults = {
      rounds: 100
    };

    const opts = { ...defaults, ...options};
    super(opts);
    this.color = opts.color;
    console.log("Your tank is alive")
  }
};