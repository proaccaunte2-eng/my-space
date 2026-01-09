
import React from 'react';

interface PricingProps {
  onPriceClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPriceClick }) => {
  return (
    <section id="price" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif">Стоимость и Варианты участия</h2>
          <p className="text-brand-charcoal/60">Выберите комфортный для вас формат заботы о себе</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-brand-sand/20 flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-shadow">
            <span className="text-brand-dust uppercase tracking-widest text-xs font-semibold">Начало</span>
            <h3 className="text-2xl font-serif italic">Знакомство</h3>
            <div className="text-4xl font-light">Бесплатно</div>
            <ul className="text-brand-charcoal/70 space-y-2 flex-grow">
              <li>15 минут онлайн</li>
              <li>Аудио или видеозвонок</li>
              <li>Знакомимся, понимаем, подходим ли мы друг другу</li>
            </ul>
            <button 
              onClick={onPriceClick}
              className="w-full py-4 rounded-full border border-brand-charcoal hover:bg-brand-charcoal hover:text-white active:scale-95 transition-all font-medium"
            >
              Попробовать
            </button>
          </div>

          {/* Card 2 - Featured */}
          <div className="bg-brand-charcoal text-white p-10 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 shadow-2xl scale-105 relative z-10">
            <div className="absolute -top-4 bg-brand-sage text-brand-charcoal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Популярно
            </div>
            <span className="text-white/60 uppercase tracking-widest text-xs font-semibold">Основной формат</span>
            <h3 className="text-2xl font-serif italic">Глубокий разговор</h3>
            <div className="text-4xl font-light">3 500 ₽</div>
            <ul className="text-white/80 space-y-2 flex-grow">
              <li>60–90 минут диалога</li>
              <li>Онлайн или Офлайн (Краснодар)</li>
              <li>Резюме встречи в PDF</li>
              <li>Личное письмо поддержки</li>
            </ul>
            <button 
              onClick={onPriceClick}
              className="w-full py-4 rounded-full bg-white text-brand-charcoal hover:bg-brand-powder active:scale-95 transition-all font-bold"
            >
              Записаться
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-brand-sand/20 flex flex-col items-center text-center space-y-6 hover:shadow-xl transition-shadow">
            <span className="text-brand-dust uppercase tracking-widest text-xs font-semibold">Система</span>
            <h3 className="text-2xl font-serif italic">Абонемент заботы</h3>
            <div className="text-4xl font-light">12 000 ₽</div>
            <ul className="text-brand-charcoal/70 space-y-2 flex-grow">
              <li>4 полноценных встречи</li>
              <li>Приоритет в записи</li>
              <li>Доступ в закрытый чат</li>
              <li>Подарок: Дневник рефлексии</li>
            </ul>
            <button 
              onClick={onPriceClick}
              className="w-full py-4 rounded-full border border-brand-charcoal hover:bg-brand-charcoal hover:text-white active:scale-95 transition-all font-medium"
            >
              Выбрать абонемент
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
