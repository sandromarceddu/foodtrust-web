"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].menu;

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-xl font-extrabold tracking-wide">
          BlockchainFoodTrust
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex space-x-8 text-lg font-bold">
          <Link href="/progetto">{t.progetto}</Link>
          <Link href="/prodotti">{t.prodotti}</Link>
          <Link href="/territori">{t.territori}</Link>
          <Link href="/verifica">{t.verifica}</Link>
          <Link href="/contatti">{t.contatti}</Link>
        </div>

        {/* SELECTOR LINGUA DESKTOP */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="hidden md:block border px-2 py-1 rounded-md text-sm ml-4"
        >
          <option value="it">IT</option>
          <option value="en">EN</option>
        </select>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-1 w-7 bg-black transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-1 w-7 bg-black transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-1 w-7 bg-black transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t animate-fadeIn px-6 py-6 space-y-4 text-lg font-bold">
          
          <Link href="/progetto" onClick={() => setOpen(false)}>{t.progetto}</Link>
          <Link href="/prodotti" onClick={() => setOpen(false)}>{t.prodotti}</Link>
          <Link href="/territori" onClick={() => setOpen(false)}>{t.territori}</Link>
          <Link href="/verifica" onClick={() => setOpen(false)}>{t.verifica}</Link>
          <Link href="/contatti" onClick={() => setOpen(false)}>{t.contatti}</Link>

          {/* SELECTOR LINGUA MOBILE */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border px-2 py-1 rounded-md text-sm"
          >
            <option value="it">IT</option>
            <option value="en">EN</option>
          </select>
        </div>
      )}
    </header>
  );
}
