import newspapper from '../img/newspaper.svg';
import glass from '../img/wineglass.svg';
import bottle from '../img/bottle.svg';

const NAV_LINKS = [
  { title: 'Головна', to: '/' },
  { title: 'Закупівля', to: '#purchase' },
  { title: 'Послуги', to: '#services' },
  { title: 'Контакти', to: '#contacts' },
];

const SLIDER_ITEMS = [
  {
    img: newspapper,
    title: 'Макулатура',
    description:
      'Наша компанія приймає  макулатуру на вторинну переробку. Ми допомагаємо вигідно здати макулатуру всіх марок у мінімальних об’ємах або оптом.',
    color: '#2349E4',
  },
  {
    img: glass,
    title: 'Скло',
    description:
      'Наша компанія приймає  макулатуру на вторинну переробку. Ми допомагаємо вигідно здати макулатуру всіх марок у мінімальних об’ємах або оптом.',
    color: '#6AD44C',
  },
  {
    img: bottle,
    title: 'Пластик',
    description:
      'Наша компанія приймає  макулатуру на вторинну переробку. Ми допомагаємо вигідно здати макулатуру всіх марок у мінімальних об’ємах або оптом.',
    color: '#F3D94C',
  },
  {
    img: newspapper,
    title: 'Макулатура',
    description:
      'Наша компанія приймає  макулатуру на вторинну переробку. Ми допомагаємо вигідно здати макулатуру всіх марок у мінімальних об’ємах або оптом.',
    color: '#2349E4',
  },
  {
    img: glass,
    title: 'Скло',
    description:
      'Наша компанія приймає  макулатуру на вторинну переробку. Ми допомагаємо вигідно здати макулатуру всіх марок у мінімальних об’ємах або оптом.',
    color: '#6AD44C',
  },
  {
    img: bottle,
    title: 'Пластик',
    description:
      'Наша компанія приймає  макулатуру на вторинну переробку. Ми допомагаємо вигідно здати макулатуру всіх марок у мінімальних об’ємах або оптом.',
    color: '#F3D94C',
  },
];

const PURCHASES = [
  { title: 'Макулатура', to: '/waste-paper' },
  { title: 'Пластик', to: '/plastic' },
  { title: 'Мікрочіпи', to: '/microchips' },
  { title: 'Склобій', to: '/cullet' },
  { title: 'Інше', to: '/others' },
];
const SERVICES = [
  { title: 'Демонтаж і порізка', to: '/dismantling-cutting' },
  { title: 'Вантажоперевезення', to: '/trucking' },
  { title: 'Самовивіз', to: '/pickup' },
  { title: 'Моторне масло', to: '/motor-oil' },
  { title: 'Утилізація', to: '/recycling' },
];
// eslint-disable-next-line import/prefer-default-export
export { NAV_LINKS, SLIDER_ITEMS, PURCHASES, SERVICES };

// img: string;
// title: string;
// color: string;
// description: string;
