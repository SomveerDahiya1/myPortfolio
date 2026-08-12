function updateClock() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    document.getElementById('clock').textContent = h + ':' + (m < 10 ? '0' : '') + m + ' ' + ampm;
}
updateClock();
setInterval(updateClock, 10000);

let startOpen = false;
function toggleStart() {
    startOpen = !startOpen;
    document.getElementById('start-menu').classList.toggle('show', startOpen);
}
document.addEventListener('click', e => {
    if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
        if (startOpen) {
            toggleStart();
        }
    }
});