import { useState } from "react";
import "./App.css";

function App() {
  // Sample list of 53 students
  const students = Array.from({ length: 53 }, (_, i) => `Student ${i + 1}`);

  const studentsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * studentsPerPage;
  const endIndex = startIndex + studentsPerPage;

  const studentsToShow = students.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage * studentsPerPage < students.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <h2>Paginated Student Records</h2>

      <div className="student-list">
        {studentsToShow.map((student, idx) => (
          <div key={idx} className="student-box">
            {student}
          </div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage * studentsPerPage >= students.length}
        >
          Next
        </button>

        <span className="page-number">Page: {currentPage}</span>
      </div>
    </div>
  );
}

export default App;
