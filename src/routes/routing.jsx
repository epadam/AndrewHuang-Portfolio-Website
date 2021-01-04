/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/starter/starter.jsx';
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/
import Alerts from '../views/ui-components/about.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import nlp from '../views/ui-components/nlp.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
import Reference from '../views/ui-components/reference.jsx';
import Computervision from '../views/ui-components/cv.jsx';
import DataAnalysis from '../views/ui-components/da.jsx';

import Demo from '../demos/demo.jsx';
import Medical from '../demos/medical.jsx';


var ThemeRoutes = [
  {
    path: '/about-me',
    name: 'About Me',
    icon: 'mdi mdi-adjust',
    component: Alerts
  },
  {
    path: '/computer-vision',
    name: 'Computer Vision',
    icon: 'mdi mdi-credit-card-multiple',
    component: Computervision
  },
  {
    path: '/nlp',
    name: 'NLP',
    icon: 'mdi mdi-credit-card-multiple',
    component: nlp
  },
  {
    path: '/data-analysis',
    name: 'Data Analysis',
    icon: 'mdi mdi-credit-card-multiple',
    component: DataAnalysis
  },
  {
    path: '/reference',
    name: 'Reference',
    icon: 'mdi mdi-comment-processing-outline',
    component: Reference
  },
  {
    path: '/text-classification',
    name: 'text-classification',
    icon: '',
    component: Demo
  },
  {
    path: '/medical-images',
    name: 'medical-images',
    icon: '',
    component: Medical
  },
 
  /*{
    path: '/ui-components/layout',
    name: 'Layout',
    icon: 'mdi mdi-apps',
    component: LayoutComponent
  },
  {
    path: '/ui-components/pagination',
    name: 'Pagination',

    icon: 'mdi mdi-priority-high',
    component: PaginationComponent
  },
  {
    path: '/ui-components/popover',
    name: 'Popover',

    icon: 'mdi mdi-pencil-circle',
    component: PopoverComponent
  },
  {
    path: '/ui-components/tooltip',
    name: 'Toltips',

    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
*/
  {
    path: '/',
    pathTo: '/about-me',
    name: 'Dashboard',
    redirect: true
  }
];
export default ThemeRoutes;
