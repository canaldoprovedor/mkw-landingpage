interface DifferentialCardProps {
  icon: string;
  title: string;
  description: string;
}

const DifferentialCard = ({ icon, title, description }: DifferentialCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-start md:items-center">
    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-6">
      <i className={`${icon} text-primary text-2xl`}></i>
    </div>
    <div>
      <h3 className="text-xl font-heading font-semibold text-secondary-dark mb-2">{title}</h3>
      <p className="text-secondary-light">{description}</p>
    </div>
  </div>
);

export default function DifferentialsSection() {
  const differentials = [
    {
      icon: "fas fa-headset",
      title: "Atendimento Rápido e Personalizado",
      description: "Fale diretamente com nossos especialistas pelo WhatsApp e tenha respostas e soluções na hora."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Técnicas Seguras e Eficazes",
      description: "Utilizamos produtos registrados, seguros para sua família e animais de estimação, com resultados garantidos contra as pragas."
    },
    {
      icon: "fas fa-user-tie",
      title: "Equipe Qualificada e Experiente",
      description: "Conte com profissionais experientes para identificar a origem do problema e aplicar a solução mais eficiente."
    },
    {
      icon: "fas fa-hand-holding-usd",
      title: "Preço Justo e Transparente",
      description: "Oferecemos orçamentos claros, detalhados e sem surpresas desagradáveis."
    }
  ];

  return (
    <section id="differentials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-secondary-dark mb-4">Por Que Escolher a MKW Dedetizadora?</h2>
          <p className="text-secondary-light max-w-3xl mx-auto">Seu Ambiente Protegido e Saudável com a MKW</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((differential, index) => (
            <DifferentialCard
              key={index}
              icon={differential.icon}
              title={differential.title}
              description={differential.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
