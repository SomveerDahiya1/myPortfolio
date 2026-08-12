function addTaskBtn(id, cfg) {
    const tb = document.getElementById('taskbar-tasks');
    const btn = document.createElement('div');
    btn.className = 'task-btn active';
    btn.dataset.id = id;
    btn.innerHTML = `<span class="ticon">${cfg.icon}</span><span>${cfg.title}</span>`;
    btn.onclick = () => {
        if (activeWin === id && openWins[id] && openWins[id].style.display !== 'none') {
            minWin(id);
        } else {
            focusWin(id);
        }
    };
    tb.appendChild(btn);
}

function removeTaskBtn(id) {
    const btn = document.querySelector(`.task-btn[data-id="${id}"]`);
    if (btn) {
        btn.remove();
    }
}

function makeDraggable(win, handle) {
    let mx, my, ox, oy, dragging = false;
    handle.addEventListener('mousedown', e => {
        if (e.target.classList.contains('wc-btn')) {
            return;
        }
        dragging = true;
        mx = e.clientX;
        my = e.clientY;
        ox = win.offsetLeft;
        oy = win.offsetTop;
        setActiveWin(win.id.replace('win-', ''));
        e.preventDefault();
    });
    document.addEventListener('mousemove', e => {
        if (!dragging) {
            return;
        }
        win.style.left = (ox + e.clientX - mx) + 'px';
        win.style.top = Math.max(0, oy + e.clientY - my) + 'px';
    });
    document.addEventListener('mouseup', () => dragging = false);
    win.addEventListener('mousedown', () => setActiveWin(win.id.replace('win-', '')));
}

function showSkillSection(id) {
    document.querySelectorAll('.skill-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.tree-item').forEach(t => t.classList.remove('active'));
    const sec = document.getElementById('section-' + id);
    if (sec) {
        sec.style.display = 'block';
    }
    event.currentTarget.classList.add('active');
}

function toggleProj(header) {
    const body = header.nextElementSibling;
    body.classList.toggle('open');
}

document.getElementById('desktop-icons').addEventListener('click', e => {
    document.querySelectorAll('.dicon').forEach(d => d.classList.remove('selected'));
    const icon = e.target.closest('.dicon');
    if (icon) {
        icon.classList.add('selected');
    }
});

document.getElementById('desktop').addEventListener('click', e => {
    if (!e.target.closest('.dicon')) {
        document.querySelectorAll('.dicon').forEach(d => d.classList.remove('selected'));
    }
});