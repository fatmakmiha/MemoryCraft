import React from "react";
import { motion } from "framer-motion";

export default function DetailsPage() {
  const warmBrown = "#5F4A39";

  const advantages = [
    "Permet la reviviscence émotionnelle authentique (VR 4D).",
    "Immortalisation des souvenirs importants avec détails sensoriels.",
    "Excellent outil pour les familles, mariages, nouveau-nés, souvenirs rares.",
    "Création artistique unique (montage émotionnel + son binaural).",
    "Différenciation totale sur le marché audiovisuel classique."
  ];

  const disadvantages = [
    "Coût de production plus élevé qu’une vidéo simple.",
    "Nécessite du matériel VR spécifique pour une immersion complète.",
    "Processus de captation plus long et exigeant.",
    "Temps d'apprentissage technique pour l’utilisateur."
  ];

  const limits = [
    "La VR ne peut pas reproduire 100% la réalité émotionnelle.",
    "Certaines personnes peuvent ressentir une légère fatigue visuelle.",
    "Les très petits espaces sont parfois difficiles à capturer en 360°.",
    "La qualité dépend fortement de la lumière au moment du tournage."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4E7DA] to-[#FFF7EE] p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-center"
        style={{ color: warmBrown }}
      >
        Détails du Projet MemoryCraft
      </motion.h1>

      <p className="text-center text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
        Découvrez les points forts, les défis et les limites techniques de notre concept innovant.
      </p>

      {/* AVANTAGES */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-4" style={{ color: warmBrown }}>
          ✔️ Avantages
        </h2>
        <ul className="space-y-3 bg-white/70 p-6 rounded-2xl shadow">
          {advantages.map((item, i) => (
            <li key={i} className="text-gray-700 flex gap-3">
              <span className="text-green-600 font-bold">✓</span> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* INCONVÉNIENTS */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-4" style={{ color: warmBrown }}>
          ⚠️ Inconvénients
        </h2>
        <ul className="space-y-3 bg-white/70 p-6 rounded-2xl shadow">
          {disadvantages.map((item, i) => (
            <li key={i} className="text-gray-700 flex gap-3">
              <span className="text-red-500 font-bold">✗</span> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* LIMITES */}
      <section className="max-w-4xl mx-auto mt-16 mb-20">
        <h2 className="text-2xl font-bold mb-4" style={{ color: warmBrown }}>
          🔍 Limites actuelles
        </h2>
        <ul className="space-y-3 bg-white/70 p-6 rounded-2xl shadow">
          {limits.map((item, i) => (
            <li key={i} className="text-gray-700 flex gap-3">
              <span className="text-yellow-500 font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="text-center mt-10">
        <a
          className="px-6 py-3 rounded-full bg-[#F7D18A] shadow font-medium hover:brightness-95"
          href="/"
        >
          ⬅️ Retour au site
        </a>
      </div>
    </div>
  );
}
