import { useEffect, useRef } from 'react';

export default function DotMatrixWave() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastFrame = 0;
    let isScrolling = false;
    let scrollTimer = 0;
    let isPageHidden = document.hidden;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (timeMs) => {
      const t = timeMs * 0.001;
      const compactView = width < 900;
      const spacing = isScrolling ? (compactView ? 25 : 22) : (compactView ? 20 : 17);
      const cols = Math.max(compactView ? 34 : 44, Math.floor(width / spacing));
      const rows = Math.max(compactView ? 20 : 26, Math.floor(height / spacing));
      const spanX = width * 1.12;
      const depth = height * 1.35;
      const stepX = spanX / (cols - 1);
      const stepZ = depth / (rows - 1);
      const originX = width * 0.5;
      const originY = height * 0.32;
      const camera = 960;

      ctx.clearRect(0, 0, width, height);

      for (let zi = 0; zi < rows; zi += 1) {
        const z = zi * stepZ;
        for (let xi = 0; xi < cols; xi += 1) {
          const x = xi * stepX - spanX * 0.5;
          const phase = x * 0.013 + z * 0.02 + t * 2.1;
          const wave = Math.sin(phase) * 0.7 + Math.sin(phase * 0.55 - t * 1.1) * 0.3;

          const y = wave * 12.5;
          const zCam = z + 80;
          const p = camera / (camera + zCam);
          const sx = originX + x * p;
          const sy = originY + z * 0.56 - y * p * 1.8;

          if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) continue;

          const radius = Math.max(0.4, 1.45 * p);
          const depthFade = 1 - zi / rows;
          const crest = (wave + 1) * 0.5;
          // Tropical-tech palette: bioluminescent cyan-teal at crests, deep ocean at troughs
          const alpha = 0.07 + depthFade * 0.28 + crest * 0.10;
          // Lerp between deep-ocean-teal (near) and lagoon-cyan (far/crest)
          const r = Math.round(crest * 8);                        // slight warm tint on crests
          const green = Math.round(180 + crest * 56);             // 180–236: teal to biolume green
          const blue = Math.round(190 + depthFade * 38 - crest * 12); // 190–228: ocean blue

          ctx.beginPath();
          ctx.fillStyle = `rgba(${r}, ${green}, ${blue}, ${alpha.toFixed(3)})`;
          ctx.arc(sx, sy, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const frame = (timeMs) => {
      if (isPageHidden) {
        rafId = window.requestAnimationFrame(frame);
        return;
      }

      const compactView = width < 900;
      const targetFps = isScrolling ? (compactView ? 22 : 26) : (compactView ? 26 : 30);
      const minFrameTime = 1000 / targetFps;

      if (timeMs - lastFrame >= minFrameTime) {
        draw(timeMs);
        lastFrame = timeMs;
      }

      rafId = window.requestAnimationFrame(frame);
    };

    const onScroll = () => {
      isScrolling = true;
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        isScrolling = false;
      }, 140);
    };

    const onVisibilityChange = () => {
      isPageHidden = document.hidden;
    };

    resize();

    if (prefersReducedMotion) {
      draw(0);
      return () => {
        window.removeEventListener('resize', resize);
      };
    }

    rafId = window.requestAnimationFrame(frame);
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.clearTimeout(scrollTimer);
    };
  }, []);

  return <canvas className="dot-matrix-wave" ref={canvasRef} aria-hidden="true" />;
}
