import { teams } from "../data/workflowData";

function TeamNav() {
  return (
    <div className="team-nav">

      {teams.map((team) => (
        <div
          key={team}
          className="team-item"
        >
          {team}
        </div>
      ))}

    </div>
  );
}

export default TeamNav;