import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Header from './components/Header'
import WorkProcess from './components/WorkProcess'
import './App.css'

const App = () => {
  return (
    <div className='main-page'>
    <BrowserRouter>
        <Header />
    <Routes>
      <Route  path="/about" exact element={<About />}></Route>
      <Route  path="/Services"   exact element={<Services />} ></Route>
      <Route  path="/WorkProcess"  exact element={<WorkProcess />} ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App