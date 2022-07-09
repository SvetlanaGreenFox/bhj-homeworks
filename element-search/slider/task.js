const buttonPrev = document.querySelector('.slider__arrow_prev');
const buttonNext = document.querySelector('.slider__arrow_next');

const imgElements = document.querySelectorAll('.slider__item');
const images = Array.from(imgElements);

let count = 0;

buttonNext.addEventListener('click', () => {
  const activeElement = document.querySelector('.slider__item_active');
  activeElement.classList.remove('slider__item_active');

  if (count === images.length - 1) {
    count = 0;
  } else {
    count += 1;
  }

  const targetElement = images[count];
  targetElement.classList.add('slider__item_active');
});

buttonPrev.addEventListener('click', () => {
  const activeElement = document.querySelector('.slider__item_active');
  activeElement.classList.remove('slider__item_active');

  if (count <= 0) {
    count = images.length - 1;
  } else {
    count -= 1;
  }

  const targetElement = images[count];
  targetElement.classList.add('slider__item_active');
});