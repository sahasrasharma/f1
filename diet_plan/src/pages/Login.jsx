import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){

  const [role,setRole]=useState("user");
  const nav=useNavigate();

  const login=()=>{
    if(role==="admin")
      nav("/admin");
    else
      nav("/user");
  }

  return(
    <div className="h-screen bg-gradient-to-r from-blue-400 to-green-400 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl mb-4">Login</h2>
        <select className="border p-2"
          onChange={(e)=>setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select><br/><br/>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={login}>
          Login
        </button>
      </div>
    </div>
  )
}
export default Login;