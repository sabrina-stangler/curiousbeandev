import { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ExperienceContext } from './contexts/useExperience'
import {
  About,
  BlogBrowse,
  BlogPage,
  Clients,
  EmmittJames,
  FairyAstronaut,
  GiddyApp,
  Home,
  RadioMilwaukee,
  ReclaimLifestyles,
  UncleBucks,
} from './pages'

function App() {
  const [showDetails, setShowDetails] = useState<boolean>(true)

  const toggleDetails = useCallback(() => {
    setShowDetails((showDetails) => !showDetails)
  }, [])

  return (
    <ExperienceContext.Provider value={{ showDetails, toggleDetails }}>
      <Helmet>
        <script
          src='https://kit.fontawesome.com/947016a734.js'
          crossOrigin='anonymous'
        ></script>
      </Helmet>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogBrowse />} />
        <Route path='/blog/:fileName' element={<BlogPage />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/clients/radio-milwaukee' element={<RadioMilwaukee />} />
        <Route
          path='/clients/reclaim-lifestyles'
          element={<ReclaimLifestyles />}
        />
        <Route path='/clients/giddy-app' element={<GiddyApp />} />
        <Route path='/clients/emmitt-james' element={<EmmittJames />} />
        <Route path='/clients/fairy-astronaut' element={<FairyAstronaut />} />
        <Route path='/clients/uncle-bucks-on-third' element={<UncleBucks />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </ExperienceContext.Provider>
  )
}

export default App
