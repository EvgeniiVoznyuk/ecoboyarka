import Home from '../pages/Home';
import WastePaper from '../pages/purchases/WastePaper';
import Plastic from '../pages/purchases/Plastic';
import Cullet from '../pages/purchases/Cullet';
import Microchips from '../pages/purchases/Microchips';
import Others from '../pages/purchases/Others';
import DismantlingCutting from '../pages/services/Dismantling&Cutting';
import MotorOil from '../pages/services/MotorOil';
import Pickup from '../pages/services/Pickup';
import Recycling from '../pages/services/Recycling';
import Trucking from '../pages/services/Trucking';

const ROUTER_CONFIG = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'WastePaper',
    path: '/waste-paper',
    component: WastePaper,
    exact: true,
  },
  {
    name: 'Plastic',
    path: '/plastic',
    component: Plastic,
    exact: true,
  },
  {
    name: 'Cullet',
    path: '/cullet',
    component: Cullet,
    exact: true,
  },
  {
    name: 'Microchips',
    path: '/microchips',
    component: Microchips,
    exact: true,
  },
  {
    name: 'Others',
    path: '/others',
    component: Others,
    exact: true,
  },
  {
    name: 'Dismantling&Cutting',
    path: '/dismantling-cutting',
    component: DismantlingCutting,
    exact: true,
  },
  {
    name: 'MotorOil',
    path: '/motor-oil',
    component: MotorOil,
    exact: true,
  },
  {
    name: 'Pickup',
    path: '/pickup',
    component: Pickup,
    exact: true,
  },
  {
    name: 'Recycling',
    path: '/recycling',
    component: Recycling,
    exact: true,
  },
  {
    name: 'Trucking',
    path: '/trucking',
    component: Trucking,
    exact: true,
  },
];

export default ROUTER_CONFIG;
