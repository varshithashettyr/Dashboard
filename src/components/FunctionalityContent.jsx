import { useState } from "react";

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

import QCForm from "./QCForm";
import QCView from "./QCView";
import WorkingQueue from "./WorkingQueue";
import TaskAllocation from "./TaskAllocation";


/* =========================================================
   MAIN FUNCTIONALITY CONTENT
========================================================= */

function FunctionalityContent({ team, functionality }) {
  const [selectedModule, setSelectedModule] = useState(null);

  /* =======================================================
     SAFETY CHECK
  ======================================================= */

  if (!functionality) {
    return null;
  }


  /* =======================================================
     MASTER PAGE
  ======================================================= */

  if (functionality.id === "master") {
    return (
      <main className="functionality-content">

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

            {functionality.modules?.map((module, index) => (
              <MasterField
                key={`${module.name}-${index}`}
                module={module}
                index={index}
              />
            ))}

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


        {/* =================================================
            MODULE CARDS
        ================================================= */}

        {functionality.modules?.length > 0 ? (

          <div className="modules-row">

            {functionality.modules.map((module, index) => {

              const isSelected =
                selectedModule === module;

              return (
                <ModuleCard
                  key={`${module}-${index}`}
                  name={module}
                  index={index}
                  functionalityId={functionality.id}
                  selected={isSelected}
                  onClick={() => {

                    setSelectedModule(
                      isSelected ? null : module
                    );

                  }}
                />
              );

            })}

          </div>

        ) : (

          <div className="empty-module">
            No modules available
          </div>

        )}


        {/* =================================================
            WORKING QUEUE
        ================================================= */}

        {selectedModule === "Working Queue" && (
          <WorkingQueue />
        )}


        {/* =================================================
            TASK ALLOCATION
        ================================================= */}

        {selectedModule === "Task Allocation" && (
          <TaskAllocation />
        )}


        {/* =================================================
            QC FORM
        ================================================= */}

        {(selectedModule === "For QC" ||
          selectedModule === "QC Form") && (

          <QCForm />

        )}


        {/* =================================================
            QC VIEW
        ================================================= */}

        {selectedModule === "QC View" && (
          <QCView />
        )}


        {/* =================================================
            OTHER MODULES
        ================================================= */}

        {selectedModule &&
          selectedModule !== "Working Queue" &&
          selectedModule !== "Task Allocation" &&
          selectedModule !== "For QC" &&
          selectedModule !== "QC Form" &&
          selectedModule !== "QC View" && (

            <div className="selected-module-content">

              <div className="selected-module-header">

                <div>

                  <span className="selected-module-label">
                    Selected Module
                  </span>

                  <h3>
                    {selectedModule}
                  </h3>

                </div>

                <ChevronDown size={18} />

              </div>


              <div className="selected-module-placeholder">

                <p>
                  {selectedModule} content will be displayed here.
                </p>

              </div>

            </div>

          )}

      </section>

    </main>
  );
}


/* =========================================================
   MASTER FIELD
========================================================= */

function MasterField({ module, index }) {

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
  selected,
  onClick,
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
      className={`module-card ${
        selected ? "active" : ""
      }`}
      type="button"
      onClick={onClick}
      aria-pressed={selected}
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
   DATABASE ICON
========================================================= */

function DatabaseIcon() {

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >

      <ellipse
        cx="12"
        cy="5"
        rx="8"
        ry="3"
      />

      <path
        d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5"
      />

      <path
        d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7"
      />

    </svg>
  );
}


export default FunctionalityContent;