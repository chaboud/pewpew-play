// nav.js — the hamburger every page shares (founder: "add the hamburger
// to the playground and other pages so we can access them from the main
// menu and get back to it"). One button, one overlay, three links.
// Career mode brings its own ☰ (pause menu) and skips this one.
const LINKS = [
  ['Main menu (Career)', 'play.html'],
  ['Free Play', 'index.html'],
  ['Cat Lab', 'catlab.html'],
];
export function mountNav({ left = '10px', right = null, top = null } = {}) {
  const style = document.createElement('style');
  style.textContent = `
#nav-btn { position: fixed; z-index: 30; width: 44px; height: 44px; border-radius: 10px;
  border: 1px solid #3a3644; background: rgba(30,27,38,0.85); color: #cfd4e6; font: 700 20px system-ui, sans-serif; }
#nav-ov { position: fixed; inset: 0; z-index: 60; display: none; align-items: center; justify-content: center;
  flex-direction: column; gap: 10px; background: rgba(14,12,20,0.88); }
#nav-ov.open { display: flex; }
#nav-ov a, #nav-ov button { width: min(280px, 80vw); padding: 12px; border-radius: 10px; text-align: center;
  border: 1px solid #53c8d8; background: rgba(40,80,90,0.5); color: #bff2fa; font: 700 15px system-ui, sans-serif; text-decoration: none; }
#nav-ov .cur { border-color: #3a3644; color: #8a8798; background: rgba(30,27,38,0.8); }`;
  document.head.appendChild(style);
  const btn = document.createElement('button');
  btn.id = 'nav-btn';
  btn.innerHTML = '&#9776;';
  btn.style.top = top || 'calc(env(safe-area-inset-top, 8px) + 4px)';
  if (right) btn.style.right = right; else btn.style.left = left;
  const ov = document.createElement('div');
  ov.id = 'nav-ov';
  const here = location.pathname.split('/').pop() || 'index.html';
  ov.innerHTML = LINKS.map(([n, h]) => `<a href="${h}" class="${h === here ? 'cur' : ''}">${n}</a>`).join('') +
    '<button id="nav-close">Back</button>';
  document.body.appendChild(btn);
  document.body.appendChild(ov);
  btn.onclick = () => ov.classList.add('open');
  ov.querySelector('#nav-close').onclick = () => ov.classList.remove('open');
}
