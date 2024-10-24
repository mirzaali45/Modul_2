// import Button from "../components/button"
import "../components/navbar.css"
import gagah from "../assets/Foto_Non_Formal_Mirza-removebg-preview.png"

function HomePage (){
    // const str: string = "Hello World"
    return (
        <div className="logonav">
            <div className="gagah">
                <img src={gagah} className="profile-image" alt="logo" />
            </div>
            <div className="text-content">
                <h1>HELLO!</h1>
                <p>I'm <span className="name">Mirza Ali Yusuf</span>,<br /> a Web Developer.</p>
                <button className="read-more">READ MORE</button>
        </div>
        </div>
    )
}
export default HomePage