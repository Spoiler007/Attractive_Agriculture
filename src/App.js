
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Header1 from './Header/Header1';
import Header2 from './Header/Header2';
// import Header3 from './Header3';
import Header30 from './Header/Header30';
import Home from './Home/Home';
import Footer from './Footer/Footer'
import Home20 from './Home/Home20';

import { Signup } from './Form/Registration';
import Login from './Form/Login';
import { useState } from 'react'
import Addtocart from './Cart/Store';

function App() {

  const [currentform, setCurrentform] = useState("login");
  const toggleform = (formName) => {
    setCurrentform(currentform === "login" ? "signup" : "login")
  }

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }



  return (
    <>
      <Header1 />
      <Header2 />
      {/* <Header30 /> */}
      <Routes>
        <Route path="/cart"
          element={<Addtocart />} />
      <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
{/* <Addtocart/> */}
      
    </>

  );
}

export default App;
