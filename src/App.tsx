import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FinishingRenovationFocus } from './components/FinishingRenovationFocus';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { WorkProcess } from './components/WorkProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { JeddahCoverage } from './components/JeddahCoverage';
import { ContactCard } from './components/ContactCard';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  React.useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-['Tajawal',sans-serif] selection:bg-amber-500 selection:text-stone-950">
      {/* Top sticky navigation bar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onExploreFinishing={() => scrollToSection('finishing-focus')}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* Primary Spotlight: Finishing & Renovation Focus */}
        <FinishingRenovationFocus />

        {/* All Services Showcase */}
        <ServicesSection />

        {/* Portfolio Gallery */}
        <PortfolioGallery />

        {/* Why Choose Us / Trust Pillars */}
        <WhyChooseUs />

        {/* Work Process / Workflow */}
        <WorkProcess />

        {/* Coverage Across Jeddah Districts */}
        <JeddahCoverage />

        {/* Informational Profile & Contact Card (No data input) */}
        <ContactCard />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Speed-Dial Actions (Phone & WhatsApp) */}
      <FloatingActions />
    </div>
  );
}
