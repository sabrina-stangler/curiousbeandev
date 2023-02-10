import './experience.css'
import { ProjectCard } from './components/project'
import { organizations } from '../../constants'

export function Experience() {

  return (
    <div className="experience-container">
      <h1>Work Experience</h1>
      <div className="timeline">
        <h2 className="year-label">- 2023</h2>
        {organizations.map(o => (
          <div className="company-container">
            <h3 className="company-label">{o.name}</h3>
            <div className="company-project-container">
              {o.projects.map(p => <ProjectCard project={p} />)}
            </div>
          </div>
        ))}
        <h2 className="year-label">- 2016</h2>
      </div>
    </div>
  )
}