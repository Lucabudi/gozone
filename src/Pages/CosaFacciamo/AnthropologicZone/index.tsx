import React from 'react';
import { HeroSection } from '../../../Components/HeroSection';
import { Eye, Users, BookOpen, MessageCircle, Compass, Heart, MapPin, Sparkles, ArrowRight, Target, Globe, Layers } from 'lucide-react';

const AnthropologicZone: React.FC = () => {

    const research = [
    {
      icon: <Globe className="w-8 h-8" />,
      text: "I modi in cui il clima modifica culture, identità e relazioni sociali",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      text: "Le pratiche di adattamento e le strategie locali di resilienza",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      text: "Gli immaginari sul futuro e le narrazioni del rischio, della perdita e della speranza",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      text: "Le trasformazioni dei paesaggi culturali, degli spazi urbani e dei territori vissuti",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      text: "Le forme di vulnerabilità e le disuguaglianze prodotte o accentuate dai cambiamenti ambientali",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      text: "I processi comunitari attraverso cui le persone costruiscono nuovi sensi di appartenenza",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const approach = [
    {
      title: "Situato",
      description: "Attento ai contesti locali e alle loro specificità",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Relazionale",
      description: "Valorizza le interazioni e le forme di vita comunitarie",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Interpretativo",
      description: "Sensibile ai significati che le persone attribuiscono alle proprie esperienze",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Ecologico",
      description: "Mette in dialogo ambiente, cultura e pratiche sociali",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Partecipativo",
      description: "Coinvolge attivamente le comunità nelle fasi di ascolto, progettazione e valutazione",
      color: "from-rose-500 to-pink-500"
    }
  ];

    return (
        <div className="home-page full-width"> 
            <HeroSection text="Anthropologic Zone" height="80vh" animation={false} backgroundImage="/anthropologiczonebackground.jpg" />
             <section className="relative z-10 flex items-center justify-center px-8 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Sguardi antropologici per comprendere trasformazioni, culture e comunità
          </p>
          <div className="flex gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-2">
              Esplora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-12 border border-white/40 shadow-2xl shadow-amber-200/50">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-300">
                  <Eye className="w-6 h-6 text-amber-600" />
                  <span className="text-sm font-semibold text-amber-700">ANTROPOLOGIA CULTURALE</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">
                  Oltre il fenomeno ambientale
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed">
                  La crisi climatica non è soltanto un fenomeno ambientale, ma anche un profondo processo culturale, sociale e simbolico. Il cambiamento del clima modifica gli ecosistemi materiali, ma allo stesso tempo trasforma i nostri modi di vivere.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  L'antropologia offre strumenti essenziali per leggere questa complessità attraverso l'attenzione ai mondi della vita, alle pratiche quotidiane, alle narrazioni e ai sistemi di significato.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Il cambiamento trasforma:</h3>
                {[
                  "Il modo di dare senso all'esperienza",
                  "L'immaginazione del futuro",
                  "La costruzione dei legami comunitari",
                  "I paesaggi culturali e vissuti"
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-gray-200 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border border-orange-300 mb-6">
              <Target className="w-6 h-6 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">COSA FACCIAMO</span>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Nella Anthro Zone
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Analizziamo e documentiamo come persone, gruppi e comunità rispondono ai mutamenti in corso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {research.map((item, i) => (
              <div
                key={i}
                className="group relative backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 hover:scale-105"
                onMouseEnter={() => setActiveSection(i)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  
                  <p className="text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-teal-100/80 to-emerald-100/80 rounded-3xl p-12 border border-teal-200 shadow-xl shadow-teal-200/50">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-teal-700 mb-4">I Nostri Metodi</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Promuoviamo ricerca qualitativa, osservazione partecipante, raccolta di storie di vita, analisi delle pratiche sociali e attività sul territorio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <BookOpen className="w-6 h-6" />, text: "Incontri pubblici" },
                { icon: <Sparkles className="w-6 h-6" />, text: "Workshop" },
                { icon: <Users className="w-6 h-6" />, text: "Percorsi partecipativi" },
                { icon: <Compass className="w-6 h-6" />, text: "Collaborazioni territoriali" }
              ].map((method, i) => (
                <div key={i} className="backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-teal-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white">
                    {method.icon}
                  </div>
                  <p className="font-semibold text-gray-800">{method.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 text-lg">
                Collaboriamo con scuole, amministrazioni, enti culturali e reti comunitarie per rendere visibili e condivisi i vissuti delle persone nei contesti di cambiamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Il Nostro Approccio
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              "Abitare lo sguardo" e comprendere i fenomeni dall'interno, attraverso la vicinanza ai contesti e alle persone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-gray-200 hover:border-violet-400 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-white font-bold text-2xl">{i + 1}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-blue-100/80 to-cyan-100/80 rounded-3xl p-12 border border-blue-200 shadow-xl shadow-blue-200/50">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-300 mb-6">
                <Eye className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">LA NOSTRA VISIONE</span>
              </div>
              <h2 className="text-4xl font-black mb-6 text-blue-700">
                Ascoltare le Culture
              </h2>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Comprendere il cambiamento climatico richiede di ascoltare non solo ciò che accade nel mondo fisico, ma anche ciò che accade nelle culture, nelle relazioni e nelle storie delle persone.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-10">
                {[
                  "Aprire spazi di dialogo",
                  "Riconoscere la pluralità dei vissuti",
                  "Valorizzare l'immaginazione comunitaria"
                ].map((goal, i) => (
                  <div key={i} className="backdrop-blur-xl bg-white/90 rounded-2xl p-6 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 justify-center">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{i + 1}</span>
                      </div>
                      <p className="text-gray-800 font-semibold">{goal}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-800 leading-relaxed text-center font-semibold">
                La nostra ambizione è contribuire allo sviluppo di una transizione ecologica che sia anche una transizione culturale e sociale, capace di integrare conoscenze, valori e forme di vita.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      {/* <section className="relative z-10 px-6 py-32 mb-32">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-indigo-100/80 to-purple-100/80 rounded-3xl p-16 border border-indigo-200 text-center shadow-2xl shadow-indigo-200/50">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Referente
            </h2>
            
            <div className="max-w-md mx-auto">
              <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-8 border border-indigo-200 hover:border-indigo-400 hover:bg-white hover:shadow-xl transition-all duration-300">
                <p className="text-2xl font-bold text-gray-900">Clelia Viecelli</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        </div>
    );
};

export default AnthropologicZone;