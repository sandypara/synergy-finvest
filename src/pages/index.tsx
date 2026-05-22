import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';

// ─── Reusable fade-in wrapper ───────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Gold rule that draws in ─────────────────────────────────────────────────
function GoldRule({ delay = 0, className = '' }: { delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, originX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' as const }}
      className={`h-px bg-primary ${className}`}
    />
  );
}

// ─── Geometric SVG decoration ────────────────────────────────────────────────
function GeometricDecoration() {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Large angular plane */}
      <polygon points="120,480 580,60 580,480" fill="#1E2230" opacity="0.8" />
      {/* Overlapping plane */}
      <polygon points="200,480 580,140 580,480" fill="#181C26" opacity="0.6" />
      {/* Gold outline diamond */}
      <polygon
        points="380,80 520,200 380,320 240,200"
        stroke="#C9A84C"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Inner diamond */}
      <polygon
        points="380,120 480,200 380,280 280,200"
        stroke="#C9A84C"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
      />
      {/* Fine grid lines */}
      <line x1="0" y1="200" x2="600" y2="200" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2" />
      <line x1="0" y1="300" x2="600" y2="300" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2" />
      <line x1="200" y1="0" x2="200" y2="500" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2" />
      <line x1="400" y1="0" x2="400" y2="500" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2" />
      {/* Diagonal accent */}
      <line x1="100" y1="0" x2="600" y2="400" stroke="#C9A84C" strokeWidth="0.8" opacity="0.25" />
      <line x1="0" y1="100" x2="500" y2="500" stroke="#C9A84C" strokeWidth="0.5" opacity="0.15" />
      {/* Corner mark */}
      <rect x="520" y="40" width="40" height="40" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <rect x="530" y="50" width="20" height="20" stroke="#C9A84C" strokeWidth="0.4" fill="none" opacity="0.3" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const industrialFocus = [
  'Industrial project investments',
  'Business management & operational support',
  'Strategic growth planning',
  'Supply chain & commodity-linked industries',
  'Energy and petroleum-related investments',
];

const commercialFocus = [
  'Real estate & property management',
  'Precious metals & bullion trading',
  'Jewellery & luxury retail',
  'Investment holdings & asset management',
  'International trading & commercial ventures',
];

const partnerCompanies = [
  { name: 'SR Jewellers LLC', sector: 'Jewellery & Precious Metals' },
  { name: 'SR Bullion FZCO', sector: 'Bullion Trading & Investment' },
  { name: 'Tigonic Petroleum LLC', sector: 'Petroleum Trading & Energy' },
  { name: 'Tigonic Petroleum FZCO', sector: 'International Energy Investment' },
  { name: 'PPS Properties LLC', sector: 'Real Estate Development' },
  { name: 'PPS Legacy Holding LLC', sector: 'Strategic Holdings' },
  { name: 'Lamer Capital Trade', sector: 'Commercial Trading' },
];

const missionPoints = [
  'Create long-term value for stakeholders through strategic investments and professional management.',
  'Build strong partnerships across industrial and commercial sectors.',
  'Deliver quality-driven and sustainable business solutions.',
  'Maintain the highest standards of ethics, compliance, and operational excellence.',
];

const values = [
  { label: 'Integrity', desc: 'Unwavering ethical standards in every transaction and relationship.' },
  { label: 'Excellence', desc: 'Relentless pursuit of superior outcomes across all business activities.' },
  { label: 'Innovation', desc: 'Forward-thinking strategies that anticipate and shape market dynamics.' },
  { label: 'Accountability', desc: 'Full ownership of decisions, outcomes, and stakeholder commitments.' },
  { label: 'Sustainability', desc: 'Long-horizon thinking that balances growth with responsible stewardship.' },
  { label: 'Partnership', desc: 'Deep, enduring relationships built on trust and mutual value creation.' },
];

