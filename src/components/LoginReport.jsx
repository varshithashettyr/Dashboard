import React, { useState, useEffect, useRef } from "react";
import "./LoginReport.css";

const employeeList = [
  "Aishwarya A R",
  "Anjan Ghosh",
  "Arathi G K",
  "Arindam Chatterjee",
  "Bayli Manjunath Basappa",
  "Binusha V A",
  "Chaitra D M",
  "Chandrakala K G",
  "Deepa K",
  "Dileep K",
  "Goutam Narasimhan",
  "Imran Mody",
  "K Deepthi Katkar",
  "Khaja Nizamuddin",
  "Krithi .",
  "Lohith J",
  "Madesh Manickam",
];

const subTeamList = [
  "BWI TEAM",
  "MIS TEAM",
  "P-Team UK",
  "P-Team US",
  "PW-TEAM",
  "QC TEAM",
];

const monthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const initialTableData = [
  {
    slNo: 1,
    employee: "Arindam Chatterjee",
    ipAddress: "192.168.2.250",
    loginDate: "07-Sep-2026",
    loginTime: "12:14:11",
    logoutDate: "",
    logoutTime: "",
    taskStartTime: "",
    taskEndTime: "",
  },
  {
    slNo: 2,
    employee: "Arindam Chatterjee",
    ipAddress: "10.81.234.197",
    loginDate: "04-Sep-2026",
    loginTime: "11:15:06",
    logoutDate: "",
    logoutTime: "",
    taskStartTime: "",
    taskEndTime: "",
  },
  {
    slNo: 3,
    employee: "Arindam Chatterjee",
    ipAddress: "192.168.2.250",
    loginDate: "03-Sep-2026",
    loginTime: "13:31:12",
    logoutDate: "",
    logoutTime: "",
    taskStartTime: "14:54",
    taskEndTime: "19:14",
  },
];

// Single Custom Select Component controlled by activeSelectId
function CustomSelect({ id, label, options, value, onChange, activeSelectId, setActiveSelectId }) {
  const isOpen = activeSelectId === id;

  const toggleDropdown = (e) => {
    e.stopPropagation();
    // Toggle active state: if open, close it; otherwise open this one and close others
    setActiveSelectId(isOpen ? null : id);
  };

  return (
    <div className="filter-item">
      <span className="filter-label">{label}</span>
      <div className="custom-select-container">
        <div className="custom-select-trigger" onClick={toggleDropdown}>
          <span>{value || "Select"}</span>
          <span className="arrow">{isOpen ? "▲" : "▼"}</span>
        </div>

        {isOpen && (
          <ul className="custom-select-options">
            <li
              onClick={() => {
                onChange("");
                setActiveSelectId(null);
              }}
            >
              Select
            </li>
            {options.map((opt, idx) => (
              <li
                key={idx}
                className={value === opt ? "selected" : ""}
                onClick={() => {
                  onChange(opt);
                  setActiveSelectId(null);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function LoginReport() {
  const [subTeam, setSubTeam] = useState("");
  const [employee, setEmployee] = useState("");
  const [year, setYear] = useState("2026");
  const [month, setMonth] = useState("September");
  
  // Track which dropdown is currently active (null means all are closed)
  const [activeSelectId, setActiveSelectId] = useState(null);
  const filterRef = useRef(null);

  // Close open dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setActiveSelectId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="login-report-wrapper">
      <h2 className="login-report-title">Login Reports</h2>

      <div className="login-report-filters" ref={filterRef}>
        <CustomSelect
          id="subTeam"
          label="SubTeam:"
          options={subTeamList}
          value={subTeam}
          onChange={setSubTeam}
          activeSelectId={activeSelectId}
          setActiveSelectId={setActiveSelectId}
        />

        <CustomSelect
          id="employee"
          label="Employee:"
          options={employeeList}
          value={employee}
          onChange={setEmployee}
          activeSelectId={activeSelectId}
          setActiveSelectId={setActiveSelectId}
        />

        <CustomSelect
          id="year"
          label="Year:"
          options={["2026", "2025", "2024"]}
          value={year}
          onChange={setYear}
          activeSelectId={activeSelectId}
          setActiveSelectId={setActiveSelectId}
        />

        <CustomSelect
          id="month"
          label="Month:"
          options={monthsList}
          value={month}
          onChange={setMonth}
          activeSelectId={activeSelectId}
          setActiveSelectId={setActiveSelectId}
        />

        <div className="filter-buttons">
          <button className="btn btn-search" type="button">
            Search
          </button>
          <button className="btn btn-export" type="button">
            Export
          </button>
        </div>
      </div>

      <div className="login-report-table-container">
        <table className="login-report-table">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Employee</th>
              <th>IPAddress</th>
              <th>Login Date</th>
              <th>Login Time</th>
              <th>logout Date</th>
              <th>logout Time</th>
              <th>Task Start Time</th>
              <th>Task End Time</th>
            </tr>
          </thead>
          <tbody>
            {initialTableData.map((row) => (
              <tr key={row.slNo}>
                <td>{row.slNo}</td>
                <td>{row.employee}</td>
                <td>{row.ipAddress}</td>
                <td>{row.loginDate}</td>
                <td>{row.loginTime}</td>
                <td>{row.logoutDate}</td>
                <td>{row.logoutTime}</td>
                <td>{row.taskStartTime}</td>
                <td>{row.taskEndTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}