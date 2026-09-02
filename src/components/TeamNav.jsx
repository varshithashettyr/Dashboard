function TeamNav({
  teams,
  selectedTeam,
  onTeamChange,
}) {
  return (
    <nav className="team-nav">
      {teams.map((team) => (
        <button
          key={team}
          type="button"
          className={`team-item ${
            selectedTeam === team ? "selected" : ""
          }`}
          onClick={() => onTeamChange(team)}
        >
          {team}
        </button>
      ))}
    </nav>
  );
}

export default TeamNav;