import './experience.css'
import { ProjectCard } from './components/project'
import { leadershipExperience, productExperience } from '../../constants'
import { useCallback, useState } from 'react'

enum ExperienceTab {
  product = 'product',
  leadership = 'leadership',
  speaking = 'speaking'
}

export function Experience() {
  const orderedTabs = [ExperienceTab.product, ExperienceTab.leadership, ExperienceTab.speaking]
  const [currentTab, setCurrentTab] = useState<ExperienceTab>(ExperienceTab.product)
  
  const getFormatedDate = useCallback((d: Date) => {
    return d.toLocaleDateString('en-us', { year:"numeric", month:"long"}) 
  }, [])

  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="experience-tabs">
        {orderedTabs.map(t => (
          <button className={"experience-tab" + (currentTab === t ? " selected-experience-tab" : "")} onClick={() => setCurrentTab(t)}>{t}</button>
        ))}
      </div>
      {currentTab === ExperienceTab.product && 
        <div className="timeline">
          <h2 className="year-label">Present</h2>
          {productExperience.map(o => (<>
            <div className="company-container">
              <h3 className="company-label">{o.name}{o.titles ? ' - ' + o.titles.join(', ') : ''}</h3>
              <span>{o.description}</span>
              {/* <span>{o.titles.join(', ')}</span> */}
              <div className="company-project-container">
                {o.projects.map(p => <ProjectCard project={p} />)}
              </div>
            </div>
            <h2 className="year-label">{getFormatedDate(o.startDate)}</h2>
          </>))}
        </div>}
      {currentTab === ExperienceTab.leadership &&
        <div className="timeline">
          {leadershipExperience.map(o => (<>
            <div className="company-container">
              <h3 className="company-label">{o.name}{o.titles ? ' - ' + o.titles.join(', ') : ''}</h3>
              <span>{o.description}</span>
              <div className="company-project-container">
                {o.projects.map(p => <ProjectCard project={p} />)}
              </div>
            </div>
          </>))}
        </div>}
      {currentTab === ExperienceTab.speaking &&
        <p>Coming soon!</p>
      }
    </div>
  )
}