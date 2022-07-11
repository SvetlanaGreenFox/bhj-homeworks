const subElements = document.querySelectorAll('.menu_sub');

Array.from(subElements).forEach((elem) => {
  const parentItem = elem.closest('.menu__item');
  const parentMenu = elem.closest('.menu_main');

  const titleLink = parentItem.querySelector('.menu__link');
  titleLink.addEventListener('click', (e) => {
    e.preventDefault();

    const activeItem = parentMenu.querySelector('.menu_active');
    if (activeItem !== null) activeItem.classList.remove('menu_active');
    if (activeItem === elem) {
      elem.classList.remove('menu_active');
      return;
    }
    elem.classList.add('menu_active');
  });
});