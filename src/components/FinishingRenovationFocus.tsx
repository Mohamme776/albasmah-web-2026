import React, { useState } from 'react';
import { 
  Paintbrush, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Phone, 
  MessageCircle, 
  ArrowLeftRight,
  ShieldCheck,
  Hammer
} from 'lucide-react';
import { BEFORE_AFTER_CASES, DETAILED_FINISHING_AREAS, BUSINESS_INFO } from '../data/contractingData';

export const FinishingRenovationFocus: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isComparing, setIsComparing] = useState(false);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  return (
    <section id="finishing-focus" className="py-14 sm:py-16 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>تخصصنا الأبرز بجدة</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight leading-tight mb-2">
            تشطيب وترميم المباني والفلل
          </h2>
          
          <p className="text-xs sm:text-sm text-stone-300">
            تجديد الفلل والعمائر القديمة، معالجة التصدعات، وتشطيبات مودرن بأحدث الديكورات.
          </p>
        </div>

        {/* Interactive Before/After Showcase */}
        <div className="mb-12 bg-stone-950/80 border border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-stone-800 pb-3">
            <div className="text-right">
              <span className="text-xs font-bold text-amber-400">مقارنة قبل وبعد:</span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-100">
                {currentCase.title}
              </h3>
            </div>
            
            {/* Case selector buttons */}
            <div className="flex flex-wrap gap-1.5">
              {BEFORE_AFTER_CASES.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveCaseIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeCaseIndex === idx
                      ? 'bg-amber-500 text-stone-950 shadow'
                      : 'bg-stone-900 text-stone-300 hover:text-amber-400 border border-stone-800'
                  }`}
                >
                  {item.category}
                </button>
              ))}
            </div>
          </div>

          {/* Current Case Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Interactive Image Split Slider */}
            <div className="lg:col-span-8">
              <div 
                className="relative h-72 sm:h-96 rounded-xl overflow-hidden select-none border border-stone-800 group"
                onMouseMove={(e) => {
                  if (isComparing || e.buttons === 1) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                    setSliderPosition((x / rect.width) * 100);
                  }
                }}
                onTouchMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const touch = e.touches[0];
                  const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                  setSliderPosition((x / rect.width) * 100);
                }}
              >
                {/* AFTER image */}
                <img
                  src={currentCase.afterImage}
                  alt={`بعد - ${currentCase.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 z-20 bg-emerald-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                  بعد التشطيب ✨
                </span>

                {/* BEFORE image */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentCase.beforeImage}
                    alt={`قبل - ${currentCase.title}`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', minWidth: '100%', height: '100%' }}
                  />
                  <span className="absolute top-3 right-3 z-20 bg-stone-900/90 text-stone-200 text-xs font-bold px-2.5 py-1 rounded-md border border-stone-700">
                    قبل العمل
                  </span>
                </div>

                {/* Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 z-30 w-1 bg-amber-400 cursor-ew-resize flex items-center justify-center shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-lg border border-stone-900">
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Slider instruction */}
              <div className="mt-2 flex items-center justify-between text-[11px] text-stone-400 px-1">
                <span>اسحب المقبض يميناً ويساراً للمقارنة</span>
                <div className="flex gap-2">
                  <button onClick={() => setSliderPosition(0)} className="hover:text-amber-400 cursor-pointer">عرض "بعد"</button>
                  <span>•</span>
                  <button onClick={() => setSliderPosition(100)} className="hover:text-amber-400 cursor-pointer">عرض "قبل"</button>
                </div>
              </div>
            </div>

            {/* Case Info */}
            <div className="lg:col-span-4 space-y-3.5 text-right">
              <span className="inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-bold">
                {currentCase.location}
              </span>
              <h4 className="text-lg font-bold text-stone-100">
                {currentCase.title}
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                {currentCase.description}
              </p>

              <div className="p-2.5 bg-stone-900 rounded-lg border border-stone-800 text-xs text-amber-300 font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{currentCase.stats}</span>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 py-2.5 px-3 rounded-xl text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>معاينة بجدة</span>
                </a>
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}&text=${encodeURIComponent(`السلام عليكم مقاول أبو وافي، أود الاستفسار عن ترميم مشابه لـ (${currentCase.title}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-3 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>واتساب</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Pillars of Finishing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {DETAILED_FINISHING_AREAS.map((area, idx) => (
            <div 
              key={idx}
              className="bg-stone-950/60 border border-stone-800 rounded-2xl p-5 text-right space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                {idx === 0 && <Paintbrush className="w-5 h-5" />}
                {idx === 1 && <Hammer className="w-5 h-5" />}
                {idx === 2 && <Layers className="w-5 h-5" />}
              </div>

              <h3 className="text-base font-bold text-stone-100">
                {area.category}
              </h3>

              <ul className="space-y-1.5 text-xs text-stone-300">
                {area.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Contact Ribbon */}
        <div className="bg-stone-950 border border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
          <div>
            <h4 className="text-sm font-bold text-amber-400">
              معاينة مجانية للمباني والفلل القديمة بجدة
            </h4>
            <p className="text-xs text-stone-400">
              يقوم المقاول أبو وافي بفحص التصدعات والموقع وتحديد التكلفة المناسبة.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2.5 rounded-xl text-xs shrink-0 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>اتصال: {BUSINESS_INFO.phoneFormatted}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
