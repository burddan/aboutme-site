// === DRAGGABLE WINDOW ===
function makeDraggable(win) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;
  let isTiled = false;
  let savedStyle = {};

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
    strings: ['neofetch'],
    typeSpeed: 80,
    startDelay: 600,
    showCursor: true,
    cursorChar: '█',
    onComplete(self) {
      self.cursor.remove();
      appendOutput();
    },
  });
}

function appendOutput() {
  const terminal = document.querySelector('.terminal');

  const output = document.createElement('div');
  output.className = 'neofetch-output';
  output.innerHTML = `
<pre class="nf-art">
       /\\         <span class="nf-label">burddan</span><span class="nf-sep">@</span><span class="nf-label">arch</span>
      /  \\        --------
     /\\   \\       <span class="nf-key"><span class="tag-icon">󰣇</span> OS:</span>     Arch Linux
    /  __  \\      <span class="nf-key"><span class="tag-icon">󰖯</span> WM:</span>     dwm
   /  (  )  \\     <span class="nf-key"><span class="tag-icon">󰨊</span> Shell:</span>  zsh
  / __|  |__\\\\    <span class="nf-key"><span class="tag-icon">󰆍</span> Term:</span>   st
 /.\'        \`.    <span class="nf-key"><span class="tag-icon">󰻃</span> Editor:</span> nvim
</pre>`;

  terminal.appendChild(output);

  const nextPrompt = document.createElement('div');
  nextPrompt.className = 'terminal-line';
  nextPrompt.innerHTML = `<span class="prompt">burddan@arch ~$ </span><span class="typed-cursor blink">█</span>`;
  terminal.appendChild(nextPrompt);
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
    strings: [''],
    typeSpeed: 80,
    startDelay: 200,
    showCursor: true,
    cursorChar: '█',
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'q') spawnTerminal();
  if (e.key === 'w') {
    const ws = document.querySelector('.workspace.active');
    if (!ws) return;
    const windows = ws.querySelectorAll('.window');
    if (windows.length > 0) windows[windows.length - 1].remove();
  }
});

// === INIT ===
document.querySelectorAll('.window').forEach(makeDraggable);
initWorkspaces();
initTerminal();
