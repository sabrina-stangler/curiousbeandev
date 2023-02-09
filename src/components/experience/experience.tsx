import './experience.css'
import { Project, ProjectAttr } from './project'

export interface ProjectDetails {
  title: string
  description: string
  bullets: string[]
  attrs: ProjectAttr[]
}

const ds_bluelabel: ProjectDetails = {
  title: 'directsupply.net',
  description: 'massive eCommerce product',
  bullets: [
    'bullet 1',
    'bullet 2'
  ],
  attrs: [ProjectAttr.fullstack, ProjectAttr.react]
}

export function Experience() {

  return (
    <div className="container">
      <h1>Work Experience</h1>
      <div className="timeline">
        <div className="year-container">
          <span className="year-label">2023</span>
          <div className="direct-supply">
            <Project project={ds_bluelabel} />
            <Project project={ds_bluelabel} />
          </div>
          <span className="year-label">2016</span>
        </div>
      </div>
    </div>
  )
}