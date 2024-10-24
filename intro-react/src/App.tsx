import Navbar from "./components/navbar"
import HomePage from "./pages/home"
import Contact from "./pages/contact"
import AboutPage from "./pages/about"
import { Routes, Route} from 'react-router-dom'

function App() {
  const name: string = "Mirza"
  return (
    <div>
      <Navbar name={name}/>   
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  )
}
// import { Form } from "react-router-dom"

export default App
