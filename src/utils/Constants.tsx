import { DnaIcon } from './icons'
import type { ComponentType } from 'react'
import { PaletteIcon, type IconProps, StethoscopeIcon } from './icons'
import cityPups from '../assets/home-page/cityPups.png'
import ubYou from '../assets/home-page/ubYou.png'
import gatherly from '../assets/home-page/gatherly.png'

// Centralized user-facing copy and content constants
// Use these in components/pages instead of hardcoded strings.

// Site / Brand
export const SITE_BRAND_NAME = 'clara oliva.'

// Navigation
export const NAV_HOME_LABEL = 'home'
export const NAV_PORTFOLIO_LABEL = 'portfolio'
export const NAV_ABOUT_LABEL = 'about'
export const NAV_MOBILE_HOME_LABEL = 'Home'
export const NAV_MOBILE_PORTFOLIO_LABEL = 'Portfolio'
export const NAV_MOBILE_ABOUT_LABEL = 'About'
export const NAV_TOGGLE_SR_LABEL = 'Toggle navigation'

// Home Page
export const HOME_NAME_LABEL = 'Clara Oliva'
export const HOME_PORTRAIT_ALT = 'Pencil portrait'
export const HOME_PAGE_TITLE = 'hello, i\u2019m clara.'
export const HOME_PAGE_SUBTITLE = 'i\u2019m a physical therapist turned product designer.'

// Contact
export const CONTACT_BUTTON_LABEL = 'contact'
export const CONTACT_MODAL_TITLE = 'let\u2019s connect!'
export const CONTACT_EMAIL_LABEL = 'E-mail'
export const CONTACT_EMAIL_PLACEHOLDER = 'you@email.com'
export const CONTACT_MESSAGE_PLACEHOLDER = 'Type your message'
export const CONTACT_CANCEL_BUTTON = 'Cancel'
export const CONTACT_SEND_BUTTON = 'Send'
export const CONTACT_TOOLBAR_BOLD = 'B'
export const CONTACT_TOOLBAR_ITALIC = 'I'
export const CONTACT_TOOLBAR_UNDERLINE = 'U'
export const CONTACT_TOOLBAR_BULLETS_ARIA = 'Bulleted list'
export const CONTACT_TOOLBAR_LINK_ARIA = 'Link'
export const CONTACT_TOOLBAR_CODE_ARIA = 'Code'

// About Page
export const ABOUT_PAGE_TITLE = 'about me'
export const ABOUT_INTRO_LINE = 'Hello, I\u2019m Clara. Currently a UI/UX designer at Applied Concepts!'
export const ABOUT_BIO_PARAGRAPH =
  'My journey into UX was not conventional by any means, I originally studied and worked as an acute care physical therapist for roughly 2 years before I decided to make a career change. My love for physical therapy stemmed from enjoying meeting new people and helping others, but I quickly found out that healthcare was not the means that I wanted to accomplish that. I craved creativity; and decided to revisit graphic design and art in my downtime. It was then that I discovered UX and made an impulsive decision to sign up for a bootcamp, I haven\u2019t looked back since :)'

export const ABOUT_ROLE_PARAGRAPH =
  'In my current role, I help design software applications for traffic products and police radar/lidar units in conjunction with planning the UI interfaces. So I wear a few hats!'

export const ABOUT_HOBBIES_PARAGRAPH =
  'In my free time I enjoy studying Japanese, running, and drawing anything that peaks my interest.'

export const ABOUT_INVITE_PARAGRAPH = 'I would love to connect and learn more about you!'

// Portfolio Page
export const PORTFOLIO_TITLE = 'Portfolio'
export const PORTFOLIO_INTRO = 'A selection of projects and case studies will go here.'

// Not Found Page
export const NOT_FOUND_TITLE = '404 \u2014 Not Found'
export const NOT_FOUND_MESSAGE = 'The page you\u2019re looking for doesn\u2019t exist.'
export const NOT_FOUND_BACK_HOME = 'Go back home'

// Footer
export const FOOTER_DESIGNED_BY_PREFIX = 'Designed with love by'
export const FOOTER_DESIGNED_BY_NAME = 'Clara Oliva'
export const FOOTER_DEV_LINK_URL = 'https://github.com/frankie1992'
export const FOOTER_DEV_LINK_LABEL = 'Developed by Francisco Miranda'

// Timeline content for Home page
export type TimelineEntry = {
  date?: string
  title: string
  subtitle?: string
  icon?: ComponentType<IconProps>
  iconClassName?: string
  iconBgClassName?: string
}

export const TIMELINE_ITEMS: TimelineEntry[] = [
  {
    date: 'May 2017',
    icon: DnaIcon,
    iconClassName: 'text-fuchsia-600',
    iconBgClassName: 'bg-fuchsia-50',
    title: 'UNT Denton',
    subtitle: 'BA. Biology with Double Minor in Chemistry and Social Sciences',
  },
  {
    date: 'December 2021',
    icon: StethoscopeIcon,
    iconClassName: 'text-emerald-600',
    iconBgClassName: 'bg-emerald-50',
    title: 'UT Southwestern School of Health Professions',
    subtitle: 'Doctorate in Physical Therapy',
  },
  {
    date: 'January 2025 \u2013 April 2025',
    icon: PaletteIcon,
    iconClassName: 'text-amber-600',
    iconBgClassName: 'bg-amber-50',
    title: 'Applied Concepts',
    subtitle: 'UI/UX Design Intern',
  },
  {
    date: 'February 2025',
    icon: PaletteIcon,
    iconClassName: 'text-violet-600',
    iconBgClassName: 'bg-violet-50',
    title: 'Springboard',
    subtitle: 'UI/UX Design Career Track',
  },
  {
    date: 'April 2025 \u2013 present',
    icon: PaletteIcon,
    iconClassName: 'text-amber-600',
    iconBgClassName: 'bg-amber-50',
    title: 'Applied Concepts',
    subtitle: 'UI/UX Design Engineer',
  },
]

export type ProjectDetails = {
  title: string
  subtitle?: string
  description?: string
  imageSrc?: string
  projectLink?: string
}

export const PORTFOLIO_PROJECTS_LIST: ProjectDetails[] = [
  {
    title: 'UBYou: Mental Health for College Students',
    subtitle: 'Mobile Application',
    description:
      'A redesigned mental health app for college students, completed during a 2‑month internship with a team of 5 designers and the CEO.',
    imageSrc: ubYou,
    projectLink: '#',
  },
  {
    title: 'Gatherly: A Social Event Application',
    subtitle: 'Mobile Application',
    description:
      'A mobile app that helps users discover local events and groups, using gamification to boost event turnout.',
    imageSrc: gatherly,
    projectLink: '#',
  },
  {
    title: 'CityPups: A Dog Adoption Website Design Sprint',
    subtitle: 'Desktop Website',
    description:
      'A 5‑day Google Ventures design sprint creating a dog adoption site for busy city individuals through rapid prototyping and iteration.',
    imageSrc: cityPups,
    projectLink: '#',
  },
]
