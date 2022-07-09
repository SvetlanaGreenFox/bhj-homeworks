const buttonPrev = document.querySelector('.slider__arrow_prev');
const buttonNext = document.querySelector('.slider__arrow_next');

const imgElements = document.querySelectorAll('.slider__item');
const images = Array.from(imgElements);

const dotElements = document.querySelectorAll('.slider__dot');
const dots = Array.from(dotElements);

buttonNext.addEventListener('click', (event) => {
  const indexActiveElement = images.findIndex((elem) =>
    elem.matches('.slider__item_active')
  );

  activateElement(indexActiveElement + 1);
});

buttonPrev.addEventListener('click', () => {
  const indexActiveElement = images.findIndex((elem) =>
    elem.matches('.slider__item_active')
  );

  activateElement(indexActiveElement - 1);
});

dots.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const indexActiveElement = dots.findIndex((elem) => elem === event.target);
    activateElement(indexActiveElement);
  });
});

function activateElement(num) {
  const activeImg = document.querySelector('.slider__item_active');
  const actveDot = document.querySelector('.slider__dot_active');
  activeImg.classList.remove('slider__item_active');
  actveDot.classList.remove('slider__dot_active');

  let indexNewElement;
  if (num < 0) {
    indexNewElement = images.length - 1;
  } else if (num > images.length - 1) {
    indexNewElement = 0;
  } else {
    indexNewElement = num;
  }

  const targetImg = images[indexNewElement];
  const targetDot = dots[indexNewElement];
  targetImg.classList.add('slider__item_active');
  targetDot.classList.add('slider__dot_active');
}