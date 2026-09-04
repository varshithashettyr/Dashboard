import { useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
} from "lucide-react";
import "./QCTransfer.css";


/* =========================================================
   DATE HELPERS
========================================================= */

const months = [
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

const weekdays = [
  "Su",
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
];


const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");

  const month = months[date.getMonth()].substring(0, 3);

  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};


const parseDate = (value) => {
  if (!value) {
    return new Date();
  }

  const parts = value.split("-");

  if (parts.length !== 3) {
    return new Date();
  }

  const day = Number(parts[0]);

  const monthIndex = months.findIndex(
    (month) =>
      month.substring(0, 3).toLowerCase() ===
      parts[1].toLowerCase()
  );

  const year = Number(parts[2]);

  if (
    Number.isNaN(day) ||
    Number.isNaN(year) ||
    monthIndex === -1
  ) {
    return new Date();
  }

  return new Date(
    year,
    monthIndex,
    day
  );
};


/* =========================================================
   CALENDAR
========================================================= */

function DateCalendar({
  value,
  onSelect,
  onClose,
}) {
  const selectedDate = parseDate(value);

  const [currentMonth, setCurrentMonth] =
    useState(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      )
    );


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


  const today = new Date();


  const firstDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();


  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();


  const previousMonthDays = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    0
  ).getDate();


  const days = [];


  /* =======================================================
     PREVIOUS MONTH
  ======================================================= */

  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      day: previousMonthDays - i,
      month:
        currentMonth.getMonth() - 1,
      year:
        currentMonth.getFullYear(),
      outside: true,
    });
  }


  /* =======================================================
     CURRENT MONTH
  ======================================================= */

  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {
    days.push({
      day,
      month:
        currentMonth.getMonth(),
      year:
        currentMonth.getFullYear(),
      outside: false,
    });
  }


  /* =======================================================
     NEXT MONTH
  ======================================================= */

  let nextDay = 1;

  while (days.length < 42) {
    days.push({
      day: nextDay,
      month:
        currentMonth.getMonth() + 1,
      year:
        currentMonth.getFullYear(),
      outside: true,
    });

    nextDay++;
  }


  const isSelected = (
    day,
    month,
    year
  ) => {
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };


  const isToday = (
    day,
    month,
    year
  ) => {
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };


  const selectDate = (
    day,
    month,
    year
  ) => {
    const date = new Date(
      year,
      month,
      day
    );

    onSelect(date);

    onClose();
  };


  return (
    <div
      className="qct-calendar"
      onClick={(e) => e.stopPropagation()}
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="qct-calendar-header">

        <button
          type="button"
          className="qct-calendar-arrow"
          onClick={previousMonth}
        >
          <ChevronLeft size={18} />
        </button>


        <div className="qct-calendar-title">
          {months[currentMonth.getMonth()]},{" "}
          {currentMonth.getFullYear()}
        </div>


        <button
          type="button"
          className="qct-calendar-arrow"
          onClick={nextMonth}
        >
          <ChevronRight size={18} />
        </button>

      </div>


      {/* =================================================
          WEEK DAYS
      ================================================= */}

      <div className="qct-calendar-week">

        {weekdays.map((day) => (
          <div
            key={day}
            className="qct-weekday"
          >
            {day}
          </div>
        ))}

      </div>


      {/* =================================================
          DAYS
      ================================================= */}

      <div className="qct-calendar-grid">

        {days.map((item, index) => {

          const selected = isSelected(
            item.day,
            item.month,
            item.year
          );

          const todayDate = isToday(
            item.day,
            item.month,
            item.year
          );

          return (
            <button
              key={`${item.year}-${item.month}-${item.day}-${index}`}
              type="button"
              className={`
                qct-calendar-day
                ${item.outside ? "qct-outside" : ""}
                ${selected ? "qct-selected" : ""}
                ${todayDate ? "qct-today" : ""}
              `}
              onClick={() =>
                selectDate(
                  item.day,
                  item.month,
                  item.year
                )
              }
            >
              {item.day}
            </button>
          );
        })}

      </div>


      {/* =================================================
          FOOTER
      ================================================= */}

      <div className="qct-calendar-footer">

        <button
          type="button"
          onClick={() => {
            onSelect(today);
            onClose();
          }}
        >
          Today: {formatDate(today)}
        </button>

      </div>

    </div>
  );
}


/* =========================================================
   DATE INPUT
========================================================= */

function DateField({
  label,
  value,
  onChange,
  open,
  onOpen,
  onClose,
}) {
  return (
    <div className="qct-date-field">

      <label>
        {label}
      </label>


      <div className="qct-date-wrapper">

        <input
          type="text"
          value={value}
          readOnly
          onClick={onOpen}
        />


        <button
          type="button"
          className="qct-date-icon"
          onClick={onOpen}
        >
          <CalendarDays size={20} />
        </button>


        {open && (
          <DateCalendar
            value={value}
            onSelect={onChange}
            onClose={onClose}
          />
        )}

      </div>

    </div>
  );
}


