
export const Aree = () => {
  const items = [
    {
      title: "GEO ZONE",
      image: "/economiczone.jpg",
    },
    {
      title: "PSY ZONE",
      image: "/psyhomepg.jpg",
    },
    {
      title: "ANTHROPOLOGIC ZONE",
      image: "/antrohome.jpg",
    },
    {
      title: "ECONOMIC ZONE",
      image: "/geozone.jpg",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Square image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Title below */}
              <h3 className="mt-4 text-xl  text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}