/* Obecco — scroll choreography + hero field. Classic script: window.ObeccoMotion */
/* eslint-disable @typescript-eslint/no-this-alias */
(function () {
  if (typeof window === 'undefined') return;
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)');
  var EASE = 'cubic-bezier(.19,1,.22,1)';
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };

  function Motion(root) {
    this.root = root || document;
    this.reduced = RM.matches;
    this.subs = [];
    this.pending = [];
    this.dead = false;
    this.raf = null;
    var self = this;
    this._req = function () {
      if (self.queued || self.dead) return;
      self.queued = true;
      var go = function () { self.queued = false; if (!self.dead) self._run(); };
      if (document.hidden || !window.requestAnimationFrame) setTimeout(go, 16); else requestAnimationFrame(go);
    };
    /* rAF is suspended while the document is hidden (embedded preview frames),
       so scroll work runs synchronously in that case. */
    this._onEvt = function () { if (document.hidden) self._run(); else self._req(); };
    window.addEventListener('scroll', this._onEvt, { passive: true });
    window.addEventListener('resize', this._onEvt, { passive: true });
    document.addEventListener('visibilitychange', this._onEvt);
    [60, 300, 900].forEach(function (t) { setTimeout(self._onEvt, t); });
  }

  Motion.prototype.sync = function () { this._run(); return this; };

  Motion.prototype._run = function () {
    var vh = window.innerHeight, i;
    if (this.pending.length) {
      var still = [];
      for (i = 0; i < this.pending.length; i++) {
        var el = this.pending[i], r0 = el.getBoundingClientRect();
        if (r0.top < vh * 0.94 && r0.bottom > -60) this._fire(el); else still.push(el);
      }
      this.pending = still;
    }
    for (i = 0; i < this.subs.length; i++) {
      var s = this.subs[i], r = s.el.getBoundingClientRect(), p;
      if (s.mode === 'sticky') {
        p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1);
      } else if (s.mode === 'exit') {
        p = clamp(-r.top / Math.max(1, vh), 0, 1);
      } else {
        p = clamp((vh - r.top) / Math.max(1, r.height + vh), 0, 1);
      }
      if (p !== s.last) { s.last = p; s.fn(p, r); }
    }
  };

  Motion.prototype._fire = function (el) {
    var d = parseFloat(el.getAttribute('data-reveal-delay') || 0);
    var dur = parseFloat(el.getAttribute('data-reveal-dur') || 1150);
    el.style.transition = 'opacity ' + dur + 'ms ' + EASE + ' ' + d + 'ms, transform ' + dur + 'ms ' + EASE + ' ' + d + 'ms, clip-path ' + (dur * 1.15) + 'ms ' + EASE + ' ' + d + 'ms';
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.clipPath = 'inset(0 0 -4% 0)';
    setTimeout(function () { el.style.willChange = 'auto'; }, dur + d + 120);
  };

  /* fade / translate / mask reveals — rect-driven (IntersectionObserver is
     unreliable inside embedded preview frames) */
  Motion.prototype.reveal = function () {
    var self = this;
    if (this.reduced) return this;
    /* Hidden documents never paint transitions — leave content fully visible
       and arm the choreography when the frame becomes visible. */
    if (document.hidden) {
      var arm = function () {
        if (document.hidden) return;
        document.removeEventListener('visibilitychange', arm);
        self.reveal();
      };
      document.addEventListener('visibilitychange', arm);
      return this;
    }
    var els = Array.prototype.slice.call(this.root.querySelectorAll('[data-reveal]'));
    if (!els.length) return this;
    els.forEach(function (el) {
      var k = el.getAttribute('data-reveal') || 'up';
      el.style.willChange = 'opacity, transform';
      if (k === 'mask') { el.style.clipPath = 'inset(0 0 104% 0)'; }
      else {
        el.style.opacity = '0';
        el.style.transform = k === 'left' ? 'translate3d(-30px,0,0)'
          : k === 'right' ? 'translate3d(30px,0,0)'
          : k === 'scale' ? 'scale(1.05)'
          : k === 'in' ? 'none'
          : 'translate3d(0,38px,0)';
      }
    });
    this.pending = this.pending.concat(els);
    this._req();
    return this;
  };

  /* data-parallax="40" → ±40px across its pass through the viewport */
  Motion.prototype.parallax = function () {
    if (this.reduced) return this;
    var self = this;
    Array.prototype.slice.call(this.root.querySelectorAll('[data-parallax]')).forEach(function (el) {
      var amt = parseFloat(el.getAttribute('data-parallax')) || 30;
      var host = el.closest('[data-parallax-scope]') || el;
      self.progress(host, function (p) {
        el.style.transform = 'translate3d(0,' + ((0.5 - p) * 2 * amt).toFixed(2) + 'px,0)';
      });
    });
    return this;
  };

  /* fn(progress 0..1); mode: through (default) | sticky | exit */
  Motion.prototype.progress = function (el, fn, mode) {
    if (!el) return this;
    this.subs.push({ el: el, fn: fn, mode: mode || 'through', last: -1 });
    this._req();
    return this;
  };

  /* one-shot: fn() the first time el comes into view */
  Motion.prototype.once = function (el, fn) {
    if (!el) return this;
    var done = false;
    this.progress(el, function (p) { if (!done && p > 0.12) { done = true; fn(); } });
    return this;
  };

  /* restrained magnetic buttons + cursor-following media */
  Motion.prototype.pointer = function () {
    if (this.reduced || !window.matchMedia('(hover:hover)').matches) return this;
    var bind = function (el, strength, target) {
      var t = target || el, x = 0, y = 0, cx = 0, cy = 0, raf = null;
      var loop = function () {
        cx += (x - cx) * 0.12; cy += (y - cy) * 0.12;
        t.style.transform = 'translate3d(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px,0)';
        if (Math.abs(x - cx) > 0.05 || Math.abs(y - cy) > 0.05) raf = requestAnimationFrame(loop); else raf = null;
      };
      var kick = function () { if (!raf) raf = requestAnimationFrame(loop); };
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        x = ((e.clientX - r.left) / r.width - 0.5) * strength;
        y = ((e.clientY - r.top) / r.height - 0.5) * strength;
        kick();
      });
      el.addEventListener('pointerleave', function () { x = 0; y = 0; kick(); });
    };
    Array.prototype.slice.call(this.root.querySelectorAll('[data-magnet]')).forEach(function (el) {
      bind(el, parseFloat(el.getAttribute('data-magnet')) || 14);
    });
    Array.prototype.slice.call(this.root.querySelectorAll('[data-follow]')).forEach(function (el) {
      bind(el, parseFloat(el.getAttribute('data-follow')) || 22, el.querySelector('[data-follow-target]') || el);
    });
    return this;
  };

  Motion.prototype.destroy = function () {
    this.dead = true;
    window.removeEventListener('scroll', this._onEvt);
    window.removeEventListener('resize', this._onEvt);
    document.removeEventListener('visibilitychange', this._onEvt);
    this.subs = []; this.pending = [];
  };

  /* ── hero field ──────────────────────────────────────────────────────────
     A slowly orbiting layered structure: four tiers of nodes, ringed and
     strutted like a software architecture drawing. Pointer nudges the yaw
     and pitch; scroll sinks and fades it. Squares, hairlines, no glow. */
  function heroField(canvas, opts) {
    if (!canvas) return { destroy: function () {}, setDepth: function () {} };
    opts = opts || {};
    var ctx = canvas.getContext('2d');
    var reduced = RM.matches;
    var ink = opts.ink || '29,31,32';
    var accent = opts.accent || '89,128,166';
    var alphaMul = opts.alpha != null ? opts.alpha : 1;

    var TIERS = [
      { n: 8, r: 0.34, y: -0.58, hub: 0 },
      { n: 11, r: 0.62, y: -0.20, hub: 3 },
      { n: 11, r: 0.54, y: 0.20, hub: 7 },
      { n: 7, r: 0.26, y: 0.56, hub: 2 }
    ];
    var nodes = [], edges = [], t, k, base = 0;
    for (t = 0; t < TIERS.length; t++) {
      var T = TIERS[t];
      for (k = 0; k < T.n; k++) {
        nodes.push({
          a: (k / T.n) * Math.PI * 2 + t * 0.42,
          r: T.r * (1 + (k % 3) * 0.02),
          y: T.y + Math.sin(k * 1.9 + t) * 0.035,
          tier: t,
          hub: k === T.hub
        });
      }
      for (k = 0; k < T.n; k++) edges.push({ a: base + k, b: base + (k + 1) % T.n, w: 0.9 });
      if (t > 0) {
        var pn = TIERS[t - 1].n, pb = base - pn;
        for (k = 0; k < T.n; k++) {
          edges.push({ a: base + k, b: pb + Math.round(k * pn / T.n) % pn, w: 0.55 });
          if (k % 5 === 0) edges.push({ a: base + k, b: pb + (Math.round(k * pn / T.n) + 2) % pn, w: 0.26 });
        }
      }
      base += T.n;
    }
    var N = nodes.length;
    var pulses = [];
    for (k = 0; k < 8; k++) pulses.push({ e: (k * 9 + 4) % edges.length, t: k / 8, sp: 0.0032 + (k % 4) * 0.0009 });

    var w = 0, h = 0, dpr = 1, rot = 0, raf = null, live = true, depth = 0, frame = 0;
    var mx = 0, my = 0, tx = 0, ty = 0;

    function size() {
      var r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, r.width); h = Math.max(1, r.height);
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      var fade = 1 - depth / 240;
      if (fade <= 0.01) return;
      var cx = w * (opts.cx || 0.5), cy = h * (opts.cy || 0.5);
      /* cover: fill the frame like a background image; default stays right-weighted art. */
      var scale = (opts.cover
        ? Math.max(w * 0.58, h * 0.5)
        : Math.min(w * 0.42, h * 0.62)) * (opts.scale || 1);
      tx += (mx - tx) * 0.045; ty += (my - ty) * 0.045;
      var yaw = rot + tx * 0.5, pitch = 0.22 + ty * 0.26;
      var P = [], i;
      for (i = 0; i < N; i++) {
        var n = nodes[i];
        var x3 = Math.cos(n.a + yaw) * n.r;
        var z3 = Math.sin(n.a + yaw) * n.r;
        var y3 = n.y + z3 * pitch;
        var per = 1 / (1 + z3 * 0.34);
        P.push({ x: cx + x3 * scale * per, y: cy + y3 * scale * 1.02 * per - depth * 0.55, z: z3, s: per, hub: n.hub, tier: n.tier });
      }
      ctx.lineCap = 'square';
      ctx.lineWidth = opts.cover ? 1.35 : 1;
      for (i = 0; i < edges.length; i++) {
        var A = P[edges[i].a], B = P[edges[i].b];
        var dep = (A.z + B.z) / 2;
        var al = Math.min(1, 0.26 * edges[i].w * (1 - dep * 0.9) * fade * alphaMul);
        if (al <= 0.005) continue;
        ctx.strokeStyle = 'rgba(' + ink + ',' + al.toFixed(3) + ')';
        ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
      }
      for (i = 0; i < pulses.length; i++) {
        var ed = edges[pulses[i].e]; if (!ed) continue;
        var a2 = P[ed.a], b2 = P[ed.b], tt = pulses[i].t;
        var px = a2.x + (b2.x - a2.x) * tt, py = a2.y + (b2.y - a2.y) * tt;
        ctx.fillStyle = 'rgba(' + accent + ',' + Math.min(1, 0.9 * fade * alphaMul).toFixed(3) + ')';
        ctx.fillRect(px - 2, py - 2, 4, 4);
      }
      for (i = 0; i < N; i++) {
        var p = P[i];
        var sq = (p.hub ? 5.4 : 2.8) * p.s;
        var al2 = Math.min(1, (p.hub ? 0.95 : 0.46) * (1 - p.z * 0.7) * fade * alphaMul);
        if (al2 <= 0.01) continue;
        ctx.fillStyle = p.hub ? 'rgba(' + accent + ',' + al2.toFixed(3) + ')' : 'rgba(' + ink + ',' + al2.toFixed(3) + ')';
        ctx.fillRect(p.x - sq / 2, p.y - sq / 2, sq, sq);
        if (p.hub) {
          ctx.strokeStyle = 'rgba(' + accent + ',' + (al2 * 0.42).toFixed(3) + ')';
          ctx.strokeRect(p.x - sq * 1.9, p.y - sq * 1.9, sq * 3.8, sq * 3.8);
        }
      }
    }

    function loop() {
      rot += 0.0011;
      for (var i = 0; i < pulses.length; i++) {
        pulses[i].t += pulses[i].sp;
        if (pulses[i].t > 1) { pulses[i].t = 0; pulses[i].e = (pulses[i].e + 7) % edges.length; }
      }
      if ((frame++ % 30) === 0) {
        var r = canvas.getBoundingClientRect();
        live = r.bottom > -80 && r.top < window.innerHeight + 80;
        if (Math.abs(r.width - w) > 1 || Math.abs(r.height - h) > 1) size();
      }
      if (live) draw();
      raf = requestAnimationFrame(loop);
    }

    size(); draw();
    var startLoop = function () { if (!reduced && !document.hidden && !raf) raf = requestAnimationFrame(loop); };
    startLoop();
    document.addEventListener('visibilitychange', startLoop);

    var onResize = function () { size(); draw(); };
    var onMove = function (e) {
      var r = canvas.getBoundingClientRect();
      mx = clamp((e.clientX - r.left) / r.width - 0.5, -0.6, 0.6);
      my = clamp((e.clientY - r.top) / r.height - 0.5, -0.6, 0.6);
    };
    window.addEventListener('resize', onResize);
    if (!reduced) window.addEventListener('pointermove', onMove, { passive: true });

    return {
      setDepth: function (d) { depth = d; if (reduced) draw(); },
      destroy: function () {
        if (raf) cancelAnimationFrame(raf);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('pointermove', onMove);
        document.removeEventListener('visibilitychange', startLoop);
      }
    };
  }

  window.ObeccoMotion = {
    Motion: Motion,
    heroField: heroField,
    reduced: function () { return RM.matches; },
    boot: function (root, fn) {
      var m = new Motion(root);
      m.reveal().parallax().pointer();
      if (fn) fn(m);
      return m;
    }
  };
})();
