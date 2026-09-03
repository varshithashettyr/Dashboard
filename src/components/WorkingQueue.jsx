import { useState } from "react";
import "./WorkingQueue.css";

function WorkingQueue() {
  const [formData, setFormData] = useState({
    client: "",
    service: "",
    medium: "",
    subService: "",
    targetDate: "",
    assignedBy: "",
    taskReceived: "",
    allocationDate: "",
    subject: "",
    complexity: "",
    status: "",
    priority: "",
    comments: "",
  });

  const [activeTab, setActiveTab] = useState("Yet to start");

  const statusTabs = [
    "Yet to start",
    "Transfer",
    "WIP",
    "Hold",
    "Stand by",
    "Query",
    "Resolution",
    "To be QC'd",
    "Re-work",
    "Complete",
    "Reopen",
    "Cancel",
  ];

  const overviewRows = [
    { status: "New", type: "normal" },
    { status: "Transfer", type: "light" },
    { status: "WIP", type: "light" },
    { status: "Hold", type: "light" },
    { status: "Reopen", type: "light" },
    { status: "Rework", type: "light" },
    { status: "Audit Complete", type: "light" },
    { status: "Workable", type: "blue" },
    { status: "Stand by", type: "cyan" },
    { status: "Query", type: "cyan" },
    { status: "To be QC'd", type: "cyan" },
    { status: "Non-Workable", type: "blue" },
    { status: "Complete", type: "green" },
    { status: "Cancel", type: "green" },
    { status: "Execution completed", type: "blue" },
    { status: "Grand Total", type: "total" },
  ];

  const handleChange = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleNewTask = () => {
    // Placeholder for future API integration.
    console.log("New Task Request", formData);
  };

  return (
    <div className="working-queue-container">

      {/* =================================================
          IMPORTANT UPDATE MESSAGE
      ================================================= */}

      <div className="wq-important-message">
        <span className="wq-check-icon">✓</span>

        <span>
          <strong>**Important update**</strong> Ensure that you accurately
          track every task you perform in BSET on a daily basis.
        </span>
      </div>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="wq-main-layout">

        {/* =================================================
            LEFT WORK QUEUE FORM
        ================================================= */}

        <section className="wq-dashboard-panel">

          <div className="wq-panel-title">
            Work Queue Dashboard
          </div>


          <div className="wq-form-area">

            {/* ROW 1 */}

            <div className="wq-field">
              <label>Client:</label>

              <input
                type="text"
                value={formData.client}
                onChange={(event) =>
                  handleChange("client", event.target.value)
                }
              />
            </div>


            <div className="wq-field">
              <label>Service:</label>

              <input
                type="text"
                value={formData.service}
                onChange={(event) =>
                  handleChange("service", event.target.value)
                }
              />
            </div>


            {/* ROW 2 */}

            <div className="wq-field">
              <label>Medium:</label>

              <input
                type="text"
                value={formData.medium}
                onChange={(event) =>
                  handleChange("medium", event.target.value)
                }
              />
            </div>


            <div className="wq-field">
              <label>Sub-Service:</label>

              <input
                type="text"
                value={formData.subService}
                onChange={(event) =>
                  handleChange("subService", event.target.value)
                }
              />
            </div>


            {/* ROW 3 */}

            <div className="wq-field">
              <label>Target date:</label>

              <input
                type="text"
                value={formData.targetDate}
                onChange={(event) =>
                  handleChange("targetDate", event.target.value)
                }
                placeholder=""
              />
            </div>


            <div className="wq-field">
              <label>Assigned by:</label>

              <input
                type="text"
                value={formData.assignedBy}
                onChange={(event) =>
                  handleChange("assignedBy", event.target.value)
                }
              />
            </div>


            {/* ROW 4 */}

            <div className="wq-field">
              <label>Task received:</label>

              <input
                type="text"
                value={formData.taskReceived}
                onChange={(event) =>
                  handleChange("taskReceived", event.target.value)
                }
              />
            </div>


            <div className="wq-field">
              <label>Allocation date:</label>

              <input
                type="text"
                value={formData.allocationDate}
                onChange={(event) =>
                  handleChange("allocationDate", event.target.value)
                }
              />
            </div>


            {/* SUBJECT */}

            <div className="wq-full-field">

              <label>Subject:</label>

              <textarea
                value={formData.subject}
                onChange={(event) =>
                  handleChange("subject", event.target.value)
                }
              />

            </div>


            {/* COMPLEXITY + STATUS */}

            <div className="wq-field">
              <label>Complexity :</label>

              <input
                type="text"
                value={formData.complexity}
                onChange={(event) =>
                  handleChange("complexity", event.target.value)
                }
              />
            </div>


            <div className="wq-field">

              <label>
                Status<span className="wq-required">*</span> :
              </label>

              <select
                value={formData.status}
                onChange={(event) =>
                  handleChange("status", event.target.value)
                }
              >

                <option value="">
                </option>

                <option value="New">
                  New
                </option>

                <option value="Transfer">
                  Transfer
                </option>

                <option value="WIP">
                  WIP
                </option>

                <option value="Hold">
                  Hold
                </option>

                <option value="Query">
                  Query
                </option>

                <option value="Complete">
                  Complete
                </option>

              </select>

            </div>


            {/* PRIORITY */}

            <div className="wq-field">
              <label>Priority:</label>

              <input
                type="text"
                value={formData.priority}
                onChange={(event) =>
                  handleChange("priority", event.target.value)
                }
              />
            </div>


            {/* COMMENTS */}

            <div className="wq-full-field wq-comments-field">

              <label>Comments:</label>

              <textarea
                value={formData.comments}
                onChange={(event) =>
                  handleChange("comments", event.target.value)
                }
              />

            </div>


            {/* WARNING */}

            <div className="wq-warning">
              Do not capture client sensitive data in the comments field.
            </div>


            {/* NEW TASK BUTTON */}

            <div className="wq-new-task-wrapper">

              <button
                type="button"
                className="wq-new-task-button"
                onClick={handleNewTask}
              >
                New Task Request
              </button>

            </div>

          </div>

        </section>


        {/* =================================================
            RIGHT OVERVIEW
        ================================================= */}

        <section className="wq-overview-panel">

          <div className="wq-panel-title">
            Overview
          </div>


          <table className="wq-overview-table">

            <thead>

              <tr>

                <th>
                  Status
                </th>

                <th>
                  No. of tasks
                </th>

                <th>
                  HH:MM
                </th>

              </tr>

            </thead>


            <tbody>

              {overviewRows.map((row) => (

                <tr
                  key={row.status}
                  className={`overview-${row.type}`}
                >

                  <td>
                    {row.status}
                  </td>

                  <td>
                    0
                  </td>

                  <td>
                    00:00
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </section>

      </div>


      {/* =================================================
          STATUS TABS
      ================================================= */}

      <div className="wq-tabs-container">

        {statusTabs.map((tab) => (

          <button
            key={tab}
            type="button"
            className={`wq-tab ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >

            {tab} (0)

          </button>

        ))}

      </div>


      {/* =================================================
          SEARCH
      ================================================= */}

      <div className="wq-search-area">

        <input
          type="text"
          placeholder="Search"
          className="wq-search-input"
        />

        <button
          type="button"
          className="wq-search-button"
          aria-label="Search"
        >
          🔍
        </button>

      </div>


      {/* =================================================
          RECORD AREA
      ================================================= */}

      <div className="wq-record-area">

        <span>
          No record available
        </span>

      </div>

    </div>
  );
}

export default WorkingQueue;