const menuItem = document.querySelectorAll('.menu__item');
Array.from(menuItem).forEach((item) => {
  item.addEventListener('click', (event) => {
    const parent = item.closest('.menu');
    event.preventDefault();
    const innerMenu = item.querySelector('.menu_sub');
    const activeItem = parent.querySelector('.menu_active');
    if (activeItem !== null) activeItem.classList.remove('menu_active');
    if (innerMenu === null) return;
    innerMenu.classList.add('menu_active');
  });
});