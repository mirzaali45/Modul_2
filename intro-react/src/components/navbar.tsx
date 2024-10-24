import "./navbar.css"
import Navitem from "./navitem"
import logo from '../assets/pngegg.png'

interface IProps {
    name: string
}

function Navbar (props: IProps){
    return (
        <div className="navbar">
            <img src={logo} className="logo" alt="logo" />
            <Navitem />
            <p>Halo {props.name}</p>
        </div>
    )
}
export default Navbar