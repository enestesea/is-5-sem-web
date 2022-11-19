const todoList = document.getElementsByClassName("constructor__todo")[0];
const todoInput = document.getElementsByClassName("constructor__form")[0];


todoInput.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(todoInput);
    const groupname = formData.get("groupname");
    const songname = formData.get("songname");
    todoList.append(groupname + songname);
});