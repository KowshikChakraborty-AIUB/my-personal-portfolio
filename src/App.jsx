import Footer from './Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import Banner from './components/Banner/Banner'
import Projects from './components/Projects/Projects'
import QualificationsAndExperiences from './components/QualificationsAndExperiences/QualificationsAndExperiences'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div>
      <Banner/>
      <AboutMe/>
      <Skills/>
      <QualificationsAndExperiences/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
