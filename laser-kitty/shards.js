// A piece of a broken thing, drawn as a piece OF THAT THING.
//
// The sim breaks a brittle body into convex cells and says, per piece
// (lk_piece): which body it came from (the ROOT: the original, unbroken
// one, however many generations down this piece is), the planes that were
// cut to make it, in the root's own frame, and where the piece's origin
// lies in that frame. This module takes the root's art — whatever meshes
// its room drew for it — and cuts every triangle by those planes, carrying
// position, normal, uv and colour across each cut, so a shard of the teal
// vase is the teal vase's own glaze and curve. Nothing here knows what the
// thing is: it works on any Object3D a room hands over.
//
// What a cut shows depends on the mesh, not on the body:
//   * a mesh that is a closed solid (a handle, a bust, a table top) gets a
//     cap across each cut, in the colour of the thing's inside;
//   * a mesh that is the wall of a hollow thing (the sim says so, and the
//     mesh is most of the thing) gets a wall's thickness instead: the same
//     surface again a few millimetres in, and a ribbon of bare ceramic
//     round every broken edge. Glass keeps one skin, drawn from both sides.
// Only the cut planes clip. The sim's solid is whatever the box stood in
// for; the art may overhang it (a handle, a lip), and it is the art that
// is being cut.
import * as THREE from './vendor/three.module.min.js';

const EPS = 1e-6;

/** lk_piece's floats (layout: piece_buf in core/src/lib.rs) */
export function parsePiece(f) {
  const P = f[7] | 0, V = f[8] | 0, T = f[9] | 0;
  let o = 10;
  const planes = f.slice(o, o + 4 * P); o += 4 * P;
  const verts = f.slice(o, o + 3 * V); o += 3 * V;
  const tris = f.slice(o, o + 3 * T);
  return { root: f[0] | 0, gen: f[1] | 0, hollow: !!((f[2] | 0) & 1), pane: !!((f[2] | 0) & 2), origin: [f[3], f[4], f[5]], wall: f[6], planes, verts, tris };
}

/** the collider's hull, flat-shaded: what a piece is drawn as when its
 *  root's art cannot be had */
