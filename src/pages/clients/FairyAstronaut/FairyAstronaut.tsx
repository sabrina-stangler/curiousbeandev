import { HeaderOne, Title, PageContainer } from '../../../components'
import './FairyAstronaut.css'

const README: JSX.Element[] = [
  <p>
    Development of{' '}
    <a
      href='https://fairyastronaut.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      fairyastronaut.com
    </a>
  </p>,
]

export function FairyAstronaut() {
  return (
    <PageContainer>
      <div>
        <Title nestedPage>Fairy Astronaut</Title>
        <HeaderOne>README</HeaderOne>
        <div className='fa-section-container'>{README.map((line) => line)}</div>
      </div>
    </PageContainer>
  )
}