/* =========================================================
   SAMPLE DATA
========================================================= */

const initialRows = [
  {
    id: "P26CM06394",
    client: "Kristin Yelenovic",
    employee: "Madesh Manickam",
    service: "Calendar Management",
    subService:
      "Scheduling/Rescheduling Meetings / Interviews",
    subject:
      "CEO & Comms Discussion - rescheduled the meeting from Aug 18 to Aug 17 from 12:30-1 PM EST",
    priority: "High",
    qcReceived: "15-Aug-2026",
    taskReceived: "12-Aug-2026",
    auditType: "PostQC",
  },

  {
    id: "P26CM06396",
    client: "Kate Gattuso Duffy",
    employee: "Madesh Manickam",
    service: "Calendar Management",
    subService:
      "Checking / Followup Availability of the participants",
    subject:
      "Kate/JC 1:1 - shared avails with JC in teams",
    priority: "High",
    qcReceived: "15-Aug-2026",
    taskReceived: "12-Aug-2026",
    auditType: "PostQC",
  },

  {
    id: "P26CM06385",
    client: "Stacy Chatz",
    employee: "Madesh Manickam",
    service: "Calendar Management",
    subService:
      "Checking / Followup Availability of the participants",
    subject:
      "RE: (No rush) 8/17 MROI Attendees - shared avails with Yvonne, Melissa and Kelly in email",
    priority: "High",
    qcReceived: "15-Aug-2026",
    taskReceived: "12-Aug-2026",
    auditType: "PostQC",
  },

  {
    id: "P26CM06389",
    client: "Alyssa Lee",
    employee: "Madesh Manickam",
    service: "Calendar Management",
    subService:
      "Scheduling/Rescheduling Meetings / Interviews",
    subject:
      "Decideware (Int'l Media + CRM) from Aug 14 to Aug 17",
    priority: "High",
    qcReceived: "15-Aug-2026",
    taskReceived: "12-Aug-2026",
    auditType: "PostQC",
  },

  {
    id: "P26CM06407",
    client: "Sarah Elise",
    employee: "Nethravathi H R",
    service: "Calendar Management",
    subService:
      "Scheduling/Re-scheduling Meetings",
    subject:
      "Quarterly Connect - CRM/Microsoft",
    priority: "Medium",
    qcReceived: "15-Aug-2026",
    taskReceived: "13-Aug-2026",
    auditType: "PostQC",
  },
];


/* =========================================================
   QC TRANSFER
========================================================= */

