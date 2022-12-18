const accountPage = document.querySelector("#currentShow");
let userList =[];

window.onload
{
    displayAuthorizationForm();
}

function displayAuthorizationForm(){
    accountPage.innerHTML = '';
    const authorizationForm = document.querySelector("#template__authorize-form");
    const authorizationFormItem = authorizationForm.content.cloneNode(true);
    accountPage.append(authorizationFormItem);
    const authorizeInput = document.getElementsByClassName("authorize-form__form")[0];
    authorizeInput.addEventListener("submit", function (e){
        e.preventDefault();
        const formData = new FormData(authorizeInput);
        authorize(formData);
    });
}

function display(data){
    accountPage.innerHTML = '';
    const userTemplate = document.querySelector("#template__account");
    const userItem = userTemplate.content.cloneNode(true);
    userItem.querySelector(".account__username").textContent = "username: " + data[0].username;
    userItem.querySelector(".account__email").textContent = "email: " + data[0].email;
    userItem.querySelector(".company__name").textContent = "company name: " + data[0].company.name;
    userItem.querySelector(".account__phone").textContent = "phone: " + data[0].phone;
    userItem.querySelector(".account__website").textContent = "website: " + data[0].website;
    userItem.querySelector(".company__bs").textContent = "company bs: " + data[0].company.bs;
    userItem.querySelector(".company__catchphrase").textContent = "company catchphrase: " + data[0].company.catchPhrase;
    accountPage.append(userItem);
}

function displayPasswordForm(username){
    accountPage.innerHTML = '';
    const passwordFormTemplate = document.querySelector("#template__password-form");
    const passwordFormItem = passwordFormTemplate.content.cloneNode(true);
    accountPage.append(passwordFormItem);
    const passwordForm = document.getElementsByClassName("password-form__form")[0];
    passwordForm.addEventListener("submit", function (e){
        e.preventDefault();
        const formData = new FormData(passwordForm);
        let password = formData.get("password");
        let confirmPassword = formData.get("confirm-password");
        if (password === confirmPassword){
            save(username, password);
            displayAuthorizationForm();
        }
        else{
            displayFailureForm();
        }
    });
}

function displayFailureForm(){
    accountPage.innerHTML = '';
    const form = document.querySelector("#failure-template");
    const formItem = form.content.cloneNode(true);
    accountPage.append(formItem);
}

async function getData(username) {
    accountPage.innerHTML = '';
    const loaderTemplate = document.querySelector("#loader");
    const loaderItem = loaderTemplate.content.cloneNode(true);
    const loaderGif = loaderItem.querySelector(".loader__image");
    loaderGif.setAttribute("src", "gifs/loader.gif");
    accountPage.append(loaderItem);
    let user;
    await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
            user = data;
        });
    if (user == null || user ===''){
        displayFailureForm();
        return;
    }

    return user;
}

async function authorize(formData) {
    let userName = formData.get("authorize-username");
    let password = formData.get("authorize-password");
    let data = await getData(userName);
    let existence = checkAuthorize(userName, password);
    if (existence === true) {
        display(data);
    }
    else {
        displayPasswordForm(userName);
    }
}

function checkAuthorize(userName, password){
    let exists;
    const ref = localStorage.getItem("userList");
    if (ref){
        let arr = JSON.parse(ref);
        arr.filter(function(user){
            if (user.username === userName && user.password === password)
                exists = true;
        })
    }
    return exists;
}

function save(username, password){
    const user = {
        username: username,
        password: password
    };
    userList.push(user);
    localStorage.setItem("userList", JSON.stringify(userList));
}