import ContactPage from './ContactPage'
export { ContactPage }
import CoverPage from './CoverPage'
export { CoverPage }
import FocusPage from './FocusPage'
export { FocusPage }
import HomePage from './HomePage'
export { HomePage }
import AboutPage from './AboutPage'
export { AboutPage }
import DynamicPage from './DynamicPage'
export { DynamicPage }
import TechPage from './TechPage'
export { TechPage }

export const pageList = [
  { id: 'home', component: HomePage, bgStart: '#ee3d7f', bgEnd: '#f3693d' },
  { id: 'about', component: AboutPage, bgStart: '#f3693d', bgEnd: '#f5981d' },
  { id: 'cover', component: CoverPage, bgStart: '#f5981d', bgEnd: '#f3be1d' },
  { id: 'focus', component: FocusPage, bgStart: '#f3be1d', bgEnd: '#b6c62e' },
  { id: 'tech', component: TechPage, bgStart: '#b6c62e', bgEnd: '#5bb963' },
  {
    id: 'contact',
    component: ContactPage,
    bgStart: '#5bb963',
    bgEnd: '#0099ad'
  }
]
