import { useContext } from "react";
import { DietContext } from "../context/DietContext";

export default function CalorieTracker(){
const {calories,setCalories}=useContext(DietContext);
return(
<div>
<h2>Calories:{calories}</h2>
<button className="btn" onClick={()=>setCalories(calories+100)}>Add 100</button>
</div>
)
}