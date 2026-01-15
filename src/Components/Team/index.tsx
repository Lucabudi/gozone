import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Giuseppe Della Fera",
      role: 'co-founder e Presidente di Go-Zone',
      description: "Geografo e supervisore accademico presso l’Università degli Studi di Padova, svolge attività di ricerca e alta formazione all’interno del Dipartimento ICEA. Si occupa di <b>didattica, divulgazione scientifica e progettazione socio-ambientale</b>, con particolare attenzione all’applicazione degli strumenti della <b>GIScience</b> e del <b>Remote Sensing</b> nello studio dei territori e dei processi di trasformazione ambientale.",
      image: "/giuseppe_df.jpeg",
      position: "left"
    },
    {
      id: 2,
      name: "Stefano Della Fera",
      role: 'co-founder',
      description: "Ricercatore presso l’Istituto di Fisica Applicata “Nello Carrara” del CNR di Firenze, si dedica allo studio dell’<b>atmosfera terrestre</b>, del <b>bilancio energetico del sistema climatico</b> e dell’<b>evoluzione del clima</b>. Collabora a progetti scientifici a supporto di missioni satellitari dell’<b>Agenzia Spaziale Italiana</b> e dell’<b>Agenzia Spaziale Europea</b>, contribuendo allo sviluppo di strumenti e metodi avanzati per l’osservazione della Terra.",
      image: "/stefano_df.jpeg",
      position: "right"
    },
    {
      id: 3,
      name: "Martina Andrea Viecelli",
      role: 'co-founder e Vicepresidente di Go Zone',
      description: "Psicologa clinica specializzata in <b>Psicologia delle Emergenze Sanitarie</b>, è dottoranda di ricerca presso l’Università degli Studi di Parma con un progetto dedicato all’impatto del <b>cambiamento climatico sulla salute mentale</b>. Integra attività clinica, ricerca e divulgazione, occupandosi dei vissuti psicologici legati alla crisi climatica e della promozione di interventi orientati al benessere individuale e comunitario.",
      image: "/andrea_viecelli.jpeg",
      position: "left"
    },
    {
      id: 4,
      name: "Margherita Zuecco",
      role: 'co-founder',
      description: "Psicologa con un interesse specifico per le connessioni tra <b>salute mentale e crisi climatica</b>, collabora a progetti di ricerca sull’eco-ansia e sugli effetti psicologici del cambiamento climatico. Ha maturato esperienza clinica in contesti psicoanalitici e all’interno di servizi pubblici dedicati alle dipendenze, lavorando con adolescenti e adulti in percorsi di sostegno e cura.",
      image: "/MArghe_zuecco.jpeg",
      position: "right"
    },
    {
      id: 5,
      name: "Andrea Varotto",
      role: 'co-founder',
      description: "Economista con esperienza in <b>sviluppo locale, progettazione europea e sociale e analisi economico-finanziarie</b>. Ha lavorato in contesti nazionali e internazionali occupandosi di business plan, progettazione per l’innovazione sociale e strategie di sostenibilità ambientale. Si concentra in particolare sul rafforzamento delle <b>reti territoriali</b> e sull’inclusione socio-lavorativa attraverso approcci integrati e partecipativi.",
      image: "/andrea_varotto.jpeg",
      position: "left"
    },
    {
      id: 6,
      name: "Alessandro Carusi",
      role: 'co-founder',
      description: "Economista e consulente gestionale con consolidata esperienza in <b>strategia organizzativa e project management</b>. Negli ultimi anni ha sviluppato competenze specifiche nell’ambito della <b>sostenibilità ambientale</b> e delle <b>sfide climatiche</b>, unendo un approccio analitico orientato ai risultati alla progettazione di interventi innovativi e ad alto impatto.",
      image: "/alessandro_carusi.jpg",
      position: "right"
    },
    {
      id: 7,
      name: "Clelia Viecelli",
      role: 'co-founder',
      description: "Antropologa specializzata in studi sul cibo, l’ambiente e le interazioni tra umani e non umani, è docente universitaria e direttrice accademica del programma <b>Food, Sustainability & the Environment</b> presso l’Umbra Institute di Perugia. Ha conseguito il dottorato di ricerca presso la <b>University of Southampton (UK)</b> ed è ricercatrice presso l’Università di Siena. I suoi interessi di ricerca includono i <b>paesaggi alimentari</b>, i processi culturali legati al vino e alle pratiche agroalimentari, e le dinamiche sociali nei sistemi ecologici contemporanei.",
      image: "/Clelia_viecelli.JPG",
      position: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-gray-900">IL TEAM</h1>
        
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <React.Fragment key={member.id}>
              {index === 0 && (
                <div className="mb-16">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">Referenti GEO ZONE</h2>
                  <hr className="border-t-2 border-gray-300" />
                </div>
              )}
              {index === 2 && (
                <div className="mb-16">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">Referenti PSY ZONE</h2>
                  <hr className="border-t-2 border-gray-300" />
                </div>
              )}
              {index === 4 && (
                <div className="mb-16">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">Referenti CIRCULAR ZONE</h2>
                  <hr className="border-t-2 border-gray-300" />
                </div>
              )}
              {index === 6 && (
                <div className="mb-16">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">Referenti ANTHRO ZONE</h2>
                  <hr className="border-t-2 border-gray-300" />
                </div>
              )}
              <div
                className={`flex ${member.position === 'right' ? 'flex-row-reverse' : 'flex-row'} items-start gap-8 align-center`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                </div>
                <div className={`flex-1 ${member.position === 'right' ? 'text-right' : 'text-left'}`}>
                  <p className="text-md font-semibold text-gray-900 mb-2">
                    {member.name}: {member.role}
                  </p>
                  <div className="w-full mt-4">
                    <p dangerouslySetInnerHTML={{ __html: member.description }} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;