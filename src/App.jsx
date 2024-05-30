import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";

import Features from "./components/Features";
import Chip from "./components/Chip";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Exploring from "./components/Exploring";
const App = () => {
  return (
    <main className="bg-black overflow-y-auto">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip />
      <Shop />
      <Exploring />
      <Footer />
    </main>

  )
}

export default App
