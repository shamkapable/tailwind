import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Analytics />
      <Cards />
      <Footer />
      <Newsletter />
    </div>
  );
}

export default App;
