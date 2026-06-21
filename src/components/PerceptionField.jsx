import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * PerceptionField
 * A lightweight, dependency-free animated point cloud rendered on <canvas>.
 * It evokes machine perception — LiDAR-style point clouds, proximity graphs and a
 * few "tracked" detection markers — i.e. the way a robot sees the physical world.
 * Replaces the external Spline humanoid iframe.
 */
const PerceptionField = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const isLight = theme === 'light';
        // rgb triplets so alpha can vary per draw
        const C_POINT = isLight ? '0, 112, 243' : '0, 212, 255';
        const C_DET = isLight ? '98, 0, 238' : '120, 80, 255';
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let width = 0, height = 0, dpr = 1, cx = 0, cy = 0, spread = 0;
        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            cx = width / 2;
            cy = height / 2;
            spread = Math.min(width, height) * 0.46;
        };
        resize();

        // build the cloud (fewer points on small screens)
        const COUNT = width < 700 ? 80 : 150;
        const pts = [];
        for (let i = 0; i < COUNT; i++) {
            pts.push({
                x: (Math.random() * 2 - 1) * 1.45,
                y: (Math.random() * 2 - 1),
                z: (Math.random() * 2 - 1),
                ph: Math.random() * Math.PI * 2,
                sp: 0.3 + Math.random() * 0.6,
                amp: 0.05 + Math.random() * 0.06,
                det: Math.random() < 0.09,
            });
        }
        const FOV = 2.6;
        const SCALE_FAR = 0.42, SCALE_NEAR = 1.0; // empirical bounds for depth normalization

        let mx = 0, my = 0, camX = 0, camY = 0;
        const onMove = (e) => {
            mx = (e.clientX / window.innerWidth) * 2 - 1;
            my = (e.clientY / window.innerHeight) * 2 - 1;
        };

        const screen = new Array(COUNT);
        let t = 0, last = 0, raf = 0, running = true;

        const frame = (now) => {
            if (!running) return;
            const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
            last = now;
            if (!reduce) t += dt;

            camX += (mx - camX) * 0.04;
            camY += (my - camY) * 0.04;

            const ry = reduce ? 0.5 : t * 0.12;
            const cos = Math.cos(ry), sin = Math.sin(ry);
            ctx.clearRect(0, 0, width, height);

            // project every point to screen space
            for (let i = 0; i < COUNT; i++) {
                const p = pts[i];
                const dx = p.x + (reduce ? 0 : Math.sin(t * p.sp + p.ph) * p.amp);
                const dy = p.y + (reduce ? 0 : Math.cos(t * p.sp * 0.8 + p.ph) * p.amp);
                const dz = p.z + (reduce ? 0 : Math.sin(t * p.sp * 0.6 + p.ph * 1.3) * p.amp);
                const rx = dx * cos - dz * sin;
                const rz = dx * sin + dz * cos;
                const scale = FOV / (FOV + rz + 1.8);
                const dn = Math.max(0, Math.min(1, (scale - SCALE_FAR) / (SCALE_NEAR - SCALE_FAR)));
                screen[i] = {
                    sx: cx + rx * scale * spread + camX * 36 * scale,
                    sy: cy + dy * scale * spread + camY * 36 * scale,
                    dn,
                    det: p.det,
                };
            }

            // proximity graph
            const THR = Math.min(width, height) * 0.14;
            ctx.lineWidth = 1;
            for (let i = 0; i < COUNT; i++) {
                const a = screen[i];
                for (let j = i + 1; j < COUNT; j++) {
                    const b = screen[j];
                    const ddx = a.sx - b.sx, ddy = a.sy - b.sy;
                    const dist = Math.sqrt(ddx * ddx + ddy * ddy);
                    if (dist < THR) {
                        const al = (1 - dist / THR) * 0.16 * ((a.dn + b.dn) * 0.5 + 0.25);
                        ctx.strokeStyle = `rgba(${C_POINT}, ${al})`;
                        ctx.beginPath();
                        ctx.moveTo(a.sx, a.sy);
                        ctx.lineTo(b.sx, b.sy);
                        ctx.stroke();
                    }
                }
            }

            // points + detection brackets
            for (let i = 0; i < COUNT; i++) {
                const s = screen[i];
                const r = 1 + s.dn * 2.4;
                ctx.fillStyle = `rgba(${C_POINT}, ${0.25 + s.dn * 0.6})`;
                ctx.beginPath();
                ctx.arc(s.sx, s.sy, r, 0, Math.PI * 2);
                ctx.fill();

                if (s.det && s.dn > 0.55) {
                    const pulse = reduce ? 0 : (Math.sin(t * 2.2 + i) * 0.5 + 0.5);
                    const k = r + 5 + pulse * 3;
                    const seg = k * 0.5;
                    ctx.strokeStyle = `rgba(${C_DET}, ${0.5 * s.dn})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    for (const [hx, hy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
                        const x = s.sx + hx * k, y = s.sy + hy * k;
                        ctx.moveTo(x - hx * seg, y); ctx.lineTo(x, y);
                        ctx.moveTo(x, y - hy * seg); ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                }
            }

            raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);

        const onResize = () => resize();
        const onVis = () => {
            if (document.hidden) { running = false; cancelAnimationFrame(raf); }
            else if (!running) { running = true; last = 0; raf = requestAnimationFrame(frame); }
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('resize', onResize);
        document.addEventListener('visibilitychange', onVis);

        return () => {
            running = false;
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('resize', onResize);
            document.removeEventListener('visibilitychange', onVis);
        };
    }, [theme]);

    return <canvas ref={canvasRef} className="perception-field" aria-hidden="true" />;
};

export default PerceptionField;
