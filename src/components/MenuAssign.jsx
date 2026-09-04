import { useState } from "react";
import "./MenuAssign.css";

function MenuAssign() {
  const [subTeam, setSubTeam] = useState("BWI TEAM");
  const [employee, setEmployee] = useState("Select employee");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedMenus, setSelectedMenus] = useState([]);

  const menuData = [
    [1, "Home", "Overview"],
    [2, "Home", "Announcement"],
    [3, "Home", "Setting"],
    [4, "Home", "Utilization"],
    [5, "Allocation", "Add Internal Utilization"],
    [6, "Working Queue", "Internal Task"],
    [7, "Working Queue", "QC View"],
    [8, "Working Queue", "QC View New"],
    [9, "Working Queue", "QC Form"],
    [10, "Working Queue", "Working Queue"],
    [11, "Reports", "Status Report"],
    [12, "Reports", "QA Status Report"],
    [13, "Reports", "Task Consolidated Report"],
    [14, "Reports", "QC Pending"],
    [15, "Reports", "Pending cases"],
    [16, "Reports", "Allocation Report"],
    [17, "Reports", "Update Time"],
    [18, "Reports", "Login Report"],
    [19, "Reports", "Utilization Report"],
    [20, "Reports", "TAT Report"],
    [21, "Reports", "Query Report"],
    [22, "Reports", "QC Score"],
    [23, "Reports", "Feedback Report"],
    [24, "Transfer", "QC Transfer"],
    [25, "Transfer", "Transfer to REA"],
    [26, "Master", "Client"],
    [27, "Master", "Service Master"],
    [28, "Master", "Permissions"],
    [29, "Master", "Process Master"],
    [30, "Master", "Location Master"],
    [31, "Master", "Work Queue Master"],
    [32, "Master", "Client Master"],
    [33, "Master", "Certification"],
    [34, "Master", "Employee"],
    [35, "Ticket", "New Ticket Request"],
    [36, "Ticket", "Manage Ticket"],
    [37, "Business Excellence", "Billing and Forecast Report"],
    [38, "Business Excellence", "Billing & Forecast Consolidated"],
    [39, "Business Excellence", "Team - Billed Vs Unbilled"],
    [40, "Compliance Excellence", "Billing Compliance VA"],
    [41, "Compliance Excellence", "Billing Compliance Primary Client"],
    [42, "Project Excellence", "Processing Efficiency"],
    [43, "Project Excellence", "Processing EfficiencyL2"],
    [44, "Project Excellence", "TAT Report"],
    [45, "Quality Excellence", "Quality Audit Report"],
    [46, "Program Excellence", "CSAT Online Feedback Report"],
    [47, "Program Excellence", "CSAT Customer Report"],
    [48, "Program Excellence", "Utilization"],
    [49, "Program Excellence", "CSAT Response Rate"],
    [50, "Program Excellence", "CSAT Response Unique"],
    [51, "Program Excellence", "CSAT VA"],
    [52, "Program Excellence", "Service Usage L2"],
    [53, "Program Excellence", "Service Usage L3"],
    [54, "Program Excellence", "CSAT Department"],
    [55, "Program Excellence", "Program Utilization"],
    [56, "Program Excellence", "Feedback Summary"],
    [57, "Customer Excellence", "Seamless Backup Report (KRA)"],
    [58, "BSE Excellence", "VA Excellence"],
    [59, "BSE Excellence", "VA Excellence Supervisor"],
    [60, "BSE Excellence", "VA Excellence Report"],
    [61, "Team Onboarding", "VA"],
    [62, "Customer Onboarding", "Customer"],
    [63, "Customer Onboarding", "Customer Connect"],
    [64, "Customer Onboarding", "Customer EWS"],
    [65, "KRA Report", "Utilization_KRA"],
    [66, "KRA Report", "Efficiency_KRA"],
    [67, "KRA Report", "CSAT_KRA"],
    [68, "KRA Report", "QA_KRA"],
    [69, "KRA Report", "Backup KRA"],
  ];

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    if (checked) {
      setSelectedMenus(menuData.map((item) => item[0]));
    } else {
      setSelectedMenus([]);
    }
  };

  const handleMenuCheckbox = (sl) => {
    setSelectedMenus((previous) => {
      const updated = previous.includes(sl)
        ? previous.filter((item) => item !== sl)
        : [...previous, sl];

      setSelectAll(updated.length === menuData.length);
      return updated;
    });
  };

  const handleSubmit = () => {
    console.log("Menu Assign:", {
      subTeam,
      employee,
      selectedMenus,
    });
  };

  return (
    <div className="menu-assign">
      <div className="menu-assign-title">Menu Assign</div>

      <div className="menu-filter-row">
        <div className="menu-filter-group">
          <label htmlFor="subTeam">Sub-Team:</label>
          <select
            id="subTeam"
            value={subTeam}
            onChange={(e) => setSubTeam(e.target.value)}
          >
            <option value="BWI TEAM">BWI TEAM</option>
            <option value="MIS TEAM">MIS TEAM</option>
            <option value="P-Team UK">P-Team UK</option>
            <option value="P-Team US">P-Team US</option>
            <option value="PW-TEAM">PW-TEAM</option>
            <option value="QC TEAM">QC TEAM</option>
          </select>
        </div>

        <div className="menu-filter-group">
          <label htmlFor="employee">Employee:</label>
          <select
            id="employee"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          >
            <option value="Select employee">Select employee</option>
            <option value="Ssathish Padmanaban">Ssathish Padmanaban</option>
          </select>
        </div>

        <button
          type="button"
          className="menu-submit-btn"
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>

      <div className="menu-table-wrapper">
        <table className="menu-table">
          <thead>
            <tr>
              <th className="sl-column">SL</th>
              <th className="main-menu-column">Main menu</th>
              <th className="sub-menu-column">Sub menu</th>
              <th className="checkbox-column">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  aria-label="Select all"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {menuData.map(([sl, mainMenu, subMenu]) => (
              <tr key={sl}>
                <td className="sl-column">{sl}</td>
                <td className="main-menu-column">{mainMenu}</td>
                <td className="sub-menu-column">{subMenu}</td>
                <td className="checkbox-column">
                  <input
                    type="checkbox"
                    checked={selectedMenus.includes(sl)}
                    onChange={() => handleMenuCheckbox(sl)}
                    aria-label={`Select ${subMenu}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuAssign;