function getHole(index) {
  return `hole${index}`;
};

function checkWinner() {
  const dead = document.getElementById('dead');
  const lost = document.getElementById('lost');

  if (dead.textContent === '10') {
    alert('Вы победили!');
    dead.textContent = '0';
    lost.textContent = '0';
  }

  if (lost.textContent === '5') {
    alert('Вы проиграли!');
    dead.textContent = '0';
    lost.textContent = '0';
  }
}

for (let i = 1; i <= 9; i += 1) {
  const elem = document.getElementById(getHole(i));

  elem.onclick = function () {
    if (elem.className === "hole hole_has-mole") {
      dead.textContent++;
    } else {
      lost.textContent++;
    }
    checkWinner();
  }
}

