import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/business', label: 'Business' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/assets/synergy-logo.png"
              alt="Synergy Finvest FZCO"
              className="h-12 w-auto object-contain shrink-0 self-center"
            />
            <span className="hidden sm:block font-heading text-sm font-semibold tracking-[0.12em] uppercase text-foreground whitespace-nowrap">
              Synergy Finvest <span className="text-primary">FZCO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-xs tracking-[0.15em] uppercase font-medium transition-colors group ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="text-xs tracking-[0.15em] uppercase font-medium border border-primary text-primary px-5 py-2.5 hover:bg-primary hover:text-background transition-all duration-300"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors py-1 ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 text-xs tracking-[0.15em] uppercase font-medium border border-primary text-primary px-5 py-2.5 text-center hover:bg-primary hover:text-background transition-all duration-300 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
