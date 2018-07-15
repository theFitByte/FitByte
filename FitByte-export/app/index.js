//**************************BEGIN @ ANALOG CLOCK FUNCTIONALITY FOR MAIN SCREEN**************************//

import clock from "clock";
import document from "document";

// Update the clock every second
clock.granularity = "seconds";

let hourHand = document.getElementById("hours");
let minHand = document.getElementById("mins");
let secHand = document.getElementById("secs");

// Returns an angle (0-360) for the current hour in the day, including minutes
function hoursToAngle(hours, minutes) {
  let hourAngle = (360 / 12) * hours;
  let minAngle = (360 / 12 / 60) * minutes;
  return hourAngle + minAngle;
}

// Returns an angle (0-360) for minutes
function minutesToAngle(minutes) {
  return (360 / 60) * minutes;
}

// Returns an angle (0-360) for seconds
function secondsToAngle(seconds) {
  return (360 / 60) * seconds;
}

// Rotate the hands every tick
function updateClock() {
  let today = new Date();
  let hours = today.getHours() % 12;
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  hourHand.groupTransform.rotate.angle = hoursToAngle(hours, mins);
  minHand.groupTransform.rotate.angle = minutesToAngle(mins);
  secHand.groupTransform.rotate.angle = secondsToAngle(secs);
}

//**************************END @ ANALOG CLOCK FUNCTIONALITY FOR MAIN SCREEN**************************//

import document from "document";

let container = document.getElementById("container");

// Get the selected index
let currentIndex = container.value;

// Set the selected index
container.value = 0; // jump to first slide

clock.ontick = () => updateClock();

let btnBL = document.getElementById("btn-bl");
btnBL.onactivate = function(evt) {
  console.log("Bottom left!");
}

let btnBR = document.getElementById("btn-br");
btnBR.onactivate = function(evt) {
  console.log("Bottom right!");
}