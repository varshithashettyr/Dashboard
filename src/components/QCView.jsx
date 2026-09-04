import { useState } from "react";
import { Search } from "lucide-react";
import "./QCView.css";

function QCView() {
  const [subTeam, setSubTeam] = useState("Select All");
  const [employee, setEmployee] = useState("Select");

  const [fromDate, setFromDate] = useState("01-Sep-2026");
  const [toDate, setToDate] = useState("04-Sep-2026");

  const [searchText, setSearchText] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);

    console.log("QC View Filters:", {
      subTeam,
      employee,
      fromDate,
      toDate,
    });
  };

  const handleSearch = () => {
    console.log("Search:", searchText);
  };

  return (
    <div className="qc-view">

      {/* =====================================================
          FILTER SECTION
      ===================================================== */}

      <div className="qc-filter-section">

        {/* SUB TEAM */}

        <div className="qc-field">
          <label htmlFor="subTeam">
            Sub-Team:
          </label>

          <select
            id="subTeam"
            value={subTeam}
            onChange={(e) =>
              setSubTeam(e.target.value)
            }
          >
            <option>Select All</option>
            <option>Team A</option>
            <option>Team B</option>
            <option>Team C</option>
          </select>
        </div>


        {/* EMPLOYEE */}

        <div className="qc-field">
          <label htmlFor="employee">
            Employee:
          </label>

          <select
            id="employee"
            value={employee}
            onChange={(e) =>
              setEmployee(e.target.value)
            }
          >
            <option>Select</option>
            <option>Employee 1</option>
            <option>Employee 2</option>
            <option>Employee 3</option>
          </select>
        </div>


        {/* FROM */}

        <div className="qc-field">
          <label htmlFor="fromDate">
            From:
          </label>

          <input
            id="fromDate"
            type="text"
            value={fromDate}
            onChange={(e) =>
              setFromDate(e.target.value)
            }
            placeholder="01-Sep-2026"
          />
        </div>


        {/* TO */}

        <div className="qc-field">
          <label htmlFor="toDate">
            To:
          </label>

          <input
            id="toDate"
            type="text"
            value={toDate}
            onChange={(e) =>
              setToDate(e.target.value)
            }
            placeholder="04-Sep-2026"
          />
        </div>


        {/* SUBMIT */}

        <button
          type="button"
          className="qc-submit"
          onClick={handleSubmit}
        >
          Submit
        </button>

      </div>


      {/* =====================================================
          TOTAL + SEARCH
      ===================================================== */}

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
              setSearchText(e.target.value)
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


      {/* =====================================================
          RESULT
      ===================================================== */}

      <div className="qc-result">

        <div className="qc-no-records">
          No records Found
        </div>

      </div>

    </div>
  );
}

export default QCView;