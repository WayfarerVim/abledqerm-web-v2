"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, CheckCircle2, ChevronRight, Sparkles, Shield } from 'lucide-react';

export default function AbleDERMBurgundy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    burgundy: '#6B3E3E',
    cream: '#F9F7F4',
    gold: '#D4AF37',
    deepBurgundy: '#3D2626',
    offWhite: '#F9F7F4',
    lightCream: '#FDF9F5',
    paleBurgundy: '#E8DFD3',
    text: '#2C2C2C',
    lightText: '#6B6B6B',
    accentBurgundy: '#8B5A5A'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream, fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md border-b' : ''}`}
        style={{
          backgroundColor: scrolled ? colors.cream : 'transparent',
          borderColor: scrolled ? colors.paleBurgundy : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex-shrink-0 relative">
                <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="burgundyGrad" cx="35%" cy="35%">
                      <stop offset="0%" stopColor="#9B6F6F"/>
                      <stop offset="100%" stopColor="#3D2626"/>
                    </radialGradient>
                  </defs>
                  <circle cx="24" cy="24" r="24" fill="url(#burgundyGrad)"/>
                  <g>
                    <path d="M10 24C10 18 12 14 17 14C21 14 24 17 24 22" fill="white"/>
                    <ellipse cx="14" cy="20" rx="2.5" ry="3" fill="white"/>
                    <path d="M10 28C12 32 15 34 19 34C23 34 25 30 25 26" fill="white"/>
                  </g>
                  <g>
                    <path d="M38 24C38 18 36 14 31 14C27 14 24 17 24 22" fill="#1A1010" opacity="0.95"/>
                    <ellipse cx="34" cy="20" rx="2.5" ry="3" fill="#1A1010" opacity="0.95"/>
                    <path d="M38 28C36 32 33 34 29 34C25 34 23 30 23 26" fill="#1A1010" opacity="0.95"/>
                  </g>
                  <path d="M24 14C24 14 22 20 24 24C26 28 24 34 24 34" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
                  <circle cx="34" cy="16" r="2.2" fill="#D4AF37"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-light tracking-wider" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, color: colors.burgundy }}>
                  AbleDERM
                </h1>
                <p className="text-xs tracking-widest" style={{ color: colors.accentBurgundy, fontWeight: '600', letterSpacing: '1.5px' }}>
                  DERMATOLOGY
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-12">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'About', href: '#about' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium tracking-wide relative group"
                  style={{ color: colors.text, transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = colors.burgundy}
                  onMouseLeave={(e) => e.target.style.color = colors.text}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colors.burgundy }}></span>
                </a>
              ))}
              <button
                className="text-white px-8 py-3 rounded-sm font-medium text-sm tracking-wide transition duration-300 hover:shadow-lg"
                style={{ backgroundColor: colors.burgundy }}
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} style={{ color: colors.burgundy }} /> : <Menu size={24} style={{ color: colors.burgundy }} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden pb-8 space-y-6 border-t" style={{ backgroundColor: colors.cream, borderColor: colors.paleBurgundy }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'About', href: '#about' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-medium"
                  style={{ color: colors.text }}
                >
                  {item.label}
                </a>
              ))}
              <button
                className="w-full text-white px-6 py-3 rounded-sm font-medium text-sm"
                style={{ backgroundColor: colors.burgundy }}
              >
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 sm:px-8 lg:px-10" style={{ backgroundColor: colors.lightCream }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2
                  className="text-6xl md:text-7xl font-light leading-tight"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, color: colors.burgundy }}
                >
                  Private Dermatology<br/>
                  <span style={{ color: colors.accentBurgundy }}>& Aesthetic Medicine</span>
                </h2>
                <p className="text-lg font-light leading-relaxed" style={{ color: colors.lightText }}>
                  Expert skin care delivered by <span className="font-semibold" style={{ color: colors.burgundy }}>Dr Anupama Lochab</span>, GPwSI Dermatology
                </p>
              </div>

              <div className="space-y-5 pt-4">
                {[
                  'Evidence-based dermatology with consultant expertise',
                  'Natural, subtle aesthetic treatments',
                  'Fast access • Online booking • PMI Accepted'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <CheckCircle2 size={22} style={{ color: colors.burgundy, flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: colors.text }} className="font-light text-base">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-lg border-l-4" style={{ backgroundColor: '#FDF9F5', borderColor: colors.burgundy }}>
                <div className="flex items-start space-x-3">
                  <Shield size={24} style={{ color: colors.burgundy, flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p className="font-semibold" style={{ color: colors.burgundy }}>CQC Compliant Practice</p>
                    <p className="text-sm font-light" style={{ color: colors.lightText }}>Operating from CQC-registered Bradstowe Surgery</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  className="text-white px-8 py-4 rounded-sm font-medium text-sm tracking-wide transition duration-300 hover:shadow-xl"
                  style={{ backgroundColor: colors.burgundy }}
                >
                  Book Appointment
                </button>
                <button
                  className="border-2 px-8 py-4 rounded-sm font-medium text-sm tracking-wide transition duration-300"
                  style={{ borderColor: colors.burgundy, color: colors.text }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.burgundy;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = colors.text;
                  }}
                >
                  Start with Heidi AI
                </button>
              </div>
            </div>

            <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: colors.paleBurgundy }}
              >
                <div className="text-center">
                  <div className="text-7xl mb-4">👩‍⚕️</div>
                  <p className="text-lg font-semibold" style={{ color: colors.burgundy, fontFamily: '"Cormorant Garamond", serif' }}>
                    Dr Anupama Lochab
                  </p>
                  <p className="text-sm font-light" style={{ color: colors.lightText }}>GPwSI Dermatology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 sm:px-8 lg:px-10" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3
              className="text-5xl md:text-6xl font-light mb-6"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, color: colors.burgundy }}
            >
              Why Choose AbleDERM?
            </h3>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: colors.lightText }}>
              Personalised, evidence-led care in a trusted medical setting
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              { icon: '🔬', title: 'Expertise', description: 'GPwSI Dermatology Specialist with evidence-based approach' },
              { icon: '✨', title: 'Natural Results', description: 'Subtle & safe aesthetic care tailored to your goals' },
              { icon: '📱', title: 'Easy Booking', description: 'Online appointments with real-time availability' },
              { icon: '🏥', title: 'CQC Registered', description: 'Operating from established CQC-compliant premises' }
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-10 rounded-lg border transition duration-300 hover:shadow-lg"
                style={{ backgroundColor: colors.lightCream, borderColor: colors.paleBurgundy }}
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h4
                  className="text-xl font-semibold mb-3"
                  style={{ color: colors.burgundy, fontFamily: '"Cormorant Garamond", serif', fontWeight: 600 }}
                >
                  {service.title}
                </h4>
                <p className="font-light leading-relaxed" style={{ color: colors.lightText }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-10" style={{ backgroundColor: colors.burgundy }}>
        <div className="max-w-7xl mx-auto">
          <h3
            className="text-5xl md:text-6xl font-light text-center mb-20"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, color: '#FFFFFF' }}
          >
            Conditions We Treat
          </h3>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h4
                className="text-2xl font-light mb-8 flex items-center"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, color: '#FFFFFF' }}
              >
                <Sparkles size={28} className="mr-4" style={{ color: colors.gold }} />
                Dermatology Care
              </h4>
              <ul className="space-y-4">
                {['Acne & breakouts', 'Rosacea', 'Eczema & dermatitis', 'Psoriasis', 'Pigmentation', 'Hair & scalp conditions', 'Moles & skin cancer screening'].map((item, idx) => (
                  <li key={idx} className="flex items-center font-light text-base" style={{ color: '#F9F7F5' }}>
                    <span className="w-2.5 h-2.5 rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: colors.gold }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-2xl font-light mb-8 flex items-center"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, color: '#FFFFFF' }}
              >
                <Sparkles size={28} className="mr-4" style={{ color: colors.gold }} />
                Aesthetic Treatments
              </h4>
              <ul className="space-y-4">
                {['Anti-wrinkle treatments', 'Dermal fillers', 'Cryotherapy', 'Skin tag removal', 'Benign lesion removal', 'Chemical peels'].map((item, idx) => (
                  <li key={idx} className="flex items-center font-light text-base" style={{ color: '#F9F7F5' }}>
                    <span className="w-2.5 h-2.5 rounded-full mr-4 flex-shrink-0" style={{ backgroundColor: colors.gold }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 sm:px-8 lg:px-10" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3
              className="text-5xl md:text-6xl font-light mb-6"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, color: colors.burgundy }}
            >
              Transparent Pricing
            </h3>
            <p className="text-lg font-light" style={{ color: colors.lightText }}>Clear pricing for all consultations and treatments</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Dermatology */}
            <div className="rounded-lg p-10 hover:shadow-xl transition duration-300" style={{ backgroundColor: colors.lightCream, border: `1px solid ${colors.paleBurgundy}` }}>
              <h4
                className="text-2xl font-light mb-8"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, color: colors.burgundy }}
              >
                Dermatology
              </h4>
              <ul className="space-y-5">
                {[
                  { name: 'New Consultation', price: '£220' },
                  { name: 'Follow-Up', price: '£160' },
                  { name: 'Mole Check', price: '£190' },
                  { name: 'Minor Surgery', price: 'from £180' },
                  { name: 'Mole Excision', price: 'from £480' }
                ].map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center pb-4 border-b last:border-b-0 last:pb-0" style={{ borderColor: colors.paleBurgundy, color: colors.text }}>
                    <span className="font-light">{item.name}</span>
                    <span className="font-semibold" style={{ color: colors.burgundy }}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aesthetics - Featured */}
            <div className="rounded-lg p-10 shadow-lg transform lg:scale-105 lg:-my-4" style={{ backgroundColor: colors.lightCream, border: `2px solid ${colors.burgundy}` }}>
              <h4
                className="text-2xl font-light mb-8"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, color: colors.burgundy }}
              >
                Aesthetic Treatments
              </h4>
              <ul className="space-y-5">
                {[
                  { name: 'Anti-Wrinkle', price: 'from £210' },
                  { name: 'Dermal Fillers', price: 'from £220' },
                  { name: 'Cryotherapy', price: 'from £180' },
                  { name: 'Chemical Peels', price: 'from £150' },
                  { name: 'Consultation', price: 'Included' }
                ].map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center pb-4 border-b last:border-b-0 last:pb-0" style={{ borderColor: colors.paleBurgundy, color: colors.text }}>
                    <span className="font-light">{item.name}</span>
                    <span className="font-semibold" style={{ color: colors.burgundy }}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance */}
            <div className="rounded-lg p-10 hover:shadow-xl transition duration-300" style={{ backgroundColor: colors.lightCream, border: `1px solid ${colors.paleBurgundy}` }}>
              <h4
                className="text-2xl font-light mb-8"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, color: colors.burgundy }}
              >
                Health Insurance
              </h4>
              <p className="font-light mb-6 text-sm" style={{ color: colors.text }}>PMI approved consultations available through:</p>
              <ul className="space-y-4">
                {['Bupa', 'AXA', 'Aviva', 'Vitality', 'WPA', 'Cigna'].map((item, idx) => (
                  <li key={idx} className="flex items-center font-light" style={{ color: colors.text }}>
                    <CheckCircle2 size={18} style={{ color: colors.burgundy, marginRight: '12px', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CQC Compliance Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-10" style={{ backgroundColor: colors.lightCream }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg p-12 border-l-4" style={{ backgroundColor: colors.cream, borderColor: colors.burgundy, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div className="flex items-start space-x-6">
              <Shield size={48} style={{ color: colors.burgundy, flexShrink: 0 }} />
              <div>
                <h3
                  className="text-3xl font-light mb-4"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, color: colors.burgundy }}
                >
                  CQC Registered & Compliant
                </h3>
                <p className="text-lg font-light mb-4 leading-relaxed" style={{ color: colors.text }}>
                  AbleDERM operates from <span className="font-semibold">Bradstowe Surgery</span>, which is fully registered with the Care Quality Commission (CQC). All clinical services meet CQC standards for safety, quality, and patient care.
                </p>
                <p className="font-light" style={{ color: colors.lightText }}>
                  This ensures you receive care in an established, regulated medical environment with comprehensive compliance protocols and quality assurance measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 sm:px-8 lg:px-10" style={{ backgroundColor: colors.paleBurgundy }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3
              className="text-5xl md:text-6xl font-light mb-8"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, color: colors.burgundy }}
            >
              Meet Dr Anupama Lochab
            </h3>
            <p
              className="text-2xl font-light italic"
              style={{ fontFamily: '"Cormorant Garamond", serif', color: colors.accentBurgundy }}
            >
              "Skin care with clarity. Aesthetic, with restraint."
            </p>
          </div>

          <div className="rounded-lg p-12 shadow-lg" style={{ backgroundColor: colors.cream }}>
            <div className="space-y-6 font-light text-lg leading-relaxed" style={{ color: colors.text }}>
              <p>
                Dr Anupama Lochab is a <span className="font-semibold" style={{ color: colors.burgundy }}>GPwSI (General Practitioner with Special Interest) in Dermatology</span> with extensive experience in medical and aesthetic skin care.
              </p>
              <p>
                Based at Bradstowe Surgery in Woking, Dr Lochab provides evidence-based dermatology consultations, minor procedures, and subtle aesthetic treatments. Her approach prioritises natural results, informed patient choice, and medical safety.
              </p>
              <p>
                All consultations include dermoscopy, detailed skin analysis, and transparent discussion of treatment options. Treatments are tailored to individual goals and skin type.
              </p>

              <div className="pt-8 grid lg:grid-cols-3 gap-8 border-t" style={{ borderColor: colors.paleBurgundy }}>
                {[
                  { label: 'EXPERTISE', value: 'Dermatology & Aesthetics' },
                  { label: 'LOCATION', value: 'Bradstowe Surgery, Woking' },
                  { label: 'BOOKING', value: 'Online & telephone' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: colors.burgundy }}>{item.label}</p>
                    <p className="font-light text-lg" style={{ color: colors.burgundy, fontFamily: '"Cormorant Garamond", serif' }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 sm:px-8 lg:px-10 border-t" style={{ backgroundColor: colors.cream, borderColor: colors.paleBurgundy }}>
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-light mb-4" style={{ color: colors.text }}>Trusted Clinical Systems</h3>
          <p className="font-light mb-12" style={{ color: colors.lightText }}>Seamless integration with industry-leading healthcare technology</p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { name: 'SEMBLE', desc: 'Online Booking' },
              { name: 'Heidi AI', desc: 'AI-Powered Assistance' },
              { name: 'HEALTHCODE', desc: 'PMI Approved' }
            ].map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: colors.paleBurgundy }}
                >
                  <span style={{ color: colors.burgundy, fontWeight: 'bold', fontSize: '20px' }}>⚙️</span>
                </div>
                <p className="font-light" style={{ color: colors.text }}>{tech.name}</p>
                <p className="text-xs font-light" style={{ color: colors.lightText }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-10" style={{ backgroundColor: colors.burgundy, color: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3
                className="text-5xl md:text-6xl font-light mb-12"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 700, color: 'white' }}
              >
                Get in Touch
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Location</p>
                    <p className="font-light" style={{ color: colors.paleBurgundy }}>Bradstowe Surgery, Woking, Surrey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Phone</p>
                    <p className="font-light" style={{ color: colors.paleBurgundy }}>Available via practice manager</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Email</p>
                    <p className="font-light" style={{ color: colors.paleBurgundy }}>referrals@abledrm.co.uk</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-lg border" style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)' }}>
                <p className="text-sm font-semibold mb-2">Free Parking</p>
                <p className="text-sm font-light" style={{ color: colors.paleBurgundy }}>Easy access from Guildford, Weybridge & surrounding areas</p>
              </div>
            </div>

            <div className="rounded-lg p-10 border" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: colors.gold }}>
              <h4
                className="text-3xl font-light mb-4"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, color: 'white' }}
              >
                Ready to Book?
              </h4>
              <p className="font-light mb-8 leading-relaxed" style={{ color: colors.paleBurgundy }}>
                Schedule your consultation with Dr Anupama Lochab. Choose from online booking, phone consultation, or GP referral.
              </p>
              <button
                className="w-full font-semibold py-4 px-6 rounded-sm transition duration-300 flex items-center justify-center space-x-3"
                style={{ backgroundColor: colors.gold, color: colors.burgundy }}
              >
                <span>Book Appointment</span>
                <ChevronRight size={20} />
              </button>

              <p className="text-xs mt-6 text-center font-light" style={{ color: colors.paleBurgundy }}>
                Seen within days, not months. PMI accepted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.deepBurgundy, color: '#999' }}>
        <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h5 className="text-white font-light text-lg mb-4" style={{ fontFamily: '"Cormorant Garamond", serif', color: 'white' }}>AbleDERM</h5>
              <p className="text-sm font-light leading-relaxed">Private dermatology & aesthetic medicine in Woking.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Services</h5>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#services" className="hover:text-white transition duration-300">Dermatology</a></li>
                <li><a href="#services" className="hover:text-white transition duration-300">Aesthetics</a></li>
                <li><a href="#pricing" className="hover:text-white transition duration-300">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Company</h5>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#about" className="hover:text-white transition duration-300">About</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Terms</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Contact</h5>
              <ul className="space-y-3 text-sm font-light">
                <li>Bradstowe Surgery</li>
                <li>Woking, Surrey</li>
                <li>referrals@abledrm.co.uk</li>
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #6B3E3E', paddingTop: '2rem' }} className="text-center text-sm font-light">
            <p>&copy; 2024 AbleDERM. All rights reserved. | CQC Compliant Private Medical Practice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
