import React from 'react';
import { Phone, MessageCircle, CheckCircle2, ShieldCheck, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/contractingData';

interface HeroProps {
  onExploreFinishing: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFinishing, onExploreServices }) => {
  return (
    <section id="hero" className="relative bg-stone-950 text-white overflow-hidden pt-8 pb-14 lg:py-16">
      {/* Background imagery & gradient */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/95 to-stone-950" />
      
      {/* Ambient subtle glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-5 text-right">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.contractor} • جدة</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-100 tracking-tight leading-tight">
              <span className="text-amber-400 block mb-1">{BUSINESS_INFO.name}</span>
              تشطيب وترميم فاخر • بناء فلل وعمائر
            </h1>

            {/* Subtitle - Short & Crisp */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-xl">
              تخصص دقيق في <strong className="text-amber-300 font-bold">التشطيب والترميم الحديث</strong>، مع خدمات بناء الفلل والملاحق وساندوتش بانل والمظلات بكافة أحياء جدة.
            </p>

            {/* Concise Feature Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-stone-200">
              <span className="flex items-center gap-1.5 bg-stone-900/90 border border-stone-800 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                تركيز: تشطيب وترميم
              </span>
              <span className="flex items-center gap-1.5 bg-stone-900/90 border border-stone-800 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                إشراف أبو وافي الميداني
              </span>
              <span className="flex items-center gap-1.5 bg-stone-900/90 border border-stone-800 px-3 py-1.5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                معاينة مجانية بجدة
              </span>
            </div>

            {/* Direct Action CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                id="hero-call-now-button"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-stone-950 stroke-[2.5]" />
                <span>اتصال مباشر: {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                id="hero-whatsapp-button"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3.5 rounded-xl text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب فوري</span>
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-stone-900/90 border border-amber-500/30 p-6 shadow-2xl space-y-4 text-right">
              
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div>
                  <span className="text-xs text-amber-400 font-bold block">المقاول المعتمد</span>
                  <h2 className="text-lg font-black text-stone-100">{BUSINESS_INFO.contractor}</h2>
                </div>
                <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-lg border border-amber-500/30">
                  جدة
                </span>
              </div>

              {/* Special Emphasis Callout */}
              <div className="bg-stone-950/80 rounded-xl p-3.5 border border-stone-800 space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>تخصصنا الأساسي: تشطيب وترميم</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  تجديد الفلل والعمائر القديمة، معالجة التصدعات، دهانات مودرن، بديل رخام وخشب، وجبس بورد بجدة.
                </p>
                <button
                  onClick={onExploreFinishing}
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-bold pt-0.5 cursor-pointer"
                >
                  <span>عرض نماذج التشطيب والترميم</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {/* Quick Services Tag Pills */}
              <div className="space-y-1.5">
                <div className="text-[11px] text-stone-400">الخدمات المتاحة:</div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-medium">تشطيب وترميم</span>
                  <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded">بناء فلل</span>
                  <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded">بناء عمائر</span>
                  <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded">بناء ملاحق</span>
                  <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded">ساندوتش بانل</span>
                  <span className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded">مظلات وسواتر وهناجر</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2 border-t border-stone-800 flex items-center justify-between">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="text-sm font-black text-amber-400 hover:text-amber-300"
                  dir="ltr"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                <button
                  onClick={onExploreServices}
                  className="text-xs text-stone-400 hover:text-amber-400 cursor-pointer"
                >
                  عرض كافة الخدمات ←
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
