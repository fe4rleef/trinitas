const h1 = document.getElementById("title")
const h2 = document.querySelector("h2")
const el = document.querySelector("#currenttime");
const username = prompt("what is your name dawg?")

// Can the user find our secret
if ("hotdog" == prompt("Whart is the secret message?") ) {
    h2.hidden = false; 
}
//Runs clock once every second
setInterval(settime, 1000);
//uses the name provided and greets.
h1.textContent = "Hello, " + username

function settime() {
    el.textContent = new Date().toLocaleTimeString();

}

