import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

//import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'

function App() {
  return (


    <Router>
    
      <NavBar />
      
        <Routes>
        
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
          
        </Routes>
       
        <Footer />
        
    </Router>
    
  )
}
export default App