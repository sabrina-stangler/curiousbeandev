import {Helmet} from 'react-helmet'

import './App.css';
import { useCallback, useState } from 'react';
import { ExperienceContext } from './contexts/useExperience';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/home/home';
import { RadioMilwaukee } from './pages/clients/RadioMilwaukee/RadioMilwaukee';

function App() {
  const [showDetails, setShowDetails] = useState<boolean>(true)

  const toggleDetails = useCallback(() => {
    setShowDetails(showDetails => !showDetails)
  }, [])

  return (
    <Router>
      <Helmet>
        <script src="https://kit.fontawesome.com/947016a734.js" crossOrigin="anonymous"></script>
      </Helmet>
      <ExperienceContext.Provider value={{showDetails, toggleDetails}} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/radio-milwaukee" element={<RadioMilwaukee />} />
        </Routes>
      </ExperienceContext.Provider>
    </Router>
  );
}

export default App;
