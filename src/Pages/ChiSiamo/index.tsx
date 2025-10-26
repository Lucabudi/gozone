import React from 'react';
import { HeroSection } from '../../Components/HeroSection';
import Team from '../../Components/Team';

const ChiSiamo: React.FC = () => {
    return (
        <div className="home-page full-width"> 
            <HeroSection text="Chi Siamo" height="60vh" />
            <section className="px-6 md:px-12 lg:px-24 pb-16 text-center my-12">
                <h1 className='text-4xl font-bold mb-6'>La nostra storia</h1>
                <p className="text-lg leading-7 text-justify-center px-8">
                    L’Associazione di Promozione Sociale Go-Zone – Goldilocks Zone: Association for Social and Health Climate Actions nasce il 16 maggio. In quello stesso mese, l’osservatorio climatico di Mauna Loa ha registrato il livello record di 430 ppm di CO₂ in atmosfera, il più alto degli ultimi 800.000 anni. Una soglia simbolica e concreta insieme, che ci ricorda l’urgenza di ripensare il nostro rapporto con il pianeta e con le comunità che lo abitano.
                    Il nome “Goldilocks Zone” incontra le sue radici in una fiaba conosciuta da molti: quella di Riccioli d'Oro e i tre orsi. Una bambina entra in una casa sconosciuta e scopre che soltanto ciò che è “né troppo né troppo poco” può diventare rifugio: la sedia giusta, il cibo giusto, il letto giusto. In quello spazio di equilibrio trova la possibilità di riposare, di sopravvivere, di sentirsi al sicuro.  
                    La scienza ha preso in prestito questa immagine per descrivere la cosiddetta “Goldilocks Zone”: la fascia nello spazio attorno a una stella in cui le condizioni sono ottimali per ospitare la vita. Non troppo vicino, non troppo lontano, non troppo caldo né troppo freddo. È il luogo in cui la vita è possibile.
                    Abbiamo scelto questo nome perché rappresenta esattamente la nostra missione: generare contesti che siano abitabili, consapevoli e sostenibili dal punto di vista urbano, psicologico, sociale e ambientale.
                    Abbiamo il desiderio di contribuire a costruire spazi in cui le persone e le comunità possano vivere in equilibrio con l’ambiente, affrontando le sfide del cambiamento climatico senza dimenticare la cura reciproca e il benessere collettivo.
                    Go-Zone, dunque, è un’associazione indipendente che si impegna a promuovere esperienze di cittadinanza attiva, ad offrire supporto psicologico gratuito, a sostenere percorsi di sensibilizzazione ambientale e sociale ed a sviluppare progetti di adattamento e rigenerazione dei territori. Lo fa intrecciando ricerca, divulgazione scientifica e azioni concrete, con l’obiettivo di rafforzare comunità consapevoli.
                    Crediamo che la vera “zona riccioli d’oro” non sia solo un concetto astronomico o una metafora antica, ma un cammino possibile per le nostre città, i nostri paesi e le nostre vite: un equilibrio fragile da coltivare, insieme.
                </p>
            </section>  
            <Team />
        </div>
    );
};

export default ChiSiamo;