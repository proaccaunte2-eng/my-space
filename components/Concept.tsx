
import React from 'react';

const Concept: React.FC = () => {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row">
          <div className="md:w-2/5 h-64 md:h-auto">
            <img 
              src="/images/concept.jpg" 
              alt="Честный диалог за чашкой чая" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800"; }}
            />
          </div>
          <div className="md:w-3/5 p-10 md:p-16 space-y-8">
            <h2 className="text-3xl font-serif">Это не терапия и не просто «болтовня»</h2>
            <p className="text-lg leading-relaxed text-brand-charcoal/80">
              «Пространство разговора» (бренд «Любовь») — это новый формат поддержки. 
              Мы создаем условия, где вы можете озвучить всё, что накопилось. 
              Когда мы проговариваем мысли вслух безопасному собеседнику, хаос превращается в структуру.
            </p>
            
            <div className="grid grid-cols-1 gap-6 pt-4 border-t border-brand-sand">
              <div className="flex flex-col space-y-1">
                <span className="font-serif italic text-xl">01. Без ярлыков</span>
                <span className="text-brand-charcoal/60">Мы не лечим и не ищем патологий. Мы слушаем человека, а не пациента.</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-serif italic text-xl">02. Без советов</span>
                <span className="text-brand-charcoal/60">Мы не учим жить. Мы задаем вопросы, которые помогают вам найти свои ответы.</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="font-serif italic text-xl">03. Конфиденциально</span>
                <span className="text-brand-charcoal/60">Всё, что сказано в Пространстве, остается здесь. Ваша история в безопасности.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
