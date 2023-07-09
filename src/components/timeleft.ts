const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 96;
const ALERT_THRESHOLD = 24;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

let TIME_LIMIT = 2000;
let remainingPathColor = COLOR_CODES.info.color;

let temp = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="__label-base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-__label" class="base-timer-label"></span>
</div>
`;

function onTimesUp(ti: string | number | NodeJS.Timeout) {
  clearInterval(ti);
}

export default function startTimer(
  countFrom: Date,
  goal: Date,
  el: string,
  tn: string,
  sla: string
) {
  TIME_LIMIT = goal.getTime() - countFrom.getTime();
  const now = new Date();
  let timePassed = 0;
  let timeLeft = now.getTime();
  const timer = document.getElementById(el);
  const lb = document.createElement("span");
  lb.setAttribute("class", "main-e-label");
  lb.setAttribute("id", `span-label-${el}`);
  lb.innerHTML = tn;
  timer.innerHTML = temp.replaceAll("__label", `${el}`);
  timer.appendChild(lb);
  const remainingTime = goal.getTime() - now.getTime();
  let timerInterval: string | number | NodeJS.Timeout = null;

  timerInterval = setInterval(() => {
    timePassed = timePassed += 1000;
    timeLeft = remainingTime - timePassed;
    document.getElementById(`base-timer-${el}`).innerHTML =
      formatTime(timeLeft);
    setCircleDasharray(el, timeLeft);
    setRemainingPathColor(timeLeft, el);
    if (timeLeft <= 0) {
      onTimesUp(timerInterval);
      document.getElementById(`base-timer-${el}`).innerHTML = `${sla}`;
    }
  }, 1000);
}

function formatTime(time: number) {
  let remain = new Date(time);
  let days = remain.getUTCDate() - 1,
    hours = remain.getUTCHours(),
    minutes = remain.getUTCMinutes(),
    seconds = remain.getUTCSeconds();

  return `${days}d ${hours}h<br>${minutes}m ${seconds}s`;
}

function setRemainingPathColor(timeLeft: number, el: string) {
  const { alert, warning, info } = COLOR_CODES;
  const hLeft = timeLeft / 1000 / 60 / 60;
  console.log(hLeft);

  if (hLeft <= alert.threshold) {
    document
      .getElementById(`${el}-base-timer-path-remaining`)
      .classList.remove(warning.color);
    document
      .getElementById(`${el}-base-timer-path-remaining`)
      .classList.add(alert.color);
  } else if (hLeft <= warning.threshold) {
    document
      .getElementById(`${el}-base-timer-path-remaining`)
      .classList.remove(info.color);
    document
      .getElementById(`${el}-base-timer-path-remaining`)
      .classList.add(warning.color);
  }
}

function calculateTimeFraction(tl: number) {
  const rawTimeFraction = tl / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray(el: string, left: number) {
  const circleDasharray = `${(
    calculateTimeFraction(left) * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById(`${el}-base-timer-path-remaining`)
    .setAttribute("stroke-dasharray", circleDasharray);
}
