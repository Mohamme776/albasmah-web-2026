import React from 'react';
import { BUSINESS_INFO } from '../data/contractingData';
import { Building, Phone, MessageCircle, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-24 sm:pb-16 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 font-black">
                <Building className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="text-base font-black text-amber-400">
                  {BUSINESS_INFO.name}
                </h4>
                <div className="text-xs text-stone-400">
                  إدارة {BUSINESS_INFO.contractor}
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              مقاولات عامة بجدة • تخصص دقيق في التشطيب والترميم وبناء الفلل والعمائر والملاحق والساندوتش بانل والمظلات والهناجر.
            </p>

            <div className="text-xs text-stone-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>جدة - المملكة العربية السعودية</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-stone-100 border-b border-stone-800 pb-2">
              روابط الموقع
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onNavigate('hero')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('finishing-focus')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer font-bold text-amber-300"
                >
                  تركيزنا: تشطيب وترميم
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  كافة خدمات المقاولات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('portfolio')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  معرض الأعمال والمشاريع
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('process')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  مراحل العمل والتعاقد
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('coverage')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  نطاق الخدمة في جدة
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick Summary */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-stone-100 border-b border-stone-800 pb-2">
              خدماتنا بجدة
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="text-amber-300 font-semibold">• تشطيب وترميم فلل ومباني</li>
              <li>• بناء فلل سكنية مودرن</li>
              <li>• بناء عمائر وأدوار متكررة</li>
              <li>• بناء ملاحق ومجالس خارجية</li>
              <li>• غرف ومستودعات ساندوتش بانل</li>
              <li>• مظلات وسواتر وهناجر حديدية</li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-stone-100 border-b border-stone-800 pb-2">
              التواصل المباشر
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2.5 bg-stone-900 border border-stone-800 hover:border-amber-500/50 p-3 rounded-xl text-stone-200 hover:text-white transition-all text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-stone-400">اتصال هاتفي مباشر</div>
                  <div dir="ltr" className="font-mono text-amber-300">{BUSINESS_INFO.phoneFormatted}</div>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-emerald-950/60 border border-emerald-800/60 hover:border-emerald-500 p-3 rounded-xl text-emerald-200 hover:text-white transition-all text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-emerald-300/80">محادثة فورية</div>
                  <span>واتساب: {BUSINESS_INFO.contractor}</span>
                </div>
              </a>

              <div className="text-[11px] text-stone-400 pt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>إشراف هندسي وضمان معتمد</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} - <span className="text-stone-300 font-bold">{BUSINESS_INFO.name}</span> (المقاول أبو وافي - جدة)
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 cursor-pointer text-xs"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
