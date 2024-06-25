const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const todoText = todoInput.value;
  if (todoText) {
    // Create a new list item
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      todoItem.classList.toggle('completed');
    });

    // Create a span for the todo text
    const span = document.createElement('span');
    span.textContent = todoText;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.addEventListener('click', function() {
      todoList.removeChild(todoItem);
    });

    // Append elements to the list item
    todoItem.appendChild(checkbox);
    todoItem.appendChild(span);
    todoItem.appendChild(deleteButton);

    // Append the list item to the list
    todoList.appendChild(todoItem);

    // Clear the input field
    todoInput.value = '';
  }
});
