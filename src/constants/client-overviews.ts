import { ClientOverview } from '../models'
import RadioMilwaukeeLogo from '../assets/images/radio-milwaukee.jpg'
import ReclaimLifestylesAppIcon from '../assets/images/reclaim-lifestyles/restart-app-icon.png'
import CAHLogo from '../assets/images/cah-logo.png'
import GiddyAppLogo from '../assets/images/giddyapp.webp'
import FPGDotCom from '../assets/images/ej-fpgdotcom.png'

export const clientOverviews: ClientOverview[] = [
  {
    name: 'Radio Milwaukee',
    work: 'Now Playing Widget',
    description: 'CSS Styling',
    imageUrl: RadioMilwaukeeLogo,
    slug: 'radio-milwaukee',
  },
  {
    name: 'Reclaim Lifestyles',
    work: 'Restart! Mobile App',
    description: 'UI Design, Hybrid Mobile Development',
    imageUrl: ReclaimLifestylesAppIcon,
    slug: 'reclaim-lifestyles',
  },
  {
    name: 'Codi Alger Homes',
    work: 'codiaglerhomes.com',
    description: 'Website Design & Buildout',
    imageUrl: CAHLogo,
    slug: 'codi-alger-homes',
  },
  {
    name: 'GiddyApp',
    work: 'GiddyApp Mobile App',
    description: 'UX Refinement & QA Testing',
    imageUrl: GiddyAppLogo,
    slug: 'giddy-app',
  },
  {
    name: 'Emmitt James',
    work: 'forprettygirls.com',
    description: 'Website Design & Buildout',
    imageUrl: FPGDotCom,
    slug: 'emmitt-james',
  },
  {
    name: 'Fairy Astronaut',
    work: 'The Fairy Times',
    description: 'Website Buildout',
    imageUrl: '',
    slug: 'fairy-astronaut',
  },
]
