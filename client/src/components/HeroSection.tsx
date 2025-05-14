import WhatsAppButton from "./WhatsAppButton";

interface HeroSectionProps {
  whatsappNumber: string;
}

export default function HeroSection({ whatsappNumber }: HeroSectionProps) {
  return (
    <section className="relative bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-dark leading-tight mb-4">
            Sua Casa Livre de Pragas <span className="text-primary">HOJE!</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-light mb-8">
            Eliminamos baratas, ratos, cupins e muito mais. Orçamento rápido e sem compromisso pelo WhatsApp!
          </p>
          
          <WhatsAppButton 
            whatsappNumber={whatsappNumber} 
            text="FALAR COM ESPECIALISTA NO WHATSAPP" 
            size="lg"
          />
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
            alt="Ambiente residencial protegido e livre de pragas" 
            className="rounded-xl shadow-xl w-full max-w-lg h-auto object-cover"
          />
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
}
