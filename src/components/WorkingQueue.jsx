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

  const handleChange = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleNewTask = () => {
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

            <div className="wq-full-field wq-subject-field">
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
                <option value=""></option>
                <option value="New">New</option>
                <option value="Transfer">Transfer</option>
                <option value="WIP">WIP</option>
                <option value="Hold">Hold</option>
                <option value="Query">Query</option>
                <option value="Complete">Complete</option>
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
            RIGHT OVERVIEW / QUEUE PULSE
        ================================================= */}

        <section className="wq-overview-panel">

          <div className="wq-panel-title">
            Overview
          </div>


          <div className="wq-queue-pulse">

            {/* =================================================
                TOTAL TASKS
            ================================================= */}

            <div className="wq-total-card">

              <div className="wq-total-number">
                0
              </div>

              <div className="wq-total-label">
                TOTAL TASKS
              </div>

              <div className="wq-total-subtext">
                In Work Queue
              </div>

            </div>


            {/* =================================================
                QUEUE FLOW
            ================================================= */}

            <div className="wq-flow-title">
              Queue Flow
            </div>


            <div className="wq-flow">

              <div className="wq-flow-item">

                <span className="wq-flow-dot wq-dot-new"></span>

                <div>
                  <span className="wq-flow-name">
                    New
                  </span>

                  <strong>
                    0
                  </strong>
                </div>

              </div>


              <span className="wq-flow-arrow">
                →
              </span>


              <div className="wq-flow-item">

                <span className="wq-flow-dot wq-dot-wip"></span>

                <div>
                  <span className="wq-flow-name">
                    WIP
                  </span>

                  <strong>
                    0
                  </strong>
                </div>

              </div>


              <span className="wq-flow-arrow">
                →
              </span>


              <div className="wq-flow-item">

                <span className="wq-flow-dot wq-dot-qc"></span>

                <div>
                  <span className="wq-flow-name">
                    QC
                  </span>

                  <strong>
                    0
                  </strong>
                </div>

              </div>


              <span className="wq-flow-arrow">
                →
              </span>


              <div className="wq-flow-item">

                <span className="wq-flow-dot wq-dot-complete"></span>

                <div>
                  <span className="wq-flow-name">
                    Done
                  </span>

                  <strong>
                    0
                  </strong>
                </div>

              </div>

            </div>


            {/* =================================================
                QUEUE DISTRIBUTION
            ================================================= */}

            <div className="wq-flow-title">
              Queue Distribution
            </div>


            <div className="wq-status-bars">

              <div className="wq-status-row">

                <span>
                  New
                </span>

                <div className="wq-status-track">
                  <div
                    className="wq-status-fill wq-fill-new"
                    style={{ width: "0%" }}
                  ></div>
                </div>

                <strong>
                  0
                </strong>

              </div>


              <div className="wq-status-row">

                <span>
                  WIP
                </span>

                <div className="wq-status-track">
                  <div
                    className="wq-status-fill wq-fill-wip"
                    style={{ width: "0%" }}
                  ></div>
                </div>

                <strong>
                  0
                </strong>

              </div>


              <div className="wq-status-row">

                <span>
                  Hold
                </span>

                <div className="wq-status-track">
                  <div
                    className="wq-status-fill wq-fill-hold"
                    style={{ width: "0%" }}
                  ></div>
                </div>

                <strong>
                  0
                </strong>

              </div>


              <div className="wq-status-row">

                <span>
                  Rework
                </span>

                <div className="wq-status-track">
                  <div
                    className="wq-status-fill wq-fill-rework"
                    style={{ width: "0%" }}
                  ></div>
                </div>

                <strong>
                  0
                </strong>

              </div>


              <div className="wq-status-row">

                <span>
                  Complete
                </span>

                <div className="wq-status-track">
                  <div
                    className="wq-status-fill wq-fill-complete"
                    style={{ width: "0%" }}
                  ></div>
                </div>

                <strong>
                  0
                </strong>

              </div>

            </div>


            {/* =================================================
                QUEUE HEALTH
            ================================================= */}

            <div className="wq-health-card">

              <div className="wq-health-left">

                <span className="wq-health-dot"></span>

                <div>
                  <strong>
                    Queue Health
                  </strong>

                  <span>
                    Currently stable
                  </span>
                </div>

              </div>


              <div className="wq-health-value">
                100%
              </div>

            </div>


            {/* =================================================
                TIME SUMMARY
            ================================================= */}

            <div className="wq-time-summary">

              <div>
                <span>
                  Active
                </span>

                <strong>
                  00:00
                </strong>
              </div>


              <div>
                <span>
                  Pending
                </span>

                <strong>
                  00:00
                </strong>
              </div>


              <div>
                <span>
                  Completed
                </span>

                <strong>
                  00:00
                </strong>
              </div>

            </div>

          </div>

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