import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Tablesec from "./components/Tablesec";
import Aside from "./components/Aside";
import Footer from "./components/footer";

function App() {
  

  return (
    <>
    <div>
    <Navbar />
    </div>
      
      <Header />
      <Hero />
      
      <div className="container flex flex-col mx-auto md:flex-row p-6 flex-">
        <main className="flex-96 ">
          <Article />
          <Tablesec />
        </main>
        <Aside />
      </div>
      <Footer/>

      
    </>
  );
}

export default App;
