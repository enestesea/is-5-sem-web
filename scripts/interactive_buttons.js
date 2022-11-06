const buttons = document.querySelectorAll('button')
addButtonHandlers(buttons);

function addButtonHandlers(buttons){

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', () => {
            buttons[i].style.backgroundColor = "rgb(245,229,230)";
            buttons[i].style.color = 'grey';
        });

        buttons[i].addEventListener('mouseout', () => {
            buttons[i].style.backgroundColor = "rgb(186,174,164, 0.7)";
            buttons[i].style.color = 'black';
        });
    }
}