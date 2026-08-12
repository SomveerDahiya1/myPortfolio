const winConfig = {
    about: {title: 'About Me', icon: '👤', w: 520, h: 360, tpl: 'tpl-about', menu: ['File', 'View', 'Help'], status: 'Properties loaded'},
    skills: {title: 'Skills Explorer', icon: '🛠️', w: 520, h: 380, tpl: 'tpl-skills', menu: ['File', 'View', 'Help'], status: '6 items'},
    projects: {title: 'My Projects', icon: '📁', w: 480, h: 380, tpl: 'tpl-projects', menu: ['File', 'View', 'Help'], status: '4 projects found'},
    experience: {title: 'Experience', icon: '💼', w: 460, h: 360, tpl: 'tpl-experience', menu: ['File', 'View'], status: '3 entries'},
    resume: {title: 'Resume.txt — Notepad', icon: '📄', w: 460, h: 400, tpl: 'tpl-resume', menu: ['File', 'Edit', 'Format', 'Help'], status: ''},
    contact: {title: 'Contact Me', icon: '📧', w: 380, h: 360, tpl: 'tpl-contact', menu: ['File', 'Help'], status: 'Ready'}
};

let zTop = 300;
let activeWin = null;
const openWins = {};