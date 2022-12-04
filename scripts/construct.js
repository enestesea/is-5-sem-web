const todoList = document.getElementsByClassName("constructor__todo")[0];
const todoInput = document.getElementsByClassName("constructor__form")[0];
let todoArr = [];


todoInput.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(todoInput);
    let groupname = formData.get("groupname");
    let songname = formData.get("songname");
    if (groupname === "" || songname === ""){
        alert("placeholder all fields");
    }
    else {
        const todo = {
            groupname: groupname,
            songname: songname,
            done: false,
            id: String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now()
        };
        todoArr.push(todo);
        todoInput.reset();
        store(todoArr);
    }
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
    todoArr.splice(0, todoArr.length);
    displayTodoList(todoArr);
}

function displayTodoList(todoArr){
    todoList.innerHTML = '';
    todoArr.forEach(function (todo) {
        const div = document.createElement("div");
        const done = todo.done ? "checked" : null;
        div.setAttribute("class", "todo-list__item");
        div.setAttribute("id", todo.id);
        div.innerHTML = `
            <input type="checkbox" class="checkbox" ${done}>
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

function toggle(id){
    for (let i = 0; i < todoArr.length; i++){
        if (todoArr[i].id === id){
            todoArr[i].done = !todoArr[i].done;
        }
    }
    store(todoArr);
}

getFromStorage();

todoList.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains("delete__button");
    const isCheckBox = event.target.classList.contains("checkbox");
    if (isButton){
        deleteTodo(event.target.parentElement.id);
    }

    if(isCheckBox){
        toggle(event.target.parentElement.id);
    }
})