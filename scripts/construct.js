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

todoList.addEventListener("click", function(event){
    if (event.classList.contains("delete__button)")){
        deleteTodo(event.target.parentElement.getAttribute("id"));
    }
})


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
        const done = todo.done ? 'checked' : null;
        // if (todo.done === true){
        //     div.classList.add(".done__todo");
        // }
        div.setAttribute("id", todo.id);
        div.innerHTML = `
            <input type="checkbox" class="checkbox_${todo.id}">
            ${todo.groupname} ${todo.songname}
            <button class="delete__button"">Delete</button>
        `;
        todoList.append(div);
    })
}

function deleteTodo(id){
    let newTodoArr = todoArr.filter(function (todo){
        return todo.id !== id;
    });
    store(newTodoArr);
}

getFromStorage();