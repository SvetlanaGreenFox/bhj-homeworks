const cookieImage = document.getElementById('cookie');
const clickerSpeed = document.getElementById('clicker__speed');

function changeCounter() {
  const clickerCounter = document.getElementById('clicker__counter');
  clickerCounter.textContent++;
}

let count = 0;
let timer = 0;

cookieImage.onclick = function () {
  changeCounter();

  let countTimes = (1 / ((new Date() - timer) / 1000)).toFixed(2);
  if (count === 0) {
    cookieImage.width = 150;
    count += 1;
  } else {
    cookieImage.width = 200;
    count = 0;
  }
  timer = new Date();
  clickerSpeed.textContent = `${countTimes}`;
}