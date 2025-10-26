import { ArrowRight } from "lucide-react";

export default function ClimateStories() {
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
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">STORIE DI CLIMA</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition min-h-[300px]"
            >
            {/* Background image */}
            <img
                src={story.image}
                alt={story.title}
                className="object-cover object-center opacity-90"
            />

            {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <p className="text-sm mb-1 opacity-90">{story.date}</p>
                <h3 className="text-lg font-semibold mb-4">{story.title}</h3>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-md transition"
                >
                  <ArrowRight className="w-4 h-4" />
                  {story.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-[#394d5e] text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-[#2c3e4d] transition"
          >
            SCOPRI TUTTE LE STORIE (LINK NEWS)
          </a>
        </div>
      </div>
    </section>
  );
}
