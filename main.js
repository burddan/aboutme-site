// === BOOT SCREEN ===
const BOOT_LINES = [
  { text: 'GRUB version 2.12', delay: 0 },
  { text: 'Loading Linux 6.19.11-gentoo ...', delay: 120 },
  { text: 'Loading initial ramdisk ...', delay: 200 },
  { text: '', delay: 100 },
  { text: '[<span class="boot-dim">    0.000000</span>] Linux version 6.19.11-gentoo (gcc 14.2.1) #1 SMP', delay: 80 },
  { text: '[<span class="boot-dim">    0.000000</span>] Command line: BOOT_IMAGE=/vmlinuz-6.19.11 root=/dev/sda1 quiet', delay: 60 },
  { text: '[<span class="boot-dim">    0.000000</span>] BIOS-provided physical RAM map:', delay: 60 },
  { text: '[<span class="boot-dim">    0.000000</span>] ACPI: RSDP 0x00000000000F0490 000024 (v02 BOCHS)', delay: 60 },
  { text: '[<span class="boot-dim">    0.214301</span>] PCI: Using configuration type 1 for base access', delay: 80 },
  { text: '[<span class="boot-dim">    0.301882</span>] clocksource: tsc-early: mask: 0xffffffffffffffff', delay: 60 },
  { text: '[<span class="boot-dim">    0.512104</span>] NET: Registered PF_INET6 protocol family', delay: 60 },
  { text: '[<span class="boot-dim">    0.623419</span>] SCSI subsystem initialized', delay: 60 },
  { text: '[<span class="boot-dim">    0.788203</span>] xhci_hcd: xHCI Host Controller', delay: 80 },
  { text: '[<span class="boot-dim">    1.002841</span>] EXT4-fs (sda1): mounted filesystem', delay: 100 },
  { text: '', delay: 80 },
  { text: '<span class="boot-start">[  OK  ]</span> Started udev Kernel Device Manager.', delay: 120 },
  { text: '<span class="boot-start">[  OK  ]</span> Started Load Kernel Modules.', delay: 100 },
  { text: '<span class="boot-start">[  OK  ]</span> Reached target System Initialization.', delay: 100 },
  { text: '<span class="boot-start">[  OK  ]</span> Started D-Bus System Message Bus.', delay: 120 },
  { text: '<span class="boot-warn">[ WARN ]</span> Starting Network Manager...', delay: 100 },
  { text: '<span class="boot-start">[  OK  ]</span> Finished Network Manager.', delay: 200 },
  { text: '<span class="boot-start">[  OK  ]</span> Started OpenRC service supervisor.', delay: 100 },
  { text: '<span class="boot-start">[  OK  ]</span> Reached target Graphical Interface.', delay: 120 },
  { text: '', delay: 80 },
  { text: 'Gentoo Linux (6.19.11-gentoo) (tty1)', delay: 200 },
  { text: '', delay: 100 },
  { text: 'gentoo login: <span class="boot-ok">burddan</span>', delay: 300 },
  { text: 'Password:', delay: 400 },
  { text: '', delay: 300 },
  { text: 'Last login: ' + new Date().toDateString(), delay: 200 },
  { text: '', delay: 100 },
];

function runBoot() {
  const screen = document.getElementById('boot-screen');
  const output = document.getElementById('boot-output');
  if (!screen) return;

  let i = 0;
  let total = 0;

  BOOT_LINES.forEach((line, idx) => {
    total += line.delay + 40;
    setTimeout(() => {
      const div = document.createElement('div');
      div.innerHTML = line.text;
      output.appendChild(div);
    }, total);
  });

  setTimeout(() => {
    screen.classList.add('boot-fadeout');
    setTimeout(() => screen.remove(), 900);
  }, total + 400);
}

runBoot();

// === TERMINAL FOCUS ===
let focusedTerminal = null;

function setFocusedTerminal(terminal) {
  focusedTerminal = terminal;
}

// === COMMANDS ===
const COMMANDS = {
  help() {
    return `
<div class="cmd-output">
<div class="cmd-row"><span class="nf-key">aboutme</span>   — who am i</div>
<div class="cmd-row"><span class="nf-key">projects</span>  — my projects</div>
<div class="cmd-row"><span class="nf-key">contact</span>   — get in touch</div>
<div class="cmd-row"><span class="nf-key">supportme</span> — support my work</div>
<div class="cmd-row"><span class="nf-key">help</span>      — show this message</div>
<div class="cmd-row"><span class="nf-key">clear</span>     — clear terminal</div>
</div>`;
  },
  aboutme() {
    return `
<div class="aboutme-output">
<div class="aboutme-line"> </div>
<div class="aboutme-line"><span class="nf-label">Hi, I'm João Vitor.</span></div>
<div class="aboutme-line"> </div>
<div class="aboutme-line">I'm a developer with a strong interest in backend development,</div>
<div class="aboutme-line">Linux systems, and low-level programming.</div>
<div class="aboutme-line">I have experience working with <span class="nf-key">C/C++</span>, <span class="nf-key">APIs</span>, <span class="nf-key">Docker</span>, and <span class="nf-key">CI/CD</span> workflows.</div>
<div class="aboutme-line"> </div>
<div class="aboutme-line">I enjoy building practical projects that combine performance,</div>
<div class="aboutme-line">automation, and clean architecture.</div>
<div class="aboutme-line">Currently focused on improving my skills in <span class="nf-key">DevOps</span> and scalable system design.</div>
<div class="aboutme-line"> </div>
<div class="aboutme-line">I'm always learning and looking for opportunities to grow as a developer.</div>
<div class="aboutme-line"> </div>
</div>`;
  },
  projects() {
    return `<div class="cmd-output"><div class="cmd-row"><span class="nf-key">—</span> coming soon</div></div>`;
  },
  contact() {
    return `<div class="cmd-output"><div class="cmd-row"><span class="nf-key">—</span> coming soon</div></div>`;
  },
  supportme() {
    return `<div class="cmd-output"><div class="cmd-row"><span class="nf-key">—</span> coming soon</div></div>`;
  },
};

