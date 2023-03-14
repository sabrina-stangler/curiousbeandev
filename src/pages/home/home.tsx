import './home.css'
import { CB_TAGLINE } from '../../constants';
import { Logo, Profile, Experience, PageContainer } from '../../components';

export function Home() {

  return (
    <PageContainer>
      <>
        <div className="header">
          <div className="logo-container">
            <Logo />
          </div>
          {CB_TAGLINE.map(line => <p>{line}</p>)}
          <p>
            <a className="email-link" href="mailto:sabstangler@gmail.com">Email me</a> if you'd like to work together!
          </p>
        </div>
        <div className="content">
          <Profile />
          <Experience />
        </div>
      </>
    </PageContainer>
  )
}