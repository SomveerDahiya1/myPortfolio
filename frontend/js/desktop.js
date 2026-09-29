const desktopIcons = document.querySelectorAll('.dicon');
desktopIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        desktopIcons.forEach(item => item.classList.remove('selected'));
        this.classList.add('selected');
        if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
            openWin(this.dataset.win);
        }
    });
});
document.addEventListener('click', function (e) {
    if (!e.target.closest('.dicon')) {
        desktopIcons.forEach(icon => icon.classList.remove('selected'));
    }
});