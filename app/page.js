'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "../components/HeroSection";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="pt-[90px]"> {/* Spazio per l’header fisso */}
      
      {/* ✅ HERO SECTION */}
      <HeroSection />

      {/* ✅ SEZIONE 1 — Cos’è il progetto */}
      <section className="container py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            Cos’è Blockchain Food Trust
          </h2>
          <p className="text-lg text-gray-700">
            Un sistema certificato che garantisce autenticità, tracciabilità e trasparenza
            dei prodotti alimentari italiani. Ogni prodotto è verificabile tramite blockchain
            pubblica, consultabile da chiunque.
          </p>
        </motion.div>
      </section>

      {/* ✅ SEZIONE 2 — Come funziona (3 step) */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Come funziona</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">📦</div>
              <h3 className="font-bold text-xl mb-2">1. Il produttore certifica</h3>
              <p className="text-gray-700">
                Ogni lotto viene registrato su blockchain con dati verificabili e permanenti.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="font-bold text-xl mb-2">2. I dati vengono salvati</h3>
              <p className="text-gray-700">
                Tutte le informazioni sono salvate su una blockchain pubblica non modificabile.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">📱</div>
              <h3 className="font-bold text-xl mb-2">3. Il consumatore verifica</h3>
              <p className="text-gray-700">
                Con un semplice QR code può vedere l’intera storia del prodotto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ SEZIONE 3 — Prodotti certificati */}
      <section className="container py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">Prodotti certificati</h2>
          <p className="text-gray-700 text-lg">
            Olio, vino, formaggi e altri prodotti italiani certificati tramite blockchain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold mb-2 text-xl">Olio Extravergine</h3>
            <p className="text-gray-700">Tracciato dal frantoio alla bottiglia.</p>
          </div>
          <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold mb-2 text-xl">Vini DOCG</h3>
            <p className="text-gray-700">Registrati lotto per lotto su blockchain.</p>
          </div>
          <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-bold mb-2 text-xl">Aceti balsamici</h3>
            <p className="text-gray-700">Ogni botte e ogni lotto sono verificabili.</p>
          </div>
        </div>
      </section>

      {/* ✅ SEZIONE 4 — CTA finale */}
      <section className="bg-green-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Verifica subito l’autenticità dei tuoi prodotti
        </h2>
        <p className="text-lg mb-6">Scopri la trasparenza totale grazie alla blockchain.</p>

        <a
          href="https://verify.blockchainfoodtrust.com"
          target="_blank"
          className="px-10 py-4 rounded-full bg-white text-green-700 font-bold text-lg hover:opacity-90 transition"
        >
          Verifica origine
        </a>
      </section>

    </main>
  );
}
