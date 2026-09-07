import { useState, useRef, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import "./FeedbackReport.css";

function FeedbackReport() {
  const [fromDate, setFromDate] = useState("2026-01-01");
  const [toDate, setToDate] = useState("2026-09-07");

  const [search, setSearch] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(true);

  const [openCalendar, setOpenCalendar] = useState(null);
  const [calendarMonth, setCalendarMonth] = useState(new Date(2026, 8, 1));

  const calendarRef = useRef(null);

  // Close calendar popups on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenCalendar(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = () => {
    setHasSubmitted(true);
    console.log("Feedback Report Submitted:", { fromDate, toDate });
  };

  const handleExport = () => {
    console.log("Export Feedback Report:", { fromDate, toDate });
  };

  const handleExportAll = () => {
    console.log("Export All Feedback Report:", { fromDate, toDate });
  };

  const handleSearch = () => {
    console.log("Search Feedback Report:", search);
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${day}`;
  };

  const getDisplayDate = (date) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${day}-${months[Number(month) - 1]}-${year}`;
  };

  const openDatePicker = (type) => {
    setOpenCalendar(type);
    const selectedDate = type === "from" ? new Date(fromDate) : new Date(toDate);
    setCalendarMonth(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
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
      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + direction, 1)
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

    const monthName = calendarMonth.toLocaleString("en-US", { month: "long" });
    const year = calendarMonth.getFullYear();
    const selectedDate = openCalendar === "from" ? fromDate : toDate;

    return (
      <div className="feedback-calendar" ref={calendarRef}>
        <div className="feedback-calendar-header">
          <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month">
            <ChevronLeft size={16} />
          </button>
          <strong>{monthName}, {year}</strong>
          <button type="button" onClick={() => changeMonth(1)} aria-label="Next month">
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="feedback-calendar-weekdays">
          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
        </div>

        <div className="feedback-calendar-days">
          {getCalendarDays().map((date, index) => {
            if (!date) {
              return <span key={`empty-${index}`} className="feedback-calendar-empty" />;
            }

            const dateValue = formatDate(date);
            const isSelected = dateValue === selectedDate;
            const isToday = dateValue === formatDate(new Date());

            return (
              <button
                type="button"
                key={dateValue}
                className={`feedback-calendar-day ${isSelected ? "selected" : ""} ${isToday ? "today" : ""}`}
                onClick={() => handleDateSelect(date)}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>

        <div className="feedback-calendar-footer">
          <button
            type="button"
            onClick={() => handleDateSelect(new Date())}
          >
            Today: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="feedback-report-container">
      {/* TITLE */}
      <div className="feedback-report-title">Feedback Report</div>

      {/* ACTION BAR / FILTER ROW */}
      <div className="feedback-filter-bar">
        {/* TOTAL */}
        <div className="feedback-total">
          Total: <strong>0</strong>
        </div>

        {/* FROM DATE */}
        <div className="feedback-date-control">
          <label htmlFor="feedback-from-date">From:</label>
          <div className="feedback-input-wrapper">
            <input
              id="feedback-from-date"
              type="text"
              readOnly
              value={getDisplayDate(fromDate)}
              onClick={() => openDatePicker("from")}
            />
            {openCalendar === "from" && renderCalendar()}
          </div>
        </div>

        {/* TO DATE */}
        <div className="feedback-date-control">
          <label htmlFor="feedback-to-date">To:</label>
          <div className="feedback-input-wrapper">
            <input
              id="feedback-to-date"
              type="text"
              readOnly
              value={getDisplayDate(toDate)}
              onClick={() => openDatePicker("to")}
            />
            {openCalendar === "to" && renderCalendar()}
          </div>
        </div>

        {/* BUTTONS */}
        <button type="button" className="feedback-btn submit-btn" onClick={handleSubmit}>
          Submit
        </button>

        <button type="button" className="feedback-btn export-btn" onClick={handleExport}>
          Export
        </button>

        <button type="button" className="feedback-btn export-all-btn" onClick={handleExportAll}>
          Export All
        </button>

        {/* SEARCH BOX */}
        <div className="feedback-search-box">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button type="button" onClick={handleSearch} aria-label="Search">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* NO RECORDS FOUND CONTAINER */}
      {hasSubmitted && (
        <div className="feedback-records-box">
          No records Found
        </div>
      )}
    </div>
  );
}

export default FeedbackReport;