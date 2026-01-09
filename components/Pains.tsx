
import React from 'react';
import { Heart, Moon, MessageSquare, Coffee } from 'lucide-react';

const Pains: React.FC = () => {
  const points = [
    {
      icon: <Heart className="w-6 h-6 text-brand-dust" />,
      text: "Вы живете обычной жизнью, работаете, заботитесь о семье, но фоном чувствуете усталость и тревогу."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand-dust" />,
      text: "Вам хочется выговориться, но близкие либо заняты, либо начинают давать советы: «Да не выдумывай», «Просто отдохни»."
    },
    {
      icon: <Coffee className="w-6 h-6 text-brand-dust" />,
      text: "Вы боитесь идти к психологу, потому что страшно открыться, или кажется, что «у меня нет серьезных проблем для врача»."
    },
    {
      icon: <Moon className="w-6 h-6 text-brand-dust" />,
      text: "В голове постоянный «рой мыслей», который мешает уснуть и радоваться текущему моменту."
    }
  ];

  return (
    <section className="py-24 bg-brand-powder/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Знакомы ли вам эти чувства?</h2>
          <p className="text-brand-charcoal/70">Если вы ответили «Да» хотя бы раз — вы в правильном месте. Вы не одна.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {points.map((point, idx) => (
            <div key={idx} className="bg-white/60 p-8 rounded-2xl flex items-start space-x-4 border border-brand-sand/20 hover:shadow-md transition-shadow">
              <div className="mt-1">{point.icon}</div>
              <p className="text-lg leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center italic text-brand-dust text-lg">
          Здесь безопасно. Здесь вас не осудят.
        </div>
      </div>
    </section>
  );
};

export default Pains;
