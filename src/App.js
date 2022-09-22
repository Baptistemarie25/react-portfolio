import React from "react";
import Header from "./components/Header/Header";
import Contact from "./components/contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div> 
      <main>
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/> 
        <Footer/>
      </main>
    </div>
  )
}

export default App;
