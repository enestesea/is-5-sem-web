(function() {
    window.startTime = (new Date()).getTime();
    window.addEventListener('load', function(){
        const loadEl = document.getElementsByClassName("footer__page-load-time")[0];
        if (loadEl) {
            loadEl.innerText = 'Время загрузки сайта: ' + ((new Date).getTime() - window.startTime)/1000 + ' Данилы Зубовых';
        }
    });
})();
