const ul = document.querySelector('.collection');
const addform = document.querySelector('#task-form');
const textField = document.querySelector('#task');
const clearbutton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

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
  const lis = document.querySelectorAll('.collection-item');
  if (confirm('Are you sure?')) {
    for (let i = 0; i < lis.length; i++) {
      lis[i].remove();
    }
  }
}

function addFilter(e) {
  const text = e.target.value.toLowerCase();
  const lis = document.querySelectorAll('.collection-item');
  lis.forEach(function (li) {
    if (li.innerText.toLowerCase().indexOf(text) !== -1) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
}

addform.addEventListener('submit', addTask);
ul.addEventListener('click', deleteTask);
clearbutton.addEventListener('click', clearTasks);
filter.addEventListener('keyup', addFilter);
