const tabElements = document.querySelectorAll('.tab');
const tabMenu = Array.from(tabElements);
const contentElements = document.querySelectorAll('.tab__content');
const tabContent = Array.from(contentElements);

tabMenu.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();

    if (elem.classList.contains('tab_active')) return;
    
    const index = tabMenu.indexOf(elem);
    
    const activeTab = document.querySelector('.tab_active');
    const activeContent = document.querySelector('.tab__content_active');
   
    activeTab.classList.remove('tab_active');
    elem.classList.add('tab_active');
    
    activeContent.classList.remove('tab__content_active');
    tabContent[index].classList.add('tab__content_active');  
  })
})