import Navbar from "./Navbar";
export default function Dashboard(){
return(
<div>
<Navbar/>
<div className="grid">
<div className="card">BMI</div>
<div className="card">Meals</div>
<div className="card">Water</div>
</div>
</div>
)
}