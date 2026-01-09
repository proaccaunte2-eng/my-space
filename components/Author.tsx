
import React from 'react';

const Author: React.FC = () => {
  const fallbackAuthorImage = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop";

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-brand-beige rounded-[3rem] -rotate-2"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4] bg-brand-sand/10">
              <img 
                src="/images/author.jpg" 
                alt="Любовь Черноусова" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackAuthorImage;
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-charcoal text-white p-6 md:p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-[280px]">
              <p className="font-serif italic text-lg text-brand-sand leading-relaxed">
                «Я верю, что каждый ответ уже живет внутри вас. Я лишь помогаю его услышать.»
              </p>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-brand-dust uppercase tracking-[0.3em] text-[10px] font-bold block">Ваш проводник</span>
              <h2 className="text-5xl md:text-6xl font-serif text-brand-charcoal leading-tight">
                Любовь <br />
                <span className="text-brand-dust italic font-normal">Черноусова</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-brand-charcoal/80 leading-relaxed font-light">
              <p>
                Я создала это пространство, потому что знаю: в современном мире женщине жизненно необходимо место, где от нее ничего не ждут. Где не нужно быть успешной или продуктивной.
              </p>
              <p>
                Мой метод — это тишина, правильные вопросы и глубокое присутствие. Мы не лечим, мы возвращаем вам право быть собой.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-sand/30">
              <div>
                <div className="text-3xl font-serif text-brand-dust">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 font-bold mt-1">Часов практики</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-brand-dust">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-charcoal/60 font-bold mt-1">Принятие</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
