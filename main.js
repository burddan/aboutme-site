// === BOOT SCREEN ===
const BOOT_LINES = [
  { text: 'GRUB version 2.12', delay: 0 },
  { text: 'Loading Linux 6.19.11-gentoo1-1 ...', delay: 120 },
  { text: 'Loading initial ramdisk ...', delay: 200 },
  { text: '', delay: 60 },
  // — kernel dmesg: rápido —
  { text: '[<span class="boot-dim">    0.633375</span>] Segment Routing with IPv6', delay: 20 },
  { text: '[<span class="boot-dim">    0.633377</span>] RPL Segment Routing with IPv6', delay: 18 },
  { text: '[<span class="boot-dim">    0.633384</span>] In-situ OAM (IOAM) with IPv6', delay: 18 },
  { text: '[<span class="boot-dim">    0.633403</span>] NET: Registered PF_PACKET protocol family', delay: 18 },
  { text: '[<span class="boot-dim">    0.633609</span>] ehci-pci 0000:00:1a.0: USB 2.0 started, EHCI 1.00', delay: 20 },
  { text: '[<span class="boot-dim">    0.633697</span>] usb usb3: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 6.19', delay: 18 },
  { text: '[<span class="boot-dim">    0.633703</span>] usb usb3: New USB device strings: Mfr=3, Product=2, SerialNumber=1', delay: 18 },
  { text: '[<span class="boot-dim">    0.633707</span>] usb usb3: Product: EHCI Host Controller', delay: 18 },
  { text: '[<span class="boot-dim">    0.633710</span>] usb usb3: Manufacturer: Linux 6.19.11-gentoo ehci_hcd', delay: 18 },
  { text: '[<span class="boot-dim">    0.633713</span>] usb usb3: SerialNumber: 0000:00:1a.0', delay: 18 },
  { text: '[<span class="boot-dim">    0.633940</span>] hub 3-0:1.0: USB hub found', delay: 18 },
  { text: '[<span class="boot-dim">    0.633954</span>] hub 3-0:1.0: 2 ports detected', delay: 18 },
  { text: '[<span class="boot-dim">    0.634338</span>] ehci-pci 0000:00:1d.0: EHCI Host Controller', delay: 18 },
  { text: '[<span class="boot-dim">    0.634349</span>] ehci-pci 0000:00:1d.0: new USB bus registered, assigned bus number 4', delay: 18 },
  { text: '[<span class="boot-dim">    0.634363</span>] ehci-pci 0000:00:1d.0: debug port 2', delay: 18 },
  { text: '[<span class="boot-dim">    0.637598</span>] ENERGY_PERF_BIAS: Set to \'normal\', was \'performance\'', delay: 20 },
  { text: '[<span class="boot-dim">    0.638272</span>] ehci-pci 0000:00:1d.0: irq 18, io mem 0xfc000000', delay: 18 },
  { text: '[<span class="boot-dim">    0.638512</span>] microcode: Current revision: 0x00000061', delay: 18 },
  { text: '[<span class="boot-dim">    0.638514</span>] microcode: Updated early from: 0x00000052', delay: 18 },
  { text: '[<span class="boot-dim">    0.640378</span>] resctrl: L3 monitoring detected', delay: 18 },
  { text: '[<span class="boot-dim">    0.640410</span>] IPI shorthand broadcast: enabled', delay: 18 },
  { text: '[<span class="boot-dim">    0.642976</span>] sched_clock: Marking stable (641001604, 1592133)->(1169665030, -527071293)', delay: 18 },
  { text: '[<span class="boot-dim">    0.643272</span>] registered taskstats version 1', delay: 18 },
  { text: '[<span class="boot-dim">    0.643607</span>] ehci-pci 0000:00:1d.0: USB 2.0 started, EHCI 1.00', delay: 18 },
  { text: '[<span class="boot-dim">    0.643672</span>] usb usb4: New USB device found, idVendor=1d6b, idProduct=0002, bcdDevice= 6.19', delay: 18 },
  { text: '[<span class="boot-dim">    0.643676</span>] usb usb4: New USB device strings: Mfr=3, Product=2, SerialNumber=1', delay: 18 },
  { text: '[<span class="boot-dim">    0.643677</span>] usb usb4: Product: EHCI Host Controller', delay: 18 },
  { text: '[<span class="boot-dim">    0.643679</span>] usb usb4: Manufacturer: Linux 6.19.11-gentoo ehci_hcd', delay: 18 },
  { text: '[<span class="boot-dim">    0.643681</span>] usb usb4: SerialNumber: 0000:00:1d.0', delay: 18 },
  { text: '[<span class="boot-dim">    0.643838</span>] hub 4-0:1.0: USB hub found', delay: 18 },
  { text: '[<span class="boot-dim">    0.643852</span>] hub 4-0:1.0: 2 ports detected', delay: 18 },
  { text: '[<span class="boot-dim">    0.644207</span>] Loading compiled-in X.509 certificates', delay: 60 },
  { text: '', delay: 60 },
  // — systemd: mais lento —
  { text: '<span class="boot-start">[  OK  ]</span> Started udev Kernel Device Manager.', delay: 180 },
  { text: '<span class="boot-start">[  OK  ]</span> Started Load Kernel Modules.', delay: 160 },
  { text: '<span class="boot-start">[  OK  ]</span> Reached target System Initialization.', delay: 160 },
  { text: '<span class="boot-start">[  OK  ]</span> Started D-Bus System Message Bus.', delay: 180 },
  { text: '<span class="boot-warn">[ WARN ]</span> Starting Network Manager...', delay: 160 },
  { text: '<span class="boot-start">[  OK  ]</span> Finished Network Manager.', delay: 300 },
  { text: '<span class="boot-start">[  OK  ]</span> Started OpenRC service supervisor.', delay: 180 },
  { text: '<span class="boot-start">[  OK  ]</span> Reached target Graphical Interface.', delay: 200 },
  { text: '', delay: 100 },
  { text: 'Gentoo Linux (6.19.11-gentoo1-1) (tty1)', delay: 250 },
  { text: '', delay: 100 },
  { text: 'gentoo login: <span class="boot-ok">burddan</span>', delay: 350 },
  { text: 'Password:', delay: 450 },
  { text: '', delay: 350 },
  { text: 'Last login: ' + new Date().toDateString(), delay: 200 },
  { text: '', delay: 100 },
  { text: 'burddan@thinkpad ~ $ startx', delay: 400, s: 0.2 },
  { text: '', delay: 80, s: 0.2 },
  { text: 'X.Org X Server 21.1.8', delay: 30, s: 0.2 },
  { text: 'X Protocol Version 11, Revision 0', delay: 18, s: 0.2 },
  { text: 'Current Operating System: Gentoo Linux', delay: 18, s: 0.2 },
  { text: 'Kernel command line: BOOT_IMAGE=/vmlinuz root=/dev/nvme0n1p3 quiet', delay: 18, s: 0.2 },
  { text: '', delay: 18, s: 0.2 },
  { text: 'Build Date: 12 March 2025  02:14:32PM', delay: 18, s: 0.2 },
  { text: '', delay: 18, s: 0.2 },
  { text: 'Current version of pixman: 0.42.2', delay: 18, s: 0.2 },
  { text: '    Before reporting problems, check https://wiki.x.org', delay: 18, s: 0.2 },
  { text: '    to make sure that you have the latest version.', delay: 18, s: 0.2 },
  { text: '', delay: 18, s: 0.2 },
  { text: 'Markers: (--) probed, (**) from config file, (==) default setting,', delay: 18, s: 0.2 },
  { text: '         (++) from command line, (!!) notice, (II) informational,', delay: 18, s: 0.2 },
  { text: '         (WW) warning, (EE) error, (NI) not implemented, (??) unknown.', delay: 18, s: 0.2 },
  { text: '', delay: 18, s: 0.2 },
  { text: '(==) Log file: "/home/burddan/.local/share/xorg/Xorg.0.log", Time: ' + new Date().toLocaleString('en-US', {weekday:'short', month:'short', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit', year:'numeric', hour12:false}), delay: 18, s: 0.2 },
  { text: '(==) Using config directory: "/etc/X11/xorg.conf.d"', delay: 18, s: 0.2 },
  { text: '(==) Using system config directory "/usr/share/X11/xorg.conf.d"', delay: 18, s: 0.2 },
  { text: '', delay: 80, s: 0.2 },
];

function runBoot() {
  const screen = document.getElementById('boot-screen');
  const output = document.getElementById('boot-output');
  if (!screen) return;

  let i = 0;
  let total = 0;

  const SPEED = 0.49; // 0.7 * 0.7 // ← multiplicador global do boot (menor = mais rápido)

  BOOT_LINES.forEach((line, idx) => {
    const jitter = Math.random() * 30 - 15;
    const spd = line.s !== undefined ? line.s : SPEED;
    total += Math.max(5, (line.delay + jitter) * spd);
    setTimeout(() => {
      const div = document.createElement('div');
      div.innerHTML = line.text;
      output.appendChild(div);
      screen.scrollTop = screen.scrollHeight;
    }, total);
  });

  setTimeout(() => {
    screen.classList.add('boot-fadeout');
    setTimeout(() => {
      screen.remove();
      revealDesktop();
    }, 900);
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
<div class="aboutme-line">automation, and clean gentoo artecture.</div>
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
    output.innerHTML = `<div class="cmd-output"><div class="cmd-row cmd-error">bash: ${trimmed}: command not found, write "help" for commands</div></div>`;
  }

  terminal.appendChild(output);
  appendInteractivePrompt(terminal);
}

function appendInteractivePrompt(terminal) {
  const line = document.createElement('div');
  line.className = 'terminal-line terminal-active-prompt';
  line.innerHTML = `<span class="prompt">burddan@gentoo ~$ </span><span class="terminal-input-text"></span><span class="blink">█</span>`;
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

// === DWM BAR STATS ===
let fakeRam = 3.8 + Math.random() * 0.8;
let fakeCpu = 0.3 + Math.random() * 0.6;

function updateStats() {
  const el = document.getElementById('bar-stats');
  if (!el) return;
  fakeRam += (Math.random() - 0.5) * 0.12;
  fakeRam = Math.max(3.2, Math.min(5.8, fakeRam));
  fakeCpu += (Math.random() - 0.5) * 0.35;
  fakeCpu = Math.max(0.1, Math.min(3.8, fakeCpu));
  el.textContent = `[RAM ${fakeRam.toFixed(1)}G CPU ${fakeCpu.toFixed(1)}%]`;
}

updateStats();
setInterval(updateStats, 2000);

// === DWM BAR DATE ===
function updateDate() {
  const el = document.getElementById('bar-date');
  if (!el) return;
  const now = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = days[now.getDay()];
  const yy  = String(now.getFullYear()).slice(-2);
  const mm  = String(now.getMonth() + 1).padStart(2, '0');
  const dd  = String(now.getDate()).padStart(2, '0');
  const h   = String(now.getHours()).padStart(2, '0');
  const m   = String(now.getMinutes()).padStart(2, '0');
  el.textContent = `[${day} ${yy}-${mm}-${dd} ${h}:${m}]`;
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
          <span class="prompt">burddan@gentoo ~$ </span><span id="${id}"></span>
        </div>
      </div>
    </div>`;

  ws.appendChild(win);
  makeDraggable(win);
  win.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (focusedTerminal && win.contains(focusedTerminal)) focusedTerminal = null;
    win.remove();
  });

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
  output.innerHTML = `<pre class="fastfetch-raw"> _-----_       <span class="ff-accent">burddan</span><span class="ff-dim">@</span><span class="ff-accent">gentoo</span>
(       \\      <span class="ff-dim">------------</span>
\\    0   \\     <span class="nf-key">OS:</span> Gentoo linux x86_64
 \\        )    <span class="nf-key">Kernel:</span> Linux 6.19.12-cachy
 /      _/     <span class="nf-key">Uptime:</span> 5 hours, 23 mins
(     _-       <span class="nf-key">Packages:</span> 1038 (portage)
\\____-         <span class="nf-key">Shell:</span> zsh
               <span class="nf-key">WM:</span> DWM (X.org)
               <span class="nf-key">Terminal:</span> st
               <span class="nf-key">CPU:</span> Intel(R) Xeon(R) E5-2670 v3 (24) @ 3.10 GHz
               <span class="nf-key">GPU:</span> NVIDIA GeForce GTX 1650 [Discrete]
               <span class="nf-key">Memory:</span> 4.49 GiB / 31.18 GiB (14%)
</pre>
<div class="cmd-row ff-dim" style="margin-top:2px">type <span class="nf-key">help</span> for available commands</div>`;
  terminal.appendChild(output);
  appendInteractivePrompt(terminal);
}

// === KEYBOARD INPUT ===
let modKey = false;
document.addEventListener('keydown', (e) => {
  if (e.key === 'Alt') { modKey = true; e.preventDefault(); return; }

  // TWM-style binds: Alt+Enter = spawn terminal, Alt+q = close window
  if (modKey && e.key === 'Enter') { e.preventDefault(); spawnTerminal(); return; }
  if (modKey && e.key === 'q') {
    e.preventDefault();
    if (focusedTerminal) {
      const win = focusedTerminal.closest('.window');
      if (win) { focusedTerminal = null; win.remove(); }
    } else {
      const ws = document.querySelector('.workspace.active');
      if (!ws) return;
      const windows = ws.querySelectorAll('.window');
      if (windows.length > 0) windows[windows.length - 1].remove();
    }
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

document.addEventListener('keyup', (e) => { if (e.key === 'Alt') modKey = false; });

// clicking desktop defocuses terminal
document.querySelector('.desktop').addEventListener('click', (e) => {
  if (!e.target.closest('.window')) focusedTerminal = null;
});

// === REVEAL SEQUENCE ===
function revealEl(el, displayVal) {
  el.style.display = displayVal;
  el.classList.add('reveal-fade');
}

function revealDesktop() {
  setTimeout(() => revealEl(document.querySelector('.dwm-bar'),            'flex'),  0);
  setTimeout(() => revealEl(document.querySelector('.manual'),             'block'), 420);
  setTimeout(() => revealEl(document.querySelector('.marquee-wrap'),       'block'), 840);
  setTimeout(() => revealEl(document.querySelector('#ws-aboutme .window'), 'flex'),  1260);
  setTimeout(initTerminal, 1860);
}

// === INIT ===
document.querySelectorAll('.window').forEach(makeDraggable);
initWorkspaces();

[
  { ws: 'ws-projects', cmd: 'projects'  },
  { ws: 'ws-support',  cmd: 'supportme' },
  { ws: 'ws-contact',  cmd: 'contact'   },
].forEach(({ ws, cmd }) => {
  const terminal = document.querySelector(`#${ws} .terminal`);
  if (!terminal) return;
  const out = document.createElement('div');
  out.innerHTML = COMMANDS[cmd]();
  terminal.appendChild(out);
  appendInteractivePrompt(terminal);
});
