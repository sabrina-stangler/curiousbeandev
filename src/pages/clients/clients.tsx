import { useNavigate } from 'react-router-dom'
import { PageContainer, Title } from '../../components'
import { ClientOverviewCard } from '../../components/client-overview'
import { clientOverviews } from '../../constants'
import './clients.css'

export function Clients() {
  const navigate = useNavigate()

  return (
    <PageContainer>
      <Title>Client Work</Title>
      <div className='clients-container' style={{ cursor: 'pointer' }}>
        {clientOverviews.map((clientOverview) => (
          <div onClick={() => navigate(`/clients/${clientOverview.slug}`)}>
            <ClientOverviewCard
              clientOverview={clientOverview}
              key={clientOverview.slug}
            />
          </div>
        ))}
      </div>
    </PageContainer>
  )
}
