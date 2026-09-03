import { useState } from "react";

import "./TaskAllocation.css";


function TaskAllocation() {

  const [formData, setFormData] = useState({
    client: "",
    medium: "Email",
    department: "",
    service: "",
    subService: "",
    priority: "",
    complexity: "",
    taskReceived: "",
    timeZone: "UTC-05:00 - Eastern Time (US & Canada)",
    noOfTasks: 1,
    subjectLine: "",
  });


  /* =========================================================
     HANDLE FIELD CHANGE
  ========================================================= */

  const handleChange = (field, value) => {

    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

  };


  /* =========================================================
     ADD
  ========================================================= */

  const handleAdd = () => {

    console.log("Task Request:", formData);

  };


  /* =========================================================
     RESET
  ========================================================= */

  const handleReset = () => {

    setFormData({
      client: "",
      medium: "Email",
      department: "",
      service: "",
      subService: "",
      priority: "",
      complexity: "",
      taskReceived: "",
      timeZone: "UTC-05:00 - Eastern Time (US & Canada)",
      noOfTasks: 1,
      subjectLine: "",
    });

  };


  return (

    <div className="task-allocation-container">


      {/* =====================================================
          FORM
      ===================================================== */}

      <div className="tar-form">


        {/* ===============================================
            CLIENT + MEDIUM
        =============================================== */}

        <div className="tar-row">

          <div className="tar-field">

            <label>
              Client:<span>*</span>
            </label>

            <select
              value={formData.client}
              onChange={(event) =>
                handleChange(
                  "client",
                  event.target.value
                )
              }
            >

              <option value="">
                Select
              </option>

              <option value="Client 1">
                Client 1
              </option>

              <option value="Client 2">
                Client 2
              </option>

            </select>

          </div>


          <div className="tar-field">

            <label>
              Medium:<span>*</span>
            </label>

            <select
              value={formData.medium}
              onChange={(event) =>
                handleChange(
                  "medium",
                  event.target.value
                )
              }
            >

              <option value="Email">
                Email
              </option>

              <option value="Phone">
                Phone
              </option>

              <option value="Chat">
                Chat
              </option>

            </select>

          </div>

        </div>


        {/* ===============================================
            DEPARTMENT
        =============================================== */}

        <div className="tar-row">

          <div className="tar-field">

            <label>
              Department:<span>*</span>
            </label>

            <select
              value={formData.department}
              onChange={(event) =>
                handleChange(
                  "department",
                  event.target.value
                )
              }
            >

              <option value="">
              </option>

              <option value="Operations">
                Operations
              </option>

              <option value="Support">
                Support
              </option>

            </select>

          </div>


          <div className="tar-empty-field">
          </div>

        </div>


        {/* ===============================================
            SERVICE + SUB-SERVICE
        =============================================== */}

        <div className="tar-row">

          <div className="tar-field">

            <label>
              Service:<span>*</span>
            </label>

            <select
              value={formData.service}
              onChange={(event) =>
                handleChange(
                  "service",
                  event.target.value
                )
              }
            >

              <option value="">
                Select
              </option>

              <option value="Service 1">
                Service 1
              </option>

              <option value="Service 2">
                Service 2
              </option>

            </select>

          </div>


          <div className="tar-field">

            <label>
              Sub-Service:<span>*</span>
            </label>

            <select
              value={formData.subService}
              onChange={(event) =>
                handleChange(
                  "subService",
                  event.target.value
                )
              }
            >

              <option value="">
                Select
              </option>

              <option value="Sub-Service 1">
                Sub-Service 1
              </option>

              <option value="Sub-Service 2">
                Sub-Service 2
              </option>

            </select>

          </div>

        </div>


        {/* ===============================================
            PRIORITY + COMPLEXITY
        =============================================== */}

        <div className="tar-row">

          <div className="tar-field">

            <label>
              Priority:<span>*</span>
            </label>


            <div className="tar-radio-group">

              <label className="tar-radio">

                <input
                  type="radio"
                  name="priority"
                  value="High"
                  checked={
                    formData.priority === "High"
                  }
                  onChange={(event) =>
                    handleChange(
                      "priority",
                      event.target.value
                    )
                  }
                />

                <span>
                  High
                </span>

              </label>


              <label className="tar-radio">

                <input
                  type="radio"
                  name="priority"
                  value="Medium"
                  checked={
                    formData.priority === "Medium"
                  }
                  onChange={(event) =>
                    handleChange(
                      "priority",
                      event.target.value
                    )
                  }
                />

                <span>
                  Medium
                </span>

              </label>


              <label className="tar-radio">

                <input
                  type="radio"
                  name="priority"
                  value="Low"
                  checked={
                    formData.priority === "Low"
                  }
                  onChange={(event) =>
                    handleChange(
                      "priority",
                      event.target.value
                    )
                  }
                />

                <span>
                  Low
                </span>

              </label>

            </div>

          </div>


          <div className="tar-field">

            <label>
              Complexity:<span>*</span>
            </label>

            <select
              value={formData.complexity}
              onChange={(event) =>
                handleChange(
                  "complexity",
                  event.target.value
                )
              }
            >

              <option value="">
              </option>

              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>

            </select>

          </div>

        </div>


        {/* ===============================================
            TASK RECEIVED + TIME ZONE
        =============================================== */}

        <div className="tar-row">

          <div className="tar-field">

            <label>
              Task received:<span>*</span>
            </label>

            <input
              type="text"
              value={formData.taskReceived}
              onChange={(event) =>
                handleChange(
                  "taskReceived",
                  event.target.value
                )
              }
            />

          </div>


          <div className="tar-field">

            <label>
              Time Zone:<span>*</span>
            </label>

            <select
              value={formData.timeZone}
              onChange={(event) =>
                handleChange(
                  "timeZone",
                  event.target.value
                )
              }
            >

              <option value="UTC-05:00 - Eastern Time (US & Canada)">
                UTC-05:00 - Eastern Time (US & Canada)
              </option>

              <option value="UTC+05:30 - India Standard Time">
                UTC+05:30 - India Standard Time
              </option>

              <option value="UTC+00:00 - Greenwich Mean Time">
                UTC+00:00 - Greenwich Mean Time
              </option>

            </select>

          </div>

        </div>


        {/* ===============================================
            DATE EXAMPLE
        =============================================== */}

        <div className="tar-date-hint">
          (ex: Wed 7/10/2019 6:59 AM)
        </div>


        {/* ===============================================
            NUMBER OF TASKS
        =============================================== */}

        <div className="tar-row">

          <div className="tar-field">

            <label>
              No of tasks:<span>*</span>
            </label>

            <input
              type="number"
              min="1"
              value={formData.noOfTasks}
              onChange={(event) =>
                handleChange(
                  "noOfTasks",
                  event.target.value
                )
              }
            />

          </div>


          <div className="tar-empty-field">
          </div>

        </div>


        {/* ===============================================
            SUBJECT LINE
        =============================================== */}

        <div className="tar-subject-row">

          <label>
            Subject line:<span>*</span>
          </label>

          <textarea
            value={formData.subjectLine}
            onChange={(event) =>
              handleChange(
                "subjectLine",
                event.target.value
              )
            }
          />

        </div>


        {/* ===============================================
            NOTE
        =============================================== */}

        <div className="tar-note">

          <strong>
            Note:
          </strong>{" "}
          Not to capture client critical data under
          the subject line field.

        </div>


        {/* ===============================================
            BUTTONS
        =============================================== */}

        <div className="tar-actions">

          <button
            type="button"
            className="tar-add-button"
            onClick={handleAdd}
          >
            Add
          </button>


          <button
            type="button"
            className="tar-reset-button"
            onClick={handleReset}
          >
            Reset
          </button>

        </div>


      </div>

    </div>

  );
}


export default TaskAllocation;