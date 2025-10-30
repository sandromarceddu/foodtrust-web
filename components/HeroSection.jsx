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
        bg-white
      "
      style={{
        backgroundImage: "url('/foodtrust.png')",
        backgroundSize: "110%",          // immagine ingrandita del 5–10%
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Contenuto */}
      <div className="relative z-10 text-center px-6 max-w-3xl text-white">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
          La blockchain al servizio dell’autenticità alimentare italiana
        </h1>

        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Trasparenza, tracciabilità, fiducia.
        </p>

        <div className="mt-6 flex justify-center gap-4">

          <a
            href="/progetto"
            className="
              bg-white text-black 
              px-8 py-4 rounded-lg font-semibold 
              text-lg shadow-md
              hover:bg-gray-200 transition
            "
          >
            Scopri il progetto
          </a>

          <a
            href="/verifica"
            className="
              bg-green-600 text-white 
              px-8 py-4 rounded-lg font-semibold 
              text-lg shadow-md
              hover:bg-green-700 transition
            "
          >
            Verifica origine
          </a>

        </div>
      </div>
    </section>
  );
}
