import { Project } from '../../models'
import './project.css'

export interface ProjectProps {
  project: Project
}

export function ProjectCard({ project }: ProjectProps) {
  const { title, description, bullets, attrs, links } = project
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
      {links && <div className="project-links">
        {links.map((l, i) => {
          let index = ''
          for(let j = 0; j<=i; j++) {
            index = index.concat('!')
          }
          return (
            <a href={l.href}>{index} {l.label}</a>
          )
        })}
      </div>}
      <div className="project-attrs">
        {attrs.sort((a,b) => a.localeCompare(b)).join(', ')}
      </div>
    </div>
  )
}