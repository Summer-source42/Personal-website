import React from 'react';
import "./App.css";
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App
