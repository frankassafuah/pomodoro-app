let progressBar = document.querySelector(".inner-circle");
let valueContainer = document.querySelector(".timer-container");
let minDiv = document.querySelector(".mins");
let secDiv = document.querySelector(".secs");
let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

//
let totalSeconds, mins, initial, seconds;

valueContainer.addEventListener("click", () => {
    seconds = mins * 60;
    totalSeconds = mins * 60;
    setTimeout(decrement(), 60);
    pause = false
})

let progress = setInterval(() => {
  minDiv.textContent = Math.floor(seconds / 60);
  secDiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if (seconds > 0) {
    seconds--;
    initial = window.setTimeout("decrement(");
  }
  
}, 1000);

// let progress = setInterval(() => {
//   minDiv.textContent = Math.floor(seconds / 60);
//   secDiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
//   if(seconds > 0) {
//     seconds--
//     initial = window.setTimeout("decrement(")
//   }
//   //
//   progressValue++;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar.style.background = `conic-gradient( #F87070 ${
//     progressValue * 3.6
//   }deg, #161932 ${progressValue * 3.6}deg)`;

//   if (progressValue === progressEndValue) {
//     clearInterval(progress);
//   }
// }, 1000);
