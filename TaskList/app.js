const ul = document.querySelector('.collection');
const addform = document.querySelector('#task-form');
const textField = document.querySelector('#task');

function addTask(e) {
  if (task.value === '') {
    alert('Add a task');
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

addform.addEventListener('submit', addTask);