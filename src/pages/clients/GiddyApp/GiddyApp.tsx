import { HeaderOne, Title, PageContainer } from '../../../components'
import './GiddyApp.css'

const README: JSX.Element[] = [
  <p>
    GiddyApp, available on the iOS App Store & Google Play Store, connects horse
    people to foster opportunities for engagement across disciplines.
  </p>,
  <p>
    My contributions to this project included reworking the onboarding user
    experience to "feel more like home" and reduce fatigue with the amount of
    information we're able to collect up front.
  </p>,
  <p>
    My deliverable was a document given to a designer outlining the proposed
    flow of information collection, what to prioritize at each step, and
    suggestions for visual components to prioritize ease of understanding.
  </p>,
  <p>
    I do ongoing work with GiddyApp as of July 2026 to QA test new features and
    ensure a smooth and meaningful user experience.
  </p>,
]

export function GiddyApp() {
  return (
    <PageContainer>
      <div>
        <Title nestedPage>Giddy App</Title>
        <HeaderOne>README</HeaderOne>
        <div className='ga-section-container'>{README.map((line) => line)}</div>
      </div>
    </PageContainer>
  )
}
