'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin, CheckCircle2, ChevronRight, Shield, Star, Award, Clock, ArrowRight, ChevronDown } from 'lucide-react';

const LOGO_SVG = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <defs>
    <radialGradient id="g1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8B5A5A"/>
      <stop offset="100%" stop-color="#3D2626"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="60" r="56" fill="url(#g1)"/>
  <ellipse cx="45" cy="60" rx="18" ry="26" fill="none" stroke="#D4AF37" stroke-width="2.5"/>
  <ellipse cx="75" cy="60" rx="18" ry="26" fill="none" stroke="#D4AF37" stroke-width="2.5"/>
  <path d="M52 44 Q60 38 68 44" fill="none" stroke="#F9F7F4" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M52 76 Q60 82 68 76" fill="none" stroke="#F9F7F4" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="60" cy="52" r="2.5" fill="#D4AF37"/>
  <path d="M58 55 Q60 64 58 72" stroke="#D4AF37" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M62 55 Q60 64 62 72" stroke="#D4AF37" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`)}`;

export default function AbleDERM() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [faqOpen, setFaqOpen] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const conditions = [
    'Acne & Acne Scarring', 'Eczema & Dermatitis', 'Psoriasis', 'Rosacea',
    'Pigmentation Disorders', 'Skin Cancer Screening', 'Mole Assessment',
    'Alopecia', 'Urticaria', 'Contact Dermatitis', 'Seborrhoeic Dermatitis', 'Vitiligo',
  ];

  const aesthetics = [
    { name: 'Anti-Wrinkle Treatments', desc: 'Botulinum toxin for dynamic lines and prevention' },
    { name: 'Dermal Fillers', desc: 'Hyaluronic acid volume restoration and contouring' },
    { name: 'Chemical Peels', desc: 'Medical-grade resurfacing for tone and texture' },
    { name: 'Cryotherapy', desc: 'Precision freezing for lesions and skin imperfections' },
    { name: 'Benign Lesion Removal', desc: 'Surgical excision with histological analysis' },
    { name: 'Skin Tag Removal', desc: 'Swift, minimally invasive removal with clean results' },
  ];

  const pricingTiers = [
    {
      name: 'Initial Consultation',
      price: '£180',
      desc: 'Comprehensive first assessment',
      features: ['60-minute consultation', 'Full skin examination', 'Personalised treatment plan', 'Written summary provided', 'Follow-up guidance'],
      highlight: false,
    },
    {
      name: 'Follow-Up',
      price: '£95',
      desc: 'Review & treatment adjustment',
      features: ['30-minute review', 'Treatment monitoring', 'Prescription renewal', 'Progress photography', 'Plan refinement'],
      highlight: true,
    },
    {
      name: 'Minor Surgery',
      price: 'From £350',
      desc: 'Lesion removal & procedures',
      features: ['Pre-op assessment included', 'Local anaesthesia', 'Histology if required', 'Wound care guidance', 'Post-op review'],
      highlight: false,
    },
  ];

  const insurers = ['Bupa', 'AXA Health', 'Aviva', 'Vitality', 'WPA', 'Cigna'];

  const faqs = [
    { q: 'Do I need a GP referral?', a: 'No referral is required for self-pay patients. You can book directly via our online booking system or by calling the practice. We accept GP referral letters but they are not mandatory.' },
    { q: 'Is the practice CQC registered?', a: 'Yes. AbleDERM operates within Bradstowe Surgery, a fully CQC-registered premises in Woking, Surrey. All consultations are conducted under the surgery\'s CQC registration, providing the highest standard of regulated care.' },
    { q: 'What should I bring to my appointment?', a: 'Please bring a list of any current medications, details of any previous skin treatments or biopsies, and if applicable, any referral letters or dermatology reports. Wear minimal makeup to allow full skin examination.' },
    { q: 'Do you treat children?', a: 'Dr Lochab sees patients aged 16 and over for aesthetic consultations, and all ages for medical dermatology conditions with parental consent for under-18s.' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9F7F4', fontFamily: '"DM Sans", -apple-system, sans-serif', color: '#2C2C2C' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --burg: #6B3E3E;
          --burg-deep: #3D2626;
          --burg-mid: #8B5A5A;
          --burg-pale: #C4A4A4;
          --cream: #F9F7F4;
          --cream-dark: #F0EBE3;
          --cream-deeper: #E8DFD3;
          --gold: #D4AF37;
          --gold-light: #E8CB6A;
          --text: #2C2C2C;
          --text-muted: #6B6060;
        }

        html { scroll-behavior: smooth; }

        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        .nav-link {
          color: var(--burg);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 0;
          position: relative;
          transition: color 0.25s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: var(--burg-deep); }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--burg);
          color: var(--cream);
          border: none;
          padding: 14px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
          text-decoration: none;
        }
        .btn-primary:hover { background: var(--burg-deep); transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--burg);
          border: 1px solid var(--burg-pale);
          padding: 13px 30px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }
        .btn-ghost:hover { border-color: var(--burg); background: rgba(107,62,62,0.05); }

        .condition-tag {
          padding: 8px 16px;
          background: rgba(107,62,62,0.06);
          border: 1px solid rgba(107,62,62,0.15);
          font-size: 13px;
          color: var(--burg-deep);
          font-weight: 400;
          transition: all 0.25s;
          cursor: default;
        }
        .condition-tag:hover {
          background: rgba(107,62,62,0.12);
          border-color: rgba(107,62,62,0.3);
        }

        .aesthetic-card {
          padding: 28px;
          background: #fff;
          border: 1px solid rgba(107,62,62,0.1);
          border-top: 3px solid transparent;
          transition: all 0.3s;
          position: relative;
        }
        .aesthetic-card:hover {
          border-top-color: var(--gold);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(61,38,38,0.08);
        }

        .pricing-card {
          padding: 36px 28px;
          background: #fff;
          border: 1px solid rgba(107,62,62,0.12);
          position: relative;
          transition: box-shadow 0.3s;
        }
        .pricing-card.featured {
          border: 2px solid var(--burg);
          background: var(--burg-deep);
          color: var(--cream);
        }
        .pricing-card:not(.featured):hover {
          box-shadow: 0 16px 48px rgba(61,38,38,0.1);
        }

        .gold-divider {
          width: 48px;
          height: 1px;
          background: var(--gold);
          margin: 16px 0 24px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
          display: block;
        }

        .faq-item {
          border-bottom: 1px solid rgba(107,62,62,0.12);
        }
        .faq-toggle {
          width: 100%;
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          cursor: pointer;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: var(--burg-deep);
        }
        .faq-toggle svg {
          flex-shrink: 0;
          transition: transform 0.3s;
          color: var(--burg);
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.35s ease;
          font-size: 14px;
          line-height: 1.75;
          color: var(--text-muted);
          padding: 0 0 20px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .fade-up-delay-1 { animation: fadeUp 0.8s ease 0.15s forwards; opacity: 0; }
        .fade-up-delay-2 { animation: fadeUp 0.8s ease 0.3s forwards; opacity: 0; }
        .fade-up-delay-3 { animation: fadeUp 0.8s ease 0.45s forwards; opacity: 0; }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .aesthetics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ─── NAVIGATION ─── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.4s ease',
        backgroundColor: scrolled ? 'rgba(249,247,244,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(107,62,62,0.12)' : 'none',
        padding: scrolled ? '0' : '0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 68 : 80, transition: 'height 0.4s' }}>
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img src={LOGO_SVG} alt="AbleDERM logo" style={{ width: 44, height: 44 }} />
            <div>
              <div className="serif" style={{ fontSize: 22, fontWeight: 600, color: '#3D2626', letterSpacing: '0.02em', lineHeight: 1.1 }}>AbleDERM</div>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B5A5A', fontWeight: 400 }}>Private Dermatology</div>
            </div>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
            {['Services', 'Conditions', 'Pricing', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: 12 }}>Book Now</a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#6B3E3E' }} className="mobile-menu-btn">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section id="home" ref={heroRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
        {/* Subtle textured background */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #F9F7F4 0%, #F0EBE3 50%, #E8DFD3 100%)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', background: 'linear-gradient(225deg, rgba(107,62,62,0.08) 0%, transparent 60%)' }} />
        {/* Decorative arc */}
        <div style={{ position: 'absolute', bottom: -80, right: -80, width: 480, height: 480, borderRadius: '50%', border: '1px solid rgba(107,62,62,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, right: -40, width: 360, height: 360, borderRadius: '50%', border: '1px solid rgba(212,175,55,0.12)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="hero-grid">
          <div>
            <div className="fade-up">
              <span className="section-label">CQC Registered Practice · Woking, Surrey</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <Shield size={14} style={{ color: '#D4AF37' }} />
                <span style={{ fontSize: 12, color: '#8B5A5A', letterSpacing: '0.05em' }}>Regulated by the Care Quality Commission</span>
              </div>
            </div>

            <h1 className="serif fade-up-delay-1" style={{ fontSize: 'clamp(44px, 5vw, 68px)', fontWeight: 300, lineHeight: 1.1, color: '#3D2626', margin: '0 0 8px' }}>
              Expert Skin Care,
            </h1>
            <h1 className="serif fade-up-delay-1" style={{ fontSize: 'clamp(44px, 5vw, 68px)', fontWeight: 500, lineHeight: 1.1, color: '#6B3E3E', margin: '0 0 32px', fontStyle: 'italic' }}>
              Doctor (GPwSI in Dermatology) Led.
            </h1>

            <p className="fade-up-delay-2" style={{ fontSize: 16, lineHeight: 1.8, color: '#6B6060', maxWidth: 480, marginBottom: 40, fontWeight: 300 }}>
              Private dermatology and aesthetic medicine delivered by Dr Anupama Lochab, GPwSI Dermatology, at our CQC-registered Woking practice. Precision diagnostics, evidence-based treatment, and genuinely personalised care.
            </p>

            <div className="fade-up-delay-3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#contact" className="btn-primary">
                Book a Consultation <ArrowRight size={14} />
              </a>
              <a href="#services" className="btn-ghost">
                Our Services
              </a>
            </div>

            <div className="fade-up-delay-3" style={{ display: 'flex', gap: 32, paddingTop: 32, borderTop: '1px solid rgba(107,62,62,0.12)' }}>
              {[['GPwSI', 'Qualified Dermatologist'], ['CQC', 'Regulated Practice'], ['PMI', 'All Major Insurers']].map(([title, sub]) => (
                <div key={title}>
                  <div className="serif" style={{ fontSize: 22, fontWeight: 500, color: '#3D2626' }}>{title}</div>
                  <div style={{ fontSize: 11, color: '#8B5A5A', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              {/* Main portrait placeholder - elegant frame */}
              <div style={{ width: 380, height: 480, background: 'linear-gradient(160deg, #C4A4A4 0%, #8B5A5A 60%, #3D2626 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: 32 }}>
                  <img src={LOGO_SVG} alt="" style={{ width: 80, height: 80, opacity: 0.3, marginBottom: 'auto', marginTop: 40 }} />
                  <div style={{ textAlign: 'center' }}>
                    <div className="serif" style={{ fontSize: 20, color: '#F9F7F4', fontWeight: 400, marginBottom: 4 }}>Dr Anupama Lochab</div>
                    <div style={{ fontSize: 11, color: 'rgba(249,247,244,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>GPwSI Dermatology</div>
                  </div>
                </div>
              </div>
              {/* Gold border accent */}
              <div style={{ position: 'absolute', top: 16, left: 16, right: -16, bottom: -16, border: '1px solid rgba(212,175,55,0.4)', zIndex: -1 }} />
              {/* CQC badge */}
              <div style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', border: '1px solid rgba(107,62,62,0.15)', padding: '14px 20px', boxShadow: '0 8px 32px rgba(61,38,38,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Shield size={20} style={{ color: '#D4AF37' }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: '#3D2626' }}>CQC Compliant</div>
                    <div style={{ fontSize: 10, color: '#8B5A5A', letterSpacing: '0.05em' }}>Regulated Practice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CQC TRUST BAR ─── */}
      <section style={{ background: '#3D2626', padding: '28px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', alignItems: 'center' }}>
          {[
            [Shield, 'CQC Registered Premises', 'Bradstowe Surgery, Woking'],
            [Award, 'GPwSI Dermatology', 'Consultant-Grade Expertise'],
            [CheckCircle2, 'Histology & Pathology', 'Lab-Confirmed Diagnoses'],
            [Star, 'PMI Recognised', 'All Major Health Insurers'],
          ].map(([Icon, title, sub]) => (
            <div key={title} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Icon size={18} style={{ color: '#D4AF37', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#F9F7F4', lineHeight: 1.2 }}>{title}</div>
                <div style={{ fontSize: 11, color: 'rgba(249,247,244,0.6)', marginTop: 1 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" style={{ padding: '100px 32px', backgroundColor: '#F9F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label">What We Treat</span>
            <h2 className="serif" style={{ fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 400, color: '#3D2626', margin: 0 }}>Our Services</h2>
            <div className="gold-divider" style={{ margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
            {[
              { title: 'Medical Dermatology', desc: 'Comprehensive diagnosis and management of all skin conditions — from acne to skin cancer screening — using evidence-based protocols and the latest diagnostic technology.', icon: '🔬' },
              { title: 'Aesthetic Medicine', desc: 'Physician-administered aesthetic treatments for natural enhancement. Every procedure is underpinned by clinical training and a deep understanding of skin anatomy.', icon: '✦' },
              { title: 'Lesion Removal', desc: 'Surgical excision, cryotherapy, and cautery for benign and suspicious lesions, with histological analysis where indicated for complete peace of mind.', icon: '◈' },
              { title: 'Skincare Planning', desc: 'Bespoke prescription skincare programmes combining cosmeceuticals with lifestyle guidance, tailored to your skin type and long-term goals.', icon: '◇' },
            ].map((service, i) => (
              <div key={service.title} style={{
                padding: '48px 36px',
                background: i % 2 === 0 ? '#fff' : '#F0EBE3',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#D4AF37'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'transparent'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ fontSize: 28, marginBottom: 20 }}>{service.icon}</div>
                <h3 className="serif" style={{ fontSize: 24, fontWeight: 500, color: '#3D2626', marginBottom: 16 }}>{service.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#6B6060', fontWeight: 300 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONDITIONS ─── */}
      <section id="conditions" style={{ padding: '100px 32px', background: '#F0EBE3' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
            <div>
              <span className="section-label">Expertise</span>
              <h2 className="serif" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 400, color: '#3D2626', lineHeight: 1.2, margin: '0 0 20px' }}>
                Conditions We Treat
              </h2>
              <div className="gold-divider" />
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#6B6060', fontWeight: 300, marginBottom: 32 }}>
                Dr Lochab manages the full breadth of dermatological presentations in adults and adolescents, from common to complex.
              </p>
              <a href="#contact" className="btn-primary" style={{ display: 'inline-flex' }}>
                Enquire Now <ChevronRight size={14} />
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {conditions.map(c => (
                <div key={c} className="condition-tag">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── AESTHETICS ─── */}
      <section style={{ padding: '100px 32px', backgroundColor: '#F9F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="section-label">Aesthetic Treatments</span>
            <h2 className="serif" style={{ fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 400, color: '#3D2626', margin: 0 }}>
              Physician-Administered Aesthetics
            </h2>
            <div className="gold-divider" style={{ margin: '16px auto 24px' }} />
            <p style={{ fontSize: 15, color: '#6B6060', maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
              All aesthetic procedures are performed by Dr Lochab — a medically trained clinician, not a beautician. Safety, subtlety, and natural results are non-negotiable.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }} className="aesthetics-grid">
            {aesthetics.map(a => (
              <div key={a.name} className="aesthetic-card">
                <div style={{ width: 32, height: 1, background: '#D4AF37', marginBottom: 20 }} />
                <h3 className="serif" style={{ fontSize: 20, fontWeight: 500, color: '#3D2626', marginBottom: 10 }}>{a.name}</h3>
                <p style={{ fontSize: 13, color: '#6B6060', lineHeight: 1.7, fontWeight: 300 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" style={{ padding: '100px 32px', background: '#3D2626' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', display: 'block', marginBottom: 12 }}>Transparent Pricing</span>
            <h2 className="serif" style={{ fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 400, color: '#F9F7F4', margin: 0 }}>Consultation Fees</h2>
            <div style={{ width: 48, height: 1, background: '#D4AF37', margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="pricing-grid">
            {pricingTiers.map(tier => (
              <div key={tier.name} className={`pricing-card ${tier.highlight ? 'featured' : ''}`}>
                {tier.highlight && (
                  <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: '#D4AF37', padding: '4px 16px', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3D2626', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: tier.highlight ? 'rgba(249,247,244,0.6)' : '#8B5A5A', marginBottom: 8 }}>{tier.desc}</div>
                  <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, color: tier.highlight ? '#F9F7F4' : '#3D2626', margin: '0 0 16px' }}>{tier.name}</h3>
                </div>
                <div className="serif" style={{ fontSize: 44, fontWeight: 300, color: tier.highlight ? '#D4AF37' : '#6B3E3E', margin: '8px 0 24px', lineHeight: 1 }}>{tier.price}</div>
                <div style={{ width: 32, height: 1, background: tier.highlight ? 'rgba(212,175,55,0.4)' : 'rgba(107,62,62,0.2)', marginBottom: 24 }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px' }}>
                  {tier.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', fontSize: 13, color: tier.highlight ? 'rgba(249,247,244,0.85)' : '#6B6060', borderBottom: `1px solid ${tier.highlight ? 'rgba(249,247,244,0.08)' : 'rgba(107,62,62,0.08)'}`, fontWeight: 300 }}>
                      <CheckCircle2 size={14} style={{ color: '#D4AF37', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: 'block', textAlign: 'center', padding: '13px', border: `1px solid ${tier.highlight ? 'rgba(212,175,55,0.5)' : 'rgba(107,62,62,0.25)'}`, color: tier.highlight ? '#D4AF37' : '#6B3E3E', textDecoration: 'none', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Book This →
                </a>
              </div>
            ))}
          </div>

          {/* Insurer logos */}
          <div style={{ marginTop: 64, paddingTop: 48, borderTop: '1px solid rgba(249,247,244,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(249,247,244,0.4)', marginBottom: 28 }}>PMI Recognised — We Work With</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
              {insurers.map(ins => (
                <div key={ins} style={{ padding: '8px 20px', border: '1px solid rgba(249,247,244,0.15)', fontSize: 13, color: 'rgba(249,247,244,0.7)', fontWeight: 300, letterSpacing: '0.05em' }}>{ins}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CQC SECTION ─── */}
      <section style={{ padding: '100px 32px', background: '#F0EBE3' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <Shield size={40} style={{ color: '#D4AF37', marginBottom: 24 }} />
          <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>Regulatory Assurance</span>
          <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#3D2626', marginBottom: 20 }}>
            CQC Registered & Fully Compliant
          </h2>
          <div className="gold-divider" style={{ margin: '0 auto 28px' }} />
          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#6B6060', fontWeight: 300, maxWidth: 680, margin: '0 auto 40px' }}>
            AbleDERM operates exclusively within the premises of Bradstowe Surgery, Woking — a fully registered and inspected Care Quality Commission (CQC) practice. This means every consultation you receive is delivered within a regulated clinical environment, with robust governance, patient safety systems, and clinical oversight built in as standard.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2, maxWidth: 700, margin: '0 auto' }}>
            {['CQC Registered Premises', 'Clinical Governance', 'Patient Safety First', 'Insured & Indemnified'].map(point => (
              <div key={point} style={{ background: '#fff', padding: '24px 20px', textAlign: 'center', borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#D4AF37'}
                onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
              >
                <CheckCircle2 size={16} style={{ color: '#D4AF37', marginBottom: 10 }} />
                <div style={{ fontSize: 13, fontWeight: 500, color: '#3D2626' }}>{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" style={{ padding: '100px 32px', backgroundColor: '#F9F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ background: 'linear-gradient(135deg, #C4A4A4 0%, #8B5A5A 100%)', padding: '48px 40px', position: 'relative' }}>
              <div className="serif" style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 300, color: '#F9F7F4', lineHeight: 1.4, fontStyle: 'italic' }}>
                "Dermatology is not just about skin. It is about confidence, comfort, and quality of life."
              </div>
              <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 36, height: 1, background: '#D4AF37' }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#F9F7F4' }}>Dr Anupama Lochab</div>
                  <div style={{ fontSize: 11, color: 'rgba(249,247,244,0.6)', letterSpacing: '0.08em' }}>GPwSI Dermatology</div>
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: 16, left: -16, right: 16, bottom: -16, border: '1px solid rgba(212,175,55,0.3)', zIndex: -1 }} />
          </div>
          <div>
            <span className="section-label">About the Doctor</span>
            <h2 className="serif" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', fontWeight: 400, color: '#3D2626', marginBottom: 8, lineHeight: 1.2 }}>Dr Anupama Lochab</h2>
            <h3 className="serif" style={{ fontSize: 18, fontWeight: 300, color: '#8B5A5A', marginBottom: 24, fontStyle: 'italic' }}>GPwSI Dermatology, MBBS</h3>
            <div className="gold-divider" />
            <p style={{ fontSize: 14, lineHeight: 1.85, color: '#6B6060', fontWeight: 300, marginBottom: 20 }}>
              Dr Lochab is a GP with Special Interest in Dermatology, combining the breadth of general medicine with deep specialist expertise in skin disease. She trained in dermatology alongside her GP qualification and has been delivering consultant-standard skin care in private practice ever since.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.85, color: '#6B6060', fontWeight: 300, marginBottom: 32 }}>
              Working from Bradstowe Surgery in Woking — a CQC-registered practice — she offers the thoroughness and continuity of GP care with the precision of a dermatology specialist. Every patient leaves with a clear diagnosis, a written plan, and direct access for follow-up.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['GPwSI qualified in Dermatology', 'Trained in surgical lesion removal', 'Experienced in medical aesthetics', 'PMI-recognised across all major insurers'].map(cred => (
                <div key={cred} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 4, height: 4, background: '#D4AF37', flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#6B6060', fontWeight: 300 }}>{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH ─── */}
      <section style={{ padding: '60px 32px', background: '#E8DFD3' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B5A5A', marginBottom: 8 }}>Powered By</div>
            <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, color: '#3D2626', margin: 0 }}>Clinical Technology Stack</h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            {[['Semble', 'Secure EHR & Booking'], ['Heidi AI', 'Clinical Scribe'], ['Healthcode', 'PMI Billing']].map(([name, role]) => (
              <div key={name} style={{ padding: '16px 24px', background: 'rgba(255,255,255,0.6)', borderLeft: '3px solid #D4AF37' }}>
                <div style={{ fontWeight: 500, fontSize: 14, color: '#3D2626' }}>{name}</div>
                <div style={{ fontSize: 11, color: '#8B5A5A', marginTop: 2 }}>{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: '100px 32px', backgroundColor: '#F9F7F4' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Common Questions</span>
            <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: '#3D2626', margin: 0 }}>FAQs</h2>
            <div className="gold-divider" style={{ margin: '16px auto 0' }} />
          </div>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button className="faq-toggle" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                {faq.q}
                <ChevronDown size={18} style={{ transform: faqOpen === i ? 'rotate(180deg)' : 'none' }} />
              </button>
              <div className="faq-answer" style={{ maxHeight: faqOpen === i ? 200 : 0 }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ padding: '100px 32px', background: '#3D2626' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', display: 'block', marginBottom: 12 }}>Get in Touch</span>
            <h2 className="serif" style={{ fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 400, color: '#F9F7F4', margin: '0 0 20px', lineHeight: 1.2 }}>
              Book Your Consultation
            </h2>
            <div style={{ width: 48, height: 1, background: '#D4AF37', marginBottom: 32 }} />
            <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(249,247,244,0.65)', fontWeight: 300, marginBottom: 40 }}>
              To book an appointment with Dr Lochab, contact the practice directly or use our online booking system. New and returning patients are welcome — no GP referral required for self-pay.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                [MapPin, 'Bradstowe Surgery, Woking, Surrey', 'CQC Registered Premises'],
                [Phone, '01483 xxx xxx', 'Mon–Fri 9am–5pm'],
                [Mail, 'hello@abledrm.co.uk', 'We respond within 24 hours'],
                [Clock, 'Tuesday & Thursday', 'Private clinic days'],
              ].map(([Icon, line1, line2]) => (
                <div key={line1} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} style={{ color: '#D4AF37' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, color: '#F9F7F4', fontWeight: 400 }}>{line1}</div>
                    <div style={{ fontSize: 12, color: 'rgba(249,247,244,0.5)', marginTop: 2 }}>{line2}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(249,247,244,0.05)', border: '1px solid rgba(249,247,244,0.08)', padding: '48px 40px' }}>
            <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, color: '#F9F7F4', marginBottom: 8 }}>Send an Enquiry</h3>
            <p style={{ fontSize: 13, color: 'rgba(249,247,244,0.5)', marginBottom: 32 }}>We will respond within one working day.</p>
            {[['Full Name', 'text', 'Your full name'], ['Email Address', 'email', 'your@email.com'], ['Phone Number', 'tel', 'Optional']].map(([label, type, placeholder]) => (
              <div key={label} style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.8)', marginBottom: 8 }}>{label}</label>
                <input type={type} placeholder={placeholder} style={{ width: '100%', background: 'rgba(249,247,244,0.08)', border: '1px solid rgba(249,247,244,0.12)', padding: '12px 16px', color: '#F9F7F4', fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.8)', marginBottom: 8 }}>Reason for Enquiry</label>
              <select style={{ width: '100%', background: 'rgba(249,247,244,0.08)', border: '1px solid rgba(249,247,244,0.12)', padding: '12px 16px', color: 'rgba(249,247,244,0.8)', fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', appearance: 'none' }}>
                <option value="">Select a service…</option>
                <option>Medical Dermatology</option>
                <option>Aesthetic Treatment</option>
                <option>Lesion Removal</option>
                <option>PMI / Insurance Query</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(212,175,55,0.8)', marginBottom: 8 }}>Message</label>
              <textarea rows={4} placeholder="Tell us briefly what you'd like help with…" style={{ width: '100%', background: 'rgba(249,247,244,0.08)', border: '1px solid rgba(249,247,244,0.12)', padding: '12px 16px', color: '#F9F7F4', fontSize: 14, outline: 'none', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', resize: 'vertical' }} />
            </div>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#D4AF37', color: '#3D2626' }}
              onMouseEnter={e => e.currentTarget.style.background = '#E8CB6A'}
              onMouseLeave={e => e.currentTarget.style.background = '#D4AF37'}
            >
              Send Enquiry <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: '#2A1A1A', padding: '40px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={LOGO_SVG} alt="" style={{ width: 32, height: 32 }} />
            <div>
              <div className="serif" style={{ fontSize: 16, color: '#F9F7F4', fontWeight: 500 }}>AbleDERM</div>
              <div style={{ fontSize: 10, color: 'rgba(249,247,244,0.4)', letterSpacing: '0.12em' }}>Private Dermatology · Woking</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: 'rgba(249,247,244,0.35)', textAlign: 'center' }}>
            © 2025 AbleDERM. All rights reserved. &nbsp;·&nbsp; CQC Compliant Private Medical Practice &nbsp;·&nbsp; Bradstowe Surgery
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Shield size={12} style={{ color: '#D4AF37' }} />
            <span style={{ fontSize: 11, color: 'rgba(212,175,55,0.7)' }}>CQC Registered</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
