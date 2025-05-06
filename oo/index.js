import projectile from "./classes/projectile.js";
import Tank from "./classes/Tank.js";

const armyTank = new Tank({ rounds: 5, color: "green" });
const pinkTank = new Tank({ color: "pink" })
armyTank.render();

const pressedKeys = {
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowLeft": false,
    "ArrowRight": false,
   "KeyW": false,
   "KeyS": false,
   "KeyA": false,
   "KeyD": false,
};

function update() {

    //if user is pressing w or arrow up, move tank up
    if (pressedKeys.KeyW || pressedKeys.ArrowUp) {
        armyTank.driveForward();
    } else if (pressedKeys.KeyS || pressedKeys.ArrowDown) {
        armyTank.driveBackward();
        console.log("WOOOOOOOO");
    }

    //turning

if (pressedKeys.KeyA || pressedKeys.ArrowLeft){
    armyTank.turnLeft();
} else if ( pressedKeys.KeyD || pressedKeys.ArrowRight) {
    armyTank.turnRight();
}

    armyTank.update();

    requestAnimationFrame(update);
}
update();

const projectiles = [];

/*function drawProjectiles () {

    const keepDrawing = [];

    for ( const project of projectiles) {
        project.move();
        if (project)
    }
    }*/
document.addEventListener("keydown", (event) => {

    if (event.code == "Space") {
        //armyTank.shoot();
        new projectile({
            x: Math.random() * innerWidth,
            y: Math.random() * innerHeight,
            move: 1,
            angle: Math.random() * Math.PI * 2,
        });
    }

    if (event.code in pressedKeys) {
        pressedKeys[event.code] = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code in pressedKeys) {
        // If the key is released, set its value to false
        pressedKeys[event.code] = false;
    }
});