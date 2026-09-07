import React, { useState, useEffect, useRef } from "react";
import "./TaskReport.css";

const initialTaskData = [
  {
    taskId: "P23PSTF00031",
    employee: "Chandrakala J",
    client: "Akshat Raje",
    service: "Business Ops",
    subService: "Manual approval of projects",
    tatDays: 1,
    unitTime: "2:00:00",
    targetDate: "06-Apr-2023",
    currentStatus: "New",
    complexity: "Intermediate",
    priority: "Medium",
    startTime: "",
    endTime: "",
    taskCreatedOn: "05-Apr-2023",
    subject: "Manual Approval of AP3.1 Project in the portal",
    allocationType: "Self",
    receivedOn: "05-04-2023 17:45:00",
    receivedOnIst: "05-04-2023 17:45:00",
    timeZone: "",
    workQueueReason: "",
    reasonDes: ""
  },
  {
    taskId: "P23FS00114",
    employee: "Abhishek S",
    client: "Nicholas Mandala",
    service: "Finance Support",
    subService: "Creating/tracking PO/Epay",
    tatDays: 5,
    unitTime: "1:35:00",
    targetDate: "24-Apr-2023",
    currentStatus: "Hold",
    complexity: "Complex",
    priority: "High",
    startTime: "24-Apr-2023 19:58:32",
    endTime: "24-Apr-2023 22:49:45",
    taskCreatedOn: "24-Apr-2023",
    subject: "Tracking PO",
    allocationType: "Self",
    receivedOn: "",
    receivedOnIst: "",
    timeZone: "",
    workQueueReason: "",
    reasonDes: ""
  },
  {
    taskId: "P23FS00115",
    employee: "Abhishek S",
    client: "Nicholas Mandala",
    service: "Finance Support",
    subService: "Creating/tracking PO/Epay",
    tatDays: 5,
    unitTime: "1:35:00",
    targetDate: "24-Apr-2023",
    currentStatus: "Hold",
    complexity: "Complex",
    priority: "High",
    startTime: "24-Apr-2023 23:23:12",
    endTime: "25-Apr-2023 17:57:24",
    taskCreatedOn: "24-Apr-2023",
    subject: "Track of POs",
    allocationType: "Self",
    receivedOn: "",
    receivedOnIst: "",
    timeZone: "",
    workQueueReason: "",
    reasonDes: ""
  },
  {
    taskId: "P23CM00649",
    employee: "Abhishek S",
    client: "Nicholas Mandala",
    service: "Calendar Management",
    subService: "Scheduling/Rescheduling Meetings / Interviews",
    tatDays: 0,
    unitTime: "0:30:00",
    targetDate: "27-Apr-2023",
    currentStatus: "Hold",
    complexity: "Intermediate",
    priority: "High",
    startTime: "26-Apr-2023 20:20:14",
    endTime: "26-Apr-2023 22:44:27",
    taskCreatedOn: "26-Apr-2023",
    subject: "Meeting",
    allocationType: "Self",
    receivedOn: "26-04-2023 08:29:00",
    receivedOnIst: "26-04-2023 17:59:00",
    timeZone: "UTC-05:00 - Eastern Time (US & Canada)",
    workQueueReason: "",
    reasonDes: ""
  },
  {
    taskId: "P23FS00134",
    employee: "Abhishek S",
    client: "Nicholas Mandala",
    service: "Finance Support",
    subService: "Creating/tracking PO/Epay",
    tatDays: 5,
    unitTime: "1:35:00",
    targetDate: "26-Apr-2023",
    currentStatus: "Hold",
    complexity: "Complex",
    priority: "High",
    startTime: "26-Apr-2023 22:46:43",
    endTime: "26-Apr-2023 23:29:34",
    taskCreatedOn: "26-Apr-2023",
    subject: "Biocompatibility Assessment",
    allocationType: "Self",
    receivedOn: "",
    receivedOnIst: "",
    timeZone: "",
    workQueueReason: "",
    reasonDes: ""
  },
  {
    taskId: "P23FS00252",
    employee: "Abhishek S",
    client: "Nicholas Mandala",
    service: "Finance Support",
    subService: "Creating/tracking PO/Epay",
    tatDays: 5,
    unitTime: "1:15:00",
    targetDate: "15-May-2023",
    currentStatus: "Hold",
    complexity: "Intermediate",
    priority: "Medium",
    startTime: "15-May-2023 19:34:20",
    endTime: "15-May-2023 20:11:54",
    taskCreatedOn: "15-May-2023",
    subject: "Raising PO",
    allocationType: "Self",
    receivedOn: "",
    receivedOnIst: "",
    timeZone: "",
    workQueueReason: "",
    reasonDes: ""
  },
  {
    taskId: "P23FS00258",
    employee: "Abhishek S",
    client: "Nicholas Mandala",
    service: "Finance Support",
    subService: "Creating/tracking PO/Epay",
    tatDays: 5,
    unitTime: "1:15:00",
    targetDate: "15-May-2023",
    currentStatus: "Hold",
    complexity: "Intermediate",
    priority: "Medium",
    startTime: "15-May-2023 22:19:03",
    endTime: "15-May-2023 22:29:06",
    taskCreatedOn: "15-May-2023",
    subject: "Delve - GO Quick OSU User Preference Testing",
    allocationType: "Self",
    receivedOn: "",
    receivedOnIst: "",
    timeZone: "",
    workQueueReason: "",
    reasonDes: ""
  },
  {
    taskId: "P23GAS02058",
    employee: "Abhishek S",
    client: "Nicholas Mandala",
    service: "General Admin Support",
    subService: "On boarding contractors",
    tatDays: 1,
    unitTime: "0:30:00",
    targetDate: "19-May-2023",
    currentStatus: "Hold",
    complexity: "Intermediate",
    priority: "High",
    startTime: "18-May-2023 23:43:39",
    endTime: "19-May-2023 00:21:48",
    taskCreatedOn: "18-May-2023",
    subject: "Shipment notification: Lenovo order 4403145285",
    allocationType: "Self",
    receivedOn: "18-05-2023 14:12:00",
    receivedOnIst: "18-05-2023 23:42:00",
    timeZone: "UTC-05:00 - Eastern Time (US & Canada)",
    workQueueReason: "",
    reasonDes: ""
  },
  {
    taskId: "P23MM02185",
    employee: "Goutam Narasimhan",
    client: "Mehmet Serhan Altintas",
    service: "Mailbox Management",
    subService: "Responding to Emails",
    tatDays: 0,
    unitTime: "0:30:00",
    targetDate: "25-May-2023",
    currentStatus: "Hold",
    complexity: "Intermediate",
    priority: "Medium",
    startTime: "26-May-2023 11:56:46",
    endTime: "26-May-2023 11:59:51",
    taskCreatedOn: "25-May-2023",
    subject: "RE: Launch Excellence Community Onboarding - 18/19 April 2023",
    allocationType: "Self",
    receivedOn: "25-05-2023 15:26:00",
    receivedOnIst: "25-05-2023 20:56:00",
    timeZone: "UTC+00:00 - Central Eastern Time (Dublin, Edinburgh, Lisbon, London)",
    workQueueReason: "",
    reasonDes: ""
  },
  {
    taskId: "P23FS00359",
    employee: "Abhishek S",
    client: "Nicholas Mandala",
    service: "Finance Support",
    subService: "Ordering supplies",
    tatDays: 1,
    unitTime: "1:00:00",
    targetDate: "31-May-2023",
    currentStatus: "WIP",
    complexity: "Intermediate",
    priority: "Medium",
    startTime: "31-May-2023 20:34:08",
    endTime: "31-May-2023 20:55:32",
    taskCreatedOn: "31-May-2023",
    subject: "iPad Pro",
    allocationType: "Self",
    receivedOn: "",
    receivedOnIst: "",
    timeZone: "",
    workQueueReason: "",
    reasonDes: ""
  }
];

