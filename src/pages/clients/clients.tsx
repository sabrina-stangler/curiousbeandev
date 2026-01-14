import { Link } from 'react-router-dom'
import { PageContainer, Title } from '../../components'
import './clients.css'

export function Clients() {
  return (
    <PageContainer>
      <Title>Client Work</Title>
      <div className='clients-container'>
        <ul>
          <li>
            <Link to='radio-milwaukee'>Radio Milwaukee</Link>
          </li>
          <li>
            <Link to='reclaim-lifestyles'>Reclaim Lifestyles</Link>
          </li>
        </ul>
      </div>
    </PageContainer>
  )
}
