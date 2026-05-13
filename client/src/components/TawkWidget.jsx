import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Replace these two values with your own from https://dashboard.tawk.to
// Administration → Chat Widget → embed snippet URL
const TAWK_PROPERTY_ID = '5cc8f9a92846b90c57ac49a3'; // e.g. "64a1b2c3d4e5f6a7b8c9d0e1"
const TAWK_WIDGET_ID = 'default';     // e.g. "1h0abcdef"

export default function TawkWidget() {
  const location = useLocation();
  const [ready, setReady] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(22);

  useEffect(() => {
    // Guard: skip if already loaded
    if (window.Tawk_API && window.Tawk_API.hideWidget) {
      window.Tawk_API.hideWidget();
      setReady(true);
      return;
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Hide Tawk's own default button so only our custom one shows
    window.Tawk_API.onLoad = () => {
      window.Tawk_API.hideWidget();
      setReady(true);
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const DEFAULT_BOTTOM = 22;
    const CLEARANCE = 14;

    let rafId = 0;

    const updateOffset = () => {
      const anchor = document.querySelector('.islands-strip') || document.querySelector('.site-footer');

      if (!anchor) {
        setBottomOffset(DEFAULT_BOTTOM);
        return;
      }

      const rect = anchor.getBoundingClientRect();
      const overlap = window.innerHeight - rect.top + CLEARANCE;
      const nextBottom = overlap > DEFAULT_BOTTOM ? Math.round(overlap) : DEFAULT_BOTTOM;

      setBottomOffset((prev) => (prev === nextBottom ? prev : nextBottom));
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateOffset();
      });
    };

    updateOffset();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [location.pathname]);

  const handleToggle = () => {
    if (!window.Tawk_API) return;
    window.Tawk_API.toggle();
  };

  return (
    <button
      type="button"
      className="tawk-fab"
      onClick={handleToggle}
      style={{ bottom: `${bottomOffset}px` }}
      aria-label="Open live chat support"
      title="Chat with us"
    >
      {/* Chat bubble icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        width="26"
        height="26"
      >
        <path d="M12 2C6.477 2 2 6.163 2 11.25c0 2.54 1.09 4.836 2.857 6.506L4 22l4.496-1.542A10.18 10.18 0 0 0 12 20.5c5.523 0 10-4.163 10-9.25S17.523 2 12 2Z" />
      </svg>
      <span className="tawk-fab-label">Live Chat</span>
    </button>
  );
}
