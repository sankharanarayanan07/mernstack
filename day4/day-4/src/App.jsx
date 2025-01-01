import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Logo from './assets/logo.svg'
import './App.css'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
 
function App() {

  return (
    
    <div className='text'>
      <img src={Logo} alt="logo"  className='img'/>
    <Router>
  <header>
    <div>
      <nav>
       <ul>
          <li>
            <Link to="/" className='links'>Home</Link>
          </li>
             
          <li>
            <Link to="/about" className='links'>About</Link>
          </li>

          <li>
            <Link to="/contact"className='links'>Contact</Link>
          </li>
       </ul>
      </nav>
    </div>  
  </header>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <div>

        <footer>
          <p>&copy; 2024, All rights reserved</p>
        </footer>
      </div>


    </Router>

    
    
    </div>
  )
}

export default App
