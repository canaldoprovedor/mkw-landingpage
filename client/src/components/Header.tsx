import { useState, useEffect } from "react";

interface HeaderProps {
  whatsappNumber: string;
}

export default function Header({ whatsappNumber }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  // Add shadow to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-heading font-bold">
            <span className="text-primary">MKW</span>
            <span className="text-secondary-dark">Dedetizadora</span>
          </h1>
        </div>
        <a 
          href="#contact" 
          className="hidden md:block bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2 rounded-lg transition duration-300"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
