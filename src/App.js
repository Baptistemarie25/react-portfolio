import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
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
        <Nav/>
        <Portfolio/>
        <Contact/> 
        <Footer/>
      </main>
    </div>
  )
}

export default App;
