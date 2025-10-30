'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from './I18nProvider';

export default function Header() {
  const { t, toggle } = useI18n();

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        
        {/* Logo + Nome */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Blockchain Food Trust" width={45} height={45} />
          <span className="font-bold text-[1.2rem]">
            Blockchain Food Trust
          </span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="font-semibold text-[1.1rem]">{t.nav.home}</Link>
          <Link href="/progetto" className="font-semibold text-[1.1rem]">{t.nav.project}</Link>
          <Link href="/prodotti" className="font-semibold text-[1.1rem]">{t.nav.products}</Link>
          <Link href="/territori" className="font-semibold text-[1.1rem]">{t.nav.regions}</Link>
          <Link href="/verifica" className="font-semibold text-[1.1rem]">{t.nav.verify}</Link>
          <Link href="/contatti" className="font-semibold text-[1.1rem]">{t.nav.contact}</Link>
        </nav>

        {/* Lingua */}
        <button onClick={toggle} className="btn btn-secondary font-semibold text-[1.1rem]">
          {t.nav.lang}
        </button>
      </div>
    </header>
  );
}
