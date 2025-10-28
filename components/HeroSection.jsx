'use client';

import Image from 'next/image';
import { useI18n } from './I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative w-full h-[380px] md:h-[480px] lg:h-[520px]">
      <Image
        src="/foodtrust.png"
        alt="Blockchain Food Trust Logo"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
          {t.hero.title}
        </h1>
        <p className="text-white text-lg md:text-xl drop-shadow-md max-w-2xl">
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
