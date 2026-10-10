// art/neon.js — the twenty neon sign faces, design slot k = round(tint*20).
// Moved verbatim from main.js neonTex (the founder's five signs keep their
// slots: 3 BAR, 7 COLD BEER, 10 martini, 13 LIVE CATS, 17 OPEN).
import { makeCanvas } from '../textures.js?v=k62';

export const NEON_GLOW = [0xffb84f, 0xff6f3f, 0x5fe8d8, 0xff4fa0, 0xff6f6f, 0xff5fd0, 0x7fff7f, 0x5fd0ff, 0x5fb0ff, 0xffa040,
  0x5ff0ff, 0xff8fc8, 0x9fff5f, 0xff6f5f, 0xe8c080, 0xffe85f, 0x8fff9f, 0xffb84f, 0xffb050, 0xc080ff];
export function drawNeon(g, k) {
  {
    g.fillStyle = 'rgba(10,8,16,0.92)';
    g.fillRect(0, 0, 256, 128);
    g.lineCap = 'round';
    g.lineJoin = 'round';
    const stroke = (col, w, draw) => {
      g.strokeStyle = col;
      g.lineWidth = w;
      g.shadowColor = col;
      g.shadowBlur = 18;
      g.beginPath();
      draw();
      g.stroke();
    };
    // glowing text: a tube-coloured stroke with a pale fill, like the BAR script
    const text = (t, x, y, font, col, pale, lw = 3) => {
      g.font = font;
      g.shadowColor = col;
      g.shadowBlur = 20;
      g.strokeStyle = pale;
      g.lineWidth = lw;
      g.strokeText(t, x, y);
      g.shadowBlur = 0;
      g.fillStyle = '#fff4e8';
      g.fillText(t, x, y);
    };
    const star = (cx, cy, r) => { for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + i * 4 * Math.PI / 5; const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r; i ? g.lineTo(x, y) : g.moveTo(x, y); } g.closePath(); };
    switch (k) {
      case 3: // BAR in hot pink script
        text('BAR', 52, 88, 'italic 700 72px Georgia, serif', '#ff4fa0', '#ff9fce');
        break;
      case 10: // martini glass, cyan, with an olive
        stroke('#5ff0ff', 5, () => {
          g.moveTo(78, 30); g.lineTo(178, 30); g.lineTo(128, 78);
          g.lineTo(128, 104); g.moveTo(104, 108); g.lineTo(152, 108);
        });
        g.shadowColor = '#9fff5f';
        g.shadowBlur = 14;
        g.fillStyle = '#c8ff9a';
        g.beginPath();
        g.arc(112, 44, 7, 0, Math.PI * 2);
        g.fill();
        break;
      case 7: // COLD BEER: icy block letters over a tilted mug
        g.font = '700 34px system-ui, sans-serif';
        g.shadowColor = '#5fd0ff';
        g.shadowBlur = 18;
        g.strokeStyle = '#a8e6ff';
        g.lineWidth = 2.5;
        g.strokeText('COLD', 24, 50);
        g.strokeText('BEER', 24, 96);
        stroke('#ffd24f', 4, () => {
          g.moveTo(158, 34); g.lineTo(158, 100); g.lineTo(216, 100);
          g.lineTo(216, 34); g.moveTo(216, 48); g.lineTo(238, 54);
          g.lineTo(238, 84); g.lineTo(216, 90);
        });
        break;
      case 13: // LIVE CATS: hot red letters with a little neon cat face
        g.font = '700 34px system-ui, sans-serif';
        g.shadowColor = '#ff5f5f';
        g.shadowBlur = 18;
        g.strokeStyle = '#ffb0a8';
        g.lineWidth = 2.5;
        g.strokeText('LIVE', 20, 50);
        g.strokeText('CATS', 20, 96);
        stroke('#ffd24f', 3.5, () => {
          g.arc(196, 66, 26, 0, Math.PI * 2);
          g.moveTo(176, 48); g.lineTo(170, 26); g.lineTo(190, 40);
          g.moveTo(216, 48); g.lineTo(222, 26); g.lineTo(202, 40);
        });
        break;
      case 0: // longhorn: skull and two sweeping horns, amber
        stroke('#ffb84f', 4.5, () => {
          g.moveTo(104, 70); g.quadraticCurveTo(60, 60, 18, 28);
          g.moveTo(152, 70); g.quadraticCurveTo(196, 60, 238, 28);
          g.moveTo(104, 70); g.lineTo(104, 100); g.quadraticCurveTo(128, 122, 152, 100); g.lineTo(152, 70);
          g.moveTo(104, 70); g.quadraticCurveTo(128, 56, 152, 70);
        });
        g.shadowColor = '#ffb84f'; g.shadowBlur = 10; g.fillStyle = '#ffd890';
        g.beginPath(); g.arc(118, 86, 4, 0, Math.PI * 2); g.arc(138, 86, 4, 0, Math.PI * 2); g.fill();
        break;
      case 1: // BBQ with a flame
        text('BBQ', 16, 96, '900 64px system-ui, sans-serif', '#ff6f3f', '#ffb090');
        stroke('#ffd24f', 4, () => {
          g.moveTo(196, 100); g.quadraticCurveTo(170, 70, 200, 44); g.quadraticCurveTo(196, 64, 212, 70);
          g.quadraticCurveTo(218, 40, 232, 30); g.quadraticCurveTo(230, 60, 244, 76); g.quadraticCurveTo(246, 104, 196, 100);
        });
        break;
      case 2: // cowboy boot, turquoise, with a star on the shaft
        stroke('#5fe8d8', 4.5, () => {
          g.moveTo(96, 18); g.lineTo(160, 18); g.lineTo(156, 70); g.lineTo(206, 92); g.lineTo(206, 108);
          g.lineTo(80, 108); g.lineTo(80, 92); g.lineTo(100, 72); g.closePath();
          g.moveTo(96, 34); g.lineTo(160, 34);
        });
        stroke('#ffe85f', 2.5, () => star(128, 52, 11));
        break;
      case 4: // lone star: red ring, blue field, white star
        stroke('#ff6f6f', 5, () => { g.arc(128, 64, 54, 0, Math.PI * 2); });
        g.shadowColor = '#8fb8ff'; g.shadowBlur = 16; g.fillStyle = 'rgba(60,90,200,0.55)';
        g.beginPath(); g.arc(128, 64, 48, 0, Math.PI * 2); g.fill();
        stroke('#ffffff', 4, () => star(128, 64, 36));
        break;
      case 5: // LIVE MUSIC with a note
        text('LIVE', 14, 54, '700 36px system-ui, sans-serif', '#ff5fd0', '#ffa8e8', 2.5);
        text('MUSIC', 14, 100, '700 36px system-ui, sans-serif', '#ff5fd0', '#ffa8e8', 2.5);
        stroke('#5ff0ff', 4, () => { g.moveTo(206, 30); g.lineTo(206, 92); g.moveTo(206, 30); g.lineTo(236, 40); g.lineTo(236, 100); g.moveTo(206, 94); g.arc(196, 94, 10, 0, Math.PI * 2); g.moveTo(246, 102); g.arc(236, 102, 10, 0, Math.PI * 2); });
        break;
      case 6: // cactus, green, under a little sun
        stroke('#7fff7f', 6, () => {
          g.moveTo(128, 112); g.lineTo(128, 30); g.moveTo(128, 76); g.lineTo(96, 76); g.lineTo(96, 46);
          g.moveTo(128, 62); g.lineTo(160, 62); g.lineTo(160, 36);
        });
        stroke('#ffe85f', 3, () => { g.arc(206, 32, 12, 0, Math.PI * 2); });
        break;
      case 8: // ICE COLD on a long arrow
        stroke('#5fb0ff', 4, () => { g.moveTo(14, 64); g.lineTo(236, 64); g.moveTo(212, 40); g.lineTo(240, 64); g.lineTo(212, 88); });
        text('ICE COLD', 26, 50, '700 30px system-ui, sans-serif', '#a8e6ff', '#d8f4ff', 2);
        break;
      case 9: // guitar, orange body, neck up to the left
        stroke('#ffa040', 4.5, () => {
          g.moveTo(170, 66); g.quadraticCurveTo(206, 36, 224, 66); g.quadraticCurveTo(236, 96, 200, 108);
          g.quadraticCurveTo(164, 112, 160, 84); g.quadraticCurveTo(150, 60, 170, 66);
          g.moveTo(168, 70); g.lineTo(40, 24); g.moveTo(44, 16); g.lineTo(60, 36);
        });
        g.shadowColor = '#ffa040'; g.shadowBlur = 8; g.fillStyle = '#ffd8a0';
        g.beginPath(); g.arc(194, 80, 8, 0, Math.PI * 2); g.fill();
        break;
      case 11: // Y'ALL in pink script
        text("Y'ALL", 30, 90, 'italic 700 66px Georgia, serif', '#ff8fc8', '#ffc0e0');
        break;
      case 12: // POOL with an eight ball
        text('POOL', 12, 92, '900 58px system-ui, sans-serif', '#9fff5f', '#d0ffa8');
        stroke('#ffffff', 3.5, () => { g.arc(210, 64, 26, 0, Math.PI * 2); });
        g.shadowBlur = 0; g.fillStyle = '#ffffff'; g.beginPath(); g.arc(210, 64, 11, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#101018'; g.font = '700 14px system-ui, sans-serif'; g.fillText('8', 206, 69);
        break;
      case 14: // cowboy hat, tan
        stroke('#e8c080', 4.5, () => {
          g.moveTo(24, 84); g.quadraticCurveTo(128, 120, 232, 84); g.quadraticCurveTo(200, 76, 180, 70);
          g.lineTo(172, 34); g.quadraticCurveTo(128, 20, 84, 34); g.lineTo(76, 70); g.quadraticCurveTo(56, 76, 24, 84);
          g.moveTo(80, 68); g.lineTo(176, 68);
        });
        break;
      case 15: // HOWDY in yellow script
        text('HOWDY', 10, 88, 'italic 700 60px Georgia, serif', '#ffe85f', '#fff2a0');
        break;
      case 16: // horseshoe, green, ends up
        stroke('#8fff9f', 6, () => { g.arc(128, 60, 44, Math.PI * 0.85, Math.PI * 2.15); });
        g.shadowColor = '#8fff9f'; g.shadowBlur = 8; g.fillStyle = '#d0ffd8';
        for (const [x, y] of [[90, 64], [100, 36], [128, 18], [156, 36], [166, 64]]) { g.beginPath(); g.arc(x, y, 3.5, 0, Math.PI * 2); g.fill(); }
        break;
      case 17: // OPEN in warm amber block letters
        text('OPEN', 44, 82, '700 56px system-ui, sans-serif', '#ffb84f', '#ffd08a');
        break;
      case 18: // WHISKEY over a bottle
        text('WHISKEY', 8, 56, '700 34px system-ui, sans-serif', '#ffb050', '#ffd8a0', 2.5);
        stroke('#ffb050', 3.5, () => { g.moveTo(112, 70); g.lineTo(112, 112); g.lineTo(144, 112); g.lineTo(144, 70); g.lineTo(136, 64); g.lineTo(136, 56); g.lineTo(120, 56); g.lineTo(120, 64); g.closePath(); });
        break;
      case 19: // DANCE, purple, with boots kicking
        text('DANCE', 12, 90, '900 52px system-ui, sans-serif', '#c080ff', '#e0c0ff');
        stroke('#ff8fc8', 3, () => { g.moveTo(200, 30); g.lineTo(206, 60); g.lineTo(230, 68); g.moveTo(222, 24); g.lineTo(236, 50); g.lineTo(250, 48); });
        break;
      default: // slots without a design yet: a plain amber tube ring
        stroke('#ffb84f', 5, () => { g.arc(128, 64, 40, 0, Math.PI * 2); });
    }
  }
}

/** one sign face as its own texture (main.js's way) */
export function neonTex(k) {
  return makeCanvas(256, 128, (g) => drawNeon(g, k));
}

/**
 * Every design in one 5x4 atlas, so all signs share one material and one
 * batch; a sign picks its cell with the instanced attribute aCell (cell k
 * at column k % 5, row floor(k / 5), row 0 at the top of the canvas).
 */
export const ATLAS = { cols: 5, rows: 4, w: 256, h: 128 };
export function neonAtlas() {
  return makeCanvas(ATLAS.cols * ATLAS.w, ATLAS.rows * ATLAS.h, (g) => {
    for (let k = 0; k < ATLAS.cols * ATLAS.rows; k++) {
      g.save();
      g.translate((k % ATLAS.cols) * ATLAS.w, Math.floor(k / ATLAS.cols) * ATLAS.h);
      g.beginPath();
      g.rect(0, 0, ATLAS.w, ATLAS.h);
      g.clip();
      drawNeon(g, k);
      g.restore();
    }
  });
}
