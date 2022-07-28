const linkElements = document.querySelectorAll('.has-tooltip');

const tooltip = document.createElement('div');

window.addEventListener('scroll', () => {
  if (document.querySelector('.tooltip_active') === null) return;

  const tooltip = document.querySelector('.tooltip_active');
  const activeLink = document.querySelector('.active');
 
  const left = activeLink.getBoundingClientRect().left;
  const top = activeLink.getBoundingClientRect().top - 20;
  const bottom = activeLink.getBoundingClientRect().bottom;

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;

  if (bottom < 0) {
    tooltip.classList.toggle('tooltip_active');
    activeLink.classList.toggle('active');
  }
});

Array.from(linkElements).forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      tooltip.classList.contains('tooltip_active') &&
      tooltip.textContent === element.title
    ) {
      tooltip.classList.toggle('tooltip_active');
      return;
    }

    if (document.querySelector('.active') !== null) {
      document.querySelector('.active').classList.remove('active');
    }

    const left = element.getBoundingClientRect().left;
		//Как посчитать высоту строки? 20 - непонятное знакчение.
    const top = element.getBoundingClientRect().top - 20;

    tooltip.textContent = element.title;
    tooltip.classList.add('tooltip_active', 'tooltip');
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;

    element.after(tooltip);
    element.classList.add('active');
  });
});
