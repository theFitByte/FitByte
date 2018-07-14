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

// Update the clock every tick event
clock.ontick = () => updateClock();

//**************************END @ ANALOG CLOCK FUNCTIONALITY FOR MAIN SCREEN**************************//






// Get a handle on the instance
var logo_static = document.getElementById("logo_static");
var logo_animated = document.getElementById("logo_animated");

// Animate after a 5 second delay
setTimeout(function() {
  logo_static.animate("enable"); // Specify the name of the event to trigger
}, 5000);
logo_static.animate("disable"); // Specify the name of the event to trigger

/*
// Animate after a 5 second delay
setTimeout(function() {
  logo_animated.animate("enable"); // Specify the name of the event to trigger
}, 5000); */