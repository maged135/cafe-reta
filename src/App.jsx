import Home from "./components/Home"
import Hot from "./components/Hot"
import Iced from "./components/Iced"
import AppNavbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Quarter from "./components/Quarter"
import Half from "./components/Half"
import About from "./components/About"

function App() {
  return (
    <div>
      <AppNavbar />

      <div className="pt-16" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Hot" element={<Hot />} />
          <Route path="Iced" element={<Iced />} />
          <Route path="Quarter" element= {<Quarter /> } />
          <Route path="Half" element= {<Half /> } />
          <Route path="About" element= {<About /> } />
        </Routes>
      </div>
    </div>
  )
}

export default App
