'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from './I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="bg-white">
      <div className="container py-6">
        {/* Riquadro immagine 16:9, allineato alla larghezza pagina */}
        <div
          className="relative w-full"
          style={{ aspectRatio: '16 / 9' }}  // mantiene proporzione, niente tagli
        >
          <Image
            src="/foodtrust.png"
            alt="Blockchain Food Trust"
            fill
            priority
            className="object-contain"      // mostra tutta l’immagine senza crop
          />
        </div>

        {/* Testi e CTA sotto l’immagine, centrati */}
        <div className="mt-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.hero.title}
          </h1>

          <p className="mt-3 text-lg md:text-xl text-gray-700">
            {t.hero.subtitle}
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/progetto"
              className="px-8 py-4 rounded-lg font-semibold text-lg bg-black text-white hover:opacity-90 transition"
            >
              {t.hero.ctaProject}
            </Link>

            <a
              href="https://verify.blockchainfoodtrust.com"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-lg bg-green-600 text-white hover:bg-green-700 transition"
            >
              {t.hero.ctaVerify}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
