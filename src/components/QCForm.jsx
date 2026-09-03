import { useState } from "react";
import "./QCForm.css";

function QCForm() {
  /* =========================================================
     VIEW
  ========================================================= */

  const [currentView, setCurrentView] = useState("form");


  /* =========================================================
     QC FORM DATA
  ========================================================= */

  const [formData, setFormData] = useState({
    taskId: "",
    employee: "",
    auditType: "",
    client: "",
    taskCreated: "",
    qcDate: "",
    l1: "",
    priority: "",
    l2: "",
    l3: "",
    subject: "",
    selfRatedComments: "",
    tatReason: "",
    comments: "",
    startDate: "",
    completedDate: "",
    totalHours: "",
  });


  /* =========================================================
     RATINGS
  ========================================================= */

  const [ratings, setRatings] = useState({});


  /* =========================================================
     QUESTION COMMENTS
  ========================================================= */

  const [questionComments, setQuestionComments] = useState({});


  /* =========================================================
     HOLD DATA

     Dummy data is only for displaying the Hold list.
     When the user clicks Hold, their actual form data
     is added to this list.
  ========================================================= */

  const [holdTasks, setHoldTasks] = useState([

    {
      id: 1,
      taskId: "P26DM03226",
      client: "Sam Jackson L",
      employee: "Khaja Nizamuddin",
      services: "Document Management",
      subService: "Create/extract/modify/reconcile files",
      subjectLine: "UK Expense report update",
      priority: "High",
      complexity: "Complex",
      qcReceived: "15-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Post-QC",
      qcTransferredBy: "",
    },

    {
      id: 2,
      taskId: "P26DM09009",
      client: "Sabine Bruckner",
      employee: "Shubham Kumar Singh",
      services: "Expense Management",
      subService: "Prepare expense reports",
      subjectLine: "July Expense report - Eleni",
      priority: "High",
      complexity: "Intermediate",
      qcReceived: "15-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Post-QC",
      qcTransferredBy: "",
    },

    {
      id: 3,
      taskId: "P26CM06482",
      client: "Eugenia Zeibig",
      employee: "Sradha Deb",
      services: "Calendar Management",
      subService:
        "Checking /Followup Availability of the participants",
      subjectLine:
        "Checking availability for Geoff's Panel + Case Study Round",
      priority: "Medium",
      complexity: "Intermediate",
      qcReceived: "15-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Post-QC",
      qcTransferredBy: "",
    },

    {
      id: 4,
      taskId: "P26FS01576",
      client: "Claudia Beurnard",
      employee: "Nandan Das",
      services: "Finance Support",
      subService: "PO Queries",
      subjectLine:
        "ONC25-10872 - Jackie - Vendor issues.",
      priority: "Medium",
      complexity: "Complex",
      qcReceived: "14-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Pre-QC",
      qcTransferredBy: "",
    },

    {
      id: 5,
      taskId: "P26CM06352",
      client: "Kate Gattuso Duffy",
      employee: "Madesh Manickam",
      services: "Calendar Management",
      subService:
        "Checking /Followup Availability of the participants",
      subjectLine:
        "RE: Tenex / Pfizer Marketing Sync - shared avails with Dean",
      priority: "High",
      complexity: "Intermediate",
      qcReceived: "14-Aug-2026",
      auditor: "Arindam Chatterjee",
      auditType: "Post-QC",
      qcTransferredBy: "",
    },

  ]);


  /* =========================================================
     SEARCH
  ========================================================= */

  const [searchText, setSearchText] = useState("");


  /* =========================================================
     EMPLOYEE FILTER
  ========================================================= */

  const [selectedEmployee, setSelectedEmployee] =
    useState("Select All");


  /* =========================================================
     AUDIT TYPE FILTER
  ========================================================= */

  const [selectedAuditType, setSelectedAuditType] =
    useState("--Select All--");


  /* =========================================================
     QUESTIONS
  ========================================================= */

  const questions = [

    {
      id: 1,
      category: "FTR (First Time Right)",
      question:
        "Done right the first time? (Understanding Project requirements)",
    },

    {
      id: 2,
      category: "FTR (First Time Right)",
      question:
        "Request Management / Appropriate Response(s) / Asked appropriate questions if there was a need",
    },

    {
      id: 3,
      category: "TAT Adherence",
      question:
        "Requests answered/acknowledged and delivered on time within TAT",
    },

    {
      id: 4,
      category: "TAT Adherence",
      question:
        "Sense of urgency / Demonstrated sense of urgency by prioritizing tasks based on deadlines and importance.",
    },

    {
      id: 5,
      category: "TAT Adherence",
      question:
        "Were the emails/request acknowledged timely",
    },

    {
      id: 6,
      category: "Documentation",
      question:
        "Have client's preferences been captured and updated in the tracker or job aid? (only if applicable)",
    },

    {
      id: 7,
      category: "Documentation",
      question:
        "Check-in call summary documented/MOM and shared with the client",
    },

    {
      id: 8,
      category: "Standard Operating Procedures",
      question:
        "Proper escalation process followed",
    },

    {
      id: 9,
      category: "Standard Operating Procedures",
      question:
        "Workflow Procedures adherence",
    },

    {
      id: 10,
      category: "Project Delivery",
      question:
        "Proper closing of request (Focused results on delivery)",
    },

    {
      id: 11,
      category: "Project Delivery",
      question:
        "Further assistance offered (Identify a need to follow up) / Proactively offered additional support or solution to deliver better",
    },

    {
      id: 12,
      category: "Professional Communication",
      question:
        "Use of probing questions / Effective communication",
    },

    {
      id: 13,
      category: "Professional Communication",
      question:
        "Communication skills",
    },

    {
      id: 14,
      category: "Professional Communication",
      question:
        "E-mail etiquette followed / Accurate grammar, spelling and well-structured sentences.",
    },

    {
      id: 15,
      category: "Backup Readiness",
      question:
        "Regular KT sessions scheduled",
    },

    {
      id: 16,
      category: "Backup Readiness",
      question:
        "Project related updates shared on a timely manner",
    },

    {
      id: 17,
      category: "Professional Conduct",
      question:
        "Use of Professional language",
    },

    {
      id: 18,
      category: "Professional Conduct",
      question:
        "Appropriate grammar & sentence formation",
    },

    {
      id: 19,
      category: "Professional Conduct",
      question:
        "Being courteous on reminders / questions / timely interactions",
    },

  ];


  /* =========================================================
     FORM CHANGE
  ========================================================= */

  const handleChange = (field, value) => {

    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

  };


  /* =========================================================
     RATING CHANGE
  ========================================================= */

  const handleRatingChange = (id, value) => {

    setRatings((previous) => ({
      ...previous,
      [id]: value,
    }));

  };


  /* =========================================================
     QUESTION COMMENT
  ========================================================= */

  const handleQuestionCommentChange = (id, value) => {

    setQuestionComments((previous) => ({
      ...previous,
      [id]: value,
    }));

  };


  /* =========================================================
     HOLD

     The user's actual entered data is added to the
     Hold list.

     Form data is NOT cleared.
  ========================================================= */

  const handleHold = () => {

    const newHoldTask = {

      id: Date.now(),

      taskId: formData.taskId || "New Task",

      client: formData.client,

      employee: formData.employee,

      services: formData.l2,

      subService: formData.l3,

      subjectLine: formData.subject,

      priority: formData.priority,

      complexity: "",

      qcReceived: formData.qcDate,

      auditor: "",

      auditType: formData.auditType,

      qcTransferredBy: "",

    };


    setHoldTasks((previous) => [
      ...previous,
      newHoldTask,
    ]);


    setCurrentView("hold");

  };


  /* =========================================================
     BACK TO QC FORM
  ========================================================= */

  const handleBack = () => {

    setCurrentView("form");

  };


  /* =========================================================
     EMPLOYEE OPTIONS
  ========================================================= */

  const employeeOptions = [
    ...new Set(
      holdTasks
        .map((task) => task.employee)
        .filter(Boolean)
    ),
  ];


  /* =========================================================
     AUDIT TYPE OPTIONS
  ========================================================= */

  const auditTypeOptions = [
    ...new Set(
      holdTasks
        .map((task) => task.auditType)
        .filter(Boolean)
    ),
  ];


  /* =========================================================
     FILTERED HOLD DATA
  ========================================================= */

  const filteredHoldTasks = holdTasks.filter((task) => {

    /* Employee filter */

    if (
      selectedEmployee !== "Select All" &&
      task.employee !== selectedEmployee
    ) {

      return false;

    }


    /* Audit type filter */

    if (
      selectedAuditType !== "--Select All--" &&
      task.auditType !== selectedAuditType
    ) {

      return false;

    }


    /* Search */

    const search = searchText
      .trim()
      .toLowerCase();


    if (!search) {

      return true;

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


    return searchableText.includes(search);

  });


  /* =========================================================
     HOLD VIEW
  ========================================================= */

  if (currentView === "hold") {

    return (

      <div className="qc-hold-page">


        {/* =================================================
            BACK
        ================================================= */}

        <div className="qc-hold-back-row">

          <button
            type="button"
            className="qc-back-button"
            onClick={handleBack}
          >
            ← Back to QC Form
          </button>

        </div>


        {/* =================================================
            TITLE
        ================================================= */}

        <div className="qc-hold-title">
          QC
        </div>


        {/* =================================================
            TABS
        ================================================= */}

        <div className="qc-hold-tabs">

          <button className="qc-hold-tab">
            New (60)
          </button>

          <button className="qc-hold-tab">
            Transfer (25)
          </button>

          <button className="qc-hold-tab active">
            Hold ({holdTasks.length})
          </button>

          <button className="qc-hold-tab">
            Rework (0)
          </button>

          <button className="qc-hold-tab">
            Completed (341)
          </button>

        </div>


        {/* =================================================
            FILTER AREA
        ================================================= */}

        <div className="qc-hold-filter-row">


          <div className="qc-hold-total">
            Total : {filteredHoldTasks.length}
          </div>


          <div className="qc-hold-filter">

            <label>
              Employee:
            </label>

            <select
              value={selectedEmployee}
              onChange={(event) =>
                setSelectedEmployee(
                  event.target.value
                )
              }
            >

              <option value="Select All">
                Select All
              </option>

              {employeeOptions.map((employee) => (

                <option
                  key={employee}
                  value={employee}
                >
                  {employee}
                </option>

              ))}

            </select>

          </div>


          <div className="qc-hold-filter">

            <label>
              Audit type:
            </label>

            <select
              value={selectedAuditType}
              onChange={(event) =>
                setSelectedAuditType(
                  event.target.value
                )
              }
            >

              <option value="--Select All--">
                --Select All--
              </option>

              {auditTypeOptions.map((auditType) => (

                <option
                  key={auditType}
                  value={auditType}
                >
                  {auditType}
                </option>

              ))}

            </select>

          </div>


          <div className="qc-hold-search">

            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(event) =>
                setSearchText(
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


        {/* =================================================
            HOLD TABLE
        ================================================= */}

        <div className="qc-hold-table-wrapper">

          <table className="qc-hold-table">

            <thead>

              <tr>

                <th className="hold-expand">
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

                <th>
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

              {filteredHoldTasks.length > 0 ? (

                filteredHoldTasks.map((task) => (

                  <tr key={task.id}>

                    <td className="hold-expand-cell">
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
                    className="hold-no-record"
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


  /* =========================================================
     QC FORM VIEW
  ========================================================= */

  return (

    <div className="qc-form-container">


      <div className="qc-form-title">
        QC Form
      </div>


      {/* =====================================================
          TOP SECTION
      ===================================================== */}

      <div className="qc-top-area">


        {/* LEFT */}

        <div className="qc-task-details">

          <div className="qc-form-grid">

            <QcInput
              label="Task ID:"
              value={formData.taskId}
              onChange={(value) =>
                handleChange("taskId", value)
              }
            />

            <QcInput
              label="Employee:"
              value={formData.employee}
              onChange={(value) =>
                handleChange("employee", value)
              }
            />

            <QcInput
              label="Audit type:"
              value={formData.auditType}
              onChange={(value) =>
                handleChange("auditType", value)
              }
            />

            <QcInput
              label="Client:"
              value={formData.client}
              onChange={(value) =>
                handleChange("client", value)
              }
            />

            <QcInput
              label="Task Created:"
              value={formData.taskCreated}
              onChange={(value) =>
                handleChange("taskCreated", value)
              }
            />

            <QcInput
              label="QC Date:"
              value={formData.qcDate}
              onChange={(value) =>
                handleChange("qcDate", value)
              }
            />

            <QcInput
              label="L1:"
              value={formData.l1}
              onChange={(value) =>
                handleChange("l1", value)
              }
            />

            <QcInput
              label="Priority:"
              value={formData.priority}
              onChange={(value) =>
                handleChange("priority", value)
              }
            />

            <QcInput
              label="L2:"
              value={formData.l2}
              onChange={(value) =>
                handleChange("l2", value)
              }
            />

            <QcInput
              label="L3:"
              value={formData.l3}
              onChange={(value) =>
                handleChange("l3", value)
              }
            />

            <QcInput
              label="Subject:"
              value={formData.subject}
              onChange={(value) =>
                handleChange("subject", value)
              }
            />

          </div>


          <div className="qc-long-field">

            <label>
              Self rated comments:
            </label>

            <textarea
              value={formData.selfRatedComments}
              onChange={(event) =>
                handleChange(
                  "selfRatedComments",
                  event.target.value
                )
              }
            />

          </div>


          <div className="qc-inline-field">

            <label>
              TAT Reason:
            </label>

            <select
              value={formData.tatReason}
              onChange={(event) =>
                handleChange(
                  "tatReason",
                  event.target.value
                )
              }
            >

              <option value="">
                Select
              </option>

              <option value="Within TAT">
                Within TAT
              </option>

              <option value="Delayed">
                Delayed
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>


          <div className="qc-long-field">

            <label>
              Comments:
            </label>

            <textarea
              value={formData.comments}
              onChange={(event) =>
                handleChange(
                  "comments",
                  event.target.value
                )
              }
            />

          </div>

        </div>


        {/* RIGHT */}

        <div className="qc-right-area">

          <table className="qc-small-table">

            <thead>

              <tr>

                <th>
                  Start date
                </th>

                <th>
                  Completed date
                </th>

                <th>
                  Total hours
                </th>

                <th>
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>
                  <input
                    value={formData.startDate}
                    onChange={(event) =>
                      handleChange(
                        "startDate",
                        event.target.value
                      )
                    }
                  />
                </td>

                <td>
                  <input
                    value={formData.completedDate}
                    onChange={(event) =>
                      handleChange(
                        "completedDate",
                        event.target.value
                      )
                    }
                  />
                </td>

                <td>
                  <input
                    value={formData.totalHours}
                    onChange={(event) =>
                      handleChange(
                        "totalHours",
                        event.target.value
                      )
                    }
                  />
                </td>

                <td>
                  <button
                    type="button"
                    className="qc-view-button"
                  >
                    View
                  </button>
                </td>

              </tr>

            </tbody>

          </table>


          <table className="qc-rating-table">

            <thead>

              <tr>
                <th>Rating</th>
                <th>Rating Definition</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Did not Meet Did not meet expectations</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Need Improvement</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Met most expectations</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Met all expectations</td>
              </tr>

              <tr>
                <td>5</td>
                <td>Beyond expectations</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>


      {/* =====================================================
          QUESTIONS
      ===================================================== */}

      <div className="qc-questions-wrapper">

        <table className="qc-questions-table">

          <thead>

            <tr>

              <th className="sl-column">
                Sl. No
              </th>

              <th className="category-column">
                Category
              </th>

              <th className="question-column">
                Question
              </th>

              <th className="rating-column">
                Rating
              </th>

              <th className="comments-column">
                Comments
              </th>

            </tr>

          </thead>

          <tbody>

            {questions.map((item) => (

              <tr key={item.id}>

                <td className="center-cell">
                  {item.id}
                </td>

                <td>
                  {item.category}
                </td>

                <td>
                  {item.question}
                </td>

                <td>

                  <select
                    className="question-rating"
                    value={
                      ratings[item.id] || ""
                    }
                    onChange={(event) =>
                      handleRatingChange(
                        item.id,
                        event.target.value
                      )
                    }
                  >

                    <option value="">
                      Select
                    </option>

                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                  </select>

                </td>

                <td>

                  <textarea
                    className="question-comment"
                    value={
                      questionComments[item.id] || ""
                    }
                    onChange={(event) =>
                      handleQuestionCommentChange(
                        item.id,
                        event.target.value
                      )
                    }
                  />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* =====================================================
          BUTTONS
      ===================================================== */}

      <div className="qc-actions">

        <button
          type="button"
          className="qc-hold-button"
          onClick={handleHold}
        >
          Hold
        </button>


        <button
          type="button"
          className="qc-complete-button"
        >
          Complete
        </button>

      </div>

    </div>

  );
}


/* =========================================================
   INPUT COMPONENT
========================================================= */

function QcInput({
  label,
  value,
  onChange,
}) {

  return (

    <div className="qc-input-field">

      <label>
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
      />

    </div>

  );
}


export default QCForm;