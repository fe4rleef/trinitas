import Tank from "./classes/Tank.js";

const armyTank = new Tank({ rounds: 5, color: "green" });
const pinkTank = new Tank({ color: "pink" })

armyTank.render();

function setupKeyBinding() {

    function handleKeyDown(event) {
        console.log(event.code)

    }

    function handleKeyUp(event) {
        console.log(event.code);
        if (event.code == "KeyW") {
            armyTank.driveForward();
            armyTank.update();
            console.log(armyTank.location.x);
        }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
}

setupKeyBinding();