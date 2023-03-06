import './experience.css'
import { useState } from 'react'
import productExperience from '../../constants/product-experience'
import leadershipExperience from '../../constants/leadership-experience'
import { ProjectCategory } from './components/project-category'

enum ExperienceTab {
  product = 'product',
  leadership = 'leadership',
  speaking = 'speaking'
}

export function Experience() {
  const orderedTabs = [ExperienceTab.product, ExperienceTab.leadership, ExperienceTab.speaking]
  const [currentTab, setCurrentTab] = useState<ExperienceTab>(ExperienceTab.product)

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
          {productExperience.map(pe => <ProjectCategory category={pe} />)}
        </div>}
      {currentTab === ExperienceTab.leadership && 
        <div className="timeline">
          {leadershipExperience.map(le => <ProjectCategory category={le} />)}
        </div>}
      {currentTab === ExperienceTab.speaking &&
        <p>Coming soon!</p>
      }
    </div>
  )
}