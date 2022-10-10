import '../scss/style.scss';
import '../css/css-style.css';

import SmoothScroll from './helpers/SmoothScroll';
import Sphere from './Modules/Sphere';

const smoothScroll = new SmoothScroll();
smoothScroll.init();

const sphere = new Sphere();
sphere.init();
