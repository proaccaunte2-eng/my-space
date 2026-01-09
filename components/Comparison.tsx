
import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Почему этот формат вам подойдет?</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto text-left border-collapse bg-white rounded-3xl shadow-sm overflow-hidden">
            <thead>
              <tr className="bg-brand-sand/20">
                <th className="p-6 md:p-8 font-serif italic text-lg border-b border-brand-sand/30">Параметр</th>
                <th className="p-6 md:p-8 font-serif italic text-lg border-b border-brand-sand/30">Подруга / Муж</th>
                <th className="p-6 md:p-8 font-serif italic text-lg border-b border-brand-sand/30 text-brand-dust">Классический психолог</th>
                <th className="p-6 md:p-8 font-serif italic text-lg border-b border-brand-sand/30 bg-brand-powder/30">Пространство разговора</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              <tr>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 font-medium">Реакция</td>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 opacity-70">Может обесценить, перебить или давать советы</td>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 opacity-70">Ищет причины в детстве и травмах</td>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 bg-brand-powder/10 font-medium">Бережно слушает, задает вопросы к настоящему</td>
              </tr>
              <tr>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 font-medium">Отношение</td>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 opacity-70">Личная заинтересованность, риск сплетен</td>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 opacity-70">Клинический, часто холодный подход</td>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 bg-brand-powder/10 font-medium">Полная анонимность и человеческая эмпатия</td>
              </tr>
              <tr>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 font-medium">Ощущение</td>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 opacity-70">Чувство долга «послушать в ответ»</td>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 opacity-70">Страх показаться «больной»</td>
                <td className="p-6 md:p-8 border-b border-brand-sand/10 bg-brand-powder/10 font-medium">Легкость, как после глубокого выдоха</td>
              </tr>
              <tr className="bg-brand-beige/50">
                <td className="p-6 md:p-8 font-medium">Доступность</td>
                <td className="p-6 md:p-8 opacity-70">Когда у них есть время</td>
                <td className="p-6 md:p-8 opacity-70">Дорого, длинные очереди</td>
                <td className="p-6 md:p-8 bg-brand-powder/20 font-medium">Удобный график, понятная цена</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
