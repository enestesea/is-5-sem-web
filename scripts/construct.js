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
    store(todoList);
});


function store(listTodo){
    localStorage.setItem("listTodo", listTodo);
}

function getFromStorage(){
    const ref = localStorage.getItem("listTodo");
    if (ref){
        displayTodoList(ref);
    }
}

function clearStorage(){
    localStorage.removeItem("listTodo");
}

getFromStorage();

function displayTodoList(list){

}

function deleteTodo(id){
    newTodoArr = todoArr.filter(function (todo){
        return todo.id !== id;
    });
    store(newTodoArr);
}