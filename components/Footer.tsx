
import React from 'react';
import { Send, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  onLeadMagnetClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLeadMagnetClick }) => {
  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic">Пространство разговора</h3>
            <p className="text-white/60 leading-relaxed">
              Бережное место для женщин, где можно быть собой. Наводим порядок в мыслях через честное общение.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="uppercase tracking-widest text-sm text-brand-sand">Контакты</h4>
            <div className="space-y-4">
              <a 
                href="https://t.me/lchernousova" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-brand-sand transition-colors"
              >
                <Send size={18} />
                <span>Написать в Telegram</span>
              </a>
              <a 
                href="https://t.me/lchernousova" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-brand-sand transition-colors"
              >
                <Instagram size={18} />
                <span>Канал «Любовь»</span>
              </a>
              <a 
                href="mailto:contact@lyubov-space.ru" 
                className="flex items-center space-x-3 hover:text-brand-sand transition-colors"
              >
                <Mail size={18} />
                <span>contact@lyubov-space.ru</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white/5 p-8 rounded-3xl space-y-4 border border-white/10">
            <h4 className="font-serif italic text-xl italic">Хотите бесплатный подарок?</h4>
            <p className="text-white/60">
              Подпишитесь на мой Telegram-канал и получите PDF-гайд «7 ритуалов тишины для жительницы мегаполиса».
            </p>
            <button 
              onClick={onLeadMagnetClick}
              className="inline-block bg-brand-sand text-brand-charcoal px-6 py-3 rounded-full font-bold hover:bg-white active:scale-95 transition-all"
            >
              Подписаться и получить гайд
            </button>
          </div>
        </div>
        
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-white/40 uppercase tracking-widest text-center md:text-left">
          <span>© 2024 Пространство разговора • Любовь</span>
          <div className="flex space-x-8">
            <a href="#privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#offer" className="hover:text-white transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
