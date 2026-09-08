import React from 'react';
import { JEDDAH_DISTRICTS, BUSINESS_INFO } from '../data/contractingData';
import { MapPin, Navigation, Phone, ExternalLink, Compass } from 'lucide-react';

export const JeddahCoverage: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('جدة المملكة العربية السعودية')}`;

  return (
    <section id="coverage" className="py-14 sm:py-16 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Coverage Card */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Main Column */}
            <div className="lg:col-span-7 space-y-4 text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold">
                <Navigation className="w-3.5 h-3.5" />
                <span>خرائط جوجل ونطاق التغطية بجدة</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-stone-100 leading-tight">
                مقاول في جدة • تغطية شاملة لكافة الأحياء
              </h2>

              <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
                معاينة فورية وفحص هندسي للمواقع في كافة أحياء شمال، وسط، جنوب، وشرق جدة.
              </p>

              {/* Districts Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {JEDDAH_DISTRICTS.map((district, idx) => (
                  <span
                    key={idx}
                    className="bg-stone-950/80 border border-stone-800 text-stone-300 text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 hover:border-amber-500/40 transition-colors"
                  >
                    <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{district}</span>
                  </span>
                ))}
              </div>

              {/* Action Link to Google Maps */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  id="open-google-maps-btn"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-amber-400 hover:text-amber-300 px-4 py-2 rounded-xl text-xs font-bold border border-stone-700 transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>فتح في تطبيق خرائط جوجل (Google Maps)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 px-4 py-2 rounded-xl text-xs font-black transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>طلب معاينة موقعك بجدة</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Embedded Google Maps Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-stone-700 shadow-2xl bg-stone-950 group">
                {/* Embedded Google Map (Jeddah Region) */}
                <div className="h-64 sm:h-72 w-full relative">
                  <iframe
                    title="موقع مقاول جدة على خرائط جوجل"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118833.09341491763!2d39.11075678857422!3d21.543333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2z2KzYr9ipINin2YTZhdmF2YTZg9ipINin2YTYudix2KjZitipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                    className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:filter-none transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-3 right-3 bg-stone-950/90 border border-amber-500/40 backdrop-blur-sm px-3 py-1.5 rounded-lg text-right shadow-lg pointer-events-none">
                    <span className="text-[11px] text-amber-400 font-bold block">
                      المقاول أبو وافي
                    </span>
                    <span className="text-[10px] text-stone-300">
                      جدة - تغطية ميدانية لجميع الأحياء
                    </span>
                  </div>

                  {/* Direct Pin Button */}
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 left-3 bg-amber-500 text-stone-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow-lg hover:bg-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>عرض الموقع على الخريطة</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
