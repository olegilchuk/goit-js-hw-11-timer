const refs = {
  daysText: document.querySelector('[data-value="days"]'),
  hoursText: document.querySelector('[data-value="hours"]'),
  minutesText: document.querySelector('[data-value="mins"]'),
  secondsText: document.querySelector('[data-value="secs"]'),
};

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2022'),
// });
// let result = null;
// function time() {
//   result = Math.floor(new Date('Jul 17, 2022'));
// }

let watchId = null;
let andDate = null;
let result = null;

function timer() {
  result = Math.floor((andDate - new Date()) / 1000);
  refs.secondsText.textContent = result % 60;
}

function start() {
  andDate = new Date('Jul 17, 2022');
  watchId = setInterval(timer, 1000);
}

console.log(start());
