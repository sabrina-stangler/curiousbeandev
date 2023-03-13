import { Link } from 'react-router-dom';
import { PageContainer } from '../../components';
import { HeaderOne } from '../../components/headers';
import './clients.css';

export function Clients() {

  return (
    <PageContainer>
      <div className="clients-container">
        <HeaderOne text="Client Demos" />
        <ul>
          <li><Link to="radio-milwaukee">Radio Milwaukee</Link></li>
        </ul>
      </div>
    </PageContainer>
  )
}