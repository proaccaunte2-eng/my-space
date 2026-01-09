
import React from 'react';

const Author: React.FC = () => {
  return (
    <section className="py-24 bg-brand-sage/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-brand-sand/30 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="/images/author.jpg" 
              alt="Любовь — автор проекта" 
              className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1522263099248-f17300405658?q=80&w=500"; }}
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-2">
              <span className="text-brand-dust uppercase tracking-widest text-sm font-medium">Ваш собеседник</span>
              <h2 className="text-4xl md:text-5xl font-serif">Любовь</h2>
            </div>
            
            <div className="prose prose-brand text-lg text-brand-charcoal/80 space-y-4">
              <p>
                Я прошла путь от полного выгорания и ощущения «бега в колесе» до понимания ценности простого, честного разговора. 
                Моё образование и опыт позволяют мне быть тем самым бережным зеркалом, в котором вы увидите свои истинные смыслы.
              </p>
              <p>
                В мире, где все требуют результата, я предлагаю процесс. Процесс возвращения к себе через слова.
              </p>
            </div>

            <div className="bg-white/50 p-6 rounded-2xl border-l-4 border-brand-sand italic font-serif">
              "Каждой женщине иногда нужно выдохнуть и почувствовать, что её слышат. Не потому что она «должна», а потому что она есть."
            </div>
            
            <button className="text-brand-charcoal border-b border-brand-charcoal pb-1 hover:text-brand-dust hover:border-brand-dust transition-all">
              Подробнее о моей методике →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
