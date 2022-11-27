import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from "./components/nav/Nav"
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contect from './components/contect/Contect'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      < Testimonials />
      <Contect />
      <Footer />
    </div>
  );
}

export default App;
