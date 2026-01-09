
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  // Используем красивые эстетичные фото как запасной вариант
  const fallbackImage = "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-beige px-4 pt-20 pb-12 md:py-0">
      {/* Мягкие декоративные пятна */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-powder/40 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left animate-fadeIn">
          <div className="inline-block px-4 py-1 border border-brand-sand/50 rounded-full text-[10px] uppercase tracking-[0.3em] text-brand-dust font-bold bg-white/50">
            Первая встреча — безоплатно
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-charcoal leading-tight">
            Пространство <br />
            <span className="italic font-normal text-brand-dust underline decoration-brand-sand/50 underline-offset-8">разговора</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-charcoal/70 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Когда внутри становится слишком громко — мы помогаем найти тишину. Бережные диалоги для женщин, которым важно быть услышанными.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button 
              onClick={onCtaClick}
              className="bg-brand-charcoal text-white px-10 py-5 rounded-full text-lg font-medium hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95"
            >
              Записаться на встречу
            </button>
            <div className="flex items-center justify-center space-x-3 text-[10px] text-brand-dust font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-sage animate-ping"></span>
              <span>Краснодар / Онлайн</span>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[650px] w-full rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white group">
          <img 
            src="/images/hero.jpg" 
            alt="Атмосфера" 
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallbackImage;
            }}
          />
          <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
