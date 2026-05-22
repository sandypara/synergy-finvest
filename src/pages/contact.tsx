import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

const enquiryTypes = [
  'Investment Enquiry',
  'Business Partnership',
  'General Information',
  'Media & Press',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact — Synergy Finvest FZCO</title>
        <meta name="description" content="Get in touch with Synergy Finvest FZCO. Submit an investment enquiry, explore business partnerships, or contact our Dubai headquarters." />
      </Helmet>

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-background pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-end" aria-hidden="true">
          <span className="font-heading text-[14vw] font-bold text-primary/[0.03] leading-none pr-8 whitespace-nowrap">CONTACT</span>
        </div>
        <div className="relative container mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' as const }}>
            <motion.div initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }} className="h-px w-16 bg-primary mb-8" />
            <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-4">Get in Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.05] max-w-3xl">
              Let's explore what we can build together.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT CONTENT ───────────────────────────────────────────────── */}
      <section className="bg-card py-24">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-8">Headquarters</p>

                <div className="flex flex-col gap-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium mb-1">Address</p>
                      <p className="text-sm text-foreground leading-relaxed">
                        Platinum Tower, JLT<br />
                        Jumeirah Lakes Towers<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium mb-1">Phone</p>
                      <a href="tel:+971543220789" className="text-sm text-foreground hover:text-primary transition-colors">
                        +971 54 322 0789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium mb-1">Email</p>
                      <a href="mailto:info@synergyfinvest.com" className="text-sm text-foreground hover:text-primary transition-colors">
                        info@synergyfinvest.com
                      </a>
                    </div>
                  </div>
                </div>

                <GoldRule className="w-full mb-8" />

                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium mb-4">Office Hours</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Monday – Friday<br />
                  9:00 AM – 6:00 PM (GST, UTC+4)
                </p>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 border border-primary flex items-center justify-center mb-8">
                      <Send size={24} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Enquiry Received</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                      Thank you for reaching out. A member of our team will review your enquiry and respond within 2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-2">Submit an Enquiry</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs tracking-[0.12em] uppercase text-muted-foreground font-medium mb-2">Full Name *</label>
                        <input
                          id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                          className="w-full bg-background border border-border text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs tracking-[0.12em] uppercase text-muted-foreground font-medium mb-2">Company</label>
                        <input
                          id="company" name="company" type="text" value={formData.company} onChange={handleChange}
                          className="w-full bg-background border border-border text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs tracking-[0.12em] uppercase text-muted-foreground font-medium mb-2">Email Address *</label>
                        <input
                          id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                          className="w-full bg-background border border-border text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs tracking-[0.12em] uppercase text-muted-foreground font-medium mb-2">Phone Number</label>
                        <input
                          id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                          className="w-full bg-background border border-border text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                          placeholder="+971 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="type" className="block text-xs tracking-[0.12em] uppercase text-muted-foreground font-medium mb-2">Enquiry Type *</label>
                      <select
                        id="type" name="type" required value={formData.type} onChange={handleChange}
                        className="w-full bg-background border border-border text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select enquiry type</option>
                        {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs tracking-[0.12em] uppercase text-muted-foreground font-medium mb-2">Message *</label>
                      <textarea
                        id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                        className="w-full bg-background border border-border text-foreground text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/40"
                        placeholder="Please describe your enquiry or investment interest..."
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs text-muted-foreground/60">* Required fields</p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-3 border border-primary text-primary text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-primary hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? 'Sending...' : 'Send Enquiry'}
                        {!submitting && <Send size={14} />}
                      </button>
                    </div>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
