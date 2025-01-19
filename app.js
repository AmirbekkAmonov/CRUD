const form = document.getElementById('form');
const input = document.getElementById('input');
const todoList = document.getElementById('todo-list');

const todos = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() !== '') { 
        createTodo(input.value);
        input.value = ''; 
    }
});



function createTodo(todo) {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input'); 
    const task = document.createElement('div');
    const buttonEdit = document.createElement('button');
    const buttonDelete = document.createElement('button');
    const actions = document.createElement('div');

    const todoObj = {
        todo: todo,
        checked: false
    };
    todos.push(todoObj);

    li.addEventListener('click', () => {
        li.classList.toggle('show');
        checkbox.checked = !checkbox.checked;
        todoObj.checked = checkbox.checked;
    });

    buttonEdit.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const newTodo = prompt('Vazifani tahrir qiling:', todoObj.todo);
        if (newTodo !== null && newTodo.trim() !== '') {
            todoObj.todo = newTodo;
            label.innerHTML = newTodo;
        }
    });

    buttonDelete.addEventListener('click', (e) => {
        e.stopPropagation(); 
        todoList.removeChild(li);
        const index = todos.indexOf(todoObj);
        if (index !== -1) {
            todos.splice(index, 1);
            
        }
    });

    checkbox.type = 'checkbox';
    label.innerHTML = todo;

    buttonEdit.innerHTML = 'Edit';
    buttonEdit.className = 'edit';
    buttonDelete.innerHTML = 'Delete';
    buttonDelete.className = 'delete';

    task.className = 'task';
    actions.className = 'actions';

    task.append(checkbox, label);
    actions.append(buttonEdit, buttonDelete);
    li.append(task, actions);
    todoList.appendChild(li);

    
}

