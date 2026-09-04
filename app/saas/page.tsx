import AboutSection from '../components/saas/AboutSection';
import AiBussinessTools from '../components/saas/AiBussinessTool';
import AiMarketingTool from '../components/saas/AiMarketingTool';
import ContactSection from '../components/saas/ContactSection';
import PricingPlans from '../components/saas/PricingPlans';
import SaaSFooter from '../components/saas/SaaSFooter';
import SaaSHero from '../components/saas/SaaSHero';
import SaaSNavbar from '../components/saas/SaaSNavbar';


export default function SaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white text-gray-900">
      <SaaSNavbar />
      <main className="mx-auto w-full max-w-[1440px]">
        <SaaSHero />
        <AiBussinessTools />
        <AiMarketingTool />
        <AboutSection />
        <PricingPlans />
        <ContactSection />
      </main>
      <SaaSFooter />
    </div>
  );
}
