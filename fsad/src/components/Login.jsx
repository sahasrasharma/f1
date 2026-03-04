import { useState,useContext } from "react";
import { DietContext } from "../context/DietContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
const [name,setName]=useState("");
const {setUser}=useContext(DietContext);
const nav=useNavigate();

return(
<div>
<h2>Login</h2>
<input placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
<button className="btn" onClick={()=>{setUser(name);nav('/dashboard')}}>Login</button>
</div>
)
}