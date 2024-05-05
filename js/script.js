const timeText = document.getElementById("timer")
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const watchContainer = document.querySelector(".watch-container");

let timeInterval = null;
let time = 0;

// Format time from seconds to hours and minutes
const formatTime = (seconds) => {
  let mins = Math.floor(seconds/60).toString().padStart(2,'0');
  let secs = Math.floor(seconds%60).toString().padStart(2,'0');
  return `${mins} : ${secs}`;
}
// Handle Start
startBtn.addEventListener('click',() => {
  startBtn.setAttribute("disabled", true);
  stopBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");
  timeInterval = setInterval(() => {
    time++;
    timeText.textContent = formatTime(time);
    watchContainer.style.borderRadius = `${Math.floor(Math.random()*50)}%`
  },1000)
})
// Handle Stop
stopBtn.addEventListener('click', () => {
  clearInterval(timeInterval);
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", true);
})
// Handle Reset
resetBtn.addEventListener('click', () => {
  if(timeInterval){
    clearInterval(timeInterval);
  }
  time = 0;
  timeText.textContent = formatTime(time)
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", true);
  resetBtn.setAttribute("disabled", true);
  watchContainer.style.borderRadius = "10px";
})


