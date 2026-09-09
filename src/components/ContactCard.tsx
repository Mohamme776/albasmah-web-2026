import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/contractingData';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  Building, 
  Share2,
  Compass,
  Search,
  ExternalLink,
  ShieldCheck,
  X
} from 'lucide-react';

export const ContactCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [showSeoModal, setShowSeoModal] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('جدة المملكة العربية السعودية')}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${BUSINESS_INFO.name} - ${BUSINESS_INFO.contractor}`,
          text: `مقاول تشطيب وترميم وبناء بجدة - ${BUSINESS_INFO.contractor} ${BUSINESS_INFO.phone}`,
          url: window.location.href,
        });
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      } catch (err) {
        handleCopyPhone();
      }
    } else {
      handleCopyPhone();
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-16 bg-stone-900 text-stone-100 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            تواصل مباشر • جدة
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight leading-tight mb-2">
            معلومات الاتصال والمعاينة الميدانية
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            تواصل مباشر مع المقاول أبو وافي هاتفياً أو عبر واتساب لمعاينة موقعك فوراً
          </p>
        </div>

        {/* Digital Business Card */}
        <div className="bg-stone-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          
          {/* Business Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-5">
            <div className="flex items-center gap-3.5 text-right">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-stone-950 shrink-0">
                <Building className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-amber-400">
                  {BUSINESS_INFO.name}
                </h3>
                <div className="text-sm font-bold text-stone-200">
                  المقاول: {BUSINESS_INFO.contractor}
                </div>
                <div className="text-xs text-stone-400">
                  جدة • تشطيب وترميم • بناء فلل وعمائر
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                متاح للاتصال
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1 text-xs text-stone-400 hover:text-amber-400 px-2.5 py-1 rounded-lg bg-stone-900 border border-stone-800 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{shareSuccess ? 'تمت!' : 'مشاركة'}</span>
              </button>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-right">
            
            {/* Phone Info */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3.5 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-400 block">الجوال:</span>
                <div className="text-base sm:text-lg font-black text-amber-400">
                  <bdi dir="ltr" className="inline-block font-sans">{BUSINESS_INFO.phoneFormatted}</bdi>
                </div>
              </div>
              <button
                id="copy-phone-button"
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-amber-400 border border-stone-700 cursor-pointer text-xs flex items-center gap-1"
                title="نسخ الرقم"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">تم</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Google Maps */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[11px] text-stone-400 block">الموقع الميداني:</span>
                  <div className="text-xs sm:text-sm font-bold text-stone-200">
                    جدة - كافة الأحياء
                  </div>
                </div>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-400 hover:text-amber-300 border border-stone-700 text-xs flex items-center gap-1"
                title="خرائط جوجل"
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="text-[11px]">الخريطة</span>
              </a>
            </div>

            {/* Working Hours */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3.5 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-[11px] text-stone-400 block">أوقات العمل:</span>
                <div className="text-xs sm:text-sm font-bold text-stone-200">
                  {BUSINESS_INFO.workingHours}
                </div>
              </div>
            </div>

            {/* Direct Note */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3.5 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-[11px] text-stone-400 block">الضمان والتعاقد:</span>
                <div className="text-xs sm:text-sm font-bold text-stone-200">
                  عقود رسمية وضمان معتمد
                </div>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-1 flex flex-col sm:flex-row gap-3">
            <a
              id="contact-call-direct"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black py-3 px-4 rounded-xl text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال مباشر: <bdi dir="ltr" className="inline-block font-sans font-black">{BUSINESS_INFO.phoneFormatted}</bdi></span>
            </a>

            <a
              id="contact-whatsapp-direct"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب سريعة</span>
            </a>
          </div>

          {/* Google Search Console & SEO Indicator button */}
          <div className="pt-2 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-400">
            <span>موقع تعريفي مهيأ لمحركات البحث (SEO) وجوجل كونسول وخرائط جوجل</span>
            <button
              onClick={() => setShowSeoModal(true)}
              className="text-amber-400 hover:text-amber-300 font-bold underline flex items-center gap-1 cursor-pointer"
            >
              <Search className="w-3 h-3" />
              <span>تفاصيل تهيئة محرك البحث (SEO & GSC)</span>
            </button>
          </div>

        </div>

      </div>

      {/* SEO & Search Console Info Modal */}
      {showSeoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
          <div className="bg-stone-900 border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 text-right space-y-4 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowSeoModal(false)}
              className="absolute top-4 left-4 p-1 rounded-lg text-stone-400 hover:text-white bg-stone-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-amber-400">
              <Search className="w-5 h-5" />
              <h3 className="text-lg font-bold text-stone-100">
                جاهزية محرك البحث وجوجل سيرش كونسول (SEO)
              </h3>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              تم تجهيز وتضمين كافة معايير تحسين محركات البحث وظهور الموقع بالعربي عند البحث في جوجل:
            </p>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                <span className="font-bold text-amber-300 block">1. الكلمات المفتاحية المضمنة (Keywords):</span>
                <p className="text-[11px] text-stone-400">
                  "مقاول في جدة", "مؤسسة البصمة للمقاولات", "المقاول أبو وافي", "تشطيب وترميم جدة", "ترميم فلل وعمائر", "بناء ملاحق وساندوتش بانل ومظلات".
                </p>
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                <span className="font-bold text-amber-300 block">2. خرائط جوجل والبحث المحلي (Local SEO & Schema):</span>
                <p className="text-[11px] text-stone-400">
                  تم تضمين إحداثيات جدة الجغرافية وبيانات المنشأة بنظام Schema.org (LocalBusiness & GeneralContractor) للظهور في بطاقات خرائط جوجل والنتائج المحلية.
                </p>
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                <span className="font-bold text-amber-300 block">3. ملفات الفهرسة (Sitemap & Robots):</span>
                <p className="text-[11px] text-stone-400">
                  تم إنشاء ملف <code>/sitemap.xml</code> وملف <code>/robots.txt</code> لتسهيل زحف محرك بحث جوجل وأرشفة الموقع بالكامل.
                </p>
              </div>

              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-1">
                <span className="font-bold text-amber-300 block">4. كود التحقق في Google Search Console:</span>
                <p className="text-[11px] text-stone-400">
                  تم تجهيز علامة الميتا <code>&lt;meta name="google-site-verification"&gt;</code> داخل كود الصفحة للتحقق الفوري بنقرة واحدة من لوحة جوجل سيرش كونسول.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowSeoModal(false)}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
