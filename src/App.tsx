import {Helmet} from 'react-helmet'

import './App.css';
import { useCallback, useState } from 'react';
import { ExperienceContext } from './contexts/useExperience';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { RadioMilwaukee } from './pages/clients/RadioMilwaukee/RadioMilwaukee';
import { Clients } from './pages/clients/clients';

function App() {
  const [showDetails, setShowDetails] = useState<boolean>(true)

  const toggleDetails = useCallback(() => {
    setShowDetails(showDetails => !showDetails)
  }, [])

  return (
    <ExperienceContext.Provider value={{showDetails, toggleDetails}} >
      <Helmet>
        <script src="https://kit.fontawesome.com/947016a734.js" crossOrigin="anonymous"></script>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/radio-milwaukee" element={<RadioMilwaukee />} />
      </Routes>
    </ExperienceContext.Provider>
  );
}

export default App;
