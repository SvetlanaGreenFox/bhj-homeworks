const selectedValue = document.querySelector('.dropdown__value');
const dropValue = document.querySelector('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
const dropElements = document.querySelectorAll('.dropdown__item');
const dropValues = Array.from(dropElements);

dropValues.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    const value = elem.textContent;
    if (value === selectedValue) {
      return;
    }
    selectedValue.textContent = value;
  });
});

dropValue.addEventListener('click', () => {
  if (dropList.classList.contains('dropdown__list_active')) {
    dropList.classList.remove('dropdown__list_active');
  } else {
    dropList.classList.add('dropdown__list_active');
  }
});