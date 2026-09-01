import { useState } from "react";

import {
  Menu,
  Layers3,
  Database,
  ArrowLeftRight,
  UserPlus,
  Users,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import {
  teams,
  functionalityData,
} from "./data/workflowData";

import FunctionalityContent
  from "./components/FunctionalityContent";

import "./App.css";


/* =========================================================
   FUNCTIONALITY ICON
========================================================= */

function FunctionalityIcon({ id }) {

  const iconProps = {
    size: 20,
    strokeWidth: 1.8,
  };


  switch (id) {

    case "working-queue":
      return <Layers3 {...iconProps} />;

    case "service-sub-service":
      return <Layers3 {...iconProps} />;

    case "master":
      return <Database {...iconProps} />;

    case "task-qc-master-transfer":
      return <ArrowLeftRight {...iconProps} />;

    case "client-onboarding":
      return <UserPlus {...iconProps} />;

    case "employee-onboarding":
      return <Users {...iconProps} />;

    case "permission":
      return <ShieldCheck {...iconProps} />;

    case "report":
      return <BarChart3 {...iconProps} />;

    default:
      return <Layers3 {...iconProps} />;
  }
}


/* =========================================================
   APP
========================================================= */

function App() {

  const [selectedTeam, setSelectedTeam] =
    useState("N");

  const [selectedFunctionality, setSelectedFunctionality] =
    useState("working-queue");


  const activeFunctionality =
    functionalityData.find(
      (item) =>
        item.id === selectedFunctionality
    ) || functionalityData[0];


  return (

    <div className="app">

      <div className="dashboard">


        {/* =================================================
            HEADER
        ================================================= */}

        <header className="header">

          <div className="header-left">

            <button
              className="menu-button"
              type="button"
              aria-label="Menu"
            >
              <Menu size={25} />
            </button>


            <div
              className="brand-logo"
              aria-label="Brickwork"
            >
              B
            </div>

          </div>


          {/* RIGHT USER AREA */}

          <div className="header-user">

            <div className="user-avatar">
              AD
            </div>

            <div className="user-info">

              <span>
                Admin User
              </span>

            </div>

          </div>

        </header>


        {/* =================================================
            DASHBOARD BODY
        ================================================= */}

        <div className="dashboard-body">


          {/* =================================================
              LEFT SIDEBAR
          ================================================= */}

          <aside className="functionality-sidebar">

            {/* <div className="sidebar-heading">
              N Functionality
            </div> */}


            <div className="functionality-list">

              {functionalityData.map(
                (functionality) => (

                  <button
                    key={functionality.id}
                    type="button"
                    className={`functionality-item ${
                      selectedFunctionality ===
                      functionality.id
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedFunctionality(
                        functionality.id
                      )
                    }
                  >

                    <span className="functionality-icon">
                      <FunctionalityIcon
                        id={functionality.id}
                      />
                    </span>


                    <span className="functionality-name">
                      {functionality.name}
                    </span>

                  </button>

                )
              )}

            </div>

          </aside>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="dashboard-main">


            {/* =================================================
                TEAM NAVIGATION
            ================================================= */}

            <nav className="team-nav">

              {teams.map((team) => (

                <button
                  key={team}
                  type="button"
                  className={`team-item ${
                    selectedTeam === team
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedTeam(team)
                  }
                >
                  {team}
                </button>

              ))}

            </nav>


            {/* =================================================
                CONTENT
            ================================================= */}

            <FunctionalityContent
              team={selectedTeam}
              functionality={activeFunctionality}
            />

          </div>

        </div>

      </div>

    </div>
  );
}


export default App;