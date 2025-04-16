//no changes so const
const h1 = document.getElementById("title")
const h2 = document.querySelector("h2")
const el = document.querySelector("#currenttime");
const username = prompt("what is your name dawg?")

//We're going to change this value at least once
let timevalue;

// Can the user find our secret
let tries = 10
let userAnswer = prompt("What is the secret message?");
// This while loop runs as long as two conditions are true:
// 1. The userAnswer var does not equal "please", and 
// 2. The value of tries is greater than 0
// When one or both of these are false, the while looop will be exited
while (userAnswer != "hotdog" && tries > 0) {
    alert("You made the wrong choice bucko. " + tries + "left");
    userAnswer = prompt("what is the secret message?");
    tries = tries - 1;
}

if (userAnswer == "hotdog") {
    h2.hidden = false;
}

//Runs clock once every second
setInterval(settime, 1000);

//uses the name provided and greets.
h1.textContent = "Hello, " + username

function settime() {
    timevalue = new Date().toLocaleTimeString();
    //function above uses "camel casing"
    renderTime();
}

function renderTime() {
    el.textContent = timevalue;
}

//setup tracking eyes!
const eyes = document.querySelectorAll(".eye");

document.addEventListener("mousemove", updateEyes);

function updateEyes(event) {
    for (const eye of eyes) {
        const pupil = eye.querySelector(".pupil");
        const shape = eye.getBoundingClientRect();
        const dx = event.clientX - (shape.left + shape.width / 2);
        const dy = event.clientY - (shape.top + shape.height / 2);
        const angle = Math.atan2(dy, dx);
        const x = Math.cos(angle) * 10;
        const y = Math.sin(angle) * 10;
        //Update the position of the pupils
        pupil.style.transform = `translate(${ x }px, ${ y }px)`;
    }

}
