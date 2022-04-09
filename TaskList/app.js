const ul = document.querySelector('.collection');
const addform = document.querySelector('#task-form');
const textField = document.querySelector('#task');
const clearbutton = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

function showTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  if (tasks !== null) {
    tasks.forEach(function (task) {
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.innerText = task;
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(link);
      ul.appendChild(li);
    });
  }
}

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
  storeTaskInLocalStorage(task.value);
  task.value = '';
  e.preventDefault();
};

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      deleteTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function deleteTaskFromLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  if (tasks != null) {
    tasks.forEach(function (li, index) {
      if (task.textContent === li) {
        tasks.splice(index, 1);
      }
    });
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e) {
  const lis = document.querySelectorAll('.collection-item');
  if (confirm('Are you sure?')) {
    for (let i = 0; i < lis.length; i++) {
      lis[i].remove();
    }
    localStorage.clear();
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
document.addEventListener('DOMContentLoaded', showTasks);