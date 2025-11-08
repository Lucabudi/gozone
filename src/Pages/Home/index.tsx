import { Aree } from "../../Components/Aree";
import BannerSportello from "../../Components/BannerSportello";
import { HeroSection } from "../../Components/HeroSection";
import ClimateStories from "../../Components/StoriesClimate";

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
            <ClimateStories title="Storie di Clima" array={stories} />
        </div>
    );
};

export default HomePage;