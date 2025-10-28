'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from './I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] bg-gray-200">
      {/* Background image shown entirely */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/foodtrust.png"
          alt="Food Trust background"
          fill
          priority
          className="object-contain p-4"
        />
      </div>

      {/* Dark overlay to improve readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Text + buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
          {t.hero.title}
        </h1>

        <p className="text-white text-lg md:text-xl drop-shadow-md max-w-2xl mb-8">
          {t.hero.subtitle}
        </p>

        <div className="flex gap-4">
          <Link
            href="/progetto"
            className="bg-white/90 hover:bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            {t.hero.ctaProject}
          </Link>

          <a
            href="https://verify.blockchainfoodtrust.com"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            {t.hero.ctaVerify}
          </a>
        </div>
      </div>
    </section>
  );
}
