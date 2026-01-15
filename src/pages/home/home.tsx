import {
  Experience,
  HeaderOne,
  PageContainer,
  Title
} from '../../components'
import { CB_TAGLINE } from '../../constants'

import './home.css'

export function Home() {
  const services = [
    'web development',
    'mobile development',
    'logo design',
    'FREE startup product consulting',
    'ui design',
    'product management',
    'design thinking facilitation',
  ]

  const colors = [
    { bg: 'var(--primary)', text: 'var(--white)' },
    { bg: 'var(--secondary)', text: 'var(--white)' },
    { bg: 'var(--tertiary)', text: 'var(--dark)' },
    { bg: 'var(--medium)', text: 'var(--dark)' },
  ]

  // Shuffle and assign colors to services
  const serviceColors = services.map(() => {
    return colors[Math.floor(Math.random() * colors.length)]
  })

  return (
    <PageContainer>
      <div className='header'>
        <Title>Curious Bean</Title>
        {CB_TAGLINE.map((line) => (
          <p>{line}</p>
        ))}
      </div>
      <div className='content'>
        <HeaderOne>Services</HeaderOne>
        <div className='services-cloud' aria-label='services word cloud'>
          {services.map((s, i) => (
            <span
              key={s}
              className={`service-word size-${(i % 5) + 1} ${
                s.includes('FREE') ? 'service-free' : ''
              }`}
              style={{
                backgroundColor: serviceColors[i].bg,
                color: serviceColors[i].text,
              }}
            >
              {s}
            </span>
          ))}
        </div>
        <div className='home-experience'>
          <Experience />
        </div>
      </div>
    </PageContainer>
  )
}
