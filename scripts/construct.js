const todoList = document.getElementsByClassName("constructor__todo")[0];
const todoInput = document.getElementsByClassName("constructor__form")[0];
let todoArr = [];


todoInput.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(todoInput);
    let todo = {
        groupname: formData.get("groupname"),
        songname: formData.get("songname")
    };
    todoArr.push(todo);
    Store(todoList);
});


function Store(listTodo){
    localStorage.setItem("listTodo", listTodo);
}