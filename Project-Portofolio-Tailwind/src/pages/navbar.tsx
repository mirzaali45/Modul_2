import img from "../assets/pngwing.com (8).png"
import "../style.css"
import svg from "../assets/burger-menu-svgrepo-com.svg"

function Navbar (){
    return(
        <div className="flex justify-between bg-slate-200 mx-auto ">
            <nav className="py-5 px-4 flex justify-between gap-5">
                <div className="flex-none w-14 ">
                    <img className="" src={img} alt="" />
                </div>
                <div className="flex gap-5">
                    <button className="text-white outline px-9 py-4 rounded-full font-bold text-xs">About</button>
                    <button className="text-xs text-neutral-950 font-bold px-9 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">Contact Me</button>
                </div>
                <div className="lg:hidden">
                    <img src={svg} alt="" />
                </div>
            </nav>
        </div>
    )
}
export default Navbar