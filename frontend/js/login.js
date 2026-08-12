document.getElementById('login-user').addEventListener('click', () => {
    const login = document.getElementById('login');
    login.classList.add('hide');
    setTimeout(() => {
        login.style.display = 'none';
        const desk = document.getElementById('desktop');
        desk.classList.add('show');
        const notif = document.getElementById('notif');
        notif.style.display = 'block';
        setTimeout(() => notif.style.display = 'none', 4000);
        setTimeout(() => openWin('about'), 600);
    }, 600);
});