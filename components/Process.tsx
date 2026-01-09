
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Заявка",
      description: "Вы оставляете заявку здесь или пишите напрямую в Telegram. Никаких анкет на 40 листов — только ваше имя и удобное время."
    },
    {
      title: "Выбор формата",
      description: "Уютная встреча в Краснодаре (кофе или прогулка в парке) или онлайн-звонок. Можно без видео, если вам так спокойнее."
    },
    {
      title: "Настройка",
      description: "Начинаем с 5 минут тишины и специальной дыхательной практики. Это поможет оставить суету за дверью и услышать себя."
    },
    {
      title: "Разговор (60 мин)",
      description: "Вы говорите обо всем. Я не перебиваю, не учу жить, но задаю вопросы, которые помогают «разложить по полочкам» хаос в голове."
    },
    {
      title: "Итог",
      description: "Вы уходите с ощущением легкости и «пустой головы». Через день я пришлю вам PDF-письмо поддержки с резюме нашей встречи."
    }
  ];

  return (
    <section id="method" className="py-24 bg-brand-beige scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-20">Как проходит встреча?</h2>
        
        <div className="max-w-4xl mx-auto space-y-12 relative">
          <div className="absolute left-[21px] top-0 bottom-0 w-px bg-brand-sand/50 hidden md:block"></div>
          
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-12 relative group"
            >
              <div className="w-11 h-11 rounded-full bg-white border border-brand-sand flex items-center justify-center font-serif italic text-xl z-10 shrink-0 shadow-sm group-hover:bg-brand-charcoal group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {idx + 1}
              </div>
              <div className="pt-2 group-hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-serif mb-3 italic text-brand-charcoal">{step.title}</h3>
                <p className="text-brand-charcoal/70 leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