const whyChoose = [
  { num: '01', title: 'Diversified Portfolio', desc: 'Exposure across industrial, commercial, energy, and real estate sectors.' },
  { num: '02', title: 'Industry Partnerships', desc: 'Seven strategic partner companies operating across key growth sectors.' },
  { num: '03', title: 'UAE & Global Reach', desc: 'Headquartered in Dubai with regional and international market presence.' },
  { num: '04', title: 'Expert Management', desc: 'Experienced advisory and operational leadership driving consistent results.' },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Synergy Finvest FZCO — Strategic Investments. Enduring Value.</title>
        <meta
          name="description"
          content="Synergy Finvest FZCO is a diversified investment and management company headquartered in Dubai, UAE. Specializing in industrial and commercial enterprise investments."
        />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(/airo-assets/images/pages/home/hero-texture)` }}
          aria-hidden="true"
        />
        {/* Geometric decoration — right half */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-60" aria-hidden="true">
          <GeometricDecoration />
        </div>
        {/* Gradient fade left */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-6 lg:px-10 py-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' as const }}
            >
              {/* Gold rule above headline */}
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
                className="h-px w-20 bg-primary mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-6"
              >
                Dubai, United Arab Emirates · Est. 2020
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' as const }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05] mb-8"
              >
                Strategic
                <br />
                <span className="text-primary">Investments.</span>
                <br />
                Enduring Value.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' as const }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
              >
                Synergy Finvest FZCO is a diversified investment and management company
                building long-term value across industrial and commercial enterprises in
                regional and international markets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/business"
                  className="inline-block border border-primary text-primary text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-primary hover:text-background transition-all duration-300"
                >
                  Our Business
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border border-border text-muted-foreground text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-foreground hover:text-foreground transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE ACTIVITIES ──────────────────────────────────────────────── */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-3">
              Core Business Activities
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-16 max-w-xl">
              Two pillars of a diversified investment strategy
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16">
            {/* Industrial */}
            <FadeIn delay={0.1}>
              <div className="border-t border-primary pt-8 mb-12 md:mb-0">
                <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-6">
                  Industrial Enterprises
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Actively investing in and managing industrial ventures across high-potential
                  sectors, with a focus on operational optimization and sustainable growth.
                </p>
                <ul className="flex flex-col gap-3">
                  {industrialFocus.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-2 w-4 h-px bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Commercial */}
            <FadeIn delay={0.2}>
              <div className="border-t border-primary pt-8">
                <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-6">
                  Commercial Enterprises
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Supporting businesses through capital investment, strategic guidance, and
                  market expansion across key commercial sectors.
                </p>
                <ul className="flex flex-col gap-3">
                  {commercialFocus.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-2 w-4 h-px bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ─────────────────────────────────────────────── */}
      <section className="bg-background py-28 relative overflow-hidden">
        {/* Decorative oversized text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-heading text-[18vw] font-bold text-primary/[0.03] whitespace-nowrap">
            VISION
          </span>
        </div>

        <div className="relative container mx-auto px-6 lg:px-10">
          {/* Vision */}
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <GoldRule className="w-12 mx-auto mb-10" />
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-[1.2] mb-6">
              "To become a globally recognized investment and management company known for
              excellence, innovation, reliability, and sustainable business growth."
            </blockquote>
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
              Our Vision
            </p>
            <GoldRule className="w-12 mx-auto mt-10" />
          </FadeIn>

          {/* Mission */}
          <FadeIn delay={0.15}>
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium text-center mb-12">
              Our Mission
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {missionPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="font-heading text-2xl font-semibold text-primary/40 shrink-0 leading-none mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PARTNER COMPANIES ────────────────────────────────────────────── */}
      <section className="bg-card py-24 relative overflow-hidden">
        {/* Decorative oversized number */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-heading text-[20vw] font-bold text-primary/[0.04] leading-none">
            07
          </span>
        </div>

        <div className="relative container mx-auto px-6 lg:px-10">
          <FadeIn className="mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-3">
              Strategic Partners
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground max-w-lg">
              Seven companies. One unified ecosystem.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {partnerCompanies.map((company, i) => (
              <FadeIn key={company.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ borderColor: 'rgba(201,168,76,0.6)' }}
                  className="group bg-background border border-border p-7 cursor-default transition-all duration-300 hover:bg-muted/30"
                >
                  <p className="font-heading text-lg font-semibold text-foreground mb-2 leading-snug">
                    {company.name}
                  </p>
                  <p className="text-xs tracking-[0.1em] uppercase text-primary font-medium">
                    {company.sector}
                  </p>
                </motion.div>
              </FadeIn>
            ))}

            {/* 8th cell — CTA */}
            <FadeIn delay={0.49}>
              <Link
                to="/partners"
                className="group bg-transparent border border-primary/30 p-7 flex flex-col justify-between h-full hover:border-primary transition-all duration-300 min-h-[120px]"
              >
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium mb-4">
                  View All Partners
                </p>
                <span className="text-primary text-2xl font-heading font-semibold group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  →
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn className="mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-3">
              Why Synergy Finvest
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground max-w-lg">
              Built for long-term value creation
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {whyChoose.map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.1}>
                <div className="flex items-start gap-6">
                  <span className="font-heading text-5xl font-bold text-primary/20 leading-none shrink-0 select-none">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────────── */}
      <section className="bg-card py-24 relative overflow-hidden">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-heading text-[14vw] font-bold text-primary/[0.04] leading-none">
            VALUES
          </span>
        </div>

        <div className="relative container mx-auto px-6 lg:px-10">
          <FadeIn className="mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-3">
              Corporate Values
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground max-w-lg">
              The principles that guide every decision
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <FadeIn key={value.label} delay={i * 0.08}>
                <div className="border-t border-border pt-6">
                  <p className="font-heading text-2xl font-semibold text-primary mb-3">
                    {value.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-background py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <GoldRule className="w-16 mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-[1.1]">
              Ready to explore a strategic partnership?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              We welcome enquiries from investors, business partners, and enterprises
              seeking long-term growth and value creation.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-primary text-primary text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-primary hover:text-background transition-all duration-300"
            >
              Submit an Enquiry
            </Link>
            <GoldRule className="w-16 mx-auto mt-10" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
