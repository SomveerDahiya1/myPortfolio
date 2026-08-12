const bootMessages = [
    'Loading Spring context...',
    'Initializing Hibernate...',
    'Scanning @Components...',
    'Mapping @RestControllers...',
    'Starting embedded Tomcat...',
    'Ready on port 8080!'
];
let bootStep = 0;
function bootStep_() {
    if (bootStep >= bootMessages.length) {
        document.getElementById('boot').classList.add('hide');
        setTimeout(() => {
            document.getElementById('boot').style.display = 'none';
        }, 800);
        return;
    }
    const pct = ((bootStep + 1) / bootMessages.length) * 100;
    document.getElementById('boot-bar').style.width = pct + '%';
    document.getElementById('boot-text').textContent = bootMessages[bootStep];
    bootStep++;
    setTimeout(bootStep_, bootStep === bootMessages.length ? 600 : 450);
}
setTimeout(bootStep_, 600);