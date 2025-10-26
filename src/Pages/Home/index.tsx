import { Aree } from "../../Components/Aree";
import BannerSportello from "../../Components/BannerSportello";
import { HeroSection } from "../../Components/HeroSection";
import ClimateStories from "../../Components/StoriesClimate";

const HomePage = () => {
    return (
        <div className="home-page full-width">
            <HeroSection text="Il clima, la nostra casa" height="80vh" />
            <p className="py-10 font-bold text-center align-center mx-auto max-w-4xl">L'associazione Go-Zone nasce come Associazione di Promozione Sociale volta a promuovere esperienze di cittadinanza attiva nel campo del Climate Change, attraverso strategie ed azioni di cura delle persone, della comunità e progetti di sostenibilità sociale ed ambientale.</p>
            <section className="px-6 md:px-12 lg:px-24 pb-16 text-center">
                <h2 className="text-3xl font-bold mb-6 text-center">Benvenuti su Go-Zone</h2>
                <p className="text-lg leading-7 text-justify-center">
                    ESPLORA LE NOSTRE ZONE
                </p>
                <Aree />
            </section>
            <BannerSportello />
            <ClimateStories />
        </div>
    );
};

export default HomePage;