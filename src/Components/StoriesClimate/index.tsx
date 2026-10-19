import { ArrowRight } from 'lucide-react';
import type { Story } from '../../data/stories';
import { Button } from '../Ui';

export default function ClimateStories({ stories, ctaTo }: { stories: Story[]; ctaTo?: string }) {
  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((story, i) => (
          <li key={i} className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm sm:aspect-[3/4]">
            <img
              src={story.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
              <p className="text-xs font-semibold tracking-wider text-white/75 uppercase">{story.date}</p>
              {story.title && <h3 className="mt-1 text-lg leading-snug font-semibold">{story.title}</h3>}
              <a
                href={story.href ?? '#'}
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/25"
              >
                {story.linkText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </li>
        ))}
      </ul>

      {ctaTo && (
        <div className="mt-10 text-center md:mt-12">
          <Button to={ctaTo}>Scopri tutte le storie</Button>
        </div>
      )}
    </>
  );
}
