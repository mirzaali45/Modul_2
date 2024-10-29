import { useContext } from "react"
import ContextComp from "./context";
// import { useContext } from "../App"

function DisplayComp () {
    const user = useContext(useContext);
    return (
        <div>
            Hallo Andi
        </div>
    )
}
export default DisplayComp