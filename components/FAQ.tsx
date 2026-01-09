
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-sand/30 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-serif italic group-hover:text-brand-dust transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-dust" /> : <ChevronDown className="text-brand-dust" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-brand-charcoal/70 text-lg leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Нужно ли мне готовиться?",
      answer: "Нет, специальная подготовка не нужна. Мы начнем с настройки, которая поможет вам расслабиться. Приходите такой, какая вы есть сейчас."
    },
    {
      question: "А если я буду плакать?",
      answer: "Это абсолютно нормально и даже приветствуется. Слезы — это способ организма сбросить напряжение. У нас безопасно проявлять любые эмоции."
    },
    {
      question: "Вы точно не расскажете никому?",
      answer: "Конфиденциальность — основа моего подхода. Всё, что мы обсуждаем, остается строго между нами. Это профессиональная этика."
    },
    {
      question: "Чем это отличается от «Друга на час» с Авито?",
      answer: "В «Пространстве разговора» есть методология. Я не просто слушаю, а создаю структуру диалога, используя профессиональные навыки эмпатии и структурирования мыслей. Это безопасность и результат, а не случайная болтовня."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Частые вопросы</h2>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
