import { useEffect, useRef, useState } from "react";
import { Search, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import "./QCView.css";


/* =========================================================
   DATE HELPERS
========================================================= */

const MONTHS = [
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

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];


function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = MONTHS[date.getMonth()].substring(0, 3);
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}


function parseDate(value) {
  if (!value) return new Date();

  const parts = value.split("-");

  if (parts.length !== 3) {
    return new Date();
  }

  const day = parseInt(parts[0], 10);

  const monthIndex = MONTHS.findIndex(
    (month) =>
      month.substring(0, 3).toLowerCase() ===
      parts[1].substring(0, 3).toLowerCase()
  );

  const year = parseInt(parts[2], 10);

  if (
    Number.isNaN(day) ||
    monthIndex === -1 ||
    Number.isNaN(year)
  ) {
    return new Date();
  }

  return new Date(year, monthIndex, day);
}


/* =========================================================
   CUSTOM CALENDAR
========================================================= */

function CalendarPicker({
  value,
  onChange,
  onClose,
}) {
  const selectedDate = parseDate(value);

  const [currentMonth, setCurrentMonth] = useState(
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    )
  );

  const calendarRef = useRef(null);


  /* =======================================================
     CLOSE WHEN CLICKING OUTSIDE
  ======================================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [onClose]);


  /* =======================================================
     MONTH NAVIGATION
  ======================================================= */

  const previousMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        1
      )
    );
  };


  const nextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    );
  };


  /* =======================================================
     CREATE CALENDAR DAYS
  ======================================================= */

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const daysInCurrentMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const daysInPreviousMonth = new Date(
    year,
    month,
    0
  ).getDate();


  const calendarDays = [];


  /* Previous month's dates */

  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPreviousMonth - i,
      type: "previous",
    });
  }


  /* Current month's dates */

  for (
    let day = 1;
    day <= daysInCurrentMonth;
    day++
  ) {
    calendarDays.push({
      day,
      type: "current",
    });
  }


  /* Next month's dates */

  let nextDay = 1;

  while (calendarDays.length < 42) {
    calendarDays.push({
      day: nextDay,
      type: "next",
    });

    nextDay++;
  }


  /* =======================================================
     DATE CLICK
  ======================================================= */

  const handleDateClick = (day, type) => {
    let selectedYear = year;
    let selectedMonth = month;

    if (type === "previous") {
      selectedMonth -= 1;

      if (selectedMonth < 0) {
        selectedMonth = 11;
        selectedYear -= 1;
      }
    }

    if (type === "next") {
      selectedMonth += 1;

      if (selectedMonth > 11) {
        selectedMonth = 0;
        selectedYear += 1;
      }
    }

    const selected = new Date(
      selectedYear,
      selectedMonth,
      day
    );

    onChange(formatDate(selected));
    onClose();
  };


  /* =======================================================
     TODAY
  ======================================================= */

  const handleToday = () => {
    const today = new Date();

    onChange(formatDate(today));

    setCurrentMonth(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      )
    );

    onClose();
  };


  /* =======================================================
     CLEAR
  ======================================================= */

  const handleClear = () => {
    onChange("");
    onClose();
  };


  /* =======================================================
     CHECK SELECTED DATE
  ======================================================= */

  const isSelected = (day, type) => {
    if (!value || type !== "current") {
      return false;
    }

    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };


  return (
    <div
      className="qc-calendar"
      ref={calendarRef}
    >

      {/* =================================================
          CALENDAR HEADER
      ================================================= */}

      <div className="qc-calendar-header">

        <button
          type="button"
          className="qc-calendar-nav"
          onClick={previousMonth}
          aria-label="Previous month"
        >
          <ChevronLeft size={18} />
        </button>


        <div className="qc-calendar-month">
          {MONTHS[month]}, {year}
        </div>


        <button
          type="button"
          className="qc-calendar-nav"
          onClick={nextMonth}
          aria-label="Next month"
        >
          <ChevronRight size={18} />
        </button>

      </div>


      {/* =================================================
          WEEK DAYS
      ================================================= */}

      <div className="qc-calendar-weekdays">

        {WEEK_DAYS.map((day) => (
          <div
            key={day}
            className="qc-calendar-weekday"
          >
            {day}
          </div>
        ))}

      </div>


      {/* =================================================
          DAYS
      ================================================= */}

      <div className="qc-calendar-days">

        {calendarDays.map(
          ({ day, type }, index) => (

            <button
              key={`${type}-${day}-${index}`}
              type="button"
              className={`
                qc-calendar-day
                ${type !== "current"
                  ? "muted"
                  : ""}
                ${isSelected(day, type)
                  ? "selected"
                  : ""}
              `}
              onClick={() =>
                handleDateClick(day, type)
              }
            >
              {day}
            </button>

          )
        )}

      </div>


      {/* =================================================
          CALENDAR FOOTER
      ================================================= */}

      <div className="qc-calendar-footer">

        <button
          type="button"
          onClick={handleClear}
        >
          Clear
        </button>


        <button
          type="button"
          onClick={handleToday}
        >
          Today
        </button>

      </div>

    </div>
  );
}