function executeCommand(terminal, cmd) {
  const trimmed = cmd.trim().toLowerCase();

  if (trimmed === 'clear') {
    terminal.innerHTML = '';
    appendInteractivePrompt(terminal);
    return;
  }

  if (trimmed === '') {
    appendInteractivePrompt(terminal);
    return;
  }

  const output = document.createElement('div');

  if (COMMANDS[trimmed]) {
    output.innerHTML = COMMANDS[trimmed]();
  } else {
    output.innerHTML = `<div class="cmd-output"><div class="cmd-row cmd-error">bash: ${trimmed}: command not found</div></div>`;
  }

  terminal.appendChild(output);
  appendInteractivePrompt(terminal);
}

function appendInteractivePrompt(terminal) {
  const line = document.createElement('div');
  line.className = 'terminal-line terminal-active-prompt';
  line.innerHTML = `<span class="prompt">burddan@arch ~$ </span><span class="terminal-input-text"></span><span class="blink">█</span>`;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
  setFocusedTerminal(terminal);
}

// === DRAGGABLE WINDOW ===
function makeDraggable(win) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;
  let isTiled = false;
  let savedStyle = {};

  win.addEventListener('click', () => {
    const terminal = win.querySelector('.terminal');
    if (terminal) setFocusedTerminal(terminal);
  });

  win.addEventListener('dblclick', () => {
    if (!isTiled) {
      const rect = win.getBoundingClientRect();
      savedStyle = {
        top:    win.style.top    || `${rect.top}px`,
        left:   win.style.left   || `${rect.left}px`,
        width:  win.style.width  || `${rect.width}px`,
        minHeight: win.style.minHeight,
      };
      win.style.transition = 'all 0.3s ease';
      win.style.top    = '8px';
      win.style.left   = '8px';
      win.style.width  = 'calc(100% - 16px)';
      win.style.minHeight = 'calc(100% - 16px)';
      isTiled = true;
    } else {
      win.style.transition = 'all 0.3s ease';
      win.style.top    = savedStyle.top;
      win.style.left   = savedStyle.left;
      win.style.width  = savedStyle.width;
      win.style.minHeight = savedStyle.minHeight;
      isTiled = false;
    }
  });

  win.addEventListener('mousedown', (e) => {
    if (isTiled) return;
    isDragging = true;
    offsetX = e.clientX - win.getBoundingClientRect().left;
    offsetY = e.clientY - win.getBoundingClientRect().top;
    win.style.transition = 'none';
    bringToFront(win);
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    win.style.left = `${e.clientX - offsetX}px`;
    win.style.top  = `${e.clientY - offsetY}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

function bringToFront(win) {
  document.querySelectorAll('.window').forEach(w => w.style.zIndex = 10);
  win.style.zIndex = 20;
}

function closeWindow(id) {
  const win = document.getElementById(id);
  if (win) win.style.display = 'none';
}

// === TYPED.JS TERMINAL ===
function initTerminal() {
  new Typed('#typed-output', {
    strings: ['aboutme'],
    typeSpeed: 80,
    startDelay: 600,
    showCursor: true,
    cursorChar: '█',
    onComplete(self) {
      self.cursor.remove();
      appendAboutMe();
    },
  });
}

function appendAboutMe() {
  const terminal = document.querySelector('.terminal');
  const output = document.createElement('div');
  output.innerHTML = COMMANDS.aboutme();
  terminal.appendChild(output);
  appendInteractivePrompt(terminal);
}

// === DWM BAR DATE ===
function updateDate() {
  const el = document.getElementById('bar-date');
  if (!el) return;
  const now = new Date();
  const days   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day  = days[now.getDay()];
  const mon  = months[now.getMonth()];
  const date = String(now.getDate()).padStart(2, '0');
  const h    = String(now.getHours()).padStart(2, '0');
  const m    = String(now.getMinutes()).padStart(2, '0');
  const s    = String(now.getSeconds()).padStart(2, '0');
  el.innerHTML = `<span class="tag-icon">&#xF017;</span> ${day} ${mon} ${date} ${h}:${m}:${s}`;
}

updateDate();
setInterval(updateDate, 1000);

// === WORKSPACES ===
function initWorkspaces() {
  const tags = document.querySelectorAll('.tag[data-ws]');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      const ws = tag.dataset.ws;
      const title = tag.dataset.title;

      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      document.querySelectorAll('.workspace').forEach(w => w.classList.remove('active'));
      document.getElementById(`ws-${ws}`).classList.add('active');

      document.getElementById('bar-title').innerHTML = `${title} <span class="bar-title-jp">${tag.dataset.jp}</span>`;
    });
  });
}

