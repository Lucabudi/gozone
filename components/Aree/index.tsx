import Image from "next/image";

export default function Aree() {
  const items = [
    {
      title: "GEO ZONE",
      image: "/images/webdev.jpg",
    },
    {
      title: "PSY ZONE",
      image: "/images/design.jpg",
    },
    {
      title: "ANTHROPOLOGIC ZONE",
      image: "/images/blockchain.jpg",
    },
    {
      title: "ECONOMIC ZONE",
      image: "/images/smartcontracts.jpg",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl max-w-8md mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Square image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Title below */}
              <h3 className="mt-4 text-ml font-semibold text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
