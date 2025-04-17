function promptUser () {
const h1 = document.getElementById("title")
const h2 = document.querySelector("h2")
const el = document.querySelector("#currenttime");
const username = prompt("what is your name dawg?")

let timvalue;

let tries = 10
let userAnswer = prompt("What is the secret message?");

while (userAnswer != "hotdog" && tries > 0) {
    alert("You made the wrong choice bucko. " + tries + "left");
    userAnswer = prompt("what is the secret message?");
    tries = tries - 1;
}

if (userAnswer == "hotdog") {
    h2.hidden = false;
}

setInterval(settime,1000);

h1.textContent = "hello" + username

function settime() {
    timevalue = new Date().toLocaleTimeString();
    //function above uses "camel casing"
    renderTime();

    function renderTime() {
        el.textContent = timevalue;
    }

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

}}}

function say (phrase) {
     const utterance = new SpeechSynthesisUtterance(phrase);
     speechSynthesis.speak(utterance);
}

const speakButton = document.querySelector("#sayPhrase");
const phraseImput = document.querySelector("#phrase");

speakButton.addEventListener("click", function () {
    say(phraseInput.value);
}
);