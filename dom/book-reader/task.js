const book = document.getElementById('book');

const fontControlPanel = document.querySelector('.book__control_font-size');

const fontControlElements = fontControlPanel.querySelectorAll('.font-size');

const highlightFont = (elem) => {
  const activeElement = fontControlPanel.querySelector('.font-size_active');
  console.log(activeElement);
  if (elem === activeElement) {
    return;
  }
  activeElement.classList.remove('font-size_active');
  elem.classList.add('font-size_active');
};

Array.from(fontControlElements).forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    highlightFont(elem);

    const selectSize = elem.dataset.size;

    let classBook = '';
    if (selectSize === 'small') {
      classBook = `book_fs-small`;
      if (book.classList.contains(`book_fs-big`)) {
        book.classList.remove(`book_fs-big`);
      }
      book.classList.add(classBook);
    } else if (selectSize === 'big') {
      classBook = `book_fs-big`;
      if (book.classList.contains(`book_fs-small`)) {
        book.classList.remove(`book_fs-small`);
      }
      book.classList.add(classBook);
    } else {
      if (book.classList.contains(`book_fs-big`)) {
        book.classList.remove(`book_fs-big`);
      }
      if (book.classList.contains(`book_fs-small`)) {
        book.classList.remove(`book_fs-small`);
      }
    }

    console.log(Array.from(book.classList));
  });
});
