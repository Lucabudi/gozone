import React from 'react';
import { HeroSection } from '../../Components/HeroSection';
import Team from '../../Components/Team';

const ChiSiamo: React.FC = () => {
    return (
        <div className="home-page full-width"> 
            <HeroSection text="Chi Siamo" height="60vh" animation={false} />
            <section className="px-6 md:px-12 lg:px-24 pb-16 text-center my-12 flex flex-col items-center gap-6">
                <p>L’Associazione di Promozione Sociale <b>Go-Zone – Goldilocks Zone: Association for Social and Health Climate Actions </b> nasce il <b>16 maggio 2025</b>, in un momento storico tutt’altro che casuale. Proprio in quel mese, l’osservatorio climatico di Mauna Loa ha registrato il livello record di 430 ppm di CO₂ in atmosfera, il valore più alto degli ultimi 800.000 anni. Una soglia al tempo stesso simbolica e concreta, che ci richiama con forza all’urgenza di ripensare il nostro rapporto con il pianeta e con le comunità che lo abitano.</p>
                <p className='mt-4'>Il nome <b>“Goldilocks Zone”</b> affonda le sue radici in una fiaba familiare a molti: quella di Riccioli d’Oro e i tre orsi. Una bambina entra in una casa sconosciuta e scopre che solo ciò che è <b>“né troppo né troppo poco”</b> può diventare rifugio: la sedia giusta, il cibo giusto, il letto giusto. In quello spazio di equilibrio trova la possibilità di <b>riposare, di sopravvivere, di sentirsi al sicuro.</b></p>
                <p className='mt-4'>Questa immagine ha ispirato anche la <b>NASA</b>, che ha preso in prestito il concetto per descrivere la cosiddetta <b>Goldilocks Zone</b> in astronomia: la fascia attorno a una stella in cui le condizioni sono <b>ottimali per la presenza di acqua liquida</b> sulla superficie di un pianeta. Non troppo vicino, dove l’acqua evaporerebbe; non troppo lontano, dove congelerebbe. Una regione “giusta al punto giusto”, ritenuta fondamentale per la possibilità che <b>la vita possa nascere e mantenersi.</b> È la zona in cui un pianeta può essere — proprio come nella fiaba — <i>abitabile.</i></p>
                <p className='mt-4'>Abbiamo scelto questo nome perché rappresenta profondamente <b>la nostra missione: creare contesti abitabili, consapevoli e sostenibili</b>, dal punto di vista <b>urbano, psicologico, sociale e ambientale.</b>
                <br />Desideriamo costruire spazi in cui persone e comunità possano vivere in equilibrio con l’ambiente, affrontando le sfide del cambiamento climatico senza perdere di vista la <b>cura reciproca</b> e il <b>benessere collettivo.</b></p>
                <p>Go-Zone è un’associazione <b>indipendente</b> che promuove esperienze di <b>cittadinanza attiva</b>, offre <b>supporto psicologico gratuito</b>, sostiene percorsi di <b>sensibilizzazione ambientale e sociale</b> e sviluppa progetti di <b>adattamento climatico e rigenerazione dei territori.</b></p>
                <p>Lo facciamo intrecciando <b>ricerca, divulgazione scientifica e azioni concrete</b>, con l’obiettivo di rafforzare comunità più consapevoli e resilienti.</p>
                <p> Crediamo che la vera “zona riccioli d’oro” non sia solo un concetto astronomico o una metafora antica, ma un percorso possibile per le nostre città, i nostri paesi e le nostre vite: un equilibrio delicato, da coltivare insieme. <br />Il nostro gruppo di lavoro è composto da persone con <b>competenze specialistiche diversificate</b>, unite dalla volontà di contribuire a un futuro più giusto, sano e sostenibile.</p>
            </section>  
            <Team />
        </div>
    );
};

export default ChiSiamo;