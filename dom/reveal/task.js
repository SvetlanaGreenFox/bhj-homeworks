const element = document.querySelector('.reveal');

const isInViewport = function (element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  return elementTop < viewportHeight ? true : false;
};

window.addEventListener('scroll', () => {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;

  if (elementTop < viewportHeight) {
    element.classList.add('reveal_active');
  }
  if (elementTop < 0 && elementBottom < 0) {
    element.classList.remove('reveal_active');
  }
});