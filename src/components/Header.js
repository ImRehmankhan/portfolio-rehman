import { useTheme } from '../hooks/useTheme';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Download } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 "
      style={{
        backgroundColor: 'rgba(var(--background-rgb), 0.8)',
        borderColor: 'var(--border)',
      }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center  h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-[100px] h-[60px]">
              <Image 
                src="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179527/site-logo_cmmgdi.png" 
                alt="Logo" 
                width={100}
                height={60}
                priority
                className="p-2"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="nav-item relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  color: isActive(item.path) ? 'var(--primary)' : 'var(--foreground)',
                }}
              >
                {item.name}
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--primary)',
                    transform: isActive(item.path) ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'var(--surface)',
                color: 'var(--foreground)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Download CV (desktop) */}
            <a
              href="/Resume_Muhammad_Rehman.pdf"
              target="_blank"
              className="hidden bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--primary-foreground)] md:inline-flex items-center px-4 py-2 rounded-lg font-medium transform hover:-translate-y-1 hover:scale-105 transition-all duration-200"
              aria-label="Download CV"
            >
              <Download className="w-4 h-4 mr-2" />
              <span className='text-sm font-medium transition-all duration-300'>Download CV</span> 
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: 'var(--surface)',
                color: 'var(--foreground)',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slideDown">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  color: isActive(item.path) ? 'var(--primary)' : 'var(--foreground)',
                  backgroundColor: isActive(item.path) ? 'var(--surface)' : 'transparent',
                  borderLeft: isActive(item.path) ? '3px solid var(--primary)' : '3px solid transparent',
                }}
              >
                {item.name}
              </Link>
            ))}
            {/* Download CV entry for mobile menu */}
            <a
              href="/Resume_Muhammad_Rehman.pdf"
              download
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-lg text-sm font-medium transform hover:-translate-y-0.5 hover:scale-105 transition duration-200 focus:outline-none"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
              }}
              aria-label="Download CV"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        )}
      </nav>

      <style jsx>{`
        .nav-item:hover {
          background-color: var(--surface);
        }
        
        .nav-item:hover span {
          transform: scaleX(1) !important;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}
