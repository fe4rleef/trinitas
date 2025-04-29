//the machine class is our base class; doesnt extend anything. it provides the basis of all other machine type obj and classes.
class Machine {
    weight;
    location;
    element;
    color;
    angle;
    //the constructor is the function/method that runs when we create an instance of our class
    constructor (in_weight = 100, x_coord = 10, y_coord = 10, color = "gray", angle = 0) {
            this.weight = in_weight;
            this.element = null;
            this.color = color;
            this.coords = [ x_coord, y_coord];
            this.angle = 0;
            console.log("Creating machine with weight of " + in_weight + " pounds");
        console.log("It also had coords of " + [x_coord, y_coord] );
    }
    //this method is responsible for creationg our associated HTML element
    render () {
        // if an element already exists, just return
      if ( this.element ) {
        return;
      }
    //create our new element
      this.element = document.createElement("div");
      this.element.style.backgroundColor = this.color;
      this.element.style.width = "30px";
      this.element.style.height = "10px";
      this.element.style.transform = "rotate(" + this.angle + "rad)";
    //place our element on the page itself
      document.body.appendChild(this.element)
    }

}

const faxmachine = new Machine( 500, 52, 32 );

class Automobile extends Machine {
    fuel;
    moveSpeed;
    constructor ( in_fuel, in_weight = 2_000, color = "gray", moveSpeed = 10 ) {
        super(in_weight);
        this.fuel = in_fuel;
        this.moveSpeed = moveSpeed;
        console.log ("YOU MADE A CAR WITH "+ in_fuel + " % GAS IN IT" );
    }
}

class Tank extends Automobile {
    weight;
    fuel;
    color = "gray"
    constructor (color) {
        super( 1, 10_000, color);
        this.color = color;
        console.log("Your tank is alive")
    }
}

const vehicle = new Automobile(50, 2_000);

const armyTank = new Tank("green");

armyTank.render();

//const faxmachine = new Machine( 500, 52, 32 );

class Plane extends Automobile {
   pitch;
   yaw;
   altitude;
}

class F22 extends Plane {

    weapon_system;

}