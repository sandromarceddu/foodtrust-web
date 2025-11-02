'use client';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="bg-white">
      <div className="container py-4 md:py-6">
        
        {/* Riquadro immagine (mobile ottimizzato) */}
        <div
          className="
            relative w-full 
            aspect-[4/3]              /* più alto sui telefoni */
            sm:aspect-[16/9]          /* 16:9 a partire da 640px */
          "
        >
          <Image
            src="/foodtrust.png"
            alt="Blockchain Food Trust"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Testi e CTA */}
        <div className="mt-4 md:mt-6 text-center px-3">
          
          <h1 className="
            text-2xl
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            font-bold 
            leading-snug
          ">
            {t.hero.title}
          </h1>

          <p className="
            mt-3 
            text-base 
            sm:text-lg 
            md:text-xl 
            text-gray-700
          ">
            {t.hero.subtitle}
          </p>

          <div className="
            mt-5 
            flex flex-col sm:flex-row 
            justify-center 
            gap-3 sm:gap-4
          ">

            {/* Bottone progetto */}
            <Link
              href="/progetto"
              className="
                px-6 py-3 
                sm:px-8 sm:py-4
                rounded-lg 
                font-semibold 
                text-base sm:text-lg 
                bg-black text-white 
                hover:opacity-90 
                transition
              "
            >
              {t.hero.ctaProject}
            </Link>

            {/* Bottone verifica */}
            <a
              href="https://verify.blockchainfoodtrust.com"
              target="_blank"
              rel="noreferrer"
              className="
                px-6 py-3 
                sm:px-8 sm:py-4
                rounded-lg 
                font-semibold 
                text-base sm:text-lg 
                bg-green-600 text-white 
                hover:bg-green-700 
                transition
              "
            >
              {t.hero.ctaVerify}
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
