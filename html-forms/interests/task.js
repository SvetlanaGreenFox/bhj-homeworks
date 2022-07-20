const checkbox = document.querySelectorAll('.interest');

const innerList = document.querySelectorAll('.interest > ul');

Array.from(innerList).forEach((elem) => {
  const parent = elem.closest('li');
  const category = parent.querySelector('.interest__check');
  const subcategorys = Array.from(elem.querySelectorAll('.interest'));
  
  category.addEventListener('change', function () {
    if (this.checked) {
      subcategorys.forEach((elem) => {
        elem.querySelector('input').checked = true;
      });
    } else {
      subcategorys.forEach((elem) => {
        elem.querySelector('input').checked = false;
      });
    }
  });
});