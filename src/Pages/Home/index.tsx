import React, { useEffect, useRef, useState } from 'react';
import { Aree } from "../../Components/Aree";
import BannerSportello from "../../Components/BannerSportello";
import { HeroSection } from "../../Components/HeroSection";
import ClimateStories from "../../Components/StoriesClimate";

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

const HomePage = () => {
    const stories = [
    {
      date: "1 September",
      title: "Rethinking Waste: Towards smarter management solutions",
      image: "https://i.guim.co.uk/img/media/43c52a2b60749e2c3cf28d6988c37a672d80a957/0_0_2500_1500/master/2500.jpg?width=1900&dpr=2&s=none&crop=none",
      linkText: "Read the update",
    },
    {
      date: "7 August",
      title: "Advancing ocean cleanup through innovation and research",
      image: "https://i.guim.co.uk/img/media/43c52a2b60749e2c3cf28d6988c37a672d80a957/0_0_2500_1500/master/2500.jpg?width=1900&dpr=2&s=none&crop=none",
      linkText: "Read the update",
    },
    {
      date: "15 July",
      title: "Hawaiian sailors hunting plastic",
      image: "https://i.guim.co.uk/img/media/43c52a2b60749e2c3cf28d6988c37a672d80a957/0_0_2500_1500/master/2500.jpg?width=1900&dpr=2&s=none&crop=none",
      linkText: "Read the press release",
    },
    {
      date: "15 July",
      title:
        "The Ocean Cleanup and AWS Join Forces to Accelerate Ocean Plastic Removal using AI",
      image: "https://i.guim.co.uk/img/media/43c52a2b60749e2c3cf28d6988c37a672d80a957/0_0_2500_1500/master/2500.jpg?width=1900&dpr=2&s=none&crop=none",
      linkText: "Read the press release",
    },
    ];
    
    return (
        <div className="home-page full-width">
            <HeroSection text="Il clima, la nostra casa" height="90vh" />
            
            {/* INTRO SECTION */}
            <section style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "60px 40px", overflow: "hidden" }}>
                {/* Background blobs */}
                <div style={{ position: "absolute", top: "10%", right: "-5%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(134,239,172,0.35) 0%, transparent 70%)", animation: "pulse-ring 6s ease-in-out infinite" }} />
                <div style={{ position: "absolute", bottom: "5%", left: "-8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(147,197,253,0.25) 0%, transparent 70%)", animation: "pulse-ring 8s ease-in-out 2s infinite" }} />
                <div style={{ maxWidth: 900, textAlign: "center", position: "relative", zIndex: 2 }}>
                    <img src='/gozone_logocompleto.svg' alt='Logo' width={350} height={100} className='inline-block mr-2 fill-white text-white mb-10' />
                    <FadeSlide>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(240,253,244,0.9)", border: "1px solid #86efac", borderRadius: 999, padding: "8px 20px", marginBottom: 28, fontSize: 12, fontWeight: 700, color: "#166534", letterSpacing: "0.1em" }}>
                            <span>🌍</span> BENVENUTI
                        </div>
                    </FadeSlide>
                    <FadeSlide delay={0.1}>
                        <h1 style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 32px", color: "#14532d" }}>
                            Associazione di Promozione Sociale
                        </h1>
                    </FadeSlide>
                    <FadeSlide delay={0.2}>
                        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 400, color: "#4b7c5a", maxWidth: 820, margin: "0 auto", lineHeight: 1.8 }}>
                            L'associazione Go-Zone nasce come <strong style={{ color: "#166534" }}>Associazione di Promozione Sociale</strong> volta a promuovere esperienze di <strong style={{ color: "#166534" }}>cittadinanza attiva</strong> nel campo del Climate Change, attraverso strategie ed azioni di cura delle persone, della comunità e progetti di sostenibilità sociale ed ambientale.
                        </p>
                    </FadeSlide>
                </div>
            </section>

            {/* ZONE SECTION */}
            <section style={{ padding: "60px 40px" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <FadeSlide>
                        <div style={{ textAlign: "center", marginBottom: 56 }}>
                            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#16a34a", textTransform: "uppercase", marginBottom: 12 }}>Le nostre aree</p>
                            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#14532d", margin: "0 0 16px" }}>
                                Esplora le nostre Zone
                            </h2>
                            <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 680, margin: "0 auto 48px" }}>
                                Ogni zona rappresenta un ambito di intervento specifico per costruire comunità più resilienti e consapevoli
                            </p>
                        </div>
                    </FadeSlide>
                    
                    <FadeSlide delay={0.15}>
                        <Aree />
                    </FadeSlide>
                </div>
            </section>

            {/* SPORTELLO BANNER */}
            <FadeSlide>
                <BannerSportello />
            </FadeSlide>

            {/* CLIMATE STORIES */}
            <section style={{ padding: "60px 40px 100px" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <FadeSlide>
                        <div style={{ textAlign: "center", marginBottom: 56 }}>
                            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#16a34a", textTransform: "uppercase", marginBottom: 12 }}>Rimani aggiornato</p>
                            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#14532d", margin: "0 0 16px" }}>
                                Storie di Clima
                            </h2>
                        </div>
                    </FadeSlide>
                    
                    <FadeSlide delay={0.2}>
                        <ClimateStories title="" array={stories} />
                    </FadeSlide>
                </div>
            </section>
        </div>
    );
};

export default HomePage;