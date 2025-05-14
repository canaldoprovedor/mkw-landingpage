interface FooterProps {
  whatsappNumber: string;
}

export default function Footer({ whatsappNumber }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">MKW Dedetizadora</h3>
            <p className="text-gray-400 mb-2">CNPJ: 46.389.272-000126</p>
            <p className="text-gray-400">Soluções rápidas, seguras e eficazes para um ambiente livre de pragas.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Área de Atendimento</h3>
            <p className="text-gray-400">Atendemos toda a região de Brasília - DF, incluindo:</p>
            <ul className="text-gray-400 mt-2">
              <li>• Brasília (Capital)</li>
              <li>• Região do Entorno</li>
              <li>• Todo o Distrito Federal</li>
              <li>• Cidades próximas</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contato</h3>
            <div className="flex items-center mb-3">
              <i className="fab fa-whatsapp text-green-500 mr-3 text-xl"></i>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                WhatsApp: (61) 98585-1689
              </a>
            </div>
            <div className="flex items-center mb-3">
              <i className="fas fa-phone text-primary mr-3"></i>
              <a 
                href="tel:6198585-1689" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Telefone: (61) 98585-1689
              </a>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-primary mr-3"></i>
              <a 
                href="mailto:contato@mkwdedetizadora.com.br" 
                className="text-gray-400 hover:text-white transition duration-300"
              >
                contato@mkwdedetizadora.com.br
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} MKW Dedetizadora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
