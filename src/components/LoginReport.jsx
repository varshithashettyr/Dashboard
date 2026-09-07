import React, { useState } from "react";
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
    employee: "xxx",
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
    employee: "xxx",
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
    employee: "xxx",
    ipAddress: "192.168.2.250",
    loginDate: "03-Sep-2026",
    loginTime: "13:31:12",
    logoutDate: "",
    logoutTime: "",
    taskStartTime: "14:54",
    taskEndTime: "19:14",
  },
];

export default function LoginReport() {
  const [subTeam, setSubTeam] = useState("");
  const [employee, setEmployee] = useState("");
  const [year, setYear] = useState("2026");
  const [month, setMonth] = useState("September");
  const [tableData, setTableData] = useState(initialTableData);

  const handleSearch = () => {
    console.log("Searching with:", { subTeam, employee, year, month });
  };

  const handleExport = () => {
    console.log("Exporting data...");
  };

  return (
    <div className="login-report-wrapper">
      <h2 className="login-report-title">Login Reports</h2>

      {/* FILTER CONTROLS BAR WITH LABELS ON TOP */}
      <div className="login-report-filters">
        <div className="filter-item">
          <label htmlFor="subteam-select">SubTeam:</label>
          <select
            id="subteam-select"
            value={subTeam}
            onChange={(e) => setSubTeam(e.target.value)}
          >
            <option value="">Select</option>
            {subTeamList.map((team, idx) => (
              <option key={idx} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="employee-select">Employee:</label>
          <select
            id="employee-select"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          >
            <option value="">Select</option>
            {employeeList.map((emp, idx) => (
              <option key={idx} value={emp}>
                {emp}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="year-select">Year:</label>
          <select
            id="year-select"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="month-select">Month:</label>
          <select
            id="month-select"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">Select</option>
            {monthsList.map((m, idx) => (
              <option key={idx} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-buttons">
          <button className="btn btn-search" type="button" onClick={handleSearch}>
            Search
          </button>
          <button className="btn btn-export" type="button" onClick={handleExport}>
            Export
          </button>
        </div>
      </div>

      {/* DATA TABLE */}
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
            {tableData.map((row) => (
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