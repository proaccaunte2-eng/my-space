
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 space-y-8 animate-fadeIn">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Когда внешне <span className="italic">«всё нормально»</span>, но внутри — шум.
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/80 max-w-lg leading-relaxed">
              «Пространство разговора» — сервис честных диалогов для женщин. 
              Без советов, диагнозов и оценок. Помогаем навести порядок в мыслях через безопасное общение.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="bg-brand-charcoal text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-[1.02] active:scale-95 transition-all shadow-lg text-center"
            >
              Записаться на беседу (15 мин) — Бесплатно
            </button>
            <div className="flex items-center space-x-3 px-4 text-sm text-brand-dust">
              <span className="w-2 h-2 rounded-full bg-brand-sage animate-pulse"></span>
              <span>Краснодар (офлайн) / Весь мир (онлайн)</span>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="/images/hero.jpg" 
            alt="Уютная атмосфера для разговора" 
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200"; }}
          />
          <div className="absolute inset-0 bg-brand-charcoal/10"></div>
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 text-white">
            <p className="font-serif italic text-lg text-center">
              "Я верю, что каждой женщине иногда нужно просто быть услышанной. Не «сильной», не «правильной», а собой."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
