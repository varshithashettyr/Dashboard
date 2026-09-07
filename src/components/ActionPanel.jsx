import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import "./AllocationReport.css";

function AllocationReport() {
  const [type, setType] = useState("Self Allocation");
  const [subTeam, setSubTeam] = useState("Select");
  const [employee, setEmployee] = useState("Select");

  const [fromDate, setFromDate] = useState("2026-09-07");
  const [toDate, setToDate] = useState("2026-09-07");

  const [search, setSearch] = useState("");

  const [openCalendar, setOpenCalendar] = useState(null);

  const [calendarMonth, setCalendarMonth] = useState(
    new Date(2026, 8, 1)
  );

  const employeeList = [
    "Select",
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
    "Ssathish Padmanaban"
  ];

  const handleSubmit = () => {
    console.log("Allocation Report:", {
      type,
      subTeam,
      employee,
      fromDate,
      toDate,
    });
  };

  const handleExport = () => {
    console.log("Export Allocation Report:", {
      type,
      subTeam,
      employee,
      fromDate,
      toDate,
    });
  };

  const handleSearch = () => {
    console.log("Search:", search);
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");

    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${day}`;
  };

  const getDisplayDate = (date) => {
    if (!date) return "";

    const [year, month, day] = date.split("-");

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${day}-${months[Number(month) - 1]}-${year}`;
  };

  const openDatePicker = (type) => {
    setOpenCalendar(type);

    const selectedDate =
      type === "from"
        ? new Date(fromDate)
        : new Date(toDate);

    setCalendarMonth(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      )
    );
  };

  const handleDateSelect = (date) => {
    const selectedDate = formatDate(date);

    if (openCalendar === "from") {
      setFromDate(selectedDate);
    }

    if (openCalendar === "to") {
      setToDate(selectedDate);
    }

    setOpenCalendar(null);
  };

  const changeMonth = (direction) => {
    setCalendarMonth(
      new Date(
        calendarMonth.getFullYear(),
        calendarMonth.getMonth() + direction,
        1
      )
    );
  };

  const getCalendarDays = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const renderCalendar = () => {
    if (!openCalendar) return null;

    const monthName = calendarMonth.toLocaleString("en-US", {
      month: "long",
    });

    const year = calendarMonth.getFullYear();

    const selectedDate =
      openCalendar === "from" ? fromDate : toDate;

    return (
      <div
        className={`allocation-calendar ${
          openCalendar === "to" ? "align-right" : "align-left"
        }`}
      >
        <div className="allocation-calendar-header">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>

          <strong>
            {monthName}, {year}
          </strong>

          <button
            type="button"
            onClick={() => changeMonth(1)}
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="allocation-calendar-weekdays">
          <span>Su</span>
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
        </div>

        <div className="allocation-calendar-days">
          {getCalendarDays().map((date, index) => {
            if (!date) {
              return (
                <span
                  key={`empty-${index}`}
                  className="allocation-calendar-empty"
                />
              );
            }

            const dateValue = formatDate(date);

            const isSelected = dateValue === selectedDate;

            const isToday =
              dateValue === formatDate(new Date());

            return (
              <button
                type="button"
                key={dateValue}
                className={`
                  allocation-calendar-day
                  ${isSelected ? "selected" : ""}
                  ${isToday ? "today" : ""}
                `}
                onClick={() => handleDateSelect(date)}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>

        <div className="allocation-calendar-footer">
          <button
            type="button"
            onClick={() => {
              const today = new Date();
              handleDateSelect(today);
            }}
          >
            Today:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="allocation-report">
      {/* TITLE */}
      <div className="allocation-report-title">Allocation Report</div>

      {/* FILTER ROW */}
      <div className="allocation-filter-row">
        {/* TYPE */}
        <div className="allocation-filter-group">
          <label htmlFor="allocation-type">Type:</label>
          <select
            id="allocation-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Self Allocation">Self Allocation</option>
            <option value="Bulk Allocation">Bulk Allocation</option>
            <option value="Recurring Allocation">Recurring Allocation</option>
          </select>
        </div>

        {/* SUB TEAM */}
        <div className="allocation-filter-group">
          <label htmlFor="allocation-subteam">SubTeam:</label>
          <select
            id="allocation-subteam"
            value={subTeam}
            onChange={(e) => setSubTeam(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="BWI TEAM">BWI TEAM</option>
            <option value="MIS TEAM">MIS TEAM</option>
            <option value="P-Team UK">P-Team UK</option>
            <option value="P-Team US">P-Team US</option>
            <option value="PW-TEAM">PW-TEAM</option>
            <option value="QC TEAM">QC TEAM</option>
          </select>
        </div>

        {/* EMPLOYEE */}
        <div className="allocation-filter-group">
          <label htmlFor="allocation-employee">Employee:</label>
          <select
            id="allocation-employee"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          >
            {employeeList.map((emp) => (
              <option key={emp} value={emp}>
                {emp}
              </option>
            ))}
          </select>
        </div>

        {/* FROM */}
        <div className="allocation-filter-group allocation-date-group">
          <label htmlFor="allocation-from">From:</label>
          <div className="allocation-date-wrapper">
            <input
              id="allocation-from"
              type="text"
              readOnly
              value={getDisplayDate(fromDate)}
              onClick={() => openDatePicker("from")}
            />
            <button
              type="button"
              className="allocation-calendar-icon"
              onClick={() => openDatePicker("from")}
              aria-label="Open from date calendar"
            >
              <CalendarDays size={17} />
            </button>
            {openCalendar === "from" && renderCalendar()}
          </div>
        </div>

        {/* TO */}
        <div className="allocation-filter-group allocation-date-group">
          <label htmlFor="allocation-to">To:</label>
          <div className="allocation-date-wrapper">
            <input
              id="allocation-to"
              type="text"
              readOnly
              value={getDisplayDate(toDate)}
              onClick={() => openDatePicker("to")}
            />
            <button
              type="button"
              className="allocation-calendar-icon"
              onClick={() => openDatePicker("to")}
              aria-label="Open to date calendar"
            >
              <CalendarDays size={17} />
            </button>
            {openCalendar === "to" && renderCalendar()}
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="button"
          className="allocation-submit-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {/* EXPORT */}
        <button
          type="button"
          className="allocation-export-btn"
          onClick={handleExport}
        >
          Export
        </button>
      </div>

      {/* BOTTOM ROW */}
      <div className="allocation-report-bottom">
        <div className="allocation-total">Total: 0</div>

        <div className="allocation-search">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button
            type="button"
            onClick={handleSearch}
            aria-label="Search"
          >
            <Search size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllocationReport;