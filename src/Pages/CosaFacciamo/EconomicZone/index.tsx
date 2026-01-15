import React from 'react';
import { HeroSection } from '../../../Components/HeroSection';
import { Recycle, Users, Network, Leaf, Lightbulb, Sparkles, ArrowRight, Target, TrendingUp, RefreshCw, HandHeart, Building2 } from 'lucide-react';

const EconomicZone: React.FC = () => {

    const activities = [
    {
      icon: <Recycle className="w-8 h-8" />,
      text: "Modelli circolari di produzione e consumo",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      text: "Forme di mutualismo e cooperazione",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Network className="w-8 h-8" />,
      text: "Reti locali resilienti",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      text: "Processi di rigenerazione urbana e sociale",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      text: "Iniziative di riduzione degli sprechi e ottimizzazione delle risorse",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Pratiche di design sociale orientate all'inclusione e all'impatto comunitario",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const vision = [
    "Intelligenza economica",
    "Progettazione sociale",
    "Giustizia climatica",
    "Partecipazione attiva delle comunità",
    "Attenzione al benessere psicologico e sanitario",
    "Valorizzazione delle economie locali",
    "Cooperazione tra settori diversi"
  ];



    return (
        <div className="home-page full-width"> 
            <HeroSection text="Economic Zone" height="90vh" animation={false} backgroundImage="/economiczonebackground.jpg" />
        <section className="relative z-10 flex items-center justify-center px-8 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            L'incontro tra economia sostenibile e progettazione sociale per generare trasformazioni profonde e durature nelle comunità
          </p>
          <div className="flex gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center gap-2">
              Scopri di più
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-12 border border-white/40 shadow-2xl shadow-emerald-200/50">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full border border-emerald-300">
                  <RefreshCw className="w-6 h-6 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-700">ECONOMIA CIRCOLARE</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">
                  Oltre lo sfruttamento lineare
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Superiamo i modelli basati sullo sfruttamento lineare delle risorse e sull'aumento incontrollato dei consumi, promuovendo invece sistemi circolari, rigenerativi e centrati sulle persone.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Pratiche economiche orientate alla sostenibilità, al riuso, al riciclo e alla condivisione diventano leve fondamentali per stimolare innovazione sociale ed ecologica.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Un cambio culturale:</h3>
                {[
                  "La cura dei legami",
                  "Responsabilità collettiva",
                  "Nuovi modi di abitare gli spazi",
                  "Trasformazione delle relazioni"
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-gray-200 hover:bg-white hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full border border-teal-300 mb-6">
              <Target className="w-6 h-6 text-teal-600" />
              <span className="text-sm font-semibold text-teal-700">COSA FACCIAMO</span>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Nella Circular Zone
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Attraverso progetti educativi, percorsi partecipativi e collaborazioni con enti pubblici, privati e realtà del terzo settore, promuoviamo una cultura economica e sociale che valorizzi:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="group relative backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setActiveSection(i)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white shadow-lg`}>
                    {activity.icon}
                  </div>
                  
                  <p className="text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors font-medium">
                    {activity.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-blue-100/80 to-indigo-100/80 rounded-3xl p-10 border border-blue-200 shadow-xl">
            <p className="text-lg text-gray-800 leading-relaxed text-center">
              <span className="font-semibold">Benessere psicologico e coesione sociale</span> come parti integranti della sostenibilità economica
            </p>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-violet-100/80 to-purple-100/80 rounded-3xl p-12 border border-violet-200 shadow-xl shadow-violet-200/50">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-violet-700 mb-4">Come Lavoriamo</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Organizziamo iniziative che aiutano cittadini, amministrazioni e organizzazioni a reinterpretare i sistemi economici come opportunità di equità, adattamento e rigenerazione
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Lightbulb className="w-6 h-6" />, text: "Workshop" },
                { icon: <Users className="w-6 h-6" />, text: "Seminari" },
                { icon: <Sparkles className="w-6 h-6" />, text: "Laboratori di innovazione" },
                { icon: <Network className="w-6 h-6" />, text: "Co-progettazione" }
              ].map((method, i) => (
                <div key={i} className="backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white">
                    {method.icon}
                  </div>
                  <p className="font-semibold text-gray-800">{method.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Integration Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              La Nostra Visione
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              L'economia circolare non è solo gestione delle risorse, ma un approccio integrato che unisce:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vision.map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/80 rounded-2xl p-8 border border-gray-200 hover:bg-white hover:border-teal-400 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-emerald-100/80 to-teal-100/80 rounded-3xl p-12 border border-emerald-200 shadow-xl shadow-emerald-200/50">
            <p className="text-xl text-gray-800 leading-relaxed text-center font-light">
              Solo attraverso questa integrazione è possibile costruire città e territori più giusti, resilienti, creativi e orientati al lungo termine.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratory Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-100/80 to-blue-100/80 rounded-3xl p-12 border border-cyan-200 shadow-xl shadow-cyan-200/50">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full border border-cyan-300 mb-6">
                <Leaf className="w-6 h-6 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">LABORATORIO PER IL FUTURO</span>
              </div>
              <h2 className="text-4xl font-black mb-6 text-cyan-700">
                Un Luogo di Incontro
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Dove idee, pratiche e persone si incontrano per generare nuovi modelli di sviluppo
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                "Ripensare il valore",
                "Ridisegnare i processi",
                "Rafforzare le comunità",
                "Creare economie che rigenerino il mondo"
              ].map((goal, i) => (
                <div key={i} className="backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-cyan-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <RefreshCw className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                    <p className="text-gray-800 font-semibold text-lg">{goal}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-gray-700 leading-relaxed italic">
              Crediamo che una transizione economica equa e sostenibile possa nascere solo attraverso il dialogo, la conoscenza condivisa e la cooperazione, e che ogni territorio possieda energie preziose da cui ripartire.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      {/* <section className="relative z-10 px-6 py-32 mb-32">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-indigo-100/80 to-purple-100/80 rounded-3xl p-16 border border-indigo-200 text-center shadow-2xl shadow-indigo-200/50">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Referenti
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-8 border border-indigo-200 hover:border-indigo-400 hover:bg-white hover:shadow-xl transition-all duration-300">
                <p className="text-2xl font-bold text-gray-900">Pasquale Alessandro Carusi</p>
              </div>
              <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-8 border border-purple-200 hover:border-purple-400 hover:bg-white hover:shadow-xl transition-all duration-300">
                <p className="text-2xl font-bold text-gray-900">Andrea Varotto</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        </div>
    );
};

export default EconomicZone;