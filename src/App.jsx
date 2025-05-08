import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Article from "./components/Article.jsx";
import Tablesec from "./components/Tablesec.jsx";
import Aside from "./components/Aside.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <div className="container flex flex-col mx-auto md:flex-row p-6 flex-">
        <main className="flex-96 ">
          <Article />
          <Tablesec />
        </main>
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export default App;
