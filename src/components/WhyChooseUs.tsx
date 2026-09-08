import React from 'react';
import { TRUST_PILLARS } from '../data/contractingData';
import { 
  UserCheck, 
  Sparkles, 
  Clock, 
  BadgeCheck, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      case 'BadgeCheck':
        return <BadgeCheck className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-14 sm:py-16 bg-stone-900 text-stone-100 border-t border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            معاييرنا
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight leading-tight mb-2">
            لماذا تختار مؤسسة البصمة؟
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            إتقان في التنفيذ، التزام بالمواعيد، وضمان معتمد
          </p>
        </div>

        {/* Grid of Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRUST_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-950/60 border border-stone-800/80 hover:border-amber-500/40 rounded-xl p-5 text-right transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                {getPillarIcon(item.iconName)}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-100 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
