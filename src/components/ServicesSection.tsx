import React, { useState } from 'react';
import { 
  Paintbrush, 
  Home, 
  Building2, 
  Layers, 
  Box, 
  Warehouse, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/contractingData';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6" />;
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Box':
        return <Box className="w-6 h-6" />;
      case 'Warehouse':
        return <Warehouse className="w-6 h-6" />;
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
            مؤسسة البصمة للمقاولات
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-100 tracking-tight leading-tight mb-2">
            خدمات المقاولات العامة بجدة
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            إشراف هندسي وميداني مباشر من المقاول أبو وافي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`rounded-2xl overflow-hidden bg-stone-900 border transition-all duration-300 flex flex-col justify-between group ${
                service.isPrimaryFocus 
                  ? 'border-amber-500 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/30' 
                  : 'border-stone-800 hover:border-stone-700 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Service Image with overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                  
                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-3 right-3 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {service.badge}
                    </span>
                  )}

                  {/* Icon floating */}
                  <div className="absolute bottom-3 right-4 w-12 h-12 rounded-xl bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-lg backdrop-blur-sm">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-right space-y-3">
                  <h3 className="text-xl font-black text-stone-100 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Features list */}
                  <div className="pt-2 border-t border-stone-800/80 space-y-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons at bottom of card */}
              <div className="p-6 pt-0 border-t border-stone-800/40 flex items-center gap-2">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}&text=${encodeURIComponent(`السلام عليكم مقاول أبو وافي.. أود الاستفسار عن خدمة (${service.title}) في جدة.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-stone-800 hover:bg-emerald-700 text-stone-200 hover:text-white py-2.5 px-3 rounded-xl text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>استفسار واتساب</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center p-2.5 bg-amber-500/15 hover:bg-amber-500 text-amber-400 hover:text-stone-950 rounded-xl transition-colors"
                  title="اتصال مباشر"
                >
                  <Phone className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs text-stone-400 hover:text-amber-400 px-2 py-2 cursor-pointer font-medium"
                >
                  تفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing full service details */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-right space-y-5">
              <div className="flex items-start justify-between gap-4 border-b border-stone-800 pb-4">
                <div className="space-y-1">
                  <span className="text-xs text-amber-400 font-bold block">
                    مؤسسة البصمة للمقاولات - جدة
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-100">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-stone-400 hover:text-white p-1 rounded-lg bg-stone-800 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-56 object-cover rounded-xl border border-stone-800"
              />

              <p className="text-sm text-stone-300 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-amber-400">مميزات الخدمة ومواصفات التنفيذ:</h4>
                <div className="space-y-2">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 px-4 rounded-xl text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال مباشر: {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}&text=${encodeURIComponent(`السلام عليكم مقاول أبو وافي، أود الاستفسار والتنسيق لطلب (${selectedService.title}) بجدة.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>محادثة واتساب</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
