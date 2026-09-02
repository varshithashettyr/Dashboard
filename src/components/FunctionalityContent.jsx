import {
  ChevronRight,
  ChevronDown,
  Layers3,
  ClipboardList,
  ArrowLeftRight,
  UserPlus,
  Users,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

/* =========================================================
   MAIN FUNCTIONALITY CONTENT
========================================================= */

function FunctionalityContent({
  team,
  functionality,
}) {

  /* =======================================================
     MASTER PAGE
  ======================================================= */

  if (functionality.id === "master") {
    return (
      <main className="functionality-content">

        {/* =================================================
            MASTER CONFIGURATION
        ================================================= */}

        <section className="master-section">

          <div className="master-section-header">

            <h2>
              Master Configuration
            </h2>

            <p>
              Configure master data and workflow settings
            </p>

          </div>

          <div className="master-grid">

            {functionality.modules.map(
              (module, index) => (

                <MasterField
                  key={`${module.name}-${index}`}
                  module={module}
                  index={index}
                />

              )
            )}

          </div>

        </section>


        {/* =================================================
            ADDRESS
        ================================================= */}

        {functionality.address && (

          <section className="address-section">

            <div className="address-header">

              <h2>
                Address
              </h2>

              <p>
                Manage address information
              </p>

            </div>

            <button
              className="address-field"
              type="button"
            >

              <span>
                {functionality.address.name}
              </span>

              <ChevronRight size={18} />

            </button>

          </section>

        )}

      </main>
    );
  }


  /* =======================================================
     NORMAL FUNCTIONALITIES
  ======================================================= */

  return (
    <main className="functionality-content">

      <section className="modules-section">

        <div className="section-heading">

          {/* <h2 className="modules-title">
            {functionality.name}
          </h2> */}

          {/* <p className="modules-subtitle">
            Manage tasks and workflow activities
          </p> */}

        </div>


        {functionality.modules.length > 0 ? (

          <div className="modules-row">

            {functionality.modules.map(
              (module, index) => (

                <ModuleCard
                  key={`${module}-${index}`}
                  name={module}
                  index={index}
                  functionalityId={functionality.id}
                />

              )
            )}

          </div>

        ) : (

          <div className="empty-module">
            No modules available
          </div>

        )}

      </section>


      {/* =================================================
          WORKFLOW STAGES
      ================================================= */}

      {functionality.id === "working-queue" && (
        <WorkflowStages />
      )}


      {/* =================================================
          ACTIVE TASKS
      ================================================= */}

      {functionality.id === "working-queue" && (
        <ActiveTasks />
      )}

    </main>
  );
}


/* =========================================================
   MASTER FIELD
========================================================= */

function MasterField({
  module,
  index,
}) {

  const isDropdown =
    module.type === "dropdown";

  return (
    <button
      className="master-field"
      type="button"
    >

      <span className="master-field-number">
        {String(index + 1).padStart(2, "0")}
      </span>


      <span className="master-field-content">
        {module.name}
      </span>


      <span className="master-field-action">

        {isDropdown ? (
          <ChevronDown size={17} />
        ) : (
          <ChevronRight size={17} />
        )}

      </span>

    </button>
  );
}


/* =========================================================
   NORMAL MODULE CARD
========================================================= */

function ModuleCard({
  name,
  index,
  functionalityId,
}) {

  const getIcon = () => {

    switch (functionalityId) {

      case "working-queue":
        return <ClipboardList size={23} />;

      case "service-sub-service":
        return <Layers3 size={23} />;

      case "task-qc-master-transfer":
        return <ArrowLeftRight size={23} />;

      case "client-onboarding":
        return <UserPlus size={23} />;

      case "employee-onboarding":
        return <Users size={23} />;

      case "permission":
        return <ShieldCheck size={23} />;

      case "report":
        return <BarChart3 size={23} />;

      default:
        return <Layers3 size={23} />;
    }
  };


  return (
    <button
      className="module-card"
      type="button"
    >

      <span className="module-number">
        {String(index + 1).padStart(2, "0")}
      </span>


      <span className="module-icon">
        {getIcon()}
      </span>


      <span className="module-name">
        {name}
      </span>


      <span className="module-arrow">
        <ChevronRight size={17} />
      </span>

    </button>
  );
}


/* =========================================================
   WORKFLOW STAGES
========================================================= */

function WorkflowStages() {

  const stages = [

    {
      number: "1",
      name: "Capture",
      color: "stage-blue",
    },

    {
      number: "2",
      name: "Review",
      color: "stage-purple",
    },

    {
      number: "3",
      name: "QC",
      color: "stage-yellow",
    },

    {
      number: "4",
      name: "Approval",
      color: "stage-green",
    },

    {
      number: "5",
      name: "Complete",
      color: "stage-purple",
    },

  ];


  return (
    <section className="workflow-stages">

      <h3>
        Workflow Stages
      </h3>


      <div className="stages-row">

        {stages.map((stage, index) => (

          <div
            className="stage-wrapper"
            key={stage.number}
          >

            <div className="stage-card">

              <span
                className={`stage-dot ${stage.color}`}
              />

              <div>

                <span className="stage-number">
                  Stage {stage.number}
                </span>

                <strong>
                  {stage.name}
                </strong>

              </div>

            </div>


            {index < stages.length - 1 && (

              <ChevronRight
                className="stage-arrow"
                size={17}
              />

            )}

          </div>

        ))}

      </div>

    </section>
  );
}


/* =========================================================
   ACTIVE TASKS
========================================================= */

function ActiveTasks() {

  const tasks = [

    {
      id: "N-2025-001",
      name: "Document Verification",
      assigned: "John Doe",
      priority: "High",
      status: "In Progress",
      date: "28-Aug-2026",
    },

    {
      id: "N-2025-002",
      name: "Data Validation",
      assigned: "Jane Smith",
      priority: "Medium",
      status: "Pending",
      date: "29-Aug-2026",
    },

    {
      id: "N-2025-003",
      name: "QC Review",
      assigned: "Michael Brown",
      priority: "Low",
      status: "Pending",
      date: "30-Aug-2026",
    },

    {
      id: "N-2025-004",
      name: "Final Approval",
      assigned: "Sarah Johnson",
      priority: "High",
      status: "Pending",
      date: "31-Aug-2026",
    },

  ];


  return (
    <section className="active-tasks">

      <h3>
        Active Tasks
      </h3>


      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Task ID</th>
              <th>Task Name</th>
              <th>Assigned To</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>

          </thead>


          <tbody>

            {tasks.map((task) => (

              <tr key={task.id}>

                <td>
                  {task.id}
                </td>

                <td>
                  {task.name}
                </td>

                <td>
                  {task.assigned}
                </td>

                <td>

                  <span
                    className={`priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>

                </td>

                <td>

                  <span
                    className={`status ${
                      task.status === "In Progress"
                        ? "progress"
                        : "pending"
                    }`}
                  >
                    {task.status}
                  </span>

                </td>

                <td>
                  {task.date}
                </td>

                <td>

                  <button
                    className="action-button"
                    type="button"
                  >
                    ⋮
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      <button
        className="view-all-button"
        type="button"
      >
        View All Tasks
      </button>

    </section>
  );
}


export default FunctionalityContent;