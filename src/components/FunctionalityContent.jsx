import { useEffect, useState } from "react";

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
import QCTransfer from "./QCTransfer";


/* =========================================================
   PERMISSION MENU DATA
========================================================= */

const permissionMenuData = [
  { id: 1, mainMenu: "Home", subMenu: "Overview" },
  { id: 2, mainMenu: "Home", subMenu: "Announcement" },
  { id: 3, mainMenu: "Home", subMenu: "Setting" },
  { id: 4, mainMenu: "Home", subMenu: "Utilization" },

  {
    id: 5,
    mainMenu: "Allocation",
    subMenu: "Add Internal Utilization",
  },

  {
    id: 6,
    mainMenu: "Working Queue",
    subMenu: "Internal Task",
  },
  {
    id: 7,
    mainMenu: "Working Queue",
    subMenu: "QC View",
  },
  {
    id: 8,
    mainMenu: "Working Queue",
    subMenu: "QC View New",
  },
  {
    id: 9,
    mainMenu: "Working Queue",
    subMenu: "QC Form",
  },
  {
    id: 10,
    mainMenu: "Working Queue",
    subMenu: "Working Queue",
  },

  {
    id: 11,
    mainMenu: "Reports",
    subMenu: "Status Report",
  },
  {
    id: 12,
    mainMenu: "Reports",
    subMenu: "QA Status Report",
  },
  {
    id: 13,
    mainMenu: "Reports",
    subMenu: "Task Consolidated Report",
  },
  {
    id: 14,
    mainMenu: "Reports",
    subMenu: "QC Pending",
  },
  {
    id: 15,
    mainMenu: "Reports",
    subMenu: "Pending cases",
  },
  {
    id: 16,
    mainMenu: "Reports",
    subMenu: "Allocation Report",
  },
  {
    id: 17,
    mainMenu: "Reports",
    subMenu: "Update Time",
  },
  {
    id: 18,
    mainMenu: "Reports",
    subMenu: "Login Report",
  },
  {
    id: 19,
    mainMenu: "Reports",
    subMenu: "Utilization Report",
  },
  {
    id: 20,
    mainMenu: "Reports",
    subMenu: "TAT Report",
  },
  {
    id: 21,
    mainMenu: "Reports",
    subMenu: "Query Report",
  },
  {
    id: 22,
    mainMenu: "Reports",
    subMenu: "QC Score",
  },
  {
    id: 23,
    mainMenu: "Reports",
    subMenu: "Feedback Report",
  },

  {
    id: 24,
    mainMenu: "Transfer",
    subMenu: "QC Transfer",
  },
  {
    id: 25,
    mainMenu: "Transfer",
    subMenu: "Transfer to REA",
  },

  {
    id: 26,
    mainMenu: "Master",
    subMenu: "Client",
  },
  {
    id: 27,
    mainMenu: "Master",
    subMenu: "Service Master",
  },
  {
    id: 28,
    mainMenu: "Master",
    subMenu: "Permissions",
  },
  {
    id: 29,
    mainMenu: "Master",
    subMenu: "Process Master",
  },
  {
    id: 30,
    mainMenu: "Master",
    subMenu: "Location Master",
  },
  {
    id: 31,
    mainMenu: "Master",
    subMenu: "Work Queue Master",
  },
  {
    id: 32,
    mainMenu: "Master",
    subMenu: "Client Master",
  },
  {
    id: 33,
    mainMenu: "Master",
    subMenu: "Certification",
  },
  {
    id: 34,
    mainMenu: "Master",
    subMenu: "Employee",
  },

  {
    id: 35,
    mainMenu: "Ticket",
    subMenu: "New Ticket Request",
  },
  {
    id: 36,
    mainMenu: "Ticket",
    subMenu: "Manage Ticket",
  },

  {
    id: 37,
    mainMenu: "Business Excellence",
    subMenu: "Billing and Forecast Report",
  },
  {
    id: 38,
    mainMenu: "Business Excellence",
    subMenu: "Billing & Forecast Consolidated",
  },
  {
    id: 39,
    mainMenu: "Business Excellence",
    subMenu: "Team - Billed Vs Unbilled",
  },

  {
    id: 40,
    mainMenu: "Compliance Excellence",
    subMenu: "Billing Compliance VA",
  },
  {
    id: 41,
    mainMenu: "Compliance Excellence",
    subMenu: "Billing Compliance Primary Client",
  },

  {
    id: 42,
    mainMenu: "Project Excellence",
    subMenu: "Processing Efficiency",
  },
  {
    id: 43,
    mainMenu: "Project Excellence",
    subMenu: "Processing EfficiencyL2",
  },
  {
    id: 44,
    mainMenu: "Project Excellence",
    subMenu: "TAT Report",
  },

  {
    id: 45,
    mainMenu: "Quality Excellence",
    subMenu: "Quality Audit Report",
  },

  {
    id: 46,
    mainMenu: "Program Excellence",
    subMenu: "CSAT Online Feedback Report",
  },
  {
    id: 47,
    mainMenu: "Program Excellence",
    subMenu: "CSAT Customer Report",
  },
  {
    id: 48,
    mainMenu: "Program Excellence",
    subMenu: "Utilization",
  },
  {
    id: 49,
    mainMenu: "Program Excellence",
    subMenu: "CSAT Response Rate",
  },
  {
    id: 50,
    mainMenu: "Program Excellence",
    subMenu: "CSAT Response Unique",
  },
  {
    id: 51,
    mainMenu: "Program Excellence",
    subMenu: "CSAT VA",
  },
  {
    id: 52,
    mainMenu: "Program Excellence",
    subMenu: "Service Usage L2",
  },
  {
    id: 53,
    mainMenu: "Program Excellence",
    subMenu: "Service Usage L3",
  },
  {
    id: 54,
    mainMenu: "Program Excellence",
    subMenu: "CSAT Department",
  },
  {
    id: 55,
    mainMenu: "Program Excellence",
    subMenu: "Program Utilization",
  },
  {
    id: 56,
    mainMenu: "Program Excellence",
    subMenu: "Feedback Summary",
  },

  {
    id: 57,
    mainMenu: "Customer Excellence",
    subMenu: "Seamless Backup Report (KRA)",
  },

  {
    id: 58,
    mainMenu: "BSE Excellence",
    subMenu: "VA Excellence",
  },
  {
    id: 59,
    mainMenu: "BSE Excellence",
    subMenu: "VA Excellence Supervisor",
  },
  {
    id: 60,
    mainMenu: "BSE Excellence",
    subMenu: "VA Excellence Report",
  },

  {
    id: 61,
    mainMenu: "Team Onboarding",
    subMenu: "VA",
  },

  {
    id: 62,
    mainMenu: "Customer Onboarding",
    subMenu: "Customer",
  },
  {
    id: 63,
    mainMenu: "Customer Onboarding",
    subMenu: "Customer Connect",
  },
  {
    id: 64,
    mainMenu: "Customer Onboarding",
    subMenu: "Customer EWS",
  },

  {
    id: 65,
    mainMenu: "KRA Report",
    subMenu: "Utilization_KRA",
  },
  {
    id: 66,
    mainMenu: "KRA Report",
    subMenu: "Efficiency_KRA",
  },
  {
    id: 67,
    mainMenu: "KRA Report",
    subMenu: "CSAT_KRA",
  },
  {
    id: 68,
    mainMenu: "KRA Report",
    subMenu: "QA_KRA",
  },
  {
    id: 69,
    mainMenu: "KRA Report",
    subMenu: "Backup KRA",
  },
];


