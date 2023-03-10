import { Experience, Footer, Logo, Profile } from './components';
import {Helmet} from 'react-helmet'

import './App.css';
import { useCallback, useState } from 'react';
import { ExperienceContext } from './contexts/useExperience';
import { CB_TAGLINE } from './constants';

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
          {CB_TAGLINE.map(line => <p>{line}</p>)}
          <p>
            <a className="email-link" href="mailto:sabstangler@gmail.com">Email me</a> if you'd like to work together!
          </p>
        </div>
        <div className="content">
          <Profile />
          <Experience />
        </div>
        <Footer />
      </div>
    </ExperienceContext.Provider>
  );
}

export default App;
