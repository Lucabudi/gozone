export type ZoneId = 'geo' | 'psy' | 'anthro' | 'circular';

export type Zone = {
  id: ZoneId;
  name: string;
  path: string;
  image: string;
};

export const ZONES: Zone[] = [
  { id: 'geo', name: 'Geo Zone', path: '/cosa-facciamo/geo-zone', image: '/geohome.png' },
  { id: 'psy', name: 'Psy Zone', path: '/cosa-facciamo/psy-zone', image: '/psyhome.png' },
  { id: 'anthro', name: 'Anthro Zone', path: '/cosa-facciamo/anthro-zone', image: '/antrohome.png' },
  { id: 'circular', name: 'Circular Zone', path: '/cosa-facciamo/circular-zone', image: '/economichome.png' },
];
