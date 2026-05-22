import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: 'easeOut' as const }} className={className}>
      {children}
    </motion.div>
  );
}

function GoldRule({ className = '' }: { className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ scaleX: 0, originX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.7, ease: 'easeOut' as const }} className={`h-px bg-primary ${className}`} />
  );
}

const industrialActivities = [
  { title: 'Industrial Project Investments', desc: 'Identifying and funding high-potential industrial ventures with strong growth trajectories and sustainable business models.' },
  { title: 'Business Management & Operational Support', desc: 'Providing hands-on management expertise and operational frameworks to optimize performance across portfolio companies.' },
  { title: 'Strategic Growth Planning', desc: 'Developing and executing long-term growth strategies that align with market opportunities and stakeholder objectives.' },
  { title: 'Supply Chain & Commodity-Linked Industries', desc: 'Investing in supply chain infrastructure and commodity-linked businesses that benefit from regional trade flows.' },
  { title: 'Energy & Petroleum Investments', desc: 'Active participation in the energy sector through Tigonic Petroleum, covering trading, distribution, and marine bunker supply.' },
];

const commercialActivities = [
  { title: 'Real Estate & Property Management', desc: 'Strategic property investments and development through PPS Properties LLC, targeting high-value residential and commercial assets.' },
  { title: 'Precious Metals & Bullion Trading', desc: 'Institutional-grade bullion trading and investment through SR Bullion FZCO, serving regional and international markets.' },
  { title: 'Jewellery & Luxury Retail', desc: 'Premium jewellery retail and wholesale operations through SR Jewellers LLC, catering to high-net-worth clientele.' },
  { title: 'Investment Holdings & Asset Management', desc: 'Strategic holding structures through PPS Legacy Holding LLC, managing long-term asset portfolios and investment vehicles.' },
  { title: 'International Trading & Commercial Ventures', desc: 'Cross-border commercial trading through Lamer Capital Trade, leveraging UAE\'s position as a global trading hub.' },
];

const sectors = [
  { num: '01', name: 'Energy & Petroleum', companies: 'Tigonic Petroleum LLC · Tigonic Petroleum FZCO', color: 'border-primary' },
  { num: '02', name: 'Precious Metals', companies: 'SR Bullion FZCO', color: 'border-primary' },
  { num: '03', name: 'Jewellery & Luxury', companies: 'SR Jewellers LLC', color: 'border-primary' },
  { num: '04', name: 'Real Estate', companies: 'PPS Properties LLC', color: 'border-primary' },
  { num: '05', name: 'Strategic Holdings', companies: 'PPS Legacy Holding LLC', color: 'border-primary' },
  { num: '06', name: 'Commercial Trading', companies: 'Lamer Capital Trade', color: 'border-primary' },
];

export default function BusinessPage() {
  return (
    <>
      <Helmet>
        <title>Business Activities — Synergy Finvest FZCO</title>
        <meta name="description" content="Explore Synergy Finvest FZCO's core business activities across industrial and commercial sectors including energy, real estate, precious metals, and international trading." />
      </Helmet>

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-background pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end" aria-hidden="true">
          <span className="font-heading text-[14vw] font-bold text-primary/[0.03] leading-none pr-8 whitespace-nowrap">BUSINESS</span>
        </div>
        <div className="relative container mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' as const }}>
            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }} className="h-px w-16 bg-primary mb-8" />
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4">Core Activities</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] max-w-3xl">
              Two pillars. Six sectors. One unified strategy.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── SECTOR OVERVIEW ───────────────────────────────────────────────── */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn className="mb-12">
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-3">Sector Coverage</p>
            <h2 className="font-heading text-3xl font-semibold text-foreground max-w-lg">
              Diversified across six high-potential sectors
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.07}>
                <div className={`border-t-2 ${s.color} bg-background pt-6 pb-8 px-6`}>
                  <span className="font-heading text-4xl font-bold text-primary/20 block mb-4 select-none">{s.num}</span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.name}</h3>
                  <p className="text-xs tracking-[0.08em] text-muted-foreground">{s.companies}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL ────────────────────────────────────────────────────── */}
      <section className="bg-background py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[16vw] font-bold text-primary/[0.03] leading-none">IND</span>
        </div>
        <div className="relative container mx-auto px-6 lg:px-10">
          <FadeIn className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-primary" />
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium">Pillar One</p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground max-w-xl">
              Industrial Enterprises
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 max-w-2xl">
              Actively investing in and managing industrial ventures across high-potential sectors, with a focus on operational optimization, sustainable growth, and long-term value creation.
            </p>
          </FadeIn>
          <div className="flex flex-col gap-0">
            {industrialActivities.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-border last:border-0 group">
                  <div className="flex items-start gap-4">
                    <span className="font-heading text-2xl font-bold text-primary/25 shrink-0 select-none leading-none mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed md:col-span-2">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL ────────────────────────────────────────────────────── */}
      <section className="bg-card py-24 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[16vw] font-bold text-primary/[0.03] leading-none">COM</span>
        </div>
        <div className="relative container mx-auto px-6 lg:px-10">
          <FadeIn className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-primary" />
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium">Pillar Two</p>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground max-w-xl">
              Commercial Enterprises
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 max-w-2xl">
              Supporting businesses through capital investment, strategic guidance, and market expansion across key commercial sectors including real estate, precious metals, and international trade.
            </p>
          </FadeIn>
          <div className="flex flex-col gap-0">
            {commercialActivities.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-border last:border-0">
                  <div className="flex items-start gap-4">
                    <span className="font-heading text-2xl font-bold text-primary/25 shrink-0 select-none leading-none mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed md:col-span-2">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <GoldRule className="w-16 mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Explore investment opportunities
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              We welcome enquiries from investors and enterprises seeking exposure to our diversified portfolio of industrial and commercial businesses.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/partners" className="inline-block border border-primary text-primary text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-primary hover:text-background transition-all duration-300">
                View Partners
              </Link>
              <Link to="/contact" className="inline-block border border-border text-muted-foreground text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-foreground hover:text-foreground transition-all duration-300">
                Contact Us
              </Link>
            </div>
            <GoldRule className="w-16 mx-auto mt-10" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
