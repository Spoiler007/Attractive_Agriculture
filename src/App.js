
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header1 from './Header/Header1';
import Header2 from './Header/Header2';
// import Header3 from './Header3';
import Header30 from './Header/Header30';
import Home from './Home/Home';
import Banner from './Banner/Banner';
import Category from './Category/Category'
import Product from './Product/Product'
import Icon from './Icon/Icon'
import Deal from './Deal/Deal'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Home20 from './Home/Home20';

import { Signup } from './Form/Registration';
import Login from './Form/Login';

import { useState } from 'react'



function App() {

  const [currentform, setCurrentform] = useState("login");
  const toggleform = (formName) => {
    setCurrentform(currentform === "login" ? "signup" : "login")
  }

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }



  return (
   
        <div className="App">

          <header className="App-header">
            <Header1 />
            <Header2 />
            {/* <Header3/> */}
            <Header30 />
            <Home />
            {/* <Home20 /> */}
            {/* <ImageSlider/> */}
            <Banner />
            <Category />
            <Product />
            <Icon />
            <Deal />
            <Contact />
            <Footer />

          </header>
        </div>
   
  );
}

export default App;
