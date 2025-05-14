import WhatsAppButton from "./WhatsAppButton";

interface CallToActionSectionProps {
  whatsappNumber: string;
}

export default function CallToActionSection({ whatsappNumber }: CallToActionSectionProps) {
  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-6">
          Pronto para Acabar com as Pragas de Vez?
        </h2>
        <p className="text-white opacity-90 text-lg max-w-3xl mx-auto mb-8">
          Não espere o problema se agravar e trazer mais transtornos. Nossa equipe de especialistas está pronta para te atender pelo WhatsApp e oferecer a solução mais adequada e eficaz para sua casa ou empresa.
        </p>
        
        <WhatsAppButton 
          whatsappNumber={whatsappNumber} 
          text="FALAR COM ESPECIALISTA NO WHATSAPP" 
          size="lg" 
          className="bg-green-600 hover:bg-green-700"
        />
      </div>
    </section>
  );
}
