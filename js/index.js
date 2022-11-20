const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

document.body.style.backgroundColor = localStorage.getItem("bgColor");

const startBtnRef = document.querySelector('[data-action="start"]');
const stoptBtnRef = document.querySelector('[data-action="stop"]');

const colorSwitch = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.isActive = true;
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, 5)];
      localStorage.setItem("bgColor", document.body.style.backgroundColor);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};

startBtnRef.addEventListener("click", colorSwitch.start.bind(colorSwitch));
stoptBtnRef.addEventListener("click", colorSwitch.stop.bind(colorSwitch));

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
