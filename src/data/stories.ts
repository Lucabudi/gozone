export type Story = {
  date: string;
  title: string;
  image: string;
  linkText: string;
  href?: string;
};

// TODO: contenuti segnaposto, da sostituire con le storie reali.
const PLACEHOLDER_IMAGE =
  'https://i.guim.co.uk/img/media/43c52a2b60749e2c3cf28d6988c37a672d80a957/0_0_2500_1500/master/2500.jpg?width=1200&dpr=1&s=none&crop=none';

export const STORIES: Story[] = [
  {
    date: '1 September',
    title: 'Rethinking Waste: Towards smarter management solutions',
    image: PLACEHOLDER_IMAGE,
    linkText: 'Read the update',
  },
  {
    date: '7 August',
    title: 'Advancing ocean cleanup through innovation and research',
    image: PLACEHOLDER_IMAGE,
    linkText: 'Read the update',
  },
  {
    date: '15 July',
    title: 'Hawaiian sailors hunting plastic',
    image: PLACEHOLDER_IMAGE,
    linkText: 'Read the press release',
  },
  {
    date: '15 July',
    title: 'The Ocean Cleanup and AWS Join Forces to Accelerate Ocean Plastic Removal using AI',
    image: PLACEHOLDER_IMAGE,
    linkText: 'Read the press release',
  },
];

export const PROJECTS: Story[] = [1, 2, 3, 4].map((n) => ({
  date: `Progetto ${n}`,
  title: '',
  image: PLACEHOLDER_IMAGE,
  linkText: 'Scopri il progetto',
}));
