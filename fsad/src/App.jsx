import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import WaterTracker from "./components/WaterTracker";
import MealPlanner from "./components/MealPlanner";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import CalorieTracker from "./components/CalorieTracker";
import ProgressChart from "./components/ProgressChart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/water" element={<WaterTracker />} />
        <Route path="/meals" element={<MealPlanner />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calories" element={<CalorieTracker />} />
        <Route path="/progress" element={<ProgressChart />} />
      </Routes>
    </Router>
  );
}

export default App;