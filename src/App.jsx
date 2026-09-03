import { useState } from "react";

import {
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

import FunctionalityContent from "./components/FunctionalityContent";

import "./App.css";


/* =========================================================
   FUNCTIONALITY ICON
========================================================= */

function FunctionalityIcon({ id }) {
  const iconProps = {
    size: 22,
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
   TEAM NAVIGATION
========================================================= */

function TeamNav({
  selectedTeam,
  onTeamChange,
}) {
  return (
    <div className="team-nav">

      {teams.map((team) => (
        <button
          key={team}
          type="button"
          className={`team-item ${
            selectedTeam === team
              ? "selected"
              : ""
          }`}
          onClick={() => onTeamChange(team)}
          aria-pressed={selectedTeam === team}
        >
          {team}
        </button>
      ))}

    </div>
  );
}


/* =========================================================
   FUNCTIONALITY NAVIGATION
========================================================= */

function FunctionalityNav({
  selectedFunctionality,
  onSelect,
}) {

  /*
    These are the exact labels required
    for the functionality navigation.
  */

  const functionalityLabels = {
    "working-queue":
      "Working Queue",

    "service-sub-service":
      "Service/Sub-Service",

    "master":
      "Master",

    "task-qc-master-transfer":
      "Task/QC Master/Transfer",

    "client-onboarding":
      "Client Onboarding",

    "employee-onboarding":
      "Employee Onboarding",

    "permission":
      "Permission",

    "report":
      "Report",
  };


  return (
    <nav className="functionality-nav">

      <div className="functionality-list">

        {functionalityData.map(
          (functionality) => {

            const label =
              functionalityLabels[
                functionality.id
              ] || functionality.name;

            return (
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
                  onSelect(
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
                  {label}
                </span>

              </button>
            );
          }
        )}

      </div>

    </nav>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {

  /* =======================================================
     SELECTED TEAM
     
     N is selected initially.
     Clicking P, Z, ZA, C, GMI or PB changes it.
  ======================================================= */

  const [
    selectedTeam,
    setSelectedTeam,
  ] = useState("N");


  /* =======================================================
     SELECTED FUNCTIONALITY
  ======================================================= */

  const [
    selectedFunctionality,
    setSelectedFunctionality,
  ] = useState(
    "working-queue"
  );


  /* =======================================================
     ACTIVE FUNCTIONALITY
  ======================================================= */

  const activeFunctionality =
    functionalityData.find(
      (item) =>
        item.id ===
        selectedFunctionality
    ) || functionalityData[0];


  return (
    <div className="app">

      <div className="dashboard">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="header">

          {/* B LOGO */}

          <div
            className="brand-logo"
            aria-label="Brickwork"
          >
            B
          </div>


          {/* TEAM ROW */}

          <TeamNav
            selectedTeam={selectedTeam}
            onTeamChange={setSelectedTeam}
          />


          {/* ADMIN USER */}

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
            BODY
        ================================================= */}

        <div className="dashboard-body">

          {/* =================================================
              EMPTY LEFT SIDEBAR

              Sidebar remains visible.
              There is intentionally no content inside.
          ================================================= */}

          <aside
            className="empty-sidebar"
            aria-label="Empty sidebar"
          />


          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <main className="dashboard-main">

            {/* FUNCTIONALITY ROW */}

            <FunctionalityNav
              selectedFunctionality={
                selectedFunctionality
              }
              onSelect={
                setSelectedFunctionality
              }
            />


            {/* CONTENT */}

            <FunctionalityContent
              team={selectedTeam}
              functionality={
                activeFunctionality
              }
            />

          </main>

        </div>

      </div>

    </div>
  );
}


export default App;