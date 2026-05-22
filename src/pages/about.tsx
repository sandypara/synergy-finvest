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

const leadership = [
  {
    role: 'Group Chairman',
    desc: 'Provides strategic direction and oversees the overall vision and governance of Synergy Finvest FZCO and its affiliated companies.',
  },
  {
    role: 'Chief Executive Officer',
    desc: 'Leads day-to-day operations, drives business development, and manages relationships across the group\'s diverse portfolio.',
  },
  {
    role: 'Chief Investment Officer',
    desc: 'Oversees capital allocation, investment strategy, and portfolio performance across industrial and commercial sectors.',
  },
  {
    role: 'Head of Operations',
    desc: 'Ensures operational excellence across all partner companies, managing processes, compliance, and performance benchmarks.',
  },
];


export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Synergy Finvest FZCO</title>
        <meta name="description" content="Learn about Synergy Finvest FZCO — a Dubai-based diversified investment and management company with a portfolio spanning energy, real estate, precious metals, and commercial trading." />
      </Helmet>

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-background pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end" aria-hidden="true">
          <span className="font-heading text-[18vw] font-bold text-primary/[0.03] leading-none pr-8">ABOUT</span>
        </div>
        <div className="relative container mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' as const }}>
            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }} className="h-px w-16 bg-primary mb-8" />
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4">Who We Are</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] max-w-3xl">
              A legacy of strategic investment and enduring partnerships.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ──────────────────────────────────────────────── */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-6">Company Overview</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-[1.1] mb-8">
                Synergy Finvest FZCO
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Synergy Finvest FZCO is a Dubai-based diversified investment and management company established in 2020. Operating as a Free Zone Company (FZCO) in the United Arab Emirates, we serve as the parent holding entity for a growing portfolio of strategic partner companies.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Our mandate is to identify, invest in, and actively manage businesses across high-potential industrial and commercial sectors. We bring together capital, expertise, and operational support to create sustainable, long-term value for our stakeholders.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                With a presence spanning energy, precious metals, real estate, and international trading, Synergy Finvest FZCO is positioned as a trusted investment partner in regional and global markets.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '2020', label: 'Year Established' },
                  { num: '7', label: 'Partner Companies' },
                  { num: '5+', label: 'Industry Sectors' },
                  { num: 'UAE', label: 'Headquarters' },
                ].map((stat) => (
                  <div key={stat.label} className="border border-border bg-background p-8">
                    <p className="font-heading text-4xl font-semibold text-primary mb-2">{stat.num}</p>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ──────────────────────────────────────────────── */}
      <section className="bg-background py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading text-[16vw] font-bold text-primary/[0.03] whitespace-nowrap">VISION</span>
        </div>
        <div className="relative container mx-auto px-6 lg:px-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <GoldRule className="w-12 mx-auto mb-10" />
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-[1.2] mb-6">
              "To become a globally recognized investment and management company known for excellence, innovation, reliability, and sustainable business growth."
            </blockquote>
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Our Vision</p>
            <GoldRule className="w-12 mx-auto mt-10" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-6">Our Mission</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                To create long-term value for stakeholders through strategic investments and professional management across diverse industrial and commercial sectors.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We are committed to building strong partnerships, delivering quality-driven and sustainable business solutions, and maintaining the highest standards of ethics, compliance, and operational excellence.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-6">Our Approach</p>
              <ul className="flex flex-col gap-4">
                {['Identify high-potential investment opportunities', 'Provide active management and operational support', 'Build long-term relationships with partners and stakeholders', 'Drive sustainable growth across all portfolio companies'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-2 w-4 h-px bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ────────────────────────────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn className="mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-3">Leadership</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground max-w-lg">
              Experienced leadership driving results
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((l, i) => (
              <FadeIn key={l.role} delay={i * 0.1}>
                <div className="border-t border-primary/40 pt-7 hover:border-primary transition-colors duration-300">
                  <p className="font-heading text-xl font-semibold text-foreground mb-3">{l.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
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
              Interested in partnering with us?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              We welcome enquiries from investors, enterprises, and strategic partners looking to build long-term value.
            </p>
            <Link to="/contact" className="inline-block border border-primary text-primary text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-primary hover:text-background transition-all duration-300">
              Get in Touch
            </Link>
            <GoldRule className="w-16 mx-auto mt-10" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
