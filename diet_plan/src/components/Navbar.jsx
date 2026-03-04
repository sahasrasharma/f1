import { Link } from "react-router-dom";

function Navbar(){
  return(
    <div className="bg-green-600 text-white p-4 flex justify-between">
      <h2 className="text-xl font-bold">Diet Analyzer</h2>
      <div>
        <Link className="mr-4" to="/user">User</Link>
        <Link className="mr-4" to="/admin">Admin</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  )
}
export default Navbar;