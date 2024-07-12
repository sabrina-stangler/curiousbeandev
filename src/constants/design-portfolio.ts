import { Project, ProjectAttr } from '../models'

const tas_slides: Project = {
  title: 'Tip-a-ScRxipt Pitch Deck',
  description: 'Consulting Gig',
  bullets: [
    'slide deck used to earn $30k in funding at startup pitch competition',
    'designed and executed completely in Google Slides',
  ],
  attrs: [ProjectAttr.design, ProjectAttr.product_management],
  links: [
    {
      label: 'pitch deck',
      href: 'https://docs.google.com/presentation/d/17MuU9Ne3FCfv7iN8YtpyHEedbJXiY9Tx/edit?usp=drive_link&ouid=105547942590290598918&rtpof=true&sd=true',
    },
    {
      label: 'company website',
      href: 'https://tipascrxipt.com/',
    },
  ],
}

const cbdev_website: Project = {
  title: 'curiousbean.dev',
  description: 'my personal website',
  bullets: [
    'logo designed in Figma',
    'color scheme ideated & narrowed down using color pallette curator tool',
    'designed and executed completely by me in React and TypeScript',
  ],
  attrs: [ProjectAttr.design, ProjectAttr.ui_ux],
  links: [
    { label: 'color pallette generator', href: 'https://coolors.co/generate' },
  ],
}

const restart_mobile: Project = {
  title: 'Restart! by Reclaim Lifestyles',
  description: 'mobile app providing daily workouts for aging adults',
  bullets: [
    'designed on the fly as I coded the app',
    'adapted through rounds of internal and friends & family user feedback',
  ],
  attrs: [
    ProjectAttr.design,
    ProjectAttr.ui_ux,
    ProjectAttr.product_management,
  ],
  links: [
    {
      label: 'app store listing',
      href: 'https://apps.apple.com/us/app/restart-by-reclaim-lifestyles/id6476577899',
    },
    {
      label: 'play store listing',
      href: 'https://play.google.com/store/apps/details?id=com.reclaimlifestyles.restart',
    },
  ],
}

const cah_website: Project = {
  title: 'codialgerhomes.com',
  description: 'website design & development for realtor Codi Alger',
  bullets: ['designed in Figma', 'built in React and TypeScript'],
  attrs: [ProjectAttr.design, ProjectAttr.ui_ux],
  links: [
    {
      label: 'designs',
      href: 'https://drive.google.com/drive/folders/1_jWIgtnYjdPGPh-JlxLxEKktP2PjTNaU?usp=drive_link',
    },
    {
      label: 'live website (wip)',
      href: 'codialgerhomes.com',
    },
  ],
}

const gamenight_flyer: Project = {
  title: 'Game Night Flyer',
  description: 'Invite for game night at my house',
  bullets: [
    'designed in Canva (no template)',
    "all my friends loved it, but they're biased so...",
  ],
  attrs: [ProjectAttr.design, ProjectAttr.ui_ux],
  links: [
    {
      label: 'flyers in google drive',
      href: 'https://drive.google.com/drive/folders/16IlY-zwa-Ps8iCfYoD4ICers01gFU_2-?usp=drive_link',
    },
  ],
}

export const designProjects: Project[] = [
  cbdev_website,
  restart_mobile,
  cah_website,
  gamenight_flyer,
  tas_slides,
]
