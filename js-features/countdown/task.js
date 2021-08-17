function sayHi() {
  alert('Вы победили в конкурсе!');
}


function startingTimer(id) {
  const timer = document.getElementById(id);
  let count = 59;
  const timerId = setInterval(() => {
    timer.textContent -= 1;
    count -= 1;
    if (count === 0) {
      clearInterval(timerId);
      setTimeout(sayHi, 1000);
    }
  }, 1000);
}



startingTimer('timer');