import React, { useState, useEffect } from "react";
import "./App.css";

const students = [
  { id: 1, name: "Alice Johnson", dob: "2001-04-15", major: "Computer Science" },
  { id: 2, name: "Bob Smith", dob: "2000-09-08", major: "Mathematics" },
  { id: 3, name: "Carol Williams", dob: "1999-02-23", major: "Physics" }
];

function StudentInfo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={isMobile ? "student-container vertical" : "student-container horizontal"}>
      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <div className="student-field"><span className="label">ID:</span> {student.id}</div>
          <div className="student-field"><span className="label">Name:</span> {student.name}</div>
          <div className="student-field"><span className="label">DOB:</span> {student.dob}</div>
          <div className="student-field"><span className="label">Major:</span> {student.major}</div>
        </div>
      ))}
    </div>
  );
}

export default StudentInfo;