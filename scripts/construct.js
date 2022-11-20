const todoList = document.getElementsByClassName("constructor__todo")[0];
const todoInput = document.getElementsByClassName("constructor__form")[0];
let todoArr = [];


todoInput.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(todoInput);
    const todo = {
        groupname: formData.get("groupname"),
        songname: formData.get("songname"),
        done: false,
        id: String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now()
    };
    todoArr.push(todo);
    todoInput.reset();
    store(todoArr);
});

function store(todoArr){
    localStorage.setItem("listTodo", JSON.stringify(todoArr));
    displayTodoList(todoArr);
}

function getFromStorage(){
    const ref = localStorage.getItem("listTodo");
    if (ref){
        todoArr = JSON.parse(ref);
        displayTodoList(todoArr);
    }
}

function clearStorage(){
    localStorage.removeItem("listTodo");
}

function displayTodoList(todoArr){
    todoList.innerHTML = '';
    todoArr.forEach(function (todo) {
        const div = document.createElement("div");
        div.setAttribute("class", "todo-list__item")
        const done = todo.done ? 'checked' : null;
        div.setAttribute("id", todo.id);
        div.innerHTML = `
            <input type="checkbox" class="checkbox ${todo.id}">
            ${todo.groupname} ${todo.songname}
            <button class="delete__button">Delete</button>
        `;
        todoList.append(div);
    })
}

function deleteTodo(id){
    todoArr = todoArr.filter(function (todo) {
        return todo.id !== id;
    });
    store(todoArr);
}

getFromStorage();
clearStorage();
todoList.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains("delete__button");
    if (isButton){
        deleteTodo(event.target.parentElement.id);
    }
})