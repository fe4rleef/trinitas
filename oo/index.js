//the machine class is our base class; doesnt extend anything. it provides the basis of all other machine type obj and classes.
class Machine {
    weight;
    constructor (in_weight = 100, x_coord = 10, y_coord = 10 ) {
        console.log("Creating machine with weight of " + in_weight + " pounds");
        console.log("It also had coords of " + [x_coord, y_coord] );
            this.weight = in_weight;
            this.coords = [ x_coord, y_coord];
    }
}

const faxmachine = new Machine( 500, 52, 32 );

class Automobile extends Machine {
    constructor ( in_fuel, in_weight = 2_000 ) {
        super(in_weight);
      console.log ("YOU MADE A CAR WITH "+ in_fuel + " % GAS IN IT" );
      this.fuel = in_fuel;
    }
}

class Tank extends Automobile {
    weight;
    fuel;
    color = "gray"
    constructor (color) {
        super( 1, 10_000);
        this.color = color;
        console.log("Your tank is alive")
    }
}

const vehicle = new Automobile(50, 2_000);

const armyTank = new Tank("green");

//const faxmachine = new Machine( 500, 52, 32 );

class Plane extends Automobile {
   pitch;
   yaw;
   altitude;
}

class F22 extends Plane {

    weapon_system;

}