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


export default FunctionalityContent;