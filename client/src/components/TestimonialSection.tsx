export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-secondary-dark mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-secondary-light max-w-3xl mx-auto">Clientes satisfeitos compartilham suas experiências</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl p-8 shadow-lg">
          <div className="mb-6 flex justify-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-500 text-xl mx-1"></i>
              ))}
            </div>
          </div>
          
          <blockquote className="text-xl italic text-center text-secondary-dark mb-6">
            "O atendimento da MKW foi excelente e o problema com as baratas foi resolvido muito rapidamente! Recomendo a todos."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden mb-3">
              <img 
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120" 
                alt="Cliente satisfeito" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="font-medium text-secondary-dark">Maria S., São Paulo</p>
            <p className="text-secondary-light text-sm">Cliente desde 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
