interface WhatsAppButtonProps {
  whatsappNumber: string;
  text: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function WhatsAppButton({ 
  whatsappNumber, 
  text, 
  size = 'md',
  className = '' 
}: WhatsAppButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  // Icon size classes
  const iconSizeClasses = {
    sm: 'text-lg mr-2',
    md: 'text-xl mr-2',
    lg: 'text-2xl mr-3'
  };

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium ${sizeClasses[size]} rounded-lg shadow-lg transition duration-300 ${className}`}
    >
      <i className={`fab fa-whatsapp ${iconSizeClasses[size]}`}></i>
      <span>{text}</span>
    </a>
  );
}
