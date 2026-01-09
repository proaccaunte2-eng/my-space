
import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      text: "Словно сняла тяжелый рюкзак с плеч. Удивительно, как один час честного разговора может заменить неделю бесплодных раздумий.",
      author: "Мария, 34 года"
    },
    {
      text: "Боялась идти к психологу — казалось, у меня нет «диагноза». А здесь поговорили как с мудрой, понимающей подругой, только без советов.",
      author: "Анна, 29 лет"
    },
    {
      text: "Наконец-то в голове тишина. Это пространство стало моим островком безопасности в суете будней. Любовь, спасибо вам за это.",
      author: "Елена, 41 год"
    }
  ];

  return (
    <section className="py-24 bg-brand-powder/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 italic">Голоса тех, кто уже выдохнул</h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-brand-sand/30 flex flex-col justify-between space-y-6 shadow-sm flex-1">
              <div className="text-brand-sand">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M12 10C8.68629 10 6 12.6863 6 16C6 22 12 26 12 26C12 26 18 22 18 16C18 12.6863 15.3137 10 12 10Z" opacity="0.2"/>
                  <path d="M10 14V18H14V14H10ZM22 14V18H26V14H22Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-lg italic leading-relaxed text-brand-charcoal/80">«{rev.text}»</p>
              <div className="text-sm font-medium text-brand-dust uppercase tracking-widest">{rev.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
