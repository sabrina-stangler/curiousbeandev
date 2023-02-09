import { ProjectDetails } from './experience'
import './project.css'

export enum ProjectAttr {
  frontend = 'frontend',
  backend = 'backend',
  fullstack = 'fullstack',
  react = 'react',
  angular = 'angular',
  ionic = 'ionic',
  mobile = 'mobile',
  product_management = 'product management',
  team_lead = 'team lead',
  ui_ux = 'ui/ux design'
}

export interface ProjectProps {
  project: ProjectDetails
}

export function Project({ project }: ProjectProps) {
  const { title, description, bullets, attrs } = project
  return (
    <div className="experience-container">
      <h2>{title}</h2>
      <h3>{description}</h3>
      {bullets && bullets.length > 0 && <ul>
        {bullets.map(b => <li>{b}</li>)}
      </ul>}
      {attrs.join(', ')}
    </div>
  )
}