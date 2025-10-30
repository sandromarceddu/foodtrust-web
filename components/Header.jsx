'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from './I18nProvider';

export default function Header() {
  const { t, toggle } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white fixed w-full z-40">
      <div className="container flex items-center justify-between py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={45} height={45} />
          <span className="font-bold text-[1.2rem]">Blockchain Food Trust</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="font-semibold text-[1.1rem]">{t.nav.home}</Link>
          <Link href="/progetto" className="font-semibold text-[1.1rem]">{t.nav.project}</Link>
          <Link href="/prodotti" className="font-semibold text-[1.1rem]">{t.nav.products}</Link>
          <Link href="/territori" className="font-semibold text-[1.1rem]">{t.nav.regions}</Link>
          <Link href="/verifica" className="font-semibold text-[1.1rem]">{t.nav.verify}</Link>
          <Link href="/contatti" className="font-semibold text-[1.1rem]">{t.nav.contact}</Link>
        </nav>

        {/* LINGUA */}
        <button onClick={toggle} className="hidden md:block font-semibold text-[1.1rem]">
          {t.nav.lang}
        </button>

        {/* HAMBURGER MOBILE */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <div className={`transition-all ${open ? "rotate-45 translate-y-1" : ""}`}>
            <div className="w-7 h-1 bg-black mb-1"></div>
          </div>
          <div className={`transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`}>
            <div className="w-7 h-1 bg-black"></div>
          </div>
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fadeIn">
          <nav className="flex flex-col text-center py-4 space-y-4 text-lg font-semibold">
            <Link href="/" onClick={() => setOpen(false)}>{t.nav.home}</Link>
            <Link href="/progetto" onClick={() => setOpen(false)}>{t.nav.project}</Link>
            <Link href="/prodotti" onClick={() => setOpen(false)}>{t.nav.products}</Link>
            <Link href="/territori" onClick={() => setOpen(false)}>{t.nav.regions}</Link>
            <Link href="/verifica" onClick={() => setOpen(false)}>{t.nav.verify}</Link>
            <Link href="/contatti" onClick={() => setOpen(false)}>{t.nav.contact}</Link>

            {/* Cambio Lingua */}
            <button onClick={toggle} className="py-2 text-green-700 underline">
              {t.nav.lang}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
