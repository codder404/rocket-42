const generateId = () => '-' + Math.random().toString(36).substr(2.9);

export const services = [
  {
    id: generateId(),
    icon: require('../assets/images/schedule.svg'),
    title: 'Projetos Ágeis',
    text: 'Realize sua  ideia de produto de Software.'
  },
  {
    id: generateId(),
    icon: require('../assets/images/about.svg'),
    title: 'Operação DevOps',
    text: 'Lance evoluções com suporte contínuo.'
  },
  {
    id: generateId(),
    icon: require('../assets/images/code.svg'),
    title: 'Desenvolvedores sobre Demanda',
    text: 'Receba nosso Profissionais em sua Equípa.'
  },

]