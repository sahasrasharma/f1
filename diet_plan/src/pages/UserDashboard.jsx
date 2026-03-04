import Navbar from "../components/Navbar";
import { useState } from "react";

function UserDashboard(){

  const [weight,setW]=useState("");
  const [height,setH]=useState("");
  const [bmi,setBmi]=useState("");
  const [cal,setCal]=useState("");
  const [protein,setProtein]=useState("");
  const [result,setRes]=useState("");

  const calcBMI=()=>{
    let h=height/100;
    setBmi((weight/(h*h)).toFixed(2));
  }

  const analyze=()=>{
    if(cal<2000||protein<50)
      setRes("⚠ Deficiency! Eat Milk, Fruits, Eggs");
    else
      setRes("✔ Balanced Diet");
  }

  return(
    <div>
      <Navbar/>
      <div className="p-10 bg-blue-100 h-screen">

      <h2 className="text-2xl mb-4">BMI Calculator</h2>

      <input className="border p-2"
        placeholder="Weight"
        onChange={(e)=>setW(e.target.value)}/>

      <input className="border p-2 ml-2"
        placeholder="Height(cm)"
        onChange={(e)=>setH(e.target.value)}/>

      <button
        className="bg-blue-500 text-white px-3 py-2 ml-2"
        onClick={calcBMI}>Calculate</button>

      <h3 className="mt-2">BMI: {bmi}</h3>

      <h2 className="text-2xl mt-5">Diet Analyzer</h2>

      <input className="border p-2"
        placeholder="Calories"
        onChange={(e)=>setCal(e.target.value)}/>
      <br/><br/>
      <input className="border p-2"
        placeholder="Protein"
        onChange={(e)=>setProtein(e.target.value)}/>

      <br/><br/>
      <button
        className="bg-purple-500 text-white px-3 py-2"
        onClick={analyze}>
        Analyze Diet
      </button>

      <h3 className="mt-4 text-xl">{result}</h3>

      </div>
    </div>
  )
}
export default UserDashboard;