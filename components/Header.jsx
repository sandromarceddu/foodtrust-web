
"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

export default function Header(){
  const { language, setLanguage } = useLanguage();
  const t = translations[language].menu;

  return (
    <header style={{padding:"20px",borderBottom:"1px solid #ddd",display:"flex",
      justifyContent:"space-between",alignItems:"center"}}>
      <div style={{fontWeight:"bold",fontSize:"22px"}}>BlockchainFoodTrust</div>

      <nav style={{display:"flex",gap:"20px"}}>
        <Link href="/progetto">{t.progetto}</Link>
        <Link href="/prodotti">{t.prodotti}</Link>
        <Link href="/territori">{t.territori}</Link>
        <Link href="/verifica">{t.verifica}</Link>
        <Link href="/contatti">{t.contatti}</Link>
      </nav>

      <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
    </header>
  );
}