/* =========================================================
   MAIN FUNCTIONALITY CONTENT
========================================================= */

function FunctionalityContent({ team, functionality }) {

  const [selectedModule, setSelectedModule] =
    useState(null);


  /* =======================================================
     RESET MODULE WHEN MAIN FUNCTIONALITY CHANGES
  ======================================================= */

  useEffect(() => {

    setSelectedModule(null);

  }, [functionality?.id]);


  /* =======================================================
     SAFETY CHECK
  ======================================================= */

  if (!functionality) {
    return null;
  }


  /* =======================================================
     MASTER
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

            {functionality.modules?.map(
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


        {/* ADDRESS */}

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
     PERMISSION
  ======================================================= */

  if (functionality.id === "permission") {

    return (

      <main className="functionality-content">

        <section className="modules-section">

          <div className="modules-row">

            <ModuleCard
              name="Menu Assign"
              index={0}
              functionalityId="permission"
              selected={
                selectedModule === "Menu Assign"
              }
              onClick={() => {

                setSelectedModule(
                  selectedModule === "Menu Assign"
                    ? null
                    : "Menu Assign"
                );

              }}
            />

          </div>


          {selectedModule === "Menu Assign" && (

            <div
              className="module-content-wrapper"
              key="permission-menu-assign"
            >

              <PermissionMenuAssign />

            </div>

          )}

        </section>

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

            {functionality.modules.map(
              (module, index) => {

                const isSelected =
                  selectedModule === module;

                return (

                  <ModuleCard
                    key={`${functionality.id}-${module}-${index}`}
                    name={module}
                    index={index}
                    functionalityId={
                      functionality.id
                    }
                    selected={isSelected}

                    onClick={() => {

                      setSelectedModule(
                        isSelected
                          ? null
                          : module
                      );

                    }}

                  />

                );

              }
            )}

          </div>

        ) : (

          <div className="empty-module">
            No modules available
          </div>

        )}


        {/* =================================================
            SELECTED MODULE CONTENT
        ================================================= */}

        {selectedModule && (

          <div
            key={`${functionality.id}-${selectedModule}`}
            className="module-content-wrapper"
          >


            {/* =============================================
                NORMALIZE MODULE NAME
            ============================================= */}

            {(() => {

              const moduleName =
                String(selectedModule)
                  .trim()
                  .toLowerCase();


              /* =============================================
                  WORKING QUEUE
              ============================================= */

              if (
                moduleName ===
                "working queue"
              ) {

                return <WorkingQueue />;

              }


              /* =============================================
                  TASK ALLOCATION
              ============================================= */

              if (
                moduleName ===
                "task allocation"
              ) {

                return <TaskAllocation />;

              }


              /* =============================================
                  QC FORM
              ============================================= */

              if (
                moduleName === "qc form" ||
                moduleName === "for qc"
              ) {

                return <QCForm />;

              }


              /* =============================================
                  QC VIEW
              ============================================= */

              if (
                moduleName ===
                "qc view"
              ) {

                return <QCView />;

              }


              /* =============================================
                  QC TRANSFER
              ============================================= */

              if (
                moduleName ===
                "qc transfer"
              ) {

                return <QCTransfer />;

              }


              /* =============================================
                  OTHER MODULES
              ============================================= */

              return (

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

              );

            })()}

          </div>

        )}

      </section>

    </main>

  );
}


