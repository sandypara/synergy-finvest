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

const partners = [
  {
    num: '01',
    name: 'SR Jewellers LLC',
    sector: 'Jewellery & Precious Metals',
    type: 'Commercial',
    desc: 'A premium jewellery retail and wholesale operation catering to high-net-worth clientele across the UAE and regional markets. SR Jewellers offers a curated selection of fine jewellery, bespoke pieces, and luxury accessories.',
    highlights: ['Fine jewellery retail & wholesale', 'Bespoke jewellery design', 'UAE & regional market presence', 'High-net-worth clientele focus'],
  },
  {
    num: '02',
    name: 'SR Bullion FZCO',
    sector: 'Bullion Trading & Investment',
    type: 'Commercial',
    desc: 'An institutional-grade bullion trading and investment company operating from the UAE Free Zone. SR Bullion FZCO facilitates precious metals transactions for institutional investors, traders, and high-net-worth individuals.',
    highlights: ['Gold & silver bullion trading', 'Institutional investment services', 'Free Zone operations', 'International market access'],
  },
  {
    num: '03',
    name: 'Tigonic Petroleum LLC',
    sector: 'Petroleum Trading & Energy',
    type: 'Industrial',
    desc: 'A leading integrated fuel supply and distribution company established in 2015. Tigonic Petroleum LLC delivers a wide array of petroleum products for local and global markets, with a strong focus on customer satisfaction and operational excellence.',
    highlights: ['Petroleum products supply', 'Marine bunker supply', 'Shipping & logistics', 'UAE & international markets'],
  },
  {
    num: '04',
    name: 'Tigonic Petroleum FZCO',
    sector: 'International Energy Investment',
    type: 'Industrial',
    desc: 'The Free Zone arm of the Tigonic Petroleum group, focused on international energy trading and investment. Tigonic Petroleum FZCO leverages combined expertise and resources to solidify its position within the global petroleum industry.',
    highlights: ['International energy trading', 'Cross-border petroleum investment', 'Strategic market partnerships', 'Global distribution network'],
  },
  {
    num: '05',
    name: 'PPS Properties LLC',
    sector: 'Real Estate Development',
    type: 'Commercial',
    desc: 'A strategic real estate investment and property management company targeting high-value residential and commercial assets across the UAE. PPS Properties LLC focuses on identifying premium development opportunities and delivering strong returns.',
    highlights: ['Residential & commercial property', 'Real estate investment', 'Property management', 'UAE market focus'],
  },
  {
    num: '06',
    name: 'PPS Legacy Holding LLC',
    sector: 'Strategic Holdings',
    type: 'Commercial',
    desc: 'A strategic holding company managing long-term asset portfolios and investment vehicles on behalf of the Synergy Finvest group. PPS Legacy Holding LLC provides the structural framework for multi-generational wealth preservation and growth.',
    highlights: ['Long-term asset management', 'Investment portfolio structuring', 'Wealth preservation', 'Multi-sector holdings'],
  },
  {
    num: '07',
    name: 'Lamer Capital Trade',
    sector: 'Commercial Trading',
    type: 'Commercial',
    desc: 'An international commercial trading company leveraging the UAE\'s strategic position as a global trading hub. Lamer Capital Trade facilitates cross-border transactions across a range of commodities and commercial goods.',
    highlights: ['International commodity trading', 'Cross-border commerce', 'UAE trading hub operations', 'Diverse product portfolio'],
  },
];

export default function PartnersPage() {
  return (
    <>
      <Helmet>
        <title>Partner Companies — Synergy Finvest FZCO</title>
        <meta name="description" content="Discover Synergy Finvest FZCO's seven strategic partner companies spanning energy, precious metals, real estate, and international trading across the UAE and global markets." />
      </Helmet>

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-background pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end" aria-hidden="true">
          <span className="font-heading text-[14vw] font-bold text-primary/[0.03] leading-none pr-8 whitespace-nowrap">PARTNERS</span>
        </div>
        <div className="relative container mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' as const }}>
            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }} className="h-px w-16 bg-primary mb-8" />
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4">Strategic Partners</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] max-w-3xl">
              Seven companies. One unified ecosystem.
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mt-6 max-w-xl">
              Each partner company operates independently within its sector while benefiting from the strategic oversight, capital, and expertise of the Synergy Finvest group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNER CARDS ─────────────────────────────────────────────────── */}
      <section className="bg-background py-8">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-0">
            {partners.map((p, i) => (
              <FadeIn key={p.num} delay={i * 0.06}>
                <div className={`py-14 border-b border-border ${i === 0 ? 'border-t' : ''}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Number + Name */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start gap-5">
                        <span className="font-heading text-5xl font-bold text-primary/20 leading-none shrink-0 select-none mt-1">{p.num}</span>
                        <div>
                          <h2 className="font-heading text-2xl font-semibold text-foreground leading-snug mb-2">{p.name}</h2>
                          <p className="text-xs tracking-[0.12em] uppercase text-primary font-medium mb-1">{p.sector}</p>
                          <span className={`inline-block text-[10px] tracking-[0.15em] uppercase font-medium px-2.5 py-1 border ${p.type === 'Industrial' ? 'border-primary/50 text-primary/70' : 'border-border text-muted-foreground'}`}>
                            {p.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>

                    {/* Highlights */}
                    <div className="lg:col-span-3">
                      <ul className="flex flex-col gap-2.5">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-xs text-foreground/70">
                            <span className="mt-1.5 w-3 h-px bg-primary shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <GoldRule className="w-16 mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Become part of the ecosystem
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              We are always open to strategic partnerships and investment opportunities that align with our group's vision and values.
            </p>
            <Link to="/contact" className="inline-block border border-primary text-primary text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-primary hover:text-background transition-all duration-300">
              Submit an Enquiry
            </Link>
            <GoldRule className="w-16 mx-auto mt-10" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