function SingleSelect({ id, label, options, value, onChange, activeSelectId, setActiveSelectId }) {
  const isOpen = activeSelectId === id;

  const handleToggle = (e) => {
    e.stopPropagation();
    setActiveSelectId(isOpen ? null : id);
  };

  return (
    <div className="filter-item">
      <span className="filter-label">{label}</span>
      <div className="custom-select-container">
        <div className="custom-select-trigger" onClick={handleToggle}>
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

export default function TaskReport() {
  const [subTeam, setSubTeam] = useState("");
  const [employee, setEmployee] = useState("");
  const [year, setYear] = useState("2023");
  const [month, setMonth] = useState("May");
  const [activeSelectId, setActiveSelectId] = useState(null);
  
  const [displayedTasks, setDisplayedTasks] = useState(initialTaskData);
  const [onlyPending, setOnlyPending] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveSelectId(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const subTeamOptions = ["BWI TEAM", "MIS TEAM", "P-Team UK", "P-Team US", "PW-TEAM", "QC TEAM"];
  const employeeOptions = ["Abhishek S", "Chandrakala J", "Dhanraj Shetty", "Goutam Narasimhan", "Khushbu Thakur"];
  const yearOptions = ["2026", "2025", "2024", "2023"];
  const monthOptions = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleSearch = () => {
    let filtered = initialTaskData.filter((item) => {
      let matchesEmployee = employee ? item.employee === employee : true;
      let matchesPending = onlyPending ? item.currentStatus !== "Completed" : true;
      return matchesEmployee && matchesPending;
    });
    setDisplayedTasks(filtered);
  };

  const handleExport = () => {
    const headers = ["Task ID", "Employee", "Client", "Service", "Status", "Target Date"];
    const rows = displayedTasks.map(t => [t.taskId, t.employee, t.client, t.service, t.currentStatus, t.targetDate]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Task_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pendingCount = displayedTasks.filter((t) => t.currentStatus !== "Completed").length;

  return (
    <div className="task-report-wrapper">
      <div className="task-report-header-row">
        <h2 className="task-report-title">Task Reports & Pending Cases</h2>
        <div className="pending-badge">
          Pending Cases: <span>{pendingCount}</span>
        </div>
      </div>

      <div className="task-report-filters" ref={containerRef}>
        <SingleSelect
          id="subTeam"
          label="SubTeam:"
          options={subTeamOptions}
          value={subTeam}
          onChange={setSubTeam}
          activeSelectId={activeSelectId}
          setActiveSelectId={setActiveSelectId}
        />

        <SingleSelect
          id="employee"
          label="Employee:"
          options={employeeOptions}
          value={employee}
          onChange={setEmployee}
          activeSelectId={activeSelectId}
          setActiveSelectId={setActiveSelectId}
        />

        <SingleSelect
          id="year"
          label="Year:"
          options={yearOptions}
          value={year}
          onChange={setYear}
          activeSelectId={activeSelectId}
          setActiveSelectId={setActiveSelectId}
        />

        <SingleSelect
          id="month"
          label="Month:"
          options={monthOptions}
          value={month}
          onChange={setMonth}
          activeSelectId={activeSelectId}
          setActiveSelectId={setActiveSelectId}
        />

        <div className="filter-item checkbox-item">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={onlyPending}
              onChange={(e) => setOnlyPending(e.target.checked)}
            />
            Show Pending Only
          </label>
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

      <div className="task-report-table-container">
        <table className="task-report-table">
          <thead>
            <tr>
              <th>TaskID</th>
              <th>Employee</th>
              <th>Client</th>
              <th>Service</th>
              <th>Sub-Service</th>
              <th>TATDays</th>
              <th>Unit Time</th>
              <th>Target date</th>
              <th>Current Status</th>
              <th>Complexity</th>
              <th>Priority</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Task created on</th>
              <th>Subject</th>
              <th>Allocation type</th>
              <th>ReceivedOn</th>
              <th>Received On IST</th>
              <th>TimeZone</th>
              <th>Work Queue Reason</th>
              <th>ReasonDes</th>
            </tr>
          </thead>
          <tbody>
            {displayedTasks.map((row, index) => (
              <tr key={index} className={row.currentStatus !== "Completed" ? "row-pending" : ""}>
                <td>{row.taskId}</td>
                <td>{row.employee}</td>
                <td>{row.client}</td>
                <td>{row.service}</td>
                <td>{row.subService}</td>
                <td>{row.tatDays}</td>
                <td>{row.unitTime}</td>
                <td>{row.targetDate}</td>
                <td>
                  <span className={`status-tag status-${row.currentStatus.toLowerCase()}`}>
                    {row.currentStatus}
                  </span>
                </td>
                <td>{row.complexity}</td>
                <td>{row.priority}</td>
                <td>{row.startTime}</td>
                <td>{row.endTime}</td>
                <td>{row.taskCreatedOn}</td>
                <td>{row.subject}</td>
                <td>{row.allocationType}</td>
                <td>{row.receivedOn}</td>
                <td>{row.receivedOnIst}</td>
                <td>{row.timeZone}</td>
                <td>{row.workQueueReason}</td>
                <td>{row.reasonDes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}