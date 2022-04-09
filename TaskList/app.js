const ul = document.querySelector('.collection');
const addform = document.querySelector('#task-form');
const textField = document.querySelector('#task');
const clearbutton = document.querySelector('.clear-tasks');

function addTask(e) {
  if (task.value === '') {
    alert('Add a task');
    return;
  }
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.innerText = task.value;
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  ul.appendChild(li);
  task.value = '';
  e.preventDefault();
};

function deleteTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks(e) {
  const lis = document.querySelectorAll('ul li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].remove();
  }
}

addform.addEventListener('submit', addTask);
ul.addEventListener('click', deleteTask);
clearbutton.addEventListener('click', clearTasks);