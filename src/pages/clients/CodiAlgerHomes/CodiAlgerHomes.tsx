import { HeaderOne, PageContainer, Title } from '../../../components'
import './CodiAlgerHomes.css'
import AboutPage from './designs/about-page.png'
import BuyersPage from './designs/buyers-page.png'
import LandingPage from './designs/landing-page.png'
import Moodboard from './designs/moodboard.png'
import SellersPage from './designs/sellers-page.png'
import LogosV1 from './designs/logos-v1.png'
import LogosV2 from './designs/logos-v2.png'
import LogosV3 from './designs/logos-v3-houses.png'
import LogosV3Inspo from './designs/logos-v3-house-inspo.png'
import LogosV4 from './designs/logos-v4-final.png'

const README: JSX.Element[] = [
  <p>
    Here lies the evidence of building out codialgerhomes.com, the website of my
    friend and realtor: Codi Alger of THE Codi Alger Homes!
  </p>,
]

export function CodiAlgerHomes() {
  return (
    <PageContainer>
      <div className='cah-container'>
        <Title nestedPage>Codi Alger Homes</Title>
        <HeaderOne>README</HeaderOne>
        <div className='cah-section-container'>
          {README.map((line) => line)}
        </div>

        <HeaderOne>Moodboard</HeaderOne>
        <div className='cah-section-container'>
          <img
            className='cah-designs-image'
            src={Moodboard}
            alt='Codi Alger Homes Moodboard'
          />
        </div>

        <HeaderOne>Logo Designs</HeaderOne>
        <div className='cah-section-container'>
          <div>
            <h2>V1</h2>
            <img
              className='cah-designs-logo'
              src={LogosV1}
              alt='Codi Alger Homes Logo V1'
            />
          </div>
          <div>
            <h2>V2</h2>
            <img
              className='cah-designs-logo'
              src={LogosV2}
              alt='Codi Alger Homes Logo V2'
            />
          </div>
          <div>
            <h2>V3 - House Icon</h2>
            <img
              className='cah-designs-small-image'
              src={LogosV3Inspo}
              alt='Codi Alger Homes Logo V3 Inspiration photo of a yellow midcentury house'
            />
            <img
              className='cah-designs-logo'
              src={LogosV3}
              alt='Codi Alger Homes Logo V3'
            />
          </div>
          <div>
            <h2>V4 - Final</h2>
            <img
              className='cah-designs-logo'
              src={LogosV4}
              alt='Codi Alger Homes Logo V4'
            />
          </div>
        </div>

        <HeaderOne>Website Designs</HeaderOne>
        <div className='cah-section-container'>
          <div className='cah-designs-container'>
            <div>
              <h2 className='cah-designs-header'>Home Page</h2>
              <img
                className='cah-designs-image'
                src={LandingPage}
                alt='Codi Alger Homes Home Page'
              />
            </div>
            <div>
              <h2 className='cah-designs-header'>About Page</h2>
              <img
                className='cah-designs-image'
                src={AboutPage}
                alt='Codi Alger Homes Home Page'
              />
            </div>
            <div>
              <h2 className='cah-designs-header'>Buyers Page</h2>
              <img
                className='cah-designs-image'
                src={BuyersPage}
                alt='Codi Alger Homes Home Page'
              />
            </div>
            <div>
              <h2 className='cah-designs-header'>Sellers Page</h2>
              <img
                className='cah-designs-image'
                src={SellersPage}
                alt='Codi Alger Homes Home Page'
              />
            </div>
          </div>
        </div>

        <HeaderOne>Production Website</HeaderOne>
        <p>
          <a href='https://codialgerhomes.com' target='_blank' rel='noreferrer'>
            codialgerhomes.com
          </a>
        </p>
        <p>
          <a
            href='https://github.com/Codi-Alger-Homes/codialgerhomes'
            target='_blank'
            rel='noreferrer'
          >
            Public Code Repository (see how it's built!)
          </a>
        </p>
      </div>
    </PageContainer>
  )
}
