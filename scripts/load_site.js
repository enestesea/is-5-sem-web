window.startTime = (new Date).getTime()
window.onload = function () {
    let pageloadtime = ((new Date).getTime() - window.startTime)/1000;
    document.getElementsByClassName("footer__page-load-time")[0].innerText = 'Время заячгрузки сайта: ' + pageloadtime + ' Данилы Зубовых';
}
