import { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HardwarePage from './pages/HardwarePage';
import ContactPage from './pages/ContactPage';
import SuppliersPage from './pages/SuppliersPage';
import DotMatrixWave from './components/DotMatrixWave';

export default function App() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark'; } catch { return false; }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  }, [dark]);

  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px -6% 0px' }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <div className="ambient-bg" aria-hidden="true">
        <DotMatrixWave />
        <span className="blob blob-a"></span>
        <span className="blob blob-b"></span>
        <span className="blob blob-c"></span>
        <span className="grid-overlay"></span>
      </div>

      <header className="site-header" id="top">
        <div className="container nav-shell">
          <Link to="/" className="brand" onClick={closeNav}>
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-palm">
                {/* shared root base */}
                <path d="M16 44 C19 42 21 41 23 41 C25 41 28 42 31 44" stroke="#8a6035" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                {/* tall main trunk — leans slightly left */}
                <path d="M23 41 C22.5 35 21 27 20 19 C19.5 13 19 9 20 5" stroke="#a0714f" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                {/* short right trunk — leans right from same root */}
                <path d="M25 41 C27 36 30 30 33 25 C35 21 36 18 38 15" stroke="#b07f58" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
                {/* tall palm fronds centered ~20,5 */}
                <path d="M20 5 C15 0 7 1 5 6 C10 5 16 6 20 5Z" fill="#00b37a"/>
                <path d="M20 5 C25 0 33 1 35 6 C30 5 24 6 20 5Z" fill="#00c87a"/>
                <path d="M20 5 C14 -2 10 -4 7 -1 C12 2 16 4 20 5Z" fill="#00a06a"/>
                <path d="M20 5 C26 -2 30 -4 33 -1 C28 2 24 4 20 5Z" fill="#00b870"/>
                <path d="M20 5 C18 -2 16 -4 14 -2 C17 1 19 3 20 5Z" fill="#009060"/>
                <path d="M20 5 C22 -2 24 -4 26 -2 C23 1 21 3 20 5Z" fill="#00a868"/>
                {/* tall coconuts */}
                <circle cx="18" cy="7" r="1.4" fill="#c8a44a"/>
                <circle cx="21.5" cy="6.5" r="1.4" fill="#c8a44a"/>
                <circle cx="20" cy="9" r="1.4" fill="#b8943a"/>
                {/* short palm fronds centered ~38,15 */}
                <path d="M38 15 C34 11 28 12 27 16 C31 15 35 15 38 15Z" fill="#00b37a"/>
                <path d="M38 15 C42 11 47 12 48 15 C45 14 41 15 38 15Z" fill="#00c87a"/>
                <path d="M38 15 C33 9 31 6 29 8 C33 10 36 12 38 15Z" fill="#00a06a"/>
                <path d="M38 15 C43 9 45 6 47 8 C43 10 40 12 38 15Z" fill="#00b870"/>
                <path d="M38 15 C36 8 35 5 33 7 C36 10 37 12 38 15Z" fill="#009060"/>
                <path d="M38 15 C40 8 41 5 43 7 C40 10 39 12 38 15Z" fill="#00a868"/>
                {/* short coconuts */}
                <circle cx="36.5" cy="16.5" r="1.1" fill="#c8a44a"/>
                <circle cx="39.5" cy="16" r="1.1" fill="#b8943a"/>
              </svg>
            </span>
            <span className="brand-text">AkamaiPOS</span>
          </Link>

          <button
            className="menu-toggle"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span></span>
            <span></span>
          </button>

          <nav className={`site-nav${navOpen ? ' open' : ''}`}>
            <NavLink to="/" onClick={closeNav} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/hardware" onClick={closeNav} className={({ isActive }) => (isActive ? 'active' : '')}>POS Hardware</NavLink>
            <NavLink to="/suppliers" onClick={closeNav} className={({ isActive }) => (isActive ? 'active' : '')}>Suppliers</NavLink>
            <NavLink to="/contact" onClick={closeNav} className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
            <Link to="/contact" className="button button-nav" onClick={closeNav}>Book a Demo</Link>
            <button
              className="theme-toggle"
              onClick={() => setDark((v) => !v)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Light mode' : 'Dark mode'}
            >
              <span className="theme-toggle__track">
                <span className="theme-toggle__thumb">
                  {dark ? '🌙' : '☀️'}
                </span>
              </span>
            </button>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hardware" element={<HardwarePage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <p>© 2026 AkamaiPOS. Built for modern point-of-sale operations.</p>
          <Link to="/contact">Contact Support</Link>
        </div>
      </footer>
    </>
  );
}
