import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// components
import NavbarComponent from './components/navbar'
import AboutusComponent from './components/aboutus'
import VisimisiComponent from './components/visimisi'
// import FavProduct from './components/FavProduct'
import PrimaryButton from './components/PrimaryButton'
import ContactUs from './components/contactUs'
// components

function App() {
  return (
    <>
        <main>
            <section id="navbar">
                <NavbarComponent />
            </section>
            <section id='AboutUs'>
                <AboutusComponent />
            </section>
            <section id='VisiMisi'>
                <VisimisiComponent />
            </section>
            <section id='FavProduct'>
                
            </section>
            <section id='contactUs'>
                <ContactUs/>
            </section>
        </main>
    </>
  )
}

export default App
