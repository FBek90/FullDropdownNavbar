import Generic from '../views/Generic'
import Home from '../views/Home'
import Home2 from '../views/Home2'
import Home3 from '../views/Home3'
import Listing from '../views/Listing'
import Listing2 from '../views/Listing2'
import Listing3 from '../views/Listing3'
import Property from '../views/Property'
import Property2 from '../views/Property2'
import Property3 from '../views/Property3'
import Pages from '../views/Pages'
import Pages2 from '../views/Pages2'
import Pages3 from '../views/Pages3'
import Contact from '../views/Contact'

export const navItems = [
  {
    id: 1,
    path: '/main',
    title: 'HOME',
    component: Home,
    child: [
      { path: '/main/1', title: 'Home-1', component: Home },
      { path: '/main/2', title: 'Home-2', component: Home2 },
      { path: '/main/3', title: 'Home-3', component: Home3 },
    ],
  },

  {
    id: 2,
    path: '/listing',
    title: 'LISTING',
    component: Listing,
    child: [
      { path: '/listing/1', title: 'Listing-1', component: Listing },
      { path: '/listing/2', title: 'Listing-2', component: Listing2 },
      { path: '/listing/3', title: 'Listing-3', component: Listing3 },
    ],
  },
  {
    id: 3,

    path: '/property',
    title: 'PROPERTY',
    component: Property,
    child: [
      { path: '/property/1', title: 'Property-1', component: Property },
      { path: '/property/2', title: 'Property-2', component: Property2 },
      { path: '/property/3', title: 'Property-3', component: Property3 },
    ],
  },
  {
    id: 4,

    path: '/pages',
    title: 'PAGES',
    component: Pages,
    child: [
      { path: '/pages/1', title: 'Pages-1', component: Pages },
      { path: '/pagesh/2', title: 'Pages-2', component: Pages2 },
      { path: '/pages/3', title: 'Pages-3', component: Pages3 },
    ],
  },
  // {
  //   id: 5,

  //   path: '/contact',
  //   title: 'CONTACT',
  //   component: Contact,
  //   child: [
  //     { path: '/contact/1', title: '1', component: Generic },
  //     { path: '/contact/2', title: '2', component: Generic },
  //     { path: '/contact/3', title: '3', component: Generic },
  //   ],
  // },
]
