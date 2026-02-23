import React, { useEffect, useState } from 'react';
import { HeroSection } from '../../../Components/HeroSection';
import { Globe, Thermometer, Users, BookOpen, Waves, Wind, Sparkles, ArrowRight } from 'lucide-react';

const GeoZone: React.FC = () => {

    const [scrollY, setScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  const missions = [
    {
      icon: <Globe className="w-8 h-8" />,
      text: "Comprendere come il cambiamento climatico modifica spazi, ecosistemi, comportamenti e dinamiche fisiche del sistema Terra",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      text: "Leggere i territori come sistemi complessi da accompagnare in una transizione ecologica, culturale, urbana e sociale",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      text: "Sostenere processi di adattamento e rigenerazione radicati nei contesti reali",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      text: "Promuovere una nuova alleanza tra scienze naturali, scienze sociali, fisica del clima e discipline del progetto",
      color: "from-orange-500 to-pink-500"
    }
  ];


    return (
        <div className="home-page full-width"> 
            <HeroSection text="GeoZone" height="80vh" animation={false} backgroundImage="/geozonebackground.jpg" />
            <div className=" overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
      </div>
      {/* Hero Section */}
      <section className="relative z-10  flex items-center justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* <div 
            className="inline-block mb-8"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-3xl opacity-30 animate-pulse"></div>
              <Globe className="w-24 h-24 relative z-10 mx-auto text-cyan-600" strokeWidth={1.5} />
            </div>
          </div> */}
          
          <h2 className="text-3xl font-bold text-gray-700 max-w-3xl mx-auto  leading-relaxed ">
            L'area dedicata allo studio e alla comunicazione delle trasformazioni geografiche e fisiche del clima.
          </h2>
        </div>
      </section>

      {/* Stats Section with Glass Morphism */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-12 border border-white/40 shadow-2xl shadow-blue-200/50">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-100 to-orange-100 rounded-full border border-red-300">
                  <Thermometer className="w-6 h-6 text-red-600" />
                  <span className="text-sm font-semibold text-red-700">EMERGENZA CLIMATICA</span>
                </div>
                
                <div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-7xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                      20
                    </span>
                    <span className="text-5xl font-black text-gray-400">→</span>
                    <span className="text-7xl font-black bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                      37
                    </span>
                  </div>
                  <p className="text-xl text-gray-700 font-bold">
                    <b>miliardi</b> di tonnellate di emissioni
                  </p>
                  <p className="text-sm text-gray-600 mt-2">1990 → 2024</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Negli ultimi trent'anni le emissioni globali sono quasi raddoppiate. L'aumento dei gas serra sta alterando l'equilibrio energetico del pianeta e rendendo il clima instabile.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Alcuni effetti del cambiamento:</h3>
                {[
                  "Deviazioni delle correnti oceaniche",
                  "Trasformazioni dei paesaggi",
                  "Perdita di biodiversità",
                  "Scomparsa di interi ecosistemi"
                ].map((effect, i) => (
                  <div 
                    key={i}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-gray-200 hover:bg-white hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">{effect}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Bento Style */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="lg:col-span-2 backdrop-blur-xl rounded-3xl text-center">
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6 text-cyan-700 uppercase">Guardare in Faccia alla Realtà</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Non significa arrendersi. <br />Al contrario, significa riconoscere che esiste ancora un ampio <b>margine di azione</b>. La sfida non è evitare il cambiamento, ma governarlo con intelligenza, orientando le nostre società verso modi di abitare la Terra più <b>giusti, adattivi e consapevoli dei limiti biofisici.</b>
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-semibold">
                Possiamo — e dobbiamo — scegliere come vivere questa transizione: investendo in conoscenza, immaginazione politica, responsabilità collettiva e partecipazione comunitaria.
              </p>
            </div>
              <h5 className="text-3xl font-black mb-6 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Per questo, in GEO ZONE dialogano e collaborano due discipline fondamentali:
              </h5>
            </div>
            <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-100/80 to-teal-100/80 rounded-3xl p-10 border border-emerald-200 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-200/50 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-700">Geografia</h3>
              <p className="text-gray-700 leading-relaxed">
                Come <b>scienza delle relazioni</b> tra luoghi, processi ambientali e comportamenti collettivi
              </p>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-100/80 to-violet-100/80 rounded-3xl p-10 border border-blue-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Fisica del Clima</h3>
              <p className="text-gray-700 leading-relaxed">
                Che studia i <b>meccanismi energetici</b>, le <b>dinamiche atmosferiche</b>, gli <b>scambi radiativi</b> e le forzanti del sistema climatico
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
              <span className="text-xl font-semibold text-gray-700">Attraverso ricerca, formazione, divulgazione e progetti territoriali, ci impegniamo a:</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missions.map((mission, i) => (
              <div
                key={i}
                className="group relative backdrop-blur-xl bg-white/80 rounded-3xl p-10 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setActiveSection(i)}
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
      </div>
    </div>
    );
};

export default GeoZone;