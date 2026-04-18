// === DRAGGABLE WINDOW ===
function makeDraggable(win) {
  const titlebar = win.querySelector('.window-titlebar');
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  titlebar.addEventListener('mousedown', (e) => {
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
     /\\   \\       <span class="nf-key">OS:</span>     Arch Linux
    /  __  \\      <span class="nf-key">WM:</span>     dwm
   /  (  )  \\     <span class="nf-key">Shell:</span>  zsh
  / __|  |__\\\\    <span class="nf-key">Term:</span>   st
 /.\'        \`.    <span class="nf-key">Editor:</span> nvim
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
  el.textContent = `󰃰 ${day} ${mon} ${date} ${h}:${m}:${s}`;
}

updateDate();
setInterval(updateDate, 1000);

// === INIT ===
document.querySelectorAll('.window').forEach(makeDraggable);
initTerminal();
