import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin, Building } from 'lucide-react';
import { BUSINESS_INFO } from '../data/contractingData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', id: 'hero' },
    { label: 'تركيزنا: تشطيب وترميم', id: 'finishing-focus', highlight: true },
    { label: 'كافة الخدمات', id: 'services' },
    { label: 'معرض الأعمال', id: 'portfolio' },
    { label: 'مراحل العمل', id: 'process' },
    { label: 'أحياء جدة', id: 'coverage' },
    { label: 'تواصل معنا', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-lg transition-all">
      {/* Top micro bar */}
      <div className="bg-amber-600 text-stone-950 text-xs font-semibold py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> جدة • تغطية شاملة
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> إشراف مباشر: المقاول أبو وافي
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>0507995065</span>
            <span className="opacity-40">|</span>
            <span className="font-bold">معاينة ميدانية مجانية</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand & Identity */}
          <div 
            id="brand-logo"
            onClick={() => handleLinkClick('hero')} 
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-105 transition-transform">
              <Building className="w-7 h-7 text-stone-950 stroke-[2.2]" />
            </div>
            <div className="text-right">
              <div className="text-lg sm:text-xl font-black text-amber-400 tracking-tight leading-snug">
                {BUSINESS_INFO.name}
              </div>
              <div className="text-xs sm:text-sm font-medium text-stone-300 flex items-center gap-1.5">
                <span>بإشراف: <strong className="text-amber-300 font-bold">{BUSINESS_INFO.contractor}</strong></span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span className="text-stone-400">{BUSINESS_INFO.city}</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  link.highlight
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 font-bold'
                    : 'text-stone-300 hover:text-amber-400 hover:bg-stone-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="header-phone-cta"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-100 px-3.5 py-2.5 rounded-xl border border-stone-700 text-sm font-bold transition-all hover:border-amber-500/50"
              title="اتصال هاتفي مباشر"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <bdi dir="ltr" className="inline-block font-sans font-bold text-stone-100">{BUSINESS_INFO.phoneFormatted}</bdi>
            </a>
            
            <a
              id="header-whatsapp-cta"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-emerald-950/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-quick-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs flex items-center gap-1"
            >
              <Phone className="w-4 h-4" />
              <bdi dir="ltr" className="inline-block font-sans font-bold">0507995065</bdi>
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="sm:hidden bg-stone-900 border-b border-stone-800 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-right px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                link.highlight
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-stone-200 hover:bg-stone-800'
              }`}
            >
              <span>{link.label}</span>
              {link.highlight && (
                <span className="text-xs bg-amber-500 text-stone-950 px-2 py-0.5 rounded font-bold">تخصصنا</span>
              )}
            </button>
          ))}
          
          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 py-3 rounded-xl font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال هاتفي مباشر (<bdi dir="ltr" className="inline-block font-sans font-bold">{BUSINESS_INFO.phoneFormatted}</bdi>)</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب سريعة</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