// === SPAWN TERMINAL ===
let termCount = 0;

function spawnTerminal() {
  const ws = document.querySelector('.workspace.active');
  if (!ws) return;

  termCount++;
  const offset = termCount * 24;

  const win = document.createElement('div');
  win.className = 'window';
  win.style.top  = `${60 + offset}px`;
  win.style.left = `${80 + offset}px`;

  const id = `typed-output-${termCount}`;
  win.innerHTML = `
    <div class="window-body">
      <div class="terminal">
        <div class="terminal-line">
          <span class="prompt">burddan@arch ~$ </span><span id="${id}"></span>
        </div>
      </div>
    </div>`;

  ws.appendChild(win);
  makeDraggable(win);

  new Typed(`#${id}`, {
    strings: ['fastfetch'],
    typeSpeed: 80,
    startDelay: 200,
    showCursor: true,
    cursorChar: '█',
    onComplete(self) {
      self.cursor.remove();
      appendFastfetch(win.querySelector('.terminal'));
    },
  });
}

function appendFastfetch(terminal) {
  const output = document.createElement('div');
  output.className = 'fastfetch-output';
  output.innerHTML = `
<div class="fastfetch-wrap">
  <pre class="fastfetch-logo"><span class="ff-green">          .vir.
       .d$$$$$$$$$$b.
     .d$$$$$$$$$$$$$$$b.
    d$$$$$$$$$$$$$$$$$$$$b
   d$$$$$$$$$$$$$$$$$$$$$$b
  d$$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$$$$$$
  $$$$$$$$$$$$$$$$$$$$$$$$$
   $$$$$$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$
     "$$$$$$$$$$$$$$$$$$"
       "$$$$$$$$$$$$$$"
          "$$$$$$$$$"</span></pre>
  <div class="fastfetch-info">
    <div class="ff-user"><span class="ff-accent">burddan</span><span class="ff-dim">@</span><span class="ff-accent">gentoo</span></div>
    <div class="ff-sep">─────────────────</div>
    <div class="ff-row"><span class="ff-key"><span class="tag-icon">󰣇</span> OS</span><span class="ff-val">Gentoo Linux</span></div>
    <div class="ff-row"><span class="ff-key"><span class="tag-icon">󰌽</span> Kernel</span><span class="ff-val">Linux 6.19</span></div>
    <div class="ff-row"><span class="ff-key"><span class="tag-icon">󰖯</span> WM</span><span class="ff-val">dwm</span></div>
    <div class="ff-sep" style="margin-top:6px">─────────────────</div>
    <div class="ff-row" style="margin-top:2px"><span class="ff-dim">type</span> <span class="nf-key">help</span> <span class="ff-dim">for available commands</span></div>
  </div>
</div>`;
  terminal.appendChild(output);
  appendInteractivePrompt(terminal);
}

// === KEYBOARD INPUT ===
document.addEventListener('keydown', (e) => {
  // spawn / close terminal
  if (e.key === 'q' && !focusedTerminal) { spawnTerminal(); return; }
  if (e.key === 'w' && !focusedTerminal) {
    const ws = document.querySelector('.workspace.active');
    if (!ws) return;
    const windows = ws.querySelectorAll('.window');
    if (windows.length > 0) windows[windows.length - 1].remove();
    return;
  }

  // interactive input
  if (!focusedTerminal) return;

  const promptEl = focusedTerminal.querySelector('.terminal-active-prompt');
  if (!promptEl) return;

  const inputText = promptEl.querySelector('.terminal-input-text');

  if (e.key === 'Enter') {
    const cmd = inputText.textContent;
    promptEl.classList.remove('terminal-active-prompt');
    promptEl.querySelector('.blink').remove();
    executeCommand(focusedTerminal, cmd);
    e.preventDefault();
  } else if (e.key === 'Backspace') {
    inputText.textContent = inputText.textContent.slice(0, -1);
    e.preventDefault();
  } else if (e.key.length === 1) {
    inputText.textContent += e.key;
    e.preventDefault();
  }
});

// clicking desktop defocuses terminal
document.querySelector('.desktop').addEventListener('click', (e) => {
  if (!e.target.closest('.window')) focusedTerminal = null;
});

// === INIT ===
document.querySelectorAll('.window').forEach(makeDraggable);
initWorkspaces();
initTerminal();
