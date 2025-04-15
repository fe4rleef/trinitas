//no changes so const
const h1 = document.getElementById("title")
const h2 = document.querySelector("h2")
const el = document.querySelector("#currenttime");
const username = prompt("what is your name dawg?")

//We're going to change this value at least once
let timevalue;

// Can the user find our secret
let userAnswer = prompt("What is the secret message?");

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

