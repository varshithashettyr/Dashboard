import { useState } from "react";
import "./QCForm.css";

function QCForm() {
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

  const [ratings, setRatings] = useState({});
  const [questionComments, setQuestionComments] = useState({});

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

  const handleChange = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleRatingChange = (id, value) => {
    setRatings((previous) => ({
      ...previous,
      [id]: value,
    }));
  };

  const handleQuestionCommentChange = (id, value) => {
    setQuestionComments((previous) => ({
      ...previous,
      [id]: value,
    }));
  };

  return (
    <div className="qc-form-container">

      {/* =====================================================
          TITLE
      ====================================================== */}

      <div className="qc-form-title">
        QC Form
      </div>


      {/* =====================================================
          TOP AREA
      ====================================================== */}

      <div className="qc-top-area">

        {/* LEFT - TASK INFORMATION */}

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
              className="l3-field"
            />

            <QcInput
              label="Subject:"
              value={formData.subject}
              onChange={(value) =>
                handleChange("subject", value)
              }
              className="subject-field"
            />

          </div>


          {/* SELF RATED COMMENTS */}

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


          {/* TAT REASON */}

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


          {/* COMMENTS */}

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


        {/* =================================================
            RIGHT SIDE
        ================================================== */}

        <div className="qc-right-area">


          {/* TASK TIMELINE */}

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
                    type="text"
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
                    type="text"
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
                    type="text"
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


          {/* RATING DEFINITION */}

          <table className="qc-rating-table">

            <thead>
              <tr>

                <th>
                  Rating
                </th>

                <th>
                  Rating Definition
                </th>

              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>
                  Did not Meet Did not meet expectations
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  Need Improvement
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>
                  Met most expectations
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>
                  Met all expectations
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>
                  Beyond expectations
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>


      {/* =====================================================
          QC QUESTIONS
      ====================================================== */}

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
                    value={ratings[item.id] || ""}
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

                    <option value="1">
                      1
                    </option>

                    <option value="2">
                      2
                    </option>

                    <option value="3">
                      3
                    </option>

                    <option value="4">
                      4
                    </option>

                    <option value="5">
                      5
                    </option>

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
          BOTTOM BUTTONS
      ====================================================== */}

      <div className="qc-actions">

        <button
          type="button"
          className="qc-hold-button"
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
   REUSABLE INPUT
========================================================= */

function QcInput({
  label,
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={`qc-input-field ${className}`}>

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