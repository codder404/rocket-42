const generateId = () => '-' + Math.random().toString(36).substr(2.9);

export const menuLinks = [
  {
    id: generateId(),
    title: 'About',
    url: 'about'
  },
  {
    id: generateId(),
    title: 'Discover',
    url: 'discover'
  },
  {
    id: generateId(),
    title: 'Services',
    url: 'services'
  },
  {
    id: generateId(),
    title: 'Portfolio',
    url: 'portfolio'
  },
]