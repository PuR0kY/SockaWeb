import React from 'react';
import './index.css';
import ImageOne from './components/ImageOne.jsx';
import ImageTwo from './components/ImageTwo.jsx';
import ImageThree from './components/ImageThree.jsx';
import Logo from './components/Logo.jsx';
import TextBox from './components/TextBox.jsx';
import Footer from './components/Footer.jsx';
import NavbarComp from './components/NavbarComp.jsx';

const  App = () => {

  return (
      <div>
        <NavbarComp />
        <ImageOne />
        <TextBox />
        <ImageTwo />
        <TextBox />
        <ImageThree />
        <Logo />
        <Footer />
      </div>
  
  )
}

export default App
