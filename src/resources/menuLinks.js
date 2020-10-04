const generateId = () => '-' + Math.random().toString(36).substr(2.9);

export const menuLinks = [
  {
    id: generateId(),
    title: 'Sobre',
    url: 'sobre'
  },
  {
    id: generateId(),
    title: 'Serviços',
    url: 'servicos'
  },
  {
    id: generateId(),
    title: 'Blog',
    url: 'blog'
  },
  {
    id: generateId(),
    title: 'Portfólio',
    url: 'portfolio'
  },
]