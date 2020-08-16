import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './Components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact render={() => <div>Home Page</div>} />
      <Route path="/about-us" render={() => <div>About Page</div>} />
      <Route path="/services" render={() => <div>Services Page</div>} />
      <Route path="/contact" render={() => <div>Contact Page</div>} />
      <Route path="/login" render={() => <div>Login Page</div>} />
    </BrowserRouter>
  )
}

export default App