
import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-[60] bg-brand-beige/90 backdrop-blur-md border-b border-brand-sand/30">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a 
              href="#top" 
              onClick={(e) => handleScroll(e, 'top')}
              className="flex items-center space-x-2 group active:scale-95 transition-transform"
            >
              <span className="text-xl md:text-2xl font-serif italic font-semibold text-brand-charcoal group-hover:text-brand-dust transition-colors">
                Любовь
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-dust hidden xs:block">
                Пространство разговора
              </span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
            {['about', 'method', 'price'].map((id) => (
              <a 
                key={id}
                href={`#${id}`} 
                onClick={(e) => handleScroll(e, id)}
                className="hover:text-brand-dust transition-colors relative py-2"
              >
                {id === 'about' ? 'О формате' : id === 'method' ? 'Как проходит' : 'Стоимость'}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://t.me/lchernousova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex bg-brand-charcoal text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm active:scale-95"
            >
              Хочу поговорить
            </a>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-brand-charcoal hover:text-brand-dust transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-brand-beige transition-transform duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col items-center justify-center space-y-8`}
      >
        <nav className="flex flex-col items-center space-y-8 text-2xl font-serif italic">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-brand-charcoal hover:text-brand-dust transition-colors">О формате</a>
          <a href="#method" onClick={(e) => handleScroll(e, 'method')} className="text-brand-charcoal hover:text-brand-dust transition-colors">Как проходит</a>
          <a href="#price" onClick={(e) => handleScroll(e, 'price')} className="text-brand-charcoal hover:text-brand-dust transition-colors">Стоимость</a>
        </nav>
        
        <div className="pt-8 flex flex-col items-center space-y-4">
          <a 
            href="https://t.me/lchernousova" 
            className="flex items-center space-x-3 bg-brand-charcoal text-white px-8 py-4 rounded-full font-medium"
          >
            <Send size={18} />
            <span>Написать в Telegram</span>
          </a>
          <p className="text-xs text-brand-dust uppercase tracking-widest font-medium">Краснодар / Онлайн</p>
        </div>
      </div>
    </>
  );
};

export default Header;
