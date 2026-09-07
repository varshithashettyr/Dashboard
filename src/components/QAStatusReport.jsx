import { useState } from "react";
import { Search } from "lucide-react";
import "./QAStatusReport.css";

function QAStatusReport() {
  const [subTeam, setSubTeam] = useState("");
  const [employee, setEmployee] = useState("");
  const [taskFrom, setTaskFrom] = useState("2026-09-07");
  const [taskTo, setTaskTo] = useState("2026-09-07");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search:", {
      subTeam,
      employee,
      taskFrom,
      taskTo,
    });
  };

  const handleExport = () => {
    console.log("Exporting:", {
      subTeam,
      employee,
      taskFrom,
      taskTo,
    });
  };

  return (
    <div className="qc-report-container">

      {/* TITLE */}
      <div className="qc-report-header">
        <h2>QC Status Report</h2>
      </div>

      {/* HORIZONTAL FILTER ROW */}
      <div className="qc-filter-row">

        {/* SUB TEAM */}
        <div className="qc-field-group">
          <label htmlFor="qc-subteam">Sub-Team:</label>

          <select
            id="qc-subteam"
            value={subTeam}
            onChange={(e) => setSubTeam(e.target.value)}
          >
            <option value="">Select</option>
            <option value="BWI TEAM">BWI TEAM</option>
            <option value="QC TEAM">QC TEAM</option>
          </select>
        </div>

        {/* EMPLOYEE */}
        <div className="qc-field-group">
          <label htmlFor="qc-employee">Employee:</label>

          <select
            id="qc-employee"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Ssathish Padmanaban">
              Ssathish Padmanaban
            </option>
          </select>
        </div>

        {/* TASK FROM */}
        <div className="qc-field-group">
          <label htmlFor="qc-task-from">Task From:</label>

          <input
            id="qc-task-from"
            type="date"
            value={taskFrom}
            onChange={(e) => setTaskFrom(e.target.value)}
          />
        </div>

        {/* TASK TO */}
        <div className="qc-field-group">
          <label htmlFor="qc-task-to">Task To:</label>

          <input
            id="qc-task-to"
            type="date"
            value={taskTo}
            onChange={(e) => setTaskTo(e.target.value)}
          />
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="button"
          className="qc-btn"
          onClick={handleSearch}
        >
          Search
        </button>

        {/* EXPORT BUTTON */}
        <button
          type="button"
          className="qc-btn"
          onClick={handleExport}
        >
          Export
        </button>

      </div>

      {/* TOTAL + TABLE SEARCH */}
      <div className="qc-summary-bar">

        <div className="qc-total-count">
          Total : 0
        </div>

        <div className="qc-search-wrapper">

          <input
            type="text"
            className="qc-search-input"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            type="button"
            className="qc-search-btn"
            onClick={() => console.log("Table Search:", searchTerm)}
            aria-label="Search"
          >
            <Search size={18} color="#555" />
          </button>

        </div>

      </div>

      {/* RESULT AREA */}
      <div className="qc-table-container">
        <div className="qc-no-records">
          No record available
        </div>
      </div>

    </div>
  );
}

export default QAStatusReport;