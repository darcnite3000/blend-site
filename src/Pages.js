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
import TechPage from './TechPage'
export { TechPage }

export const pageList = [
  { id: 'home', component: HomePage },
  { id: 'about', component: AboutPage },
  { id: 'cover', component: CoverPage },
  { id: 'focus', component: FocusPage },
  { id: 'tech', component: TechPage },
  { id: 'contact', component: ContactPage }
]
