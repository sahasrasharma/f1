import Navbar from "../components/Navbar";

function AdminDashboard(){
  return(
    <div>
      <Navbar/>
      <div className="p-10 bg-yellow-100 h-screen">

      <h2 className="text-3xl mb-5">Admin Dashboard</h2>

      <input className="border p-2 mr-2"
        placeholder="Food"/>
      <input className="border p-2 mr-2"
        placeholder="Calories"/>
      <input className="border p-2 mr-2"
        placeholder="Protein"/>

      <button
        className="bg-green-500 text-white px-3 py-2">
        Add Food
      </button>

      <p className="mt-5">
        Admin can track user deficiency reports here.
      </p>

      </div>
    </div>
  )
}
export default AdminDashboard;