/* =========================================================
   DATE FIELD
========================================================= */

function DateField({
  label,
  value,
  onChange,
}) {

  const [calendarOpen, setCalendarOpen] =
    useState(false);


  return (
    <div
      className={`
        qc-field
        qc-date-field
        ${calendarOpen
          ? "calendar-open"
          : ""}
      `}
    >

      <label>
        {label}
      </label>


      <div className="qc-date-input-wrapper">

        <input
          type="text"
          value={value}
          readOnly
          onClick={() =>
            setCalendarOpen(true)
          }
          placeholder="01-Sep-2026"
        />


        <button
          type="button"
          className="qc-calendar-icon"
          onClick={() =>
            setCalendarOpen(
              !calendarOpen
            )
          }
          aria-label={`Open ${label} calendar`}
        >
          <CalendarDays size={18} />
        </button>

      </div>


      {/* =================================================
          IMPORTANT:
          Calendar is NOT position: fixed.
          It stays inside the document flow.
          Therefore it pushes content down instead
          of overlapping it.
      ================================================= */}

      {calendarOpen && (
        <CalendarPicker
          value={value}
          onChange={onChange}
          onClose={() =>
            setCalendarOpen(false)
          }
        />
      )}

    </div>
  );
}


/* =========================================================
   MAIN QC VIEW
========================================================= */

function QCView() {

  const [subTeam, setSubTeam] =
    useState("Select All");

  const [employee, setEmployee] =
    useState("Select");


  const [fromDate, setFromDate] =
    useState("01-Sep-2026");

  const [toDate, setToDate] =
    useState("04-Sep-2026");


  const [searchText, setSearchText] =
    useState("");


  const [submitted, setSubmitted] =
    useState(false);


  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = () => {

    setSubmitted(true);

    console.log(
      "QC View Filters:",
      {
        subTeam,
        employee,
        fromDate,
        toDate,
      }
    );
  };


  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = () => {

    console.log(
      "Search:",
      searchText
    );

  };


  return (
    <div className="qc-view">

      {/* ===================================================
          FILTER SECTION
      =================================================== */}

      <div className="qc-filter-section">


        {/* =================================================
            SUB TEAM
        ================================================= */}

        <div className="qc-field">

          <label htmlFor="subTeam">
            Sub-Team:
          </label>


          <select
            id="subTeam"
            value={subTeam}
            onChange={(e) =>
              setSubTeam(
                e.target.value
              )
            }
          >

            <option>
              Select All
            </option>

            <option>
              Team A
            </option>

            <option>
              Team B
            </option>

            <option>
              Team C
            </option>

          </select>

        </div>


        {/* =================================================
            EMPLOYEE
        ================================================= */}

        <div className="qc-field">

          <label htmlFor="employee">
            Employee:
          </label>


          <select
            id="employee"
            value={employee}
            onChange={(e) =>
              setEmployee(
                e.target.value
              )
            }
          >

            <option>
              Select
            </option>

            <option>
              Employee 1
            </option>

            <option>
              Employee 2
            </option>

            <option>
              Employee 3
            </option>

          </select>

        </div>


        {/* =================================================
            FROM DATE
        ================================================= */}

        <DateField
          label="From:"
          value={fromDate}
          onChange={setFromDate}
        />


        {/* =================================================
            TO DATE
        ================================================= */}

        <DateField
          label="To:"
          value={toDate}
          onChange={setToDate}
        />


        {/* =================================================
            SUBMIT
        ================================================= */}

        <button
          type="button"
          className="qc-submit"
          onClick={handleSubmit}
        >
          Submit
        </button>

      </div>


      {/* ===================================================
          TOTAL + SEARCH
      =================================================== */}

      <div className="qc-summary-section">


        {/* TOTAL */}

        <div className="qc-total">
          Total : 0
        </div>


        {/* SEARCH */}

        <div className="qc-search">

          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) =>
              setSearchText(
                e.target.value
              )
            }
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
            <Search size={21} />
          </button>

        </div>

      </div>


      {/* ===================================================
          RESULT
      =================================================== */}

      <div className="qc-result">

        <div className="qc-no-records">
          No records Found
        </div>

      </div>

    </div>
  );
}


export default QCView;