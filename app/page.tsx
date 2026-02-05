import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/10 to-black pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 gradient-text animate-fade-in-up">
            Baraka Residence
          </h1>
          <p className="text-3xl md:text-5xl font-light mb-10 animate-fade-in-up animation-delay-300">
            Премиум жилой комплекс в Навои
          </p>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-16 text-gray-300 animate-fade-in-up animation-delay-500">
            Современный жилой комплекс, где комфорт встречается с элегантностью. Ваш идеальный дом в самом сердце города Навои.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-2xl md:text-3xl font-medium">
            <div className="glass px-8 py-4 rounded-2xl">5 Корпусов</div>
            <div className="glass px-8 py-4 rounded-2xl">320+ Квартир</div>
            <div className="glass px-8 py-4 rounded-2xl">2026 Год сдачи</div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-8 gradient-text">
            Преимущества
          </h2>
          <p className="text-2xl md:text-3xl text-center mb-16 text-gray-400">
            Всё для комфортной жизни
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Идеальное расположение",
                desc: "В центре города Навои с развитой инфраструктурой и удобной транспортной доступностью.",
              },
              {
                title: "Продуманные планировки",
                desc: "Функциональные квартиры от 1 до 3 комнат с оптимальным использованием пространства.",
              },
              {
                title: "Безопасность 24/7",
                desc: "Круглосуточная охрана, видеонаблюдение и контролируемый доступ на территорию.",
              },
              {
                title: "Зелёная территория",
                desc: "Благоустроенный двор с зонами отдыха, детскими и спортивными площадками.",
              },
              {
                title: "Подземный паркинг",
                desc: "Собственное парковочное место для каждой квартиры в закрытом подземном паркинге.",
              },
              {
                title: "Добрососедство",
                desc: "Сообщество единомышленников, ценящих комфорт, качество и современный образ жизни.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass p-8 rounded-3xl hover:scale-105 hover:border-purple-500/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <h3 className="text-3xl font-bold mb-6 gradient-text">{item.title}</h3>
                <p className="text-gray-300 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О проекте */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-10 gradient-text">
            Создаём пространство для жизни вашей мечты
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Baraka Residence — это современный жилой комплекс премиум-класса, расположенный в одном из лучших районов города Навои. Мы создаём не просто квартиры, а комфортную среду для жизни, работы и отдыха.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "5 современных корпусов",
              "От 9 до 12 этажей",
              "Более 320 квартир",
              "Подземный паркинг",
              "Благоустроенная территория",
              "Срок сдачи — 2026 год",
            ].map((point, i) => (
              <div key={i} className="glass p-6 rounded-2xl text-xl font-medium">
                {point}
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-12 inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-bold text-xl rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30"
          >
            Подробнее о проекте
          </Link>
        </div>
      </section>

      {/* Квартиры */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-10 gradient-text">
            Выберите свою квартиру
          </h2>
          <Link
            href="/apartments"
            className="text-2xl text-purple-400 hover:text-purple-300 mb-16 block underline underline-offset-8"
          >
            Все квартиры →
          </Link>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                type: "1-комн.",
                title: "Однокомнатные",
                desc: "Идеально для молодых специалистов и пар",
                area: "от 38 м²",
                price: "от 380 млн сум",
              },
              {
                type: "2-комн.",
                title: "Двухкомнатные",
                desc: "Оптимальный выбор для небольшой семьи",
                area: "от 55 м²",
                price: "от 550 млн сум",
              },
              {
                type: "3-комн.",
                title: "Трёхкомнатные",
                desc: "Простор и комфорт для большой семьи",
                area: "от 78 м²",
                price: "от 780 млн сум",
              },
            ].map((apt, i) => (
              <div
                key={i}
                className="glass p-10 rounded-3xl hover:scale-105 transition-all duration-500 border border-purple-500/20 hover:border-purple-500/50"
              >
                <div className="text-6xl font-black mb-6 gradient-text">{apt.type}</div>
                <h3 className="text-4xl font-bold mb-4">{apt.title}</h3>
                <p className="text-xl text-gray-400 mb-6">{apt.desc}</p>
                <div className="text-2xl mb-2">Площадь: {apt.area}</div>
                <div className="text-3xl font-bold gradient-text">Цена: {apt.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-gradient-to-t from-purple-950/40 via-black to-black">
        <h2 className="text-5xl md:text-7xl font-black mb-10 gradient-text">
          Готовы сделать шаг к дому вашей мечты?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
          Оставьте заявку на бесплатную консультацию — поможем выбрать идеальную квартиру и ответим на все ваши вопросы.
        </p>
        <Link
          href="/contact" // или Telegram/Instagram
          className="inline-block px-16 py-8 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:brightness-110 font-extrabold text-2xl rounded-full transition-all duration-300 shadow-2xl shadow-purple-700/50"
        >
          Оставить заявку
        </Link>
      </section>
    </main>
  );
}
