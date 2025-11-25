// Original file: /mnt/data/2f517dc3-4aaa-4512-849b-8ad2ffb72887.js
// MemoryCraftSite_improved.jsx
// Version E (équilibrée) — amélioration du design, accessibilité, structure, performance

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MemoryCraftSite() {
  const [modal, setModal] = React.useState(null);

  const warmBrown = "#5F4A39";

  

  const processSteps = [
    {
      title: "Captation",
      //Nous accompagnons votre moment précieux avec des caméras immersives spéciales qui capturent chaque angle, chaque détail, chaque émotion.
      desc: "On filme vos instants avec attention (360° ou multi-cam).",
      img: "https://res.cloudinary.com/fatmakmiha/image/upload/v1764098435/WhatsApp_Image_2025-11-25_%C3%A0_15.57.44_36e5dd86_ix30q8.jpg",
    },
    {
      title: "Montage",
      //Nous nettoyons les images, ajoutons la profondeur, les ambiances sonores et tous les détails qui rendent le moment unique.
      desc: "Rééquilibrage couleur, montage émotionnel, son 3D.",
      img: "https://res.cloudinary.com/fatmakmiha/image/upload/v1764098283/WhatsApp_Image_2025-11-25_%C3%A0_16.00.43_f6015b00_a99lp5.jpg",
    },
    {
      title: "Immersion",
      //Le moment devient une capsule émotionnelle AR, un fichier que vous pourrez ouvrir à tout moment avec des lunettes spéciales.
      desc: "Préparation pour casque VR réel (Meta / Apple / HTC).",
      img: "https://res.cloudinary.com/fatmakmiha/image/upload/v1764098423/WhatsApp_Image_2025-11-25_%C3%A0_15.55.58_3cbb5fdd_mgqfeo.jpg",
    },
    {
      title: "Sensation 4D",
      desc: "Intégration du retour haptique et des diffuseurs olfactifs.",
      //Revivez le souvenir comme si les gens étaient là, devant vous. Le rire, l'étreinte, la danse - tout redevient présent.
      img: "https://res.cloudinary.com/fatmakmiha/image/upload/v1764098256/WhatsApp_Image_2025-11-25_%C3%A0_15.42.54_92f6f2ac_kmflyn.jpg",
    }
  ];

  // form state (simple controlled form + feedback)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: ici vous appellerez votre API / service mail
    // For now simulate success
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-b from-[#F4E7DA] via-white to-[#FFF7EE] overflow-x-hidden">
        {/* NAV */}
        <header className="fixed w-full z-40 backdrop-blur-sm bg-white/40 shadow-sm">
          <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7D18A] to-[#F6B6A8] shadow-md flex items-center justify-center"
                aria-hidden
              >
                <span className="font-bold text-white">MC</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold">MemoryCraft</h1>
                <p className="text-xs text-gray-600">
                  Créatrice de Souvenirs Immersifs
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                className="px-4 py-2 rounded-full bg-[#F7D18A] text-sm font-medium shadow hover:brightness-95 transition"
                href="#contact"
              >
                Contact
              </a>
              <a
                className="px-4 py-2 rounded-full border border-transparent text-sm font-medium hover:bg-white/60 transition"
                href="#gallery"
              >
                Galerie
              </a>
            </div>
          </nav>
        </header>

        <main className="pt-1">
          {/* HERO */}
          <section className="relative overflow-hidden h-[80vh] md:h-[90vh]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src="https://res.cloudinary.com/fatmakmiha/image/upload/v1764105904/experience4D_qm4ois.png"
              alt="Expérience immersive MemoryCraft"
              className="absolute inset-x-0 w-full h-full object-cover brightness-110 object-top"
              loading="eager"
            />

            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFF7EE]/70"
              aria-hidden
            />

            <div className="max-w-6xl mx-auto relative z-10 h-full flex items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="p-6 md:p-12 lg:p-20 max-w-2xl"
              >
                <h2
                  style={{ color: warmBrown }}
                  className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-sm"
                >
                  Revivez vos instants comme si vous y étiez
                </h2>
                <p
                  style={{ color: warmBrown }}
                  className="mt-4 text-lg md:text-xl max-w-xl opacity-90"
                >
                  Chaque émotion, chaque sourire, capturés et retranscrits en
                  une expérience immersive VR 4D — douce, fidèle, éternelle.
                </p>

                <motion.div
                  className="mt-8 flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="#process"
                    className="px-5 py-3 bg-[#F7D18A] rounded-full font-medium shadow-lg hover:brightness-105 transition"
                    aria-label="Découvrir la 4D"
                  >
                    Découvrir la 4D
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="#contact"
                    className="px-5 py-3 border rounded-full font-medium hover:bg-white/60 transition"
                    aria-label="Réserver un essai"
                  >
                    Réserver un essai
                  </motion.a>
                </motion.div>

                
              </motion.div>
            </div>
          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.img
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              src="https://res.cloudinary.com/fatmakmiha/image/upload/v1764105978/metier_xp3l22.png"
              alt="Fatma en action, capturant un souvenir"
              className="w-full rounded-2xl shadow-xl object-cover h-96"
              loading="lazy"
            />

            <div>
              <h3 style={{ color: warmBrown }} className="text-2xl font-bold">
                Votre Architecte d'Expériences Mémorielles
              </h3>
              <p className="mt-4 text-gray-700">
                Je transforme vos souvenirs précieux en expériences immersives
                réelles. Avec des films 360°, des sons binauraux et des montages
                émotionnels, vos moments de vie deviennent revivables.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-[#CDE1C7] flex items-center justify-center animate-pulse"
                    aria-hidden
                  >
                    📷
                  </div>
                  <div>
                    <strong>Captation Sensible</strong>
                    <p className="text-sm text-gray-600">
                      Film 360° ou multi-cam, atmosphère naturelle et douce
                      (Golden Hour).
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-[#F6B6A8] flex items-center justify-center animate-pulse"
                    aria-hidden
                  >
                    🎧
                  </div>
                  <div>
                    <strong>Son Immersif 3D</strong>
                    <p className="text-sm text-gray-600">
                      Mixage binaural, ambiance naturelle, fidélité sonore
                      totale.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* MISSION */}
          <section className="relative py-28 px-6 bg-black text-white overflow-hidden">
            {/* Background image */}
            <img
              src="https://res.cloudinary.com/fatmakmiha/image/upload/v1764105919/memory_ksdv3y.jpg"
              alt="Famille heureuse dans un aéroport"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            <div className="relative max-w-6xl mx-auto">
              <p className="text-yellow-400 font-semibold tracking-wide text-sm mb-3">
                NOTRE MISSION
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
                Pourquoi nous faisons <br />
                <span className="text-yellow-400">ce métier</span>
              </h2>

              <p className="max-w-2xl mt-6 text-gray-200 text-lg">
                Parce que les souvenirs sont ce qu'il y a de plus précieux dans
                la vie. Nous sommes les artistes qui capturent l'âme d'un
                moment, pour que vous puissiez le revivre plus tard.
              </p>

              <blockquote className="mt-8 border-l-4 border-yellow-400 pl-6 italic text-gray-300">
                "Un souvenir vivant, c'est plus qu'une vidéo : c'est une scène
                réinstallée dans votre monde réel, avec profondeur, sons,
                ambiants, mouvements, émotions."
              </blockquote>

              {/* Grid icons */}
              <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Joie partagée */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-yellow-400 text-3xl mb-3">❤️</div>
                  <h3 className="font-semibold text-lg">Joie partagée</h3>
                  <p className="text-gray-200 text-sm mt-2">
                    Revivre les moments de bonheur intense avec ceux qu’on aime.
                  </p>
                </div>

                {/* Nostalgie douce */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-yellow-400 text-3xl mb-3">✨</div>
                  <h3 className="font-semibold text-lg">Nostalgie douce</h3>
                  <p className="text-gray-200 text-sm mt-2">
                    Se replonger dans la beauté des instants passés.
                  </p>
                </div>

                {/* Lien temporel */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-yellow-400 text-3xl mb-3">⏳</div>
                  <h3 className="font-semibold text-lg">Lien temporel</h3>
                  <p className="text-gray-200 text-sm mt-2">
                    Connecter le passé au présent pour ne jamais oublier.
                  </p>
                </div>

                {/* Cadeau émotionnel */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-yellow-400 text-3xl mb-3">🎁</div>
                  <h3 className="font-semibold text-lg">Cadeau émotionnel</h3>
                  <p className="text-gray-200 text-sm mt-2">
                    Offrir à vos proches le plus précieux des cadeaux.
                  </p>
                </div>
              </div>

              <p className="mt-14 text-center text-gray-300 max-w-3xl mx-auto">
                Que ce soit pour revivre le rire d'un bébé, l'étreinte d’un
                proche, un anniversaire mémorable, une danse inoubliable, ou un
                moment qui n'arrivera plus jamais… nous sommes là pour capturer
                l’essence même de ces instants.
              </p>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="bg-white/60 py-12">
            <div className="max-w-7xl mx-auto px-6">
              <h4
                style={{ color: warmBrown }}
                className="text-xl font-semibold"
              >
                Le Processus de l'Immortalité Mémorielle (5 Étapes)
              </h4>

              <div className="mt-6 grid md:grid-cols-4 gap-6">
                {processSteps.map((s, i) => (
                  <motion.article
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.6 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white to-[#FFF7EE] shadow hover:scale-105 transition flex flex-col items-center"
                  >
                    <img
                      src={s.img}
                      alt={`${s.title} - aperçu`}
                      className="w-64 h-64 object-cover mb-3 rounded-md"
                      loading="lazy"
                    />
                    <h5 className="font-semibold text-center">
                      {i + 1}. {s.title}
                    </h5>
                    <p className="mt-2 text-xs text-gray-600 text-center">
                      {s.desc}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          

          {/* MOMENTS */}
          <section className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800">
              Moments Précieux à Capturer
            </h2>
            <p className="text-center text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
              Chaque instant de bonheur mérite d'être préservé. Découvrez les
              moments que nous transformons en souvenirs vivants.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Mariages",
                  img: "https://res.cloudinary.com/fatmakmiha/image/upload/v1764105910/mariage_wflwui.jpg",
                  icon: "💜",
                  desc: "Capturez l’échange des vœux, la première danse, les regards complices.",
                },
                {
                  title: "Naissances",
                  img: "https://res.cloudinary.com/fatmakmiha/image/upload/v1764105943/newborn_xkihie.jpg",
                  icon: "👶",
                  desc: "Premiers pas, premiers mots, premiers sourires de vos petits trésors.",
                },
                {
                  title: "Anniversaires",
                  img: "https://res.cloudinary.com/fatmakmiha/image/upload/v1764108904/rencontre_jr2jjs.png",
                  icon: "🎂",
                  desc: "Soufflez les bougies, partagez la joie, créez des souvenirs inoubliables.",
                },
                {
                  title: "Retrouvailles",
                  img: "https://res.cloudinary.com/fatmakmiha/image/upload/v1764105843/family_dwhzvk.jpg",
                  icon: "👥",
                  desc: "Moments d’émotion pure, étreintes retrouvées, larmes de joie.",
                },
              ].map((c, idx) => (
                <motion.section
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 + idx * 0.05 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <div className="relative">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-52 w-full object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute top-3 left-3 bg-white p-2 rounded-full shadow"
                      aria-hidden
                    >
                      {c.icon}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg">{c.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{c.desc}</p>
                  </div>
                </motion.section>
              ))}
            </div>
          </section>

          
          {/* TéMOIGNAGES */}
          <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
              Témoignages Émotionnels
            </h2>
            <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
              Ils ont revécu leurs moments précieux… voici leurs mots.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sabrina & Youssef",
                  text: "Revivre notre mariage en VR… c’était comme y retourner. On a pleuré de bonheur.",
                },
                {
                  name: "Inès",
                  text: "J’ai pu revoir ma grand-mère et entendre sa voix comme si elle était là. Inoubliable.",
                },
                {
                  name: "Famille Ben Salah",
                  text: "Les retrouvailles enregistrées puis revécues ensemble… un moment gravé à jamais.",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-md border border-[#F7D18A]/40 hover:shadow-lg transition"
                >
                  <p className="text-gray-700 italic">“{t.text}”</p>
                  <p className="text-right text-sm mt-4 font-semibold text-gray-900">
                    — {t.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
              Avant / Après – La Magie de la 4D
            </h2>
            <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
              Comparez le moment capturé… et sa transformation immersive.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/fatmakmiha/image/upload/v1764098284/WhatsApp_Image_2025-11-25_%C3%A0_16.02.14_00890c8b_lycqsz.jpg"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-4 text-center">
                  Moment Réel
                </div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://res.cloudinary.com/fatmakmiha/image/upload/v1764098268/WhatsApp_Image_2025-11-25_%C3%A0_16.01.23_d7f24881_it3duv.jpg"
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#F7D18A]/90 text-black font-semibold p-4 text-center">
                  Version Immersive 4D
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
              Laissez-vous transporter
            </h2>
            <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
              Une courte immersion pour ressentir l’émotion avant même de
              commencer.
            </p>
            <div className="mt-10 flex justify-center gap-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl w-full max-w-3xl">
                <video
                  src="https://res.cloudinary.com/fatmakmiha/video/upload/v1764103315/1121_etos8i.mp4"
                  controls autoPlay 
                  className="w-full h-auto"
                ></video>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl w-full max-w-3x">
                <video
                  src="https://res.cloudinary.com/fatmakmiha/video/upload/v1764108566/WhatsApp_Vid%C3%A9o_2025-11-19_%C3%A0_15.22.40_e0136f4a_zagtuy.mp4"
                  controls autoPlay
                  className="w-full h-auto"
                ></video>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
              Packs & Offres Immersives
            </h2>
            <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
              Choisissez l’expérience qui correspond à votre histoire.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Pack Naissance",
                  price: "249 DT",
                  desc: "Revivez les premiers moments de vie de votre bébé en VR 4D.",
                },
                {
                  title: "Pack Mariage",
                  price: "399 DT",
                  desc: "Immortalisez votre union avec une captation émotionnelle et une immersion VR.",
                },
                {
                  title: "Pack Retrouvailles",
                  price: "299 DT",
                  desc: "Vivez à nouveau l’émotion des retrouvailles familiales ou amicales.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-md border border-[#F7D18A]/40 hover:shadow-xl transition text-center"
                >
                  <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                  <p className="text-[#5F4A39] text-3xl font-extrabold mt-3">
                    {p.price}
                  </p>
                  <p className="text-gray-600 text-sm mt-3">{p.desc}</p>
                  <button className="mt-6 px-5 py-3 bg-[#F7D18A] rounded-full font-medium shadow hover:brightness-105 transition">
                    Réserver
                  </button>
                </div>
              ))}
            </div>
          </section>

          
          <section className="max-w-6xl mx-auto py-20 px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
              Pourquoi MemoryCraft ?
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {[
                { icon: "💗", text: "Émotion Authentique" },
                { icon: "🎧", text: "Son Binaural Réaliste" },
                { icon: "🎥", text: "Captation 360° Haut de Gamme" },
                { icon: "🌀", text: "Immersion VR 4D" },
                { icon: "📦", text: "Patrimoine Mémoriel" },
                { icon: "🎨", text: "Signature Artistique Unique" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-center border border-[#F7D18A]/40"
                >
                  <div className="text-3xl mb-4">{d.icon}</div>
                  <p className="font-semibold text-gray-800">{d.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="bg-white/70 py-12">
            <div className="max-w-4xl mx-auto px-6">
              <h4
                style={{ color: warmBrown }}
                className="text-xl font-semibold"
              >
                Contact - Sceller votre Patrimoine Mémoriel
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Prêt(e) à revivre un souvenir ? Envoie-moi un message :
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 grid md:grid-cols-2 gap-4"
                aria-label="Formulaire de contact MemoryCraft"
              >
                <label className="sr-only" htmlFor="name">
                  Votre nom
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="p-3 rounded-lg border focus:ring-2 focus:ring-[#F7D18A] transition"
                  placeholder="Votre nom"
                />

                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="p-3 rounded-lg border focus:ring-2 focus:ring-[#F7D18A] transition"
                  placeholder="Email"
                />

                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="p-3 rounded-lg border md:col-span-2 focus:ring-2 focus:ring-[#F7D18A] transition"
                  rows={4}
                  placeholder="Parlez-moi du souvenir (qui, où, quelle émotion est la plus importante)..."
                />

                <button
                  type="submit"
                  className="md:col-span-2 px-6 py-3 rounded-full bg-[#F7D18A] font-medium shadow-md hover:brightness-105 transition"
                >
                  {sent ? "Message envoyé ✓" : "Envoyer ma demande 4D"}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                Je réponds généralement sous 48h ouvrées. Vos données restent
                privées et sont traitées avec soin.
              </p>
            </div>
          </section>

          <footer className="py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} MemoryCraft — Créatrice de Souvenirs
            Immersifs
          </footer>
        </main>
      </div>
    </>
  );
}
