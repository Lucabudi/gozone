import React, { useEffect, useRef, useState } from 'react';
import { HeroSection } from '../../Components/HeroSection';
import Team from '../../Components/Team';

const Globe = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="4" ry="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
  </svg>
);
const Leaf = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
const Heart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const Zap = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const Users = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedCounter({ target, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function FadeSlide({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const missions = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Cittadinanza Attiva",
    text: "Esperienze concrete che valorizzano il ruolo di ogni persona nella costruzione di comunità più consapevoli e partecipi.",
    color: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    hover: "hover:border-emerald-400 hover:shadow-emerald-200/60",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Supporto Psicologico",
    text: "Assistenza gratuita per affrontare l'eco-ansia e il peso emotivo del cambiamento climatico, con cura reciproca e benessere collettivo.",
    color: "from-rose-500 to-pink-500",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-200",
    hover: "hover:border-rose-400 hover:shadow-rose-200/60",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Sensibilizzazione Ambientale",
    text: "Percorsi di formazione e divulgazione scientifica per costruire una coscienza ambientale concreta nelle comunità e nei territori.",
    color: "from-lime-500 to-emerald-500",
    bg: "from-lime-50 to-emerald-50",
    border: "border-lime-200",
    hover: "hover:border-lime-400 hover:shadow-lime-200/60",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rigenerazione Territoriale",
    text: "Progetti di adattamento climatico per costruire territori più resilienti, sostenibili e capaci di rispondere alle sfide future.",
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    hover: "hover:border-amber-400 hover:shadow-amber-200/60",
  },
];

const ChiSiamo: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [hovered, setHovered] = useState(null);

    return (
        <div className="home-page full-width"> 
            <HeroSection text="Chi Siamo" height="60vh" animation={false} />
      {/* HERO */}
      <section style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "20px 40px 60px", overflow: "hidden" }}>
        {/* bg blobs */}
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(134,239,172,0.35) 0%, transparent 70%)", animation: "pulse-ring 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(147,197,253,0.25) 0%, transparent 70%)", animation: "pulse-ring 8s ease-in-out 2s infinite" }} />
        <div style={{ position: "absolute", top: "30%", left: "8%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,224,71,0.2) 0%, transparent 70%)" }} />

        <div style={{ maxWidth: 900, textAlign: "center", position: "relative", zIndex: 2 }}>
          <FadeSlide>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(240,253,244,0.9)", border: "1px solid #86efac", borderRadius: 999, padding: "8px 20px", marginBottom: 28, fontSize: 12, fontWeight: 700, color: "#166534", letterSpacing: "0.1em" }}>
              <span>🌍</span> FONDATA IL 16 MAGGIO 2025
            </div>
          </FadeSlide>

          <FadeSlide delay={0.1}>
            <h1 style={{ fontSize: "clamp(52px, 9vw, 100px)", fontWeight: 700, lineHeight: 1.05, margin: "0 0 24px", color: "#14532d" }}>
              Go-Zone  <br />
              <em style={{ color: "#16a34a", fontStyle: "italic" }}>Goldilocks Zone</em>
            </h1>
          </FadeSlide>

          <FadeSlide delay={0.2}>
            <p style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 400, color: "#4b7c5a", maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Association for Social and Health Climate Actions — nata per creare contesti <strong style={{ color: "#166534" }}>abitabili, consapevoli e sostenibili</strong> nelle nostre città, comunità e vite.
            </p>
          </FadeSlide>

          <FadeSlide delay={0.4}>
            <p style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 400, color: "#4b7c5a", maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.7 }}>
                l'associazione nasce in un periodo storico tutt'altro che casuale, infatti in quel periodo si misurava:
            </p>
          </FadeSlide>
        </div>
      </section>

      {/* CO2 STATS SECTION */}
      <section style={{ padding: "20px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="glass" style={{ borderRadius: 32, padding: "56px 64px", boxShadow: "0 8px 48px rgba(0,0,0,0.06)" }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">              
             <FadeSlide>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(254,226,226,0.8)", border: "1px solid #fca5a5", borderRadius: 999, padding: "6px 18px", marginBottom: 28, fontSize: 12, fontWeight: 700, color: "#b91c1c" }}>
                    🌡️ EMERGENZA CLIMATICA
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 16 }}>
                    <span style={{ fontSize: "clamp(64px, 8vw, 96px)", fontWeight: 900, background: "linear-gradient(135deg, #dc2626, #ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>
                      <AnimatedCounter target={430} />
                    </span>
                    <span style={{ fontSize: 28, fontWeight: 700, color: "#9ca3af" }}>ppm</span>
                  </div>
                  <p style={{ fontSize: 20, fontWeight: 700, color: "#1a2e1a", marginBottom: 8 }}>
                    CO₂ in atmosfera — record storico
                  </p>
                  <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24 }}>Osservatorio di Mauna Loa — Maggio 2025</p>
                  
                </div>
              </FadeSlide>

              <FadeSlide delay={0.15}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.7 }}>
                    Il valore più alto degli ultimi <strong>800.000 anni</strong>. Una soglia simbolica e concreta che ci richiama all'urgenza di ripensare il nostro rapporto con il pianeta.
                  </p>
                </div>
              </FadeSlide>
            </div>
          </div>
        </div>
      </section>

      {/* NAME ORIGIN — BENTO */}
      <section style={{ padding: "60px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeSlide>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#16a34a", textTransform: "uppercase", marginBottom: 12 }}>L'origine del nome</p>
            </div>
          </FadeSlide>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
            {/* Large card: fiaba */}
            <FadeSlide className="" delay={0.05}>
              <div style={{ gridColumn: "span 2" }}>
                <div className="glass card-hover" style={{ borderRadius: 28, padding: 44, height: "100%", boxShadow: "0 4px 32px rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: 42, marginBottom: 20 }}>📖</div>
                  <h3 style={{ fontSize: 26, fontWeight: 700, color: "#166534", marginBottom: 16 }}>La fiaba di Riccioli d'Oro</h3>
                  <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.8 }}>
                    il nome affonda le sue radici in una fiaba familiare a molti: quella di Riccioli d’Oro e i tre orsi. Una bambina entra in una casa sconosciuta e scopre che solo ciò che è “né troppo né troppo poco” può diventare rifugio: la sedia giusta, il cibo giusto, il letto giusto. In quello spazio di equilibrio trova la possibilità di riposare, di sopravvivere, di sentirsi al sicuro.
                  </p>
                </div>
              </div>
            </FadeSlide>

            {/* NASA card */}
            <FadeSlide delay={0.1}>
              <div className="card-hover" style={{ borderRadius: 28, padding: 40, background: "linear-gradient(135deg, #1e3a5f, #1e40af)", color: "white", boxShadow: "0 4px 32px rgba(30,64,175,0.25)" }}>
                <div style={{ fontSize: 38, marginBottom: 16 }}>🚀</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>La NASA lo ha adottato</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, opacity: 0.85 }}>
                 ed ha preso in prestito il concetto per descrivere la cosiddetta Goldilocks Zone in astronomia: la fascia attorno a una stella in cui le condizioni sono ottimali per la presenza di acqua liquida sulla superficie di un pianeta. Non troppo vicino, dove l’acqua evaporerebbe; non troppo lontano, dove congelerebbe. Una regione “giusta al punto giusto”, ritenuta fondamentale per la possibilità che la vita possa nascere e mantenersi.
                 È la zona in cui un pianeta può essere — proprio come nella fiaba — abitabile.
                </p>    
              </div>
            </FadeSlide>
          </div>
          <FadeSlide delay={0.2}>
            <p style={{ fontSize: "clamp(16px, 2vw, 22px)", textAlign: "center", padding: "40px", fontWeight: 400, color: "#4b7c5a", maxWidth: 880, margin: "0 auto 40px", lineHeight: 1.7 }}>
                Per noi è il nome perfetto in quanto desideriamo costruire spazi in cui persone e comunità possano vivere in equilibrio con l’ambiente, affrontando le sfide del cambiamento climatico senza perdere di vista la <strong>cura reciproca</strong> e il <strong>benessere collettivo</strong>.</p>
         </FadeSlide>
        </div>
      </section>

      {/* MISSION CARDS */}
      <section style={{ padding: "60px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeSlide>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#16a34a", textTransform: "uppercase", marginBottom: 12 }}>Come agiamo</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#14532d", margin: "0 0 16px" }}>Le nostre azioni</h2>
              <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 580, margin: "0 auto" }}>
                Attraverso ricerca, divulgazione scientifica e azioni concrete, rafforziamo comunità più consapevoli e resilienti.
              </p>
            </div>
          </FadeSlide>

          <div className="grid md:grid-cols-2 gap-8">
            {missions.map((mission, i) => (
              <div
                key={i}
                className="group relative backdrop-blur-xl bg-white/80 rounded-3xl p-10 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${mission.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mission.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white shadow-lg`}>
                    {mission.icon}
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className={`text-5xl font-black bg-gradient-to-br ${mission.color} bg-clip-text text-transparent`}>
                      {i + 1}
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors flex-1 font-medium">
                      {mission.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / CLOSING */}
      <section style={{ padding: "60px 40px 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeSlide>
            <div style={{ borderRadius: 32, padding: "72px 80px", background: "linear-gradient(135deg, #14532d, #166534, #0d9488)", color: "white", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 12px 64px rgba(22,163,74,0.3)" }}>
              <div style={{ position: "absolute", top: "-40%", right: "-10%", width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
              <div style={{ position: "absolute", bottom: "-30%", left: "-5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", borderRadius: 999, padding: "8px 20px", marginBottom: 32, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>
                  <Users className="w-4 h-4" /> IL NOSTRO TEAM
                </div>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.3, marginBottom: 24 }}>
                  Un equilibrio delicato,<br /><em>da coltivare insieme.</em>
                </h2>
                <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 600, margin: "0 auto 44px", lineHeight: 1.7 }}>
                  Il nostro gruppo è composto da persone con competenze specialistiche diversificate, unite dalla volontà di contribuire a un futuro più giusto, sano e sostenibile.
                </p>
              </div>
            </div>
          </FadeSlide>
        </div>
      </section>
            <Team />
        </div>
    );
};

export default ChiSiamo;