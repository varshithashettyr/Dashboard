import {
  Plus,
  ArrowLeftRight,
  ShieldCheck,
  RotateCcw,
  BarChart3,
  MoreHorizontal,
} from "lucide-react";


const actions = [
  {
    name: "Create Task",
    icon: Plus,
    type: "blue",
  },
  {
    name: "Task Transfer",
    icon: ArrowLeftRight,
    type: "purple",
  },
  {
    name: "QC Transfer",
    icon: ShieldCheck,
    type: "cyan",
  },
  {
    name: "Reopen Task",
    icon: RotateCcw,
    type: "orange",
  },
  {
    name: "View Reports",
    icon: BarChart3,
    type: "blue",
  },
  {
    name: "More Actions",
    icon: MoreHorizontal,
    type: "gray",
  },
];


function ActionPanel() {

  return (
    <section className="action-panel">

      <div className="panel-header">

        <h2>
          Actions
        </h2>

      </div>


      <div className="actions-grid">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <button
              key={action.name}
              className="action-button"
            >

              <span
                className={`action-icon ${action.type}`}
              >
                <Icon size={19} />
              </span>

              <span>
                {action.name}
              </span>

            </button>
          );
        })}

      </div>

    </section>
  );
}

export default ActionPanel;