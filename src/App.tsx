import './App.css'
import Intro from './components/components/Intro'
import Navigation from './components/components/Navigation'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

import Home from './components/pages/Home'
import Projects from './components/pages/Projects'

const App = () => {
   return (
      <>
         <Intro />
         <header className="bg-slate-800">
            <Navigation />
         </header>
         <main>
            <Home />
            <About />
            <Projects />
            <Contact />
         </main>
      </>
   )
}

export default App
