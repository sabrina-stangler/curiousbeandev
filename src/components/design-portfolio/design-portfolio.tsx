import { designProjects } from '../../constants'
import { Project } from '../../models'
import { HeaderOne } from '../headers'
import { ProjectCard } from './components/project'
import './design-portfolio.css'

export function DesignPortfolio() {
  return (
    <>
      <HeaderOne>Design Portfolio</HeaderOne>
      <div className='design-portfolio-container'>
        <div>
          <p>
            From designing mobile apps & websites to physical signs & posters.
            I've also been known to spin up logos for founders & small
            businesses!
          </p>
          <p>
            I am a creative and artist, so I'm up to the challenge designing
            anything. That said, here's what I've done before:
          </p>
        </div>
        <div className='design-portfolio-projects'>
          {designProjects.map((p: Project) => (
            <ProjectCard project={p} />
          ))}
        </div>

        <p>
          See more designs at the following links{' '}
          <p>
            <a href='https://drive.google.com/drive/folders/1AwLrumGFJOEaix4UyXGsBgg4E_M437YU?usp=drive_link'>
              Google Drive folder (logos, presentations, random graphics)
            </a>
          </p>
          <p>
            <a href='https://dribbble.com/sabrinastangler'>
              Dribbble designs (ui elements & web designs)
            </a>
          </p>
        </p>
      </div>
    </>
  )
}