export function hullGeometry(pd) {
  const pos = new Float32Array(pd.tris.length * 3);
  for (let t = 0; t < pd.tris.length; t++) {
    const v = pd.tris[t] * 3;
    pos[t * 3] = pd.verts[v]; pos[t * 3 + 1] = pd.verts[v + 1]; pos[t * 3 + 2] = pd.verts[v + 2];
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

// --- the root's art, gathered once per root ---------------------------------
// Every mesh under the root, in the root's frame: positions, normals, uvs,
// colours, triangles with their material, and which triangle edges are the
// mesh's own boundary (a lathe's lip). Sprites, glows and pools of light
// are not part of the object; nor is what it held (a liquid's material says
// so: the sim has already poured it), nor anything whose centre is well
// outside the body (flowers above a vase: the sim throws those as stems).
function gather(root, half) {
  if (root.userData.shardArt) return root.userData.shardArt;
  root.updateWorldMatrix(true, true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const parts = [];
  const m4 = new THREE.Matrix4(), n3 = new THREE.Matrix3(), v = new THREE.Vector3();
  const all = new THREE.Box3();
  root.traverse((o) => {
    if (!o.isMesh || o.isSkinnedMesh || o.isInstancedMesh || !o.geometry || o.userData.shard === false) return;
    if (o.userData.pool || o.userData.tag) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    if (mats.some((mt) => !mt || mt.blending === THREE.AdditiveBlending || mt.userData.liquid)) return;
    let vis = true;
    for (let p = o; p && p !== root; p = p.parent) if (!p.visible) vis = false;
    if (!vis) return;
    const g = o.geometry, pa = g.attributes.position;
    if (!pa || pa.count < 3) return;
    m4.multiplyMatrices(inv, o.matrixWorld);
    n3.getNormalMatrix(m4);
    const flip = m4.determinant() < 0;
    const n = pa.count;
    const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3);
    const na = g.attributes.normal, ua = g.attributes.uv, ca = g.attributes.color;
    const box = new THREE.Box3();
    for (let i = 0; i < n; i++) {
      v.fromBufferAttribute(pa, i).applyMatrix4(m4);
      pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
      box.expandByPoint(v);
      if (na) {
        v.fromBufferAttribute(na, i).applyMatrix3(n3).normalize();
        nor[i * 3] = v.x; nor[i * 3 + 1] = v.y; nor[i * 3 + 2] = v.z;
      }
    }
    const c = box.getCenter(new THREE.Vector3());
    if (Math.abs(c.x) > half[0] * 1.6 + 0.01 || Math.abs(c.y) > half[1] * 1.6 + 0.01 || Math.abs(c.z) > half[2] * 1.6 + 0.01) return;
    const idx = g.index ? g.index.array : null;
    const nt = ((idx ? idx.length : n) / 3) | 0;
    const tri = new Uint32Array(nt * 3);
    for (let t = 0; t < nt; t++) {
      const a = idx ? idx[t * 3] : t * 3, b = idx ? idx[t * 3 + 1] : t * 3 + 1, cc = idx ? idx[t * 3 + 2] : t * 3 + 2;
      tri[t * 3] = a; tri[t * 3 + 1] = flip ? cc : b; tri[t * 3 + 2] = flip ? b : cc;
    }
    // material per triangle (a box's six groups share one material unless
    // it was given an array)
    const triMat = new Uint8Array(nt);
    if (Array.isArray(o.material) && g.groups.length) {
      for (const gr of g.groups) for (let t = (gr.start / 3) | 0; t < Math.min(nt, ((gr.start + gr.count) / 3) | 0); t++) triMat[t] = Math.min(mats.length - 1, gr.materialIndex | 0);
    }
    // welded edges, counted: an edge used once is the mesh's boundary
    const q = (i) => `${Math.round(pos[i * 3] * 2e4)},${Math.round(pos[i * 3 + 1] * 2e4)},${Math.round(pos[i * 3 + 2] * 2e4)}`;
    const ids = new Map(), vid = new Int32Array(n);
    for (let i = 0; i < n; i++) {
      const k = q(i);
      let id = ids.get(k);
      if (id === undefined) { id = ids.size; ids.set(k, id); }
      vid[i] = id;
    }
    const uses = new Map();
    const ek = (a, b) => (a < b ? a * 1048576 + b : b * 1048576 + a);
    for (let t = 0; t < nt; t++) {
      for (let e = 0; e < 3; e++) {
        const a = vid[tri[t * 3 + e]], b = vid[tri[t * 3 + (e + 1) % 3]];
        if (a === b) continue;
        const k = ek(a, b);
        uses.set(k, (uses.get(k) || 0) + 1);
      }
    }
    const edge = new Uint8Array(nt * 3);
    let open = 0;
    for (let t = 0; t < nt; t++) {
      for (let e = 0; e < 3; e++) {
        const a = vid[tri[t * 3 + e]], b = vid[tri[t * 3 + (e + 1) % 3]];
        if (a !== b && uses.get(ek(a, b)) === 1) { edge[t * 3 + e] = 1; open++; }
      }
    }
    // which way is out: normals mostly point away from the mesh's middle
    let out = 0;
    if (na) for (let i = 0; i < n; i++) out += (pos[i * 3] - c.x) * nor[i * 3] + (pos[i * 3 + 1] - c.y) * nor[i * 3 + 1] + (pos[i * 3 + 2] - c.z) * nor[i * 3 + 2];
    all.union(box);
    parts.push({ mesh: o, mats, pos, nor, hasN: !!na, uv: ua || null, col: ca || null, tri, triMat, edge, open: open > 0, out: out >= 0 ? 1 : -1, box, nt });
  });
  const diag = all.isEmpty() ? 0 : all.getSize(new THREE.Vector3()).length();
  for (const p of parts) p.big = p.box.getSize(new THREE.Vector3()).length() > 0.5 * diag;
  const art = { parts, mats: new Map(), noShadow: root.userData.noShadow === true };
  root.userData.shardArt = art;
  return art;
}

// a vertex is [x,y,z, nx,ny,nz, u,v, r,g,b]
const lerpV = (a, b, t) => {
  const o = new Array(11);
  for (let i = 0; i < 11; i++) o[i] = a[i] + (b[i] - a[i]) * t;
  return o;
};

/**
 * Cut `root`'s art into the piece `pd` (parsePiece). Returns a Group in the
 * piece's own frame (drive its position and quaternion from the piece's
 * render row), or null when there is no art to cut.
 *   opts.half      the root's half-extents (its render row's a, b, c)
 *   opts.interior  colour of the inside of the thing (a broken edge)
 *   opts.dead      true for a powered thing: its pieces do not glow
 *   opts.capMat    (hex) => a plain matte material (for a dead screen)
 *   opts.restMat   one shared matte material with vertex colours
 *   opts.extent    the piece's longest dimension, metres
 *   opts.shadowMin pieces shorter than this cast no shadow
 */
export function cutPiece(root, pd, opts) {
  const art = gather(root, opts.half);
  if (!art.parts.length) return null;
  const P = pd.planes.length / 4;
  const pl = pd.planes, [ox, oy, oz] = pd.origin;
  // buckets: material -> { pos, nor, uv, col }
  const buckets = new Map();
  const bucket = (mat, hasUv, hasCol) => {
    let b = buckets.get(mat);
    if (!b) { b = { pos: [], nor: [], uv: hasUv ? [] : null, col: hasCol ? [] : null }; buckets.set(mat, b); }
    return b;
  };
  const cap = { pos: [], nor: [], uv: null, col: null };
  const emit = (b, a, c, d) => {
    for (const p of [a, c, d]) {
      b.pos.push(p[0] - ox, p[1] - oy, p[2] - oz);
      b.nor.push(p[3], p[4], p[5]);
      if (b.uv) b.uv.push(p[6], p[7]);
      if (b.col) b.col.push(p[8], p[9], p[10]);
    }
  };
  const flat = (b, a, c, d, nx, ny, nz) => {
    // a flat triangle, wound to face (nx,ny,nz)
    const ux = c[0] - a[0], uy = c[1] - a[1], uz = c[2] - a[2], vx = d[0] - a[0], vy = d[1] - a[1], vz = d[2] - a[2];
    const fx = uy * vz - uz * vy, fy = uz * vx - ux * vz, fz = ux * vy - uy * vx;
    const fl = Math.hypot(fx, fy, fz);
    if (fl < 1e-12) return;
    const s = fx * nx + fy * ny + fz * nz < 0 ? -1 : 1;
    const [p, q] = s < 0 ? [d, c] : [c, d];
    for (const w of [a, p, q]) {
      b.pos.push(w[0] - ox, w[1] - oy, w[2] - oz);
      b.nor.push((s * fx) / fl, (s * fy) / fl, (s * fz) / fl);
      if (b.uv) b.uv.push(w[6], w[7]);
      if (b.col) b.col.push(w[8], w[9], w[10]);
    }
  };
  const matFor = (m) => {
    let r = art.mats.get(m);
    if (r) return r;
    r = m;
    const lit = m.emissive && m.emissiveIntensity > 0 && m.emissive.r + m.emissive.g + m.emissive.b > 0.01;
    if (opts.dead && (lit || m.isMeshBasicMaterial)) {
      // a broken lamp is out; a broken screen is dark
      if (m.isMeshBasicMaterial) {
        r = opts.capMat(0xffffff);
        r = r.clone();
        r.color.copy(m.color).multiplyScalar(m.map ? 0.25 : 0.7);
        r.map = m.map || null;
        r.transparent = m.transparent; r.opacity = m.opacity; r.side = m.side;
      } else {
        r = m.clone();
        r.emissiveIntensity = 0;
      }
    }
    art.mats.set(m, r);
    return r;
  };

  for (const part of art.parts) {
    const { pos, nor, uv, col, tri, nt } = part;
    const nv = pos.length / 3;
    // signed distance of every vertex to every plane; planes the whole
    // mesh is inside are skipped, and a mesh wholly outside one is not here
    const active = [];
    let gone = false;
    const dist = [];
    for (let k = 0; k < P && !gone; k++) {
      const nx = pl[k * 4], ny = pl[k * 4 + 1], nz = pl[k * 4 + 2], d = pl[k * 4 + 3];
      const dk = new Float32Array(nv);
      let anyIn = false, anyOut = false;
      for (let i = 0; i < nv; i++) {
        const s = nx * pos[i * 3] + ny * pos[i * 3 + 1] + nz * pos[i * 3 + 2] - d;
        dk[i] = s;
        if (s > EPS) anyOut = true; else anyIn = true;
      }
      if (!anyIn) gone = true;
      else if (anyOut) { active.push(k); dist.push(dk); }
    }
    if (gone) continue;
    const shell = part.big && (pd.hollow || part.open);
    const opaque = part.mats.every((m) => !m.transparent && m.opacity >= 1);
    const thick = shell && pd.hollow && opaque ? Math.max(0.0015, pd.wall) : 0;
    const capped = !shell && !part.open;
    const sgn = part.out;
    const vert = (i) => [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2], nor[i * 3], nor[i * 3 + 1], nor[i * 3 + 2], uv ? uv.getX(i) : 0, uv ? uv.getY(i) : 0, col ? col.getX(i) : 1, col ? col.getY(i) : 1, col ? col.getZ(i) : 1];
    // rim segments per plane, for caps: [a, b]
    const rims = capped ? new Map() : null;
    const inward = (p) => {
      const l = Math.hypot(p[3], p[4], p[5]) || 1;
      const q = p.slice();
      q[0] -= (sgn * p[3] / l) * thick; q[1] -= (sgn * p[4] / l) * thick; q[2] -= (sgn * p[5] / l) * thick;
      q[3] = -p[3]; q[4] = -p[4]; q[5] = -p[5];
      return q;
    };
    for (let t = 0; t < nt; t++) {
      const i0 = tri[t * 3], i1 = tri[t * 3 + 1], i2 = tri[t * 3 + 2];
      // out of any one plane entirely: gone. Inside all: whole.
      let whole = true, drop = false;
      for (let a = 0; a < active.length; a++) {
        const dk = dist[a];
        const o0 = dk[i0] > EPS, o1 = dk[i1] > EPS, o2 = dk[i2] > EPS;
        if (o0 && o1 && o2) { drop = true; break; }
        if (o0 || o1 || o2) whole = false;
      }
      if (drop) continue;
      let poly = [vert(i0), vert(i1), vert(i2)];
      // edge tags: -1 inside the mesh, -2 the mesh's own boundary, k >= 0 cut by plane k
      let tags = [part.edge[t * 3] ? -2 : -1, part.edge[t * 3 + 1] ? -2 : -1, part.edge[t * 3 + 2] ? -2 : -1];
      if (!whole) {
        for (let a = 0; a < active.length && poly.length; a++) {
          const k = active[a];
          const nx = pl[k * 4], ny = pl[k * 4 + 1], nz = pl[k * 4 + 2], d = pl[k * 4 + 3];
          const np = [], ntg = [];
          const m = poly.length;
          const ds = poly.map((p) => nx * p[0] + ny * p[1] + nz * p[2] - d);
          for (let i = 0; i < m; i++) {
            const A = poly[i], B = poly[(i + 1) % m], dA = ds[i], dB = ds[(i + 1) % m];
            if (dA <= EPS) {
              np.push(A);
              if (dB <= EPS) ntg.push(tags[i]);
              else { ntg.push(tags[i]); np.push(lerpV(A, B, dA / (dA - dB))); ntg.push(k); }
            } else if (dB <= EPS) {
              np.push(lerpV(A, B, dA / (dA - dB)));
              ntg.push(tags[i]);
            }
          }
          poly = np.length >= 3 ? np : [];
          tags = ntg;
        }
        if (!poly.length) continue;
      }
      const mat = matFor(part.mats[part.triMat[t]]);
      const b = bucket(mat, !!uv, !!col);
      for (let i = 1; i < poly.length - 1; i++) emit(b, poly[0], poly[i], poly[i + 1]);
      if (thick) {
        const inn = poly.map(inward);
        for (let i = 1; i < inn.length - 1; i++) emit(b, inn[0], inn[i + 1], inn[i]);
        for (let i = 0; i < poly.length; i++) {
          if (tags[i] === -1) continue;
          const A = poly[i], B = poly[(i + 1) % poly.length], A2 = inn[i], B2 = inn[(i + 1) % poly.length];
          if (tags[i] >= 0) {
            // a broken edge: bare, facing out of the piece across the cut
            const k = tags[i];
            flat(cap, A, B, B2, pl[k * 4], pl[k * 4 + 1], pl[k * 4 + 2]);
            flat(cap, A, B2, A2, pl[k * 4], pl[k * 4 + 1], pl[k * 4 + 2]);
          } else {
            // the lip: glazed like the rest, facing away from the wall's middle
            const mx = (A[0] + B[0] + A2[0] + B2[0]) / 4, my = (A[1] + B[1] + A2[1] + B2[1]) / 4, mz = (A[2] + B[2] + A2[2] + B2[2]) / 4;
            const c0 = part.box.getCenter(new THREE.Vector3());
            flat(b, A, B, B2, mx - c0.x, my - c0.y, mz - c0.z);
            flat(b, A, B2, A2, mx - c0.x, my - c0.y, mz - c0.z);
          }
        }
      } else if (rims) {
        for (let i = 0; i < poly.length; i++) {
          if (tags[i] < 0) continue;
          let r = rims.get(tags[i]);
          if (!r) { r = []; rims.set(tags[i], r); }
          r.push([poly[i], poly[(i + 1) % poly.length]]);
        }
      }
    }
    // caps: per plane, each connected loop of rim fanned from its middle
    if (rims) {
      for (const [k, segs] of rims) {
        const nx = pl[k * 4], ny = pl[k * 4 + 1], nz = pl[k * 4 + 2];
        const key = (p) => `${Math.round(p[0] * 2e4)},${Math.round(p[1] * 2e4)},${Math.round(p[2] * 2e4)}`;
        const parent = new Map();
        const find = (x) => { while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
        for (const [a, b2] of segs) {
          const ka = key(a), kb = key(b2);
          if (!parent.has(ka)) parent.set(ka, ka);
          if (!parent.has(kb)) parent.set(kb, kb);
          parent.set(find(ka), find(kb));
        }
        const loops = new Map();
        for (const s of segs) {
          const r = find(key(s[0]));
          let l = loops.get(r);
          if (!l) { l = []; loops.set(r, l); }
          l.push(s);
        }
        for (const l of loops.values()) {
          if (l.length < 3) continue;
          let cx = 0, cy = 0, cz = 0, w = 0;
          for (const [a, b2] of l) {
            const len = Math.hypot(b2[0] - a[0], b2[1] - a[1], b2[2] - a[2]);
            cx += (a[0] + b2[0]) * 0.5 * len; cy += (a[1] + b2[1]) * 0.5 * len; cz += (a[2] + b2[2]) * 0.5 * len; w += len;
          }
          if (w < 1e-9) continue;
          const c = [cx / w, cy / w, cz / w];
          for (const [a, b2] of l) flat(cap, c, a, b2, nx, ny, nz);
        }
      }
    }
  }

  // Draw calls are what a floor of shards costs a phone, so a piece is at
  // most a few meshes: its main material as it was (the glaze, the glass:
  // whichever covers most of it), anything textured or see-through as it
  // was, and EVERYTHING else — trims, bands, stoppers, caps, broken edges —
  // as one mesh whose colours ride in its vertices. A shard under
  // `opts.shadowMin` metres long casts no shadow (it still takes them).
  const group = new THREE.Group();
  const casts = !art.noShadow && opts.extent >= (opts.shadowMin ?? 0);
  const mk = (b, mat) => {
    if (!b.pos.length) return;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(b.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(b.nor, 3));
    if (b.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(b.uv, 2));
    if (b.col) g.setAttribute('color', new THREE.Float32BufferAttribute(b.col, 3));
    const m = new THREE.Mesh(g, mat);
    m.castShadow = casts;
    m.receiveShadow = true;
    group.add(m);
  };
  const plain = (m) => !m.map && !m.alphaMap && !m.transparent && m.opacity >= 1 && !m.vertexColors && m.color;
  let main = null, most = 0;
  for (const [mat, b] of buckets) if (b.pos.length > most) { most = b.pos.length; main = mat; }
  const rest = { pos: [], nor: [], uv: null, col: [] };
  const fold = (b, c) => {
    for (let i = 0; i < b.pos.length; i++) { rest.pos.push(b.pos[i]); rest.nor.push(b.nor[i]); }
    for (let i = 0; i < b.pos.length / 3; i++) rest.col.push(c.r * (b.col ? b.col[i * 3] : 1), c.g * (b.col ? b.col[i * 3 + 1] : 1), c.b * (b.col ? b.col[i * 3 + 2] : 1));
  };
  fold(cap, new THREE.Color(opts.interior));
  for (const [mat, b] of buckets) {
    if (mat !== main && plain(mat)) { fold(b, mat.color); continue; }
    let m = mat;
    // one skin seen from both sides: a shard has an inside
    if (m.side !== THREE.DoubleSide) {
      let d = art.mats.get(`2:${m.uuid}`);
      if (!d) { d = m.clone(); d.side = THREE.DoubleSide; art.mats.set(`2:${m.uuid}`, d); }
      m = d;
    }
    mk(b, m);
  }
  mk(rest, opts.restMat);
  if (!group.children.length) return null;
  group.userData.noShadow = art.noShadow;
  return group;
}
