
"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

export default function HeroSection(){
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section style={{position:"relative",width:"100%",height:"420px",
      overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center"}}>

      <Image src="/foodtrust.png" alt="hero" fill style={{objectFit:"cover"}}/>

      <div style={{position:"absolute",color:"white",textAlign:"center",
        textShadow:"0 0 10px black"}}>
        <h1 style={{fontSize:"32px",fontWeight:"bold"}}>{t.titolo}</h1>
        <p style={{fontSize:"18px",marginTop:"10px"}}>{t.descrizione}</p>
      </div>
    </section>
  );
}
