import {
  ClipboardList,
  Layers,
  Database,
  ArrowLeftRight,
  UserPlus,
  Users,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import { functionalityData } from "../data/workflowData";


const icons = [
  ClipboardList,
  Layers,
  Database,
  ArrowLeftRight,
  UserPlus,
  Users,
  ShieldCheck,
  BarChart3,
];


function FunctionalitySidebar({
  selectedFunctionality,
  onSelectFunctionality,
}) {

  return (
    <aside className="functionality-sidebar">

      {/* <div className="sidebar-heading">
        N FUNCTIONALITY
      </div> */}


      <div className="functionality-list">

        {functionalityData.map(
          (functionality, index) => {

            const Icon = icons[index];

            const isActive =
              selectedFunctionality.id ===
              functionality.id;

            return (
              <button
                key={functionality.id}
                type="button"
                className={
                  isActive
                    ? "functionality-item active"
                    : "functionality-item"
                }
                onClick={() =>
                  onSelectFunctionality(
                    functionality
                  )
                }
              >

                <span className="radio">

                  {isActive && (
                    <span className="radio-dot" />
                  )}

                </span>


                <Icon
                  size={20}
                  className="functionality-icon"
                />


                <span className="functionality-name">
                  {functionality.name}
                </span>

              </button>
            );

          }
        )}

      </div>

    </aside>
  );
}

export default FunctionalitySidebar;