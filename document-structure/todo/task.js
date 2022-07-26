const input = document.querySelector('.tasks__input');

const tasksList = document.querySelector('#tasks__list');

input.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    e.preventDefault();

    if (e.target.value.length === 0) return;

    const userTask = e.target.value;

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const titleTask = document.createElement('div');
    titleTask.classList.add('task__title');
    titleTask.textContent = userTask;

    const removeTask = document.createElement('a');
    removeTask.setAttribute('href', '#');
    removeTask.innerHTML = '&times;';
    removeTask.classList.add('task__remove');
    removeTask.addEventListener('click', (e) => {
      e.preventDefault();
      taskElement.remove();
    });

    taskElement.append(titleTask);
    taskElement.append(removeTask);
   
    tasksList.append(taskElement);
    e.target.value = '';
  }
});