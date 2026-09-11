function openWin(id) {
    if (openWins[id]) {
        focusWin(id);
        return;
    }
    const cfg = winConfig[id];
    const tpl = document.getElementById(cfg.tpl);
    const win = document.createElement('div');
    win.className = 'win active';
    win.id = 'win-' + id;
    const desktop = document.getElementById('desktop');
    const left = (desktop.clientWidth - cfg.w) / 2;
    const top = (desktop.clientHeight - 30 - cfg.h) / 2;
    win.style.cssText = `width:${cfg.w}px;height:${cfg.h}px;left:${left}px;top:${top}px;z-index:${++zTop}`;
    const menuHTML = cfg.menu.map(m => `<span class="win-menu-item">${m}</span>`).join('');
    win.innerHTML = `
<div class="win-titlebar">
    <span class="win-icon">${cfg.icon}</span>
<span class="win-title">${cfg.title}</span>
<div class="win-controls">
    <div class="wc-btn wc-min" onclick="minWin('${id}')">_</div>
    <div class="wc-btn wc-max" onclick="maxWin('${id}')">□</div>
    <div class="wc-btn wc-cls" onclick="closeWin('${id}')">✕</div>
</div>
</div>
<div class="win-menubar">${menuHTML}</div>
<div class="win-content" id="wc-${id}"></div>
${cfg.status ? `<div class="win-statusbar">${cfg.status}</div>` : ''}
`;
    document.getElementById('desktop').appendChild(win);
    document.getElementById('wc-' + id).appendChild(tpl.content.cloneNode(true));
    makeDraggable(win, win.querySelector('.win-titlebar'));
    openWins[id] = win;
    addTaskBtn(id, cfg);
    setActiveWin(id);
}

function closeWin(id) {
    const w = openWins[id];
    if (!w) return;
    w.remove();
    delete openWins[id];
    removeTaskBtn(id);
    if (activeWin === id) activeWin = null;
}

let minimized = {};

function minWin(id) {
    const w = openWins[id];
    if (!w) return;
    w.style.display = 'none';
    minimized[id] = true;
    const tb = document.querySelector(`.task-btn[data-id="${id}"]`);
    if (tb) tb.classList.remove('active');
}

function maxWin(id) {
    const w = openWins[id];
    if (!w) return;
    if (w._maxed) {
        Object.assign(w.style, w._prev);
        w._maxed = false;
    } else {
        w._prev = {
            left: w.style.left,
            top: w.style.top,
            width: w.style.width,
            height: w.style.height
        };
        Object.assign(w.style, {
            left: '0',
            top: '0',
            width: '100vw',
            height: 'calc(100vh - 30px)'
        });
        w._maxed = true;
    }
}

function focusWin(id) {
    const w = openWins[id];
    if (!w) return;
    if (minimized[id]) {
        w.style.display = 'flex';
        delete minimized[id];
    }
    setActiveWin(id);
}

function setActiveWin(id) {
    if (activeWin && openWins[activeWin]) {
        openWins[activeWin].classList.remove('active');
        openWins[activeWin].classList.add('inactive');
        const prevTb = document.querySelector(`.task-btn[data-id="${activeWin}"]`);
        if (prevTb) prevTb.classList.remove('active');
    }
    activeWin = id;
    const w = openWins[id];
    if (!w) return;
    w.classList.add('active');
    w.classList.remove('inactive');
    w.style.zIndex = ++zTop;
    const tb = document.querySelector(`.task-btn[data-id="${id}"]`);
    if (tb) tb.classList.add('active');
}

