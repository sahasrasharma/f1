import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Health Tracker</h1>

      <Link to="/bmi">
        <button>BMI Calculator</button>
      </Link>

      <br /><br />

      <Link to="/water">
        <button>Water Tracker</button>
      </Link>

      <br /><br />

      <Link to="/meals">
        <button>Meal Planner</button>
      </Link>
    </div>
  );
}

export default Home;