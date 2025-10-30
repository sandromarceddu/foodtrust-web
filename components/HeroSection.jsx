'use client';
import { useI18n } from './I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section
      className="
        relative w-full 
        h-[360px] md:h-[450px] lg:h-[495px] 
        flex items-center justify-center
      "
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >

      {/* Overlay per rendere leggibile il testo */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenuto */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
          {t.hero.title}
        </h1>

        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          {t.hero.subtitle}
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/progetto"
            className="
              bg-white text-black 
              px-6 py-3 rounded-lg font-semibold 
              hover:bg-gray-200 transition
            "
          >
            {t.hero.learnMore}
          </a>

          <a
            href="/verifica"
            className="
              bg-green-600 text-white 
              px-6 py-3 rounded-lg font-semibold 
              hover:bg-green-700 transition
            "
          >
            {t.hero.verify}
          </a>
        </div>
      </div>
    </section>
  );
}
