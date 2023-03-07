import { Experience, Footer, Logo } from './components';
import {Helmet} from 'react-helmet'

import './App.css';
import { useCallback, useState } from 'react';
import { ExperienceContext } from './contexts/useExperience';

function App() {
  const [showDetails, setShowDetails] = useState<boolean>(true)

  const toggleDetails = useCallback(() => {
    setShowDetails(showDetails => !showDetails)
  }, [])

  return (
    <ExperienceContext.Provider value={{showDetails, toggleDetails}} >
      <div className="app">
        <Helmet>
          <script src="https://kit.fontawesome.com/947016a734.js" crossOrigin="anonymous"></script>
        </Helmet>
        <div className="header">
          <div className="logo-container">
            <Logo />
          </div>
          <p>
            Curious Bean is a consulting company owned & operated by yours truly, Sabrina Stangler. 
          </p>
          <p>
            I provide services in digital product development, from web & mobile development to product management to UI design, I'm your gal!
          </p>
        </div>
        <div className="content">
          <Experience />
        </div>
        <Footer />
      </div>
    </ExperienceContext.Provider>
  );
}

export default App;
