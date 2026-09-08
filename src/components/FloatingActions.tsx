import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/contractingData';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Mobile Fixed Bottom Bar */}
      <div 
        id="mobile-floating-bar"
        className="fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 p-2.5 sm:hidden flex items-center gap-2 shadow-2xl"
      >
        <a
          id="floating-call-btn"
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-stone-950 font-black py-3 px-3 rounded-xl text-xs shadow-md"
        >
          <Phone className="w-4 h-4 text-stone-950 stroke-[2.5]" />
          <span>اتصال: {BUSINESS_INFO.phone}</span>
        </a>

        <a
          id="floating-whatsapp-btn"
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white font-bold py-3 px-3 rounded-xl text-xs shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>واتساب فوري</span>
        </a>
      </div>

      {/* Desktop Floating Speed-Dials (Bottom Left) */}
      <div className="hidden sm:flex fixed bottom-6 left-6 z-40 flex-col gap-3">
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-950/40 hover:scale-110 transition-all group"
          title="محادثة واتساب سريعة"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="w-13 h-13 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 flex items-center justify-center shadow-xl shadow-amber-950/40 hover:scale-110 transition-all group"
          title={`اتصال هاتفي: ${BUSINESS_INFO.phoneFormatted}`}
        >
          <Phone className="w-6 h-6 stroke-[2.2]" />
        </a>
      </div>
    </>
  );
};
