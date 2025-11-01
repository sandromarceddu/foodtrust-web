"use client";

import { useLanguage } from "../LanguageContext";
import { translations } from "../translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-black text-white py-6 text-center mt-20">
      <p className="text-sm">{t.diritti}</p>
    </footer>
  );
}