function QCTransfer() {

  const [activeTab, setActiveTab] =
    useState("PreQC");


  const [fromDate, setFromDate] =
    useState("01-Jan-2026");


  const [toDate, setToDate] =
    useState("04-Sep-2026");


  const [auditor, setAuditor] =
    useState("Select");


  const [searchText, setSearchText] =
    useState("");


  const [openCalendar, setOpenCalendar] =
    useState(null);


  const [selectedRows, setSelectedRows] =
    useState([]);


  const [rows] =
    useState(initialRows);


  /* =======================================================
     FILTER ROWS
  ======================================================= */

  const filteredRows = rows.filter((row) => {

    if (!searchText.trim()) {
      return true;
    }

    const search =
      searchText.toLowerCase();

    return (
      row.id.toLowerCase().includes(search) ||
      row.client.toLowerCase().includes(search) ||
      row.employee.toLowerCase().includes(search) ||
      row.service.toLowerCase().includes(search) ||
      row.subService.toLowerCase().includes(search) ||
      row.subject.toLowerCase().includes(search)
    );
  });


  /* =======================================================
     SELECT ALL
  ======================================================= */

  const allSelected =
    filteredRows.length > 0 &&
    filteredRows.every((row) =>
      selectedRows.includes(row.id)
    );


  const toggleSelectAll = () => {

    if (allSelected) {

      setSelectedRows([]);

      return;
    }

    setSelectedRows(
      filteredRows.map(
        (row) => row.id
      )
    );
  };


  /* =======================================================
     SELECT ROW
  ======================================================= */

  const toggleRow = (id) => {

    setSelectedRows((previous) => {

      if (previous.includes(id)) {

        return previous.filter(
          (rowId) => rowId !== id
        );
      }

      return [
        ...previous,
        id,
      ];
    });
  };


  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearch = () => {

    console.log(
      "QC Transfer Search:",
      searchText
    );
  };


  /* =======================================================
     SEARCH KEY
  ======================================================= */

  const handleSearchKey = (e) => {

    if (e.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <div className="qct-page">

      {/* ===================================================
          TITLE
      =================================================== */}

      <div className="qct-title">
        QC Transfer
      </div>


      {/* ===================================================
          TABS
      =================================================== */}

      <div className="qct-tabs">

        <button
          type="button"
          className={
            activeTab === "PostQC"
              ? "qct-tab active"
              : "qct-tab"
          }
          onClick={() =>
            setActiveTab("PostQC")
          }
        >
          PostQC
        </button>


        <button
          type="button"
          className={
            activeTab === "PreQC"
              ? "qct-tab active"
              : "qct-tab"
          }
          onClick={() =>
            setActiveTab("PreQC")
          }
        >
          PreQC
        </button>

      </div>


      {/* ===================================================
          FILTER SECTION
      =================================================== */}

      <div className="qct-filter-section">

        <DateField
          label="From:"
          value={fromDate}
          onChange={(date) =>
            setFromDate(
              formatDate(date)
            )
          }
          open={
            openCalendar === "from"
          }
          onOpen={() =>
            setOpenCalendar(
              openCalendar === "from"
                ? null
                : "from"
            )
          }
          onClose={() =>
            setOpenCalendar(null)
          }
        />


        <DateField
          label="To:"
          value={toDate}
          onChange={(date) =>
            setToDate(
              formatDate(date)
            )
          }
          open={
            openCalendar === "to"
          }
          onOpen={() =>
            setOpenCalendar(
              openCalendar === "to"
                ? null
                : "to"
            )
          }
          onClose={() =>
            setOpenCalendar(null)
          }
        />


        {/* FROM AUDITOR */}

        <div className="qct-filter-field">

          <label>
            From Auditor:
          </label>

          <select
            value={auditor}
            onChange={(e) =>
              setAuditor(
                e.target.value
              )
            }
          >

            <option>
              Select
            </option>

            <option>
              Auditor 1
            </option>

            <option>
              Auditor 2
            </option>

            <option>
              Auditor 3
            </option>

          </select>

        </div>


        {/* SEARCH BUTTON */}

        <button
          type="button"
          className="qct-search-button"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>


      {/* ===================================================
          ACTION SECTION
      =================================================== */}

      <div className="qct-action-section">

        <div className="qct-total">

          <span>
            Total :
          </span>

          <strong>
            {filteredRows.length}
          </strong>

        </div>


        <button
          type="button"
          className="qct-action-button"
          onClick={() =>
            console.log(
              "Transfer:",
              selectedRows
            )
          }
        >
          Transfer
        </button>


        <button
          type="button"
          className="qct-action-button"
          onClick={() =>
            window.location.reload()
          }
        >
          Refresh
        </button>


        <div className="qct-table-search">

          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) =>
              setSearchText(
                e.target.value
              )
            }
            onKeyDown={handleSearchKey}
          />


          <button
            type="button"
            onClick={handleSearch}
            aria-label="Search"
          >
            <Search size={22} />
          </button>

        </div>


        <button
          type="button"
          className="qct-action-button export"
          onClick={() =>
            console.log(
              "Export"
            )
          }
        >
          Export
        </button>

      </div>


      {/* ===================================================
          TABLE
      =================================================== */}

      <div className="qct-table-container">

        <table className="qct-table">

          <thead>

            <tr>

              <th className="qct-check-column">

                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleSelectAll}
                />

                <div>
                  Select
                </div>

                <div>
                  All
                </div>

              </th>


              <th>
                Task ID
              </th>

              <th>
                Client
              </th>

              <th>
                Employee
              </th>

              <th>
                Service
              </th>

              <th>
                Sub-Service
              </th>

              <th>
                Subject Line
              </th>

              <th>
                Priority
              </th>

              <th>
                QC Received
              </th>

              <th>
                Task
                <br />
                Received
              </th>

              <th>
                Audit Type
              </th>

            </tr>

          </thead>


          <tbody>

            {filteredRows.length > 0 ? (

              filteredRows.map((row) => (

                <tr key={row.id}>

                  <td className="qct-check-cell">

                    <input
                      type="checkbox"
                      checked={selectedRows.includes(
                        row.id
                      )}
                      onChange={() =>
                        toggleRow(row.id)
                      }
                    />

                  </td>


                  <td>
                    {row.id}
                  </td>


                  <td>
                    {row.client}
                  </td>


                  <td>
                    {row.employee}
                  </td>


                  <td>
                    {row.service}
                  </td>


                  <td>
                    {row.subService}
                  </td>


                  <td>
                    {row.subject}
                  </td>


                  <td>
                    {row.priority}
                  </td>


                  <td>
                    {row.qcReceived}
                  </td>


                  <td>
                    {row.taskReceived}
                  </td>


                  <td>
                    {row.auditType}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="11"
                  className="qct-no-records"
                >
                  No records Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}


export default QCTransfer;