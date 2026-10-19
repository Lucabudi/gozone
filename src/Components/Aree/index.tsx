import { Link } from 'react-router-dom';
import { ZONES } from '../../data/zones';

export function Aree() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
      {ZONES.map((zone) => (
        <li key={zone.id} data-zone={zone.id}>
          <Link
            to={zone.path}
            className="group block h-full rounded-2xl border border-line bg-white/70 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg sm:p-6"
          >
            <img
              src={zone.image}
              alt=""
              loading="lazy"
              className="mx-auto aspect-square w-full max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="mt-4 text-sm font-bold tracking-wider text-accent uppercase sm:text-base">{zone.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
