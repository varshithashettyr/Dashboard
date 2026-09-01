import {
  Package,
  Clock3,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Total Tasks",
    value: "128",
    subtitle: "All active tasks",
    icon: Package,
    type: "blue",
  },
  {
    title: "In Progress",
    value: "76",
    subtitle: "Tasks in progress",
    icon: Clock3,
    type: "purple",
  },
  {
    title: "Pending QC",
    value: "24",
    subtitle: "Awaiting quality check",
    icon: ShieldCheck,
    type: "cyan",
  },
  {
    title: "Completed",
    value: "320",
    subtitle: "This month",
    icon: CheckCircle2,
    type: "orange",
  },
];

function StatCards() {
  return (
    <section className="stats-grid">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (
          <div
            className={`stat-card ${stat.type}`}
            key={stat.title}
          >

            <div className="stat-icon">
              <Icon size={27} />
            </div>

            <div className="stat-info">

              <span>
                {stat.title}
              </span>

              <strong>
                {stat.value}
              </strong>

              <small>
                {stat.subtitle}
              </small>

            </div>

          </div>
        );
      })}

    </section>
  );
}

export default StatCards;