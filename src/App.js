import React from 'react'
import Homesection from './Components/Homesection'
import Servicesection from './Components/Servicesection'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Teamsection from './Components/Teamsection'
import Gallerysection from './Components/Gallerysection'
import Contactsection from './Components/Contactsection'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Homesection/>
    <Servicesection/>
    <Portfolio/>
    <Teamsection/>
    <Gallerysection/>
    <Contactsection/>
    <Footer/>
    </>
  )
}

export default App