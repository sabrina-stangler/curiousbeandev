import DecapLogo from '../../../assets/images/decap-logo.svg'
import NetlifyLogo from '../../../assets/images/netlify-logo.svg'
import ReactLogo from '../../../assets/images/react.png'
import TailwindCSSLogo from '../../../assets/images/tailwindcss-logo.png'
import TypescriptLogo from '../../../assets/images/typescript.png'
import DesktopEvents from '../../../assets/images/uncle-bucks/desktop-events.png'
import DesktopHome from '../../../assets/images/uncle-bucks/desktop-home.png'
import MobileHome from '../../../assets/images/uncle-bucks/mobile-home.png'
import MobileMenu from '../../../assets/images/uncle-bucks/mobile-menu.png'
import { HeaderOne, PageContainer, Title } from '../../../components'
import './UncleBucks.css'

const README: JSX.Element[] = [
  <p>
    Development of{' '}
    <a
      href='https://unclebucksonthird.netlify.app'
      target='_blank'
      rel='noopener noreferrer'
    >
      unclebucksonthird.com
    </a>
  </p>,
  <p>
    Uncle Bucks on Third is a local bar & restaurant located in Milwaukee's
    downtown area. This website was created to serve as a hub for menus, events,
    and contact info. The vibe is vibrant & friendly, and the primary call to
    action is booking private events.
  </p>,
  <p>
    There is an admin backend for managing the content of the site, including
    menus, images and events. The contact forms send email notifications with
    submissions to the site admins.
  </p>,
  <p>
    A key priority when choosing the stack was reducing the monthly spend on
    hosting costs. Uncle Bucks formerly used Spothopper which was costing them
    $250/month for hosting and content management. The solution provided has a
    total cost of $0/month for hosting, but I did recommend paying for the
    lowest paid tier of Netlify in order to access website analytics ($9/month),
    reducing the spend by over 96%.
  </p>,
]

const TECH_DETAILS: JSX.Element[] = [
  <img src={ReactLogo} alt='React Logo' className='ub-tech-logo' />,
  <img src={TypescriptLogo} alt='TypeScript Logo' className='ub-tech-logo' />,
  <img src={DecapLogo} alt='Decap Logo' className='ub-tech-logo' />,
  <img src={NetlifyLogo} alt='Netlify Logo' className='ub-tech-logo' />,
  <img
    src={TailwindCSSLogo}
    alt='Tailwind CSS Logo'
    className='ub-tech-logo'
  />,
  <p>
    Built using React and TypeScript, custom-styled with Tailwind CSS. Routing
    is handled with React Router. The admin backend is built with Decap CMS. The
    site (including the backend admin portal) is hosted on Netlify, which also
    provides an Identity service to authenticate admin users and a Form service
    to consume the contact forms & deliver email notifications.
  </p>,
  <p></p>,
]

const DESIGN_NOTES: JSX.Element[] = [
  <p>
    The design of the website focuses on a vibrant and friendly aesthetic,
    skewing a bit traditional and eclectic, reflecting the atmosphere of Uncle
    Bucks on Third. Tailwind CSS is used for custom styling which made it easy
    to provide a responsive and consistently-branded experience.
  </p>,
  <img src={DesktopHome} alt='Desktop Home' className='ub-design-image' />,
  <img src={MobileHome} alt='Mobile Home' className='ub-design-image' />,
  <p>
    I'm really proud of how the header adapts between desktop and mobile views,
    displaying the current page either highlighted in orange and as the sole
    header text for mobile.
  </p>,
  <img src={MobileMenu} alt='Mobile Menu' className='ub-design-image' />,
  <img src={DesktopEvents} alt='Desktop Events' className='ub-design-image' />,
  <p>
    Another thing I'm proud of is the little date visual used on the events
    page. I hand-rolled that to replicate the style of a tear-away calendar.
  </p>,
]

const CHALLENGES: JSX.Element[] = [
  <h2 className='ub-section-subheader'>
    Configuring Decap CMS w/ React Router
  </h2>,
  <p>
    The biggest challenge I encountered was configuring the Decap CMS admin
    backend to work with the site's routing package: React Router. I ended up
    having to submit a support ticket to the Decap CMS team to get a resolution,
    as there was no existing documentation to support using the packages
    together.
  </p>,
  <p>
    TL,DR: I was having trouble getting Decap CMS to conditionally render only
    when navigating to the /admin route, and the site was struggling to make
    sense of having two different versions of React as a root dependency and a
    peer dependency of Decap CMS. The solution was to toggle a MANUAL_INIT
    variable in Decap CMS, so that only one React instance would be used at a
    time.
  </p>,
  <p>
    See the{' '}
    <a
      href='https://github.com/decaporg/decap-cms/issues/7969'
      target='_blank'
      rel='noopener noreferrer'
    >
      Github Issue
    </a>{' '}
    I submitted, and the{' '}
    <a
      href='https://github.com/sempostma/decap-examples/tree/main'
      target='_blank'
      rel='noopener noreferrer'
    >
      resulting example
    </a>{' '}
    provided by the Decap CMS team.
  </p>,
  <h2 className='ub-section-subheader'>Now: Open / Closed</h2>,
  <p>
    TL,DR: Dates are hard! The long story is that handling the concept of "now"
    versus scheduled hours in a given timezone is not a straightforward or
    simple task.
  </p>,
  <p>
    This in mind, I "offloaded", per se, the responsibility of managing this
    complexity to a generative AI model, affectionately referred to as
    "Claudey-poo". In this case, Claudey-poo fumbled the bag super hard. As of
    now, I have yet to tackle this problem. What's a software project without a
    backlog?
  </p>,
]

export function UncleBucks() {
  return (
    <PageContainer>
      <div>
        <Title nestedPage>Uncle Buck's on Third</Title>
        <HeaderOne>README</HeaderOne>
        <div className='ub-section-container'>{README.map((line) => line)}</div>
        <HeaderOne>Technical Details</HeaderOne>
        <div className='ub-section-container'>
          {TECH_DETAILS.map((line) => line)}
        </div>
        <HeaderOne>Design Notes</HeaderOne>
        <div className='ub-section-container'>
          {DESIGN_NOTES.map((line) => line)}
        </div>
        <HeaderOne>Challenges</HeaderOne>
        <div className='ub-section-container'>
          {CHALLENGES.map((line) => line)}
        </div>
      </div>
    </PageContainer>
  )
}
