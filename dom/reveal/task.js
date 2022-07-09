const element = document.querySelector('.reveal');

const isInViewport = function (element) {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  return elementTop < viewportHeight ? true : false;
};

window.addEventListener('scroll', () => {
  if (isInViewport(element)) {
    // console.log(isInViewport(element));
    element.classList.add('reveal_active');
  }
});