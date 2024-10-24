import "./navbar.css"
import { Link } from 'react-router-dom'
// import Navbar from "./navbar"

function Navitem (){
    return (
        <div className="navitem">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    )
}
export default Navitem