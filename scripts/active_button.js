window.onload
{
    let loc = window.location.href
    let cur_url = '/' + loc.split('/').pop();
    let button;
    if (cur_url === "/index.html") {
        button = document.getElementsByClassName("menu__home");
    }
    if (cur_url === "/hollywood.html") {
        button = document.getElementsByClassName("menu__hollywood");
    }
    if (cur_url === "/quotes.html") {
        button = document.getElementsByClassName("menu__quotes");
    }

    if (button != null) {
        for (let i = 0; i < button.length; i++) {
            button[i].style.borderLeft = '3px solid black';
            button[i].style.borderBottom = '3px solid black';
            button[i].style.background = "rgb(245,229,230)";
            button[i].style.color = 'grey';
            button[i].disabled = true;
        }
    }
}