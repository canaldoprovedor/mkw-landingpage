import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialSection from "@/components/TestimonialSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

export default function Home() {
  // WhatsApp number - in production, this would come from an environment variable
  const whatsappNumber = "5561985851689"; // Cliente número
  
  return (
    <div className="flex flex-col min-h-screen font-body text-secondary-dark bg-white">
      <Header whatsappNumber={whatsappNumber} />
      <main>
        <HeroSection whatsappNumber={whatsappNumber} />
        <ServicesSection whatsappNumber={whatsappNumber} />
        <DifferentialsSection />
        <TestimonialSection />
        <CallToActionSection whatsappNumber={whatsappNumber} />
      </main>
      <Footer whatsappNumber={whatsappNumber} />
    </div>
  );
}
