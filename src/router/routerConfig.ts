import Home from '../pages/Home';
import Plastmasa from '../pages/Plastmasa';

const ROUTER_CONFIG = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'Plas',
    path: '/ppp',
    component: Plastmasa,
    exact: true,
  },
  // {
  //   name: 'Pool',
  //   path: '/market/:poolPubKey',
  //   component: Pool,
  //   exact: false,
  // },
  // {
  //   name: 'Portfolio',
  //   path: '/portfolio',
  //   component: Portfolio,
  //   requiresAuth: true,
  //   exact: false,
  // },
  // {
  //   name: 'Not Found',
  //   path: '/not-found',
  //   component: NotFound,
  //   exact: false,
  // },
];

export default ROUTER_CONFIG;
