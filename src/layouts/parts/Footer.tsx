import { Link } from 'react-router-dom';

const partnerCompanies = [
  'SR Jewellers LLC',
  'SR Bullion FZCO',
  'Tigonic Petroleum LLC',
  'Tigonic Petroleum FZCO',
  'PPS Properties LLC',
  'PPS Legacy Holding LLC',
  'Lamer Capital Trade',
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/business', label: 'Business Activities' },
  { href: '/partners', label: 'Partner Companies' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/40 mt-auto">
      <div className="container mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <img
                src="/assets/synergy-logo.png"
                alt="Synergy Finvest FZCO"
                className="h-12 w-auto object-contain shrink-0 self-center"
              />
              <span className="font-heading text-sm font-semibold tracking-[0.12em] uppercase text-foreground whitespace-nowrap">
                Synergy Finvest <span className="text-primary">FZCO</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A diversified investment and management company headquartered in Dubai, UAE.
              Established 2020.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-5">
              Partner Companies
            </h4>
            <ul className="flex flex-col gap-3">
              {partnerCompanies.map((company) => (
                <li key={company} className="text-sm text-muted-foreground">
                  {company}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-5">
              Contact
            </h4>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed flex flex-col gap-3">
              <p>Platinum Tower, JLT<br />Jumeirah Lakes Towers<br />Dubai, United Arab Emirates</p>
              <a href="tel:+971543220789" className="hover:text-primary transition-colors">
                +971 54 322 0789
              </a>
              <a href="mailto:info@synergyfinvest.com" className="hover:text-primary transition-colors break-all">
                info@synergyfinvest.com
              </a>
              <p className="mt-1 text-xs tracking-[0.1em] uppercase text-primary/70">
                Est. 2020
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {currentYear} Synergy Finvest FZCO. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 tracking-[0.1em] uppercase">
            Strategic Investments. Enduring Value.
          </p>
        </div>
      </div>
    </footer>
  );
}
