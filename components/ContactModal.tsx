
import React from 'react';
import { X, Send, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-charcoal/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-brand-beige w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-slideUp">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-brand-charcoal/50 hover:text-brand-charcoal transition-colors active:scale-90"
        >
          <X size={24} />
        </button>
        
        <div className="p-8 md:p-12 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif">Сделать первый шаг</h3>
            <p className="text-brand-charcoal/70 text-lg">
              Выберите удобный способ связи, чтобы записаться на встречу или получить гайд по ритуалам тишины.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <a 
              href="https://t.me/lchernousova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-brand-charcoal text-white py-4 rounded-full font-medium hover:bg-brand-charcoal/90 active:scale-95 transition-all shadow-md hover:shadow-lg"
            >
              <Send size={20} />
              <span>Написать в Telegram</span>
            </a>
            
            <a 
              href="https://t.me/lchernousova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-brand-sage/30 text-brand-charcoal py-4 rounded-full font-medium hover:bg-brand-sage/40 active:scale-95 transition-all"
            >
              <MessageSquare size={20} />
              <span>Написать лично</span>
            </a>
          </div>
          
          <p className="text-xs text-brand-dust uppercase tracking-widest pt-4">
            Я отвечу вам в течение часа
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
