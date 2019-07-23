//Define UI vars
let rootNode = document.getElementById('root').addEventListener('click', checkListItems);
let addButton = document.querySelector('.add').addEventListener('click', addTask);
let inputTask = document.getElementById('new-task');
let taskList = document.getElementById('list');
let message = document.querySelector('.message');

//Check elements 
function checkListItems() {
    let listItems = taskList.childNodes;
    const maxNumOfListItems = 10;

    if (listItems.length === maxNumOfListItems) {
        inputTask.disabled = true;
        message.innerHTML = 'The list is full';
    } else {
        inputTask.disabled = false;
        message.innerHTML = '';
    }
}

//Create new element
function createNewElement(task) {
    let listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.setAttribute('draggable', 'true');

    let checkbox = document.createElement('button');
    checkbox.className = 'btn checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';

    let label = document.createElement('label');
    label.innerHTML = task;

    let input = document.createElement('input');
    input.type = 'text';

    let editButton = document.createElement('button');
    editButton.className = 'btn edit';
    editButton.innerHTML = '<i class="material-icons">edit</i>';

    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn delete';
    deleteButton.innerHTML = '<i class="material-icons">delete</i>';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    listItem.addEventListener('dragstart', dragStart);
    listItem.addEventListener('dragover', dragOver);
    listItem.addEventListener('drop', dragDrop);
    listItem.addEventListener('dragend', dragEnd);

    return listItem;
}

//Add task 
function addTask() {
    if (inputTask.value) {
        let listItem = createNewElement(inputTask.value);

        taskList.appendChild(listItem);
        bindTaskEvents(listItem);
        inputTask.value = '';
    }
}

//Finish task
function finishTask() {
    let listItem = this.parentNode;
    let checkbox = listItem.querySelector('button.checkbox');
    let label = listItem.querySelector('label');
    let editButton = listItem.querySelector('button.edit');

    checkbox.className = 'btn checkbox';
    checkbox.innerHTML = '<i class="material-icons">check_box</i>';
    label.className = 'strikethrough';
    editButton.disabled = true;
}

//Edit task
function editTask() {
    let listItem = this.parentNode;
    let editButton = this;
    let label = listItem.querySelector('label');
    let input = listItem.querySelector('input[type="text"]');
    let containsClass = listItem.classList.contains('edit-mode');

    if (containsClass) {
        label.innerHTML = input.value;
        editButton.className = 'btn edit';
        editButton.innerHTML = '<i class="material-icons">edit</i>';
    } else {
        input.value = label.innerText;
        editButton.className = 'btn save';
        editButton.innerHTML = '<i class="material-icons">save</i>';
    }

    listItem.classList.toggle('edit-mode');
}

//Delete task 
function deleteTask() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;

    ul.removeChild(listItem);
}

//Bind task events 
function bindTaskEvents(listItem) {
    let checkbox = listItem.querySelector('button.checkbox');
    let editButton = listItem.querySelector('button.edit');
    let deleteButton = listItem.querySelector('button.delete');

    checkbox.onclick = finishTask;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
}

//Drag functions 
let dragSrcEl = null;

function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);

    dragSrcEl = this;

    this.style.opacity = '0.3';
}

function dragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
}

function dragDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

function dragEnd() {
    this.style.opacity = '1';
}