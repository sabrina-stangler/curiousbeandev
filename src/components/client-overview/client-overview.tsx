import { ClientOverview } from '../../models'
import './client-overview.css'

interface ClientOverviewCardProps {
  clientOverview: ClientOverview
}

export const ClientOverviewCard = (props: ClientOverviewCardProps) => {
  const { clientOverview } = props
  const { name, work, description, imageUrl } = clientOverview

  return (
    <div className='client-overview-card'>
      <h2 className='client-overview-header'>{name}</h2>
      {imageUrl && (
        <img src={imageUrl} alt={name} className='client-overview-image' />
      )}
      <div className='client-overview-details'>
        <span>{work}</span>
        <span>{description}</span>
      </div>
    </div>
  )
}
