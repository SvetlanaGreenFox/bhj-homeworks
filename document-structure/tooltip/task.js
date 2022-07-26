const linkElements = document.querySelectorAll('.has-tooltip');

Array.from(linkElements).forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    if (
      document.querySelector('.tooltip_active') !== null &&
      element.classList.contains('active')
    ) {
      document.querySelector('.tooltip_active').remove();
      return;
    }

    const left = element.getBoundingClientRect().left;
    const top = element.getBoundingClientRect().top - 20;

    const tooltip = document.createElement('div');
    tooltip.textContent = element.title;
    tooltip.classList.add('tooltip_active', 'tooltip');
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;

    element.after(tooltip);
    element.classList.add('active');
  });
});
