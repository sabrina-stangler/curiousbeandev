import { HeaderOne, Title, PageContainer } from '../../../components'
import RestartAppIcon from '../../../assets/images/reclaim-lifestyles/restart-app-icon.png'
import CapacitorLogo from '../../../assets/images/capacitor.png'
import ReactLogo from '../../../assets/images/react.png'
import TypescriptLogo from '../../../assets/images/typescript.png'
import HomeOverviewColor from '../../../assets/images/reclaim-lifestyles/home-with-overview-color.png'
import HomeOverviewSlate from '../../../assets/images/reclaim-lifestyles/home-with-overview-slate.png'
import HomeSimple from '../../../assets/images/reclaim-lifestyles/home-simple.png'
import FeedbackVertical from '../../../assets/images/reclaim-lifestyles/feedback-vertical-stacking.png'
import FeedbackHorizontal from '../../../assets/images/reclaim-lifestyles/feedback-horizontal-labels.png'

import './ReclaimLifestyles.css'

const README: JSX.Element[] = [
  <img
    src={RestartAppIcon}
    alt='Restart! app icon'
    height={200}
    style={{ borderRadius: '1rem' }}
  />,
  <p>
    Since 2023, I've been building the debut mobile app of Reclaim Lifestyles:
    Restart! Restart! is a daily exercise app designed for seniors to reclaim
    their physical health and mobility. Existing health and fitness apps are not
    sticking with the 50+ community in the US, and Restart! is our first attempt
    to address this market.
  </p>,
  <p>
    My role has encompassed frontend development, UI design, and product
    management. The rest of the team includes founder{' '}
    <a
      href='https://www.linkedin.com/in/tojeffwhite'
      target='_blank'
      rel='noreferrer'
    >
      Jeff White
    </a>
    , backend developer{' '}
    <a href='https://sufficient.software' target='_blank' rel='noreferrer'>
      Nick Gartmann
    </a>
    , and expert physicians{' '}
    <a
      href='https://www.linkedin.com/in/benjamin-dreyer-36195713/'
      target='_blank'
      rel='noreferrer'
    >
      Ben Dreyer
    </a>{' '}
    & Beth Schmelling.
  </p>,
  <p>
    Read more about Reclaim Lifestyles and our team{' '}
    <a
      href='https://www.reclaimforlife.com/why-reclaim'
      target='_blank'
      rel='noreferrer'
    >
      here
    </a>
    .
  </p>,
]

const TECH_DETES: JSX.Element[] = [
  <img className='rl-logo' src={CapacitorLogo} alt='ionic capacitor logo' />,
  <img className='rl-logo' src={ReactLogo} alt='react logo' />,
  <img className='rl-logo' src={TypescriptLogo} alt='typescript logo' />,
  <p>Restart! was built with Ionic Capacitor and React using TypeScript.</p>,
  <p>
    It interfaces with a RESTful API built by{' '}
    <a href='https://sufficient.software' target='_blank' rel='noreferrer'>
      Nick Gartmann of Sufficient Software
    </a>
    .
  </p>,
  <p>Routing is done using react-router-dom.</p>,
  <p></p>,
  <p></p>,
  <p></p>,
  <p></p>,
]

const DESIGN_NOTES: JSX.Element[] = [
  <p>
    Restart! has gone through many iterations of UI design in the last three
    years, but here's a few stages of its development. I'll also share why
    certain designs were altered or omitted.
  </p>,
  <img
    src={HomeOverviewColor}
    className='rl-image'
    alt='restart! home screen with workout overview in a colorful design'
  />,
  <img
    src={HomeOverviewSlate}
    className='rl-image'
    alt='restart! home screen with workout overview in a slate grey design with dark purple accents'
  />,
  <img
    src={HomeSimple}
    className='rl-image'
    alt='restart! home screen with a simple design'
  />,
  <p>
    Above you'll see three different versions of the home page. The first has
    the most influence from me, but was largely styled after the{' '}
    <a href='https://reclaimforlife.com' target='_blank' rel='noreferrer'>
      reclaimforlife.com
    </a>{' '}
    website, styled by{' '}
    <a href='https://1406consulting.com' target='_blank' rel='noreferrer'>
      1406 Consulting
    </a>
    . The second image shows 1406's reimagining of a "cleaner" and more
    "professional" look. We ended up moving toward the third design, which the
    founder had a large amount of influence in designing, that was simple,
    straightforward, and on brand.
  </p>,
  <p>
    Notably, this last design omits the workout overview which we deemed
    ultimately unnecessary as we don't even know if our users care to see the
    workout beforehand. We ended up stripping the app's features back quite a
    bit before our second launch in 2026, so that we could listen to user
    feedback about what they wanted or didn't like.
  </p>,
  <p>
    It's worth noting that we opted for "workouts completed" over something like
    a streak because I was able to implement a workout counter entirely on the
    frontend very quickly using local storage, whereas a streak counter would
    have been more complex, involving the backend (another developer) to really
    do it justice, and we hypothesized that prioritizing celebrating any workout
    completion over streak behavior could be more motivating for this user base
    (50+).
  </p>,
  <img
    src={FeedbackHorizontal}
    className='rl-image'
    alt='restart! feedback screen with design elements arranged horizontally'
  />,
  <img
    src={FeedbackVertical}
    className='rl-image'
    alt='restart! feedback screen with design elements stacked vertically'
  />,
  <p>
    Here represents a small design change in how I arrange the feedback input
    sliders. The goal is to quickly capture a user's experience of the exercise
    they just performed, in an effort to determine whether or not the exercise
    was effectively difficult. So in trying to get this all to fit on even a
    tiny mobile screen (like the iPhone SE), I strayed away from the Ionic
    component's default label placement (on either side) to set them above the
    slider all together. Another factor was trying to get the first two slider
    inputs to be visible without scrolling on the modal, so that a user doesn't
    miss an input or feel overwhelmed by the amount of information they have to
    enter.
  </p>,
  <p>
    NOTE: The feedback modal appears after each [of usually four] circuits,
    appearing sequentially for each [of usually 2-5] unique exercise in that
    circuit.
  </p>,
  <p>
    This component involved a lot of copywriting and thinking about how to
    convey each end of the spectrum in as few words as possible, originally to
    keep the width of the component narrow, but always to enable a new user to
    quickly understand what spectrum was being used to measure their
    understanding of difficulty, form, and pain intensity.
  </p>,
]

export function ReclaimLifestyles() {
  return (
    <PageContainer>
      <div>
        <Title nestedPage>Restart! by Reclaim Lifestyles</Title>

        <HeaderOne>README</HeaderOne>
        <div className='rl-section-container'>{README.map((line) => line)}</div>

        <HeaderOne>Technical Details</HeaderOne>
        <div className='rl-section-container'>
          {TECH_DETES.map((line) => line)}
        </div>

        <HeaderOne>Design Notes</HeaderOne>
        <div className='rl-section-container'>
          {DESIGN_NOTES.map((line) => line)}
        </div>
      </div>
    </PageContainer>
  )
}