/* =========================================================
   PERMISSION - MENU ASSIGN
========================================================= */

function PermissionMenuAssign() {

  const [subTeam, setSubTeam] =
    useState("BWI TEAM");

  const [employee, setEmployee] =
    useState("Select employee");

  const [selectedRows, setSelectedRows] =
    useState([]);

  const [submitted, setSubmitted] =
    useState(false);


  /* =======================================================
     SELECT ALL
  ======================================================= */

  const allSelected =
    selectedRows.length ===
    permissionMenuData.length;


  const handleSelectAll = (checked) => {

    if (checked) {

      setSelectedRows(
        permissionMenuData.map(
          (item) => item.id
        )
      );

    } else {

      setSelectedRows([]);

    }

  };


  /* =======================================================
     INDIVIDUAL CHECKBOX
  ======================================================= */

  const handleRowSelect = (id) => {

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
     SUBMIT
  ======================================================= */

  const handleSubmit = () => {

    setSubmitted(true);

    console.log(
      "Menu Assign:",
      {
        subTeam,
        employee,
        selectedMenus: selectedRows,
      }
    );

  };


  return (

    <div className="permission-menu-assign">


      {/* =================================================
          PAGE TITLE
      ================================================= */}

      <div className="permission-page-header">

        <h2>
          Menu Assign
        </h2>

      </div>


      {/* =================================================
          FILTER SECTION
      ================================================= */}

      <div className="permission-filter-section">


        {/* SUB TEAM */}

        <div className="permission-field">

          <label htmlFor="permission-sub-team">
            Sub-Team:
          </label>

          <select
            id="permission-sub-team"
            value={subTeam}
            onChange={(e) =>
              setSubTeam(e.target.value)
            }
          >

            <option>
              BWI TEAM
            </option>

            <option>
              MIS TEAM
            </option>

            <option>
              P-Team UK
            </option>

            <option>
              P-Team US
            </option>

            <option>
              PW-TEAM
            </option>

            <option>
              QC TEAM
            </option>

          </select>

        </div>


        {/* EMPLOYEE */}

        <div className="permission-field">

          <label htmlFor="permission-employee">
            Employee:
          </label>

          <select
            id="permission-employee"
            value={employee}
            onChange={(e) =>
              setEmployee(e.target.value)
            }
          >

            <option>
              Select employee
            </option>

            <option>
              Ssathish Padmanaban
            </option>

          </select>

        </div>


        {/* SUBMIT */}

        <button
          type="button"
          className="permission-submit"
          onClick={handleSubmit}
        >
          submit
        </button>

      </div>


      {/* =================================================
          TABLE
      ================================================= */}

      <div className="permission-table-wrapper">

        <table className="permission-table">

          <thead>

            <tr>

              <th className="permission-sl-column">
                SL
              </th>

              <th>
                Main menu
              </th>

              <th>
                Sub menu
              </th>

              <th className="permission-check-column">

                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={(e) =>
                    handleSelectAll(
                      e.target.checked
                    )
                  }
                  aria-label="Select all"
                />

              </th>

            </tr>

          </thead>


          <tbody>

            {permissionMenuData.map(
              (item) => (

                <tr key={item.id}>

                  <td className="permission-sl-column">
                    {item.id}
                  </td>

                  <td>
                    {item.mainMenu}
                  </td>

                  <td>
                    {item.subMenu}
                  </td>

                  <td className="permission-check-column">

                    <input
                      type="checkbox"
                      checked={
                        selectedRows.includes(
                          item.id
                        )
                      }
                      onChange={() =>
                        handleRowSelect(
                          item.id
                        )
                      }
                      aria-label={
                        `Select ${item.subMenu}`
                      }
                    />

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>


      {/* =================================================
          SUBMIT STATUS
      ================================================= */}

      {submitted && (

        <div className="permission-submit-status">

          Menu permissions updated for{" "}

          <strong>
            {employee}
          </strong>

        </div>

      )}

    </div>

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
  selected,
  onClick,
}) {


  /* =======================================================
     GET ICON
  ======================================================= */

  const getIcon = () => {

    switch (functionalityId) {

      case "working-queue":

        return (
          <ClipboardList size={23} />
        );


      case "service-sub-service":

        return (
          <Layers3 size={23} />
        );


      case "task-qc-master-transfer":

        return (
          <ArrowLeftRight size={23} />
        );


      case "client-onboarding":

        return (
          <UserPlus size={23} />
        );


      case "employee-onboarding":

        return (
          <Users size={23} />
        );


      case "permission":

        return (
          <ShieldCheck size={23} />
        );


      case "report":

        return (
          <BarChart3 size={23} />
        );


      default:

        return (
          <Layers3 size={23} />
        );

    }

  };


  return (

    <button
      className={`module-card ${
        selected
          ? "active"
          : ""
      }`}
      type="button"
      onClick={onClick}
      aria-pressed={selected}
    >


      {/* MODULE NUMBER */}

      <span className="module-number">

        {String(index + 1).padStart(2, "0")}

      </span>


      {/* MODULE ICON */}

      <span className="module-icon">

        {getIcon()}

      </span>


      {/* MODULE NAME */}

      <span className="module-name">

        {name}

      </span>


      {/* MODULE ARROW */}

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