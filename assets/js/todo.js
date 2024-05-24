const taskInput = document.querySelector('.js-input');
    const taskButton = document.querySelector('.js-button');
    const taskList = document.querySelector('.list');

    loadTasks()
    function addTask() {
      let task = taskInput.value;
      if (task) {
        createTaskElement(task);
        taskInput.value = ''

      }
      else {
        alert('please enter task!')
      }
    }

    function createTaskElement(task) {
      let listItem = document.createElement('li');
      listItem.textContent = task
      taskList.appendChild(listItem);
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('deletebutton');
      deleteButton.textContent = 'Delete'
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      deleteButton.addEventListener('click', function () {
        listItem.remove()
        saveToStorage()
      })
      saveToStorage()
    }

    taskButton.addEventListener('click', addTask);

    function saveToStorage() {
      let tasks = [];
      taskList.querySelectorAll('li').forEach(function (item) {
        tasks.push(item.textContent.replace('Delete', '').trim());
      });
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

      tasks.forEach(createTaskElement);
    }

