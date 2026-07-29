import { HeaderOne, Title, PageContainer } from '../../../components'
import './EmmittJames.css'

const README: JSX.Element[] = [
  <p>
    This is a one-off website built to promote Emmitt James' 2026 single release
    titled "Meet Me on the Dance Floor".
  </p>,
  <p>
    Full credits are on the website,{' '}
    <a
      href='https://forprettygirls.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      forprettygirls.com
    </a>
    .
  </p>,
]

export function EmmittJames() {
  return (
    <PageContainer>
      <div>
        <Title nestedPage>Emmitt James</Title>
        <HeaderOne>README</HeaderOne>
        <div className='ej-section-container'>{README.map((line) => line)}</div>
      </div>
    </PageContainer>
  )
}
