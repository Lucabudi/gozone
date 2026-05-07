
export const Aree = () => {
  const items = [
    {
      title: "GEO ZONE",
      image: "/geohome.png",
      link: "cosa-facciamo/geo-zone",
    },
    {
      title: "PSY ZONE",
      image: "/psyhome.png",
      link: "/cosa-facciamo/psy-zone",
    },
    {
      title: "ANTHRO ZONE",
      image: "/antrohome.png",
      link: "/cosa-facciamo/anthro-zone",
    },
    {
      title: "CIRCULAR ZONE",
      image: "/economichome.png",
      link: "/cosa-facciamo/circular-zone",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-shadow duration-300">
          {items.map((item, i) => (
            <a href={item.link} key={i}>
            <div key={i} className="flex flex-col items-center hover:scale-125 transition-transform duration-300">
              {/* Square image */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Title below */}
              <h3 className="mt-4 text-xl  text-[#2e6750] font-bold text-center">
                {item.title}
              </h3>
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}