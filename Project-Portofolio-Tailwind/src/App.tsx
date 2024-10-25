import "./style.css" 
import Navbar1 from "./pages/navbar2"
import HomePages from "./pages/home"
import Profile from "./pages/profile"
import Profile2 from "./pages/profile2"
import Experience2 from "./pages/experience2"

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <HomePages/>
      <Profile/>
      <Profile2/>
      <Experience2/>
    </div>
  )
}

export default App
