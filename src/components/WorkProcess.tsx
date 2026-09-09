import React from 'react';
import { PROCESS_STEPS, BUSINESS_INFO } from '../data/contractingData';
import { PhoneCall, Calculator, FileCheck, HardHat, Award, Phone } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall className="w-5 h-5" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      default:
        return <HardHat className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-14 sm:py-16 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            منهجية العمل
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight leading-tight mb-2">
            خطوات التعاقد والتنفيذ
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            خطوات واضحة تبدأ بالمعاينة وتنتهي بالتسليم والضمان
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-stone-900/90 border border-stone-800 rounded-xl p-4 text-right flex flex-col justify-between group hover:border-amber-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  {getStepIcon(step.iconName)}
                </div>
                <span className="text-lg font-black text-stone-600">
                  0{step.stepNumber}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-sm text-stone-100">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick call line */}
        <div className="mt-8 text-center">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300"
          >
            <Phone className="w-4 h-4" />
            <span>احجز موعد معاينة مجانية لموقعك الآن: <bdi dir="ltr" className="inline-block font-sans font-bold">{BUSINESS_INFO.phoneFormatted}</bdi></span>
          </a>
        </div>

      </div>
    </section>
  );
};
