import { Project } from '../../models'
import './project.css'

export interface ProjectProps {
  project: Project
}

export function ProjectCard({ project }: ProjectProps) {
  const { title, description, bullets, attrs } = project
  return (
    <div className="project-container">
      <span className="project-title">{title}</span>
      <span className="project-description">{description}</span>
      <div className="project-bullets">
        {bullets && bullets.length > 0 &&
          <ul className="project-bullets-ul">
            {bullets.map(b => <li>{b}</li>)}
          </ul>}
      </div>
      <div className="project-attrs">
        {attrs.sort((a,b) => a.localeCompare(b)).join(', ')}
      </div>
    </div>
  )
}