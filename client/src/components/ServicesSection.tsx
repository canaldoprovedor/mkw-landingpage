import WhatsAppButton from "./WhatsAppButton";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="service-card bg-white rounded-xl shadow-lg p-6 border border-gray-200">
    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
      <i className={`${icon} text-primary text-2xl`}></i>
    </div>
    <h3 className="text-xl font-heading font-semibold text-secondary-dark text-center mb-3">{title}</h3>
    <p className="text-center text-secondary-light">{description}</p>
  </div>
);

interface ServicesSectionProps {
  whatsappNumber: string;
}

export default function ServicesSection({ whatsappNumber }: ServicesSectionProps) {
  const services = [
    {
      icon: "fas fa-bug",
      title: "Dedetização de Baratas",
      description: "Elimine infestações de forma eficaz e proteja a saúde da sua família."
    },
    {
      icon: "fas fa-mouse",
      title: "Desratização",
      description: "Controle eficiente de ratos para um ambiente seguro, limpo e saudável."
    },
    {
      icon: "fas fa-home",
      title: "Descupinização",
      description: "Proteja sua estrutura contra cupins que podem causar danos irreversíveis."
    },
    {
      icon: "fas fa-spider",
      title: "Controle de Formigas",
      description: "Eliminação de formigas com produtos seguros e técnicas eficientes."
    },
    {
      icon: "fas fa-mosquito",
      title: "Controle de Mosquitos",
      description: "Proteção contra mosquitos transmissores de doenças, incluindo o da Dengue."
    },
    {
      icon: "fas fa-water",
      title: "Limpeza de Caixa D'água",
      description: "Água limpa e segura para sua família com nossa limpeza especializada."
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-secondary-dark mb-4">Combatemos Diversas Pragas Urbanas Comuns</h2>
          <p className="text-secondary-light max-w-3xl mx-auto">Conheça nossos principais serviços de dedetização para sua residência ou empresa</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <WhatsAppButton 
            whatsappNumber={whatsappNumber} 
            text="SOLICITE SEU ORÇAMENTO DETALHADO" 
            size="md" 
          />
        </div>
      </div>
    </section>
  );
}
