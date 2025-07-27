import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
]

export const socialData = [
  { id: 1, href: 'https://www.twitter.com', iconClass: 'fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', iconClass: 'fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', iconClass: 'fa-squarespace' },
]

export const servicesData = [
  {
    id: 1,
    iconClass: 'fa-wallet',
    serviceTitle: 'saving money',
    serviceText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    iconClass: 'fa-tree',
    serviceTitle: 'endless hiking',
    serviceText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    iconClass: 'fa-socks',
    serviceTitle: 'amazing comfort',
    serviceText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const toursData = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    tourTitle: 'Tibet Adventure',
    tourCountry: 'china',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    duration: 6,
    tourPrice: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    tourTitle: 'best of java',
    tourCountry: 'indonesia',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    duration: 11,
    tourPrice: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    tourTitle: 'explore hong kong',
    tourCountry: 'hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    duration: 8,
    tourPrice: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    tourTitle: 'kenya highlights',
    tourCountry: 'kenya',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    duration: 20,
    tourPrice: 3300,
  },
]
