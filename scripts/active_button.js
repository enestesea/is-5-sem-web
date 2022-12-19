window.onload
{
    let arr = document.querySelectorAll('.menu > *');
    let button;
    for (let i = 0; i < arr.length; i++){
        if (window.location.href === arr[i].href){
            button = arr[i];
        }
    }

    if (button != null) {
        button.style.borderLeft = '3px solid black';
        button.style.borderBottom = '3px solid black';
        button.style.background = "rgb(245,229,230)";
        button.style.color = 'grey';
        button.disabled = true;
    }
}