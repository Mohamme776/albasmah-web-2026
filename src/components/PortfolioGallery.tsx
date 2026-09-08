import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, BUSINESS_INFO } from '../data/contractingData';
import { PortfolioItem } from '../types';
import { MapPin, ZoomIn, Check, Phone, MessageCircle } from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const filters = [
    { id: 'all', label: 'كافة المشاريع' },
    { id: 'renovation', label: 'تشطيب وترميم (تخصصنا)' },
    { id: 'construction', label: 'بناء فلل وعمائر' },
    { id: 'annex', label: 'بناء ملاحق' },
    { id: 'sandwich', label: 'ساندوتش بانل' },
    { id: 'hangars', label: 'مظلات وسواتر وهناجر' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            سجل الإنجازات
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight leading-tight mb-2">
            معرض الأعمال والمشاريع بجدة
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            نماذج ميدانية من أعمال التشطيب والترميم والبناء
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((tab) => (
            <button
              key={tab.id}
              id={`portfolio-filter-${tab.id}`}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-amber-500 text-stone-950 shadow-md scale-105'
                  : 'bg-stone-950 text-stone-300 hover:bg-stone-800 hover:text-amber-400 border border-stone-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1 shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/10 transition-colors" />
                
                <span className="absolute top-3 right-3 bg-stone-900/90 backdrop-blur-sm text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md border border-stone-700">
                  {item.categoryLabel}
                </span>

                <div className="absolute bottom-3 left-3 bg-stone-900/80 p-1.5 rounded-lg text-stone-300 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 text-right flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-stone-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-stone-100 leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>تفاصيل العمل</span>
                  <span>←</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full project details */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-right space-y-5">
              <div className="flex items-start justify-between gap-4 border-b border-stone-800 pb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-2.5 py-0.5 rounded">
                      {activeModalItem.categoryLabel}
                    </span>
                    <span className="text-xs text-stone-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" /> {activeModalItem.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-100">
                    {activeModalItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-stone-800">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>

              <p className="text-sm text-stone-200 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                <h4 className="text-xs font-bold text-amber-400">أبرز مواصفات التنفيذ:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                  {activeModalItem.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 px-4 rounded-xl text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>معاينة مشروعك بجدة ({BUSINESS_INFO.phoneFormatted})</span>
                </a>
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}&text=${encodeURIComponent(`السلام عليكم مقاول أبو وافي، أريد عمل مشروع مشابه لـ (${activeModalItem.title}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>استفسار واتساب</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
