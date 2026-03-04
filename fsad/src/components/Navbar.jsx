import { Link } from "react-router-dom";
import { useContext } from "react";
import { DietContext } from "../context/DietContext";

export default function Navbar(){
const {toggleTheme}=useContext(DietContext);
return(
<div className="nav">
<div>
<Link to="/dashboard">Dashboard </Link>
<Link to="/calorie">Calories </Link>
<Link to="/chart">Chart</Link>
</div>
<button className="btn" onClick={toggleTheme}>Dark</button>
</div>
)
}