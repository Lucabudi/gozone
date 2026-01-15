import React from 'react';
import { HeroSection } from '../../../Components/HeroSection';
import { Brain, Heart, Users, Sprout, Shield, Mail, ArrowRight, Phone } from 'lucide-react';

const PsyZone: React.FC = () => {

    const activities = [
    "Sportello psicologico gratuito, orientato all'ascolto, alla prevenzione e al sostegno delle fragilità connesse alla crisi climatica, sociale e personale",
    "Interventi nelle scuole, per aiutare studentesse e studenti a riconoscere le proprie emozioni, sviluppare strumenti di resilienza, favorire la partecipazione attiva e coltivare immaginari futuri più sostenibili",
    "Laboratori psicoeducativi, che intrecciano mente, corpo e relazione per dare forma e significato ai vissuti legati al presente",
    "Percorsi per docenti, educatori e professionisti, per rafforzare le competenze nella gestione del disagio emotivo e nella promozione di comunità scolastiche e territoriali più accoglienti",
    "Progetti di ricerca psicologica sui vissuti legati al cambiamento climatico – eco-ansia, senso di impotenza, colpa ambientale, speranza attiva – affrontati non come patologie, ma come risposte umane a un mondo che cambia"
  ];

  const approaches = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Dinamico",
      description: "Che riconosce le trasformazioni della mente nel tempo",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Relazionale",
      description: "Che valorizza il ruolo delle connessioni umane e della cura reciproca",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Ecologico",
      description: "Che mette in dialogo vissuti individuali e cambiamenti climatici, sociali e culturali",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Non Patologizzante",
      description: "Che guarda all'ansia climatica e alle emozioni difficili come segnali da ascoltare, non come disturbi da eliminare",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Partecipativo",
      description: "Che coinvolge scuole, famiglie, giovani e comunità intere nella costruzione di spazi psicologicamente sicuri",
      color: "from-indigo-500 to-blue-500"
    }
  ];

    return (
        <div className="home-page full-width"> 
            <HeroSection text="PsyZone" height="80vh" animation={false} backgroundImage="/psyzone.jpg" />
            <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div 
            className="inline-block mb-8"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>
              <Brain className="w-24 h-24 relative z-10 mx-auto text-purple-600" strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-8xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 bg-clip-text text-transparent leading-tight">
            PSY ZONE
          </h1>
          
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Menti come paesaggi, comunità che si prendono cura
          </p>

          <div className="flex gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2">
              Scopri di più
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-12 border border-white/40 shadow-2xl shadow-purple-200/50 text-center">
            <p className="text-2xl text-gray-700 leading-relaxed italic">
              Il nostro rapporto con il paesaggio non si esaurisce nello sguardo e nella contemplazione. 
              Implica il corpo e la sua partecipazione sensoriale, si carica di affetti e memoria e diventa parte dell'identità.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative z-10 px-6 py-26">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-purple-100/80 to-pink-100/80 rounded-3xl p-12 border border-purple-200 shadow-xl shadow-purple-200/50">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                La Psy Zone nasce dalla consapevolezza che il cambiamento climatico non riguarda soltanto i territori fisici, ma anche <span className="font-semibold text-gray-900">i paesaggi interiori delle persone</span>. Come ricorda Lingiardi in <em>Mindscapes</em>, la mente è un luogo fatto di geografie intime: colline di emozioni, correnti di pensiero, zone d'ombra e radure di possibilità.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Quando il mondo cambia rapidamente, anche i nostri climi emotivi si modificano: ansia, incertezza, senso di vulnerabilità, ma anche desiderio di azione, immaginazione e nuove forme di solidarietà.
              </p>
              <p className="text-xl text-gray-900 leading-relaxed font-semibold">
                La Psy Zone è lo spazio dell'associazione dedicato a leggere, accompagnare e trasformare questi paesaggi interiori, mettendo la cura psicologica, la relazione e il benessere collettivo al centro dei processi di adattamento climatico e sociale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="relative z-10 px-6 py-26">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-300 mb-6">
              <Heart className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">COSA FACCIAMO</span>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Nella Psy Zone
            </h2>
          </div>

          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-12 border border-white/40 shadow-xl shadow-purple-200/50 mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              La nostra area si articola in interventi che integrano psicologia, formazione, prevenzione, partecipazione comunitaria e sensibilizzazione. In particolare, ci occupiamo di:
            </p>
            
            <div className="space-y-4">
              {activities.map((activity, i) => (
                <div 
                  key={i}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-purple-50/60 to-pink-50/60 border border-purple-200 hover:bg-white hover:border-purple-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-150 transition-transform mt-2"></div>
                  <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors font-medium flex-1">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative z-10 px-6 py-26">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-300 mb-6">
              <Brain className="w-6 h-6 text-violet-600" />
              <span className="text-sm font-semibold text-violet-700">IL NOSTRO APPROCCIO</span>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Paesaggi Mentali
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ispirandoci alla metafora dei paesaggi mentali, consideriamo la salute psicologica come un ecosistema complesso, in cui emozioni, relazioni, contesti di vita e ambiente fisico interagiscono costantemente. Per questo adottiamo un approccio:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((approach, i) => (
              <div
                key={i}
                className="group relative backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${approach.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white shadow-lg`}>
                    {approach.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-br ${approach.color} bg-clip-text text-transparent`}>
                    {approach.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative z-10 px-6 py-26">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full border border-pink-300 mb-6">
              <Heart className="w-6 h-6 text-pink-600" />
              <span className="text-sm font-semibold text-pink-700">LA NOSTRA VISIONE</span>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Salute Mentale come Bene Comune
            </h2>
          </div>

          <div className="backdrop-blur-xl bg-gradient-to-br from-pink-100/80 to-rose-100/80 rounded-3xl p-12 border border-pink-200 shadow-xl shadow-pink-200/50">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Crediamo che <span className="font-semibold text-gray-900">la salute mentale sia un bene comune</span>: qualcosa che si costruisce insieme, nei gesti quotidiani, nelle relazioni e nelle possibilità che una comunità offre.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                La Psy Zone vuole essere un luogo che accoglie, accompagna e dà voce ai vissuti delle persone, aiutandole a orientarsi nei propri paesaggi interiori e a trovare nuove forme di equilibrio.
              </p>
              <p className="text-xl text-gray-900 leading-relaxed font-semibold">
                Così come il pianeta necessita delle condizioni ottimali per mantenere la propria Goldilocks Zone, anche la mente umana richiede un equilibrio adeguato per potersi sviluppare e funzionare in modo sano: non un eccesso di stress o isolamento, né una pressione emotiva costante, ma un ambiente psicologico che offra sicurezza, relazioni significative e una prospettiva di futuro.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                La Psy Zone opera per favorire proprio questo equilibrio, promuovendo contesti in cui possano emergere cura, comprensione, resilienza e capacità trasformativa, elementi fondamentali per il benessere individuale e collettivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sportello Psicologico Section */}
      <section className="relative z-10 px-6 py-26">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-12 border border-purple-200 shadow-2xl shadow-purple-200/50">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                SPORTELLO PSICOLOGICO
              </h2>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Il nostro servizio di supporto psicologico rivolto a tutte le persone che sentono la necessità di elaborare e condividere pensieri ed emozioni rispetto la crisi climatica.
              </p>

              <div className="backdrop-blur-xl bg-gradient-to-br from-purple-50/60 to-pink-50/60 rounded-2xl p-8 border border-purple-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Il servizio è <span className="font-bold text-purple-700">gratuito</span>, si struttura in colloqui individuali e/o di gruppo con uno/a psicologo/a del team di terapeuti/e di Go Zone, formato/a sul tema della crisi climatica.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I colloqui si svolgono in presenza oppure in modalità online. Per le persone che vivono a Padova o zone limitrofe è preferibile svolgere i colloqui in presenza.
                </p>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-300 text-center">
                <p className="text-lg text-gray-900 font-semibold mb-4">
                  Per ulteriori informazioni o per accedere al servizio:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="mailto:psyzone@gozoneaps.it"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    email 
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Indica nome, cognome e recapito telefonico nella mail
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="relative z-10 px-6 py-26">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-violet-100/80 to-purple-100/80 rounded-3xl p-16 border border-violet-200 text-center shadow-2xl shadow-violet-200/50">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Referenti
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-8 border border-violet-200 hover:border-violet-400 hover:bg-white hover:shadow-xl transition-all duration-300">
                <p className="text-2xl font-bold text-gray-900">Martina Andrea Viecelli</p>
              </div>
              <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-8 border border-purple-200 hover:border-purple-400 hover:bg-white hover:shadow-xl transition-all duration-300">
                <p className="text-2xl font-bold text-gray-900">Margherita Zuecco</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default PsyZone;