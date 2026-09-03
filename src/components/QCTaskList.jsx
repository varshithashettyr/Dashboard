import { useState } from "react";
import "./QCTaskList.css";

function QCTaskList() {
  const [activeTab, setActiveTab] = useState("New");
  const [search, setSearch] = useState("");

  const tabs = [
    "New",
    "Transfer",
    "Hold",
    "Rework",
    "Completed",
  ];

  /*
   * Task data.
   *
   * Replace this array later with API data.
   * The structure is ready for backend integration.
   */

  const tasks = [
    {
      taskId: "P26DM0622",
      client: "Sarah Elise Schumacher",
      employee: "Nethravathi H R",
      services: "Calendar Management",
      subService: "Checking / Followup Availability of the participants",
      subjectLine: "Quarterly Connect - Sarah/Melissa",
      priority: "Medium",
      complexity: "Intermediate",
      qcReceived: "15-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Post-QC",
      qcTransferredBy: "",
      status: "New",
    },

    {
      taskId: "P26DM0635",
      client: "Kate Gattuso Duffy",
      employee: "Madesh Manickam",
      services: "Calendar Management",
      subService: "Checking and resolving Conflicts",
      subjectLine: "RE: Tenex / Pfizer Marketing Sync",
      priority: "High",
      complexity: "Intermediate",
      qcReceived: "14-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Post-QC",
      qcTransferredBy: "",
      status: "Transfer",
    },

    {
      taskId: "P26DM06435",
      client: "Sarah Elise Schumacher",
      employee: "Nethravathi H R",
      services: "Expense Management",
      subService: "Prepare expense reports",
      subjectLine: "July 1 - July 31",
      priority: "Medium",
      complexity: "Complex",
      qcReceived: "15-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Post-QC",
      qcTransferredBy: "",
      status: "Hold",
    },

    {
      taskId: "P26DM06402",
      client: "Eugenia Zeibig",
      employee: "Sraddha Deb",
      services: "Calendar Management",
      subService: "Scheduling/Rescheduling Meetings / Interviews",
      subjectLine: "Scheduled Project slingshot",
      priority: "Medium",
      complexity: "Intermediate",
      qcReceived: "13-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Post-QC",
      qcTransferredBy: "",
      status: "Rework",
    },

    {
      taskId: "P26DM06391",
      client: "Sabine Bruckner",
      employee: "Shubham Kumar Singh",
      services: "Document Management",
      subService: "Create/modify/reconcile files",
      subjectLine: "Expense report update",
      priority: "High",
      complexity: "Complex",
      qcReceived: "12-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Post-QC",
      qcTransferredBy: "",
      status: "Completed",
    },
  ];


  /* =========================================================
     FILTER TASKS
  ========================================================= */

  const filteredTasks = tasks.filter((task) => {

    const matchesTab =
      task.status === activeTab;

    const searchText =
      search.trim().toLowerCase();

    if (!searchText) {
      return matchesTab;
    }

    const searchableText = [
      task.taskId,
      task.client,
      task.employee,
      task.services,
      task.subService,
      task.subjectLine,
      task.priority,
      task.complexity,
      task.qcReceived,
      task.auditor,
      task.auditType,
      task.qcTransferredBy,
    ]
      .join(" ")
      .toLowerCase();

    return (
      matchesTab &&
      searchableText.includes(searchText)
    );
  });


  /* =========================================================
     TAB COUNT
  ========================================================= */

  const getCount = (tab) => {
    return tasks.filter(
      (task) => task.status === tab
    ).length;
  };


  return (
    <div className="qc-task-list">


      {/* =====================================================
          QC TITLE
      ===================================================== */}

      <div className="qctl-title">
        QC
      </div>


      {/* =====================================================
          TABS
      ===================================================== */}

      <div className="qctl-tabs">

        {tabs.map((tab) => (

          <button
            key={tab}
            type="button"
            className={`qctl-tab ${
              activeTab === tab
                ? "active"
                : ""
            }`}
            onClick={() => {
              setActiveTab(tab);
              setSearch("");
            }}
          >

            {tab} ({getCount(tab)})

          </button>

        ))}

      </div>


      {/* =====================================================
          FILTER AREA
      ===================================================== */}

      <div className="qctl-filter-row">

        <div className="qctl-total">
          Total :{" "}
          <span>
            {filteredTasks.length}
          </span>
        </div>


        <div className="qctl-filter-field">

          <label>
            Employee:
          </label>

          <select>

            <option>
              Select All
            </option>

            {[...new Set(
              tasks.map(
                (task) => task.employee
              )
            )].map((employee) => (

              <option
                key={employee}
                value={employee}
              >
                {employee}
              </option>

            ))}

          </select>

        </div>


        <div className="qctl-filter-field">

          <label>
            Audit type:
          </label>

          <select>

            <option>
              --Select All--
            </option>

            <option>
              Post-QC
            </option>

            <option>
              Pre-QC
            </option>

          </select>

        </div>


        {/* SEARCH */}

        <div className="qctl-search">

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(event) =>
              setSearch(
                event.target.value
              )
            }
          />

          <button
            type="button"
            aria-label="Search"
          >
            🔍
          </button>

        </div>

      </div>


      {/* =====================================================
          TASK TABLE
      ===================================================== */}

      <div className="qctl-table-wrapper">

        <table className="qctl-table">

          <thead>

            <tr>

              <th className="expand-column">
                #
              </th>

              <th>
                Task-ID
              </th>

              <th>
                Client
              </th>

              <th>
                Employee
              </th>

              <th>
                Services
              </th>

              <th>
                SubService
              </th>

              <th className="subject-column">
                Subject line
              </th>

              <th>
                Priority
              </th>

              <th>
                Complexity
              </th>

              <th>
                QC Received
              </th>

              <th>
                Auditor
              </th>

              <th>
                Audit Type
              </th>

              <th>
                QC Transferred By
              </th>

            </tr>

          </thead>


          <tbody>

            {filteredTasks.length > 0 ? (

              filteredTasks.map((task, index) => (

                <tr key={task.taskId}>

                  <td className="expand-cell">
                    ▶
                  </td>

                  <td>
                    {task.taskId}
                  </td>

                  <td>
                    {task.client}
                  </td>

                  <td>
                    {task.employee}
                  </td>

                  <td>
                    {task.services}
                  </td>

                  <td>
                    {task.subService}
                  </td>

                  <td>
                    {task.subjectLine}
                  </td>

                  <td>
                    {task.priority}
                  </td>

                  <td>
                    {task.complexity}
                  </td>

                  <td>
                    {task.qcReceived}
                  </td>

                  <td>
                    {task.auditor}
                  </td>

                  <td>
                    {task.auditType}
                  </td>

                  <td>
                    {task.qcTransferredBy}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="13"
                  className="qctl-no-record"
                >
                  No record available
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>


    </div>
  );
}


export default QCTaskList;