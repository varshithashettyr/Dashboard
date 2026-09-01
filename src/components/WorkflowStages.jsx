export const teams = [
  "N",
  "P",
  "Z",
  "ZA",
  "C",
  "GMI",
  "PB",
];

export const functionalities = [
  {
    id: "working-queue",
    name: "Working Queue",
    description:
      "Manage and monitor all active tasks and workflow items.",
    modules: [
      { name: "For QC" },
      { name: "Task Allocation" },
      { name: "QA Form" },
      { name: "Query" },
      { name: "Working Queue" },
    ],
  },

  {
    id: "service-sub-service",
    name: "Service / Sub-Service",
    description:
      "Manage service and sub-service configurations.",
    modules: [
      { name: "Services" },
      { name: "Sub-Services" },
    ],
  },

  {
    id: "master",
    name: "Master",
    description:
      "Manage master configurations and reference data.",
    modules: [
      { name: "Customer Connect" },
      { name: "BSE Excellence" },
      { name: "BAC Excellence Supervisor" },
    ],
  },

  {
    id: "task-qc-transfer",
    name: "Task / QC Master / Transfer",
    description:
      "Manage task, quality control and transfer workflows.",
    modules: [
      { name: "QC Transfer" },
      { name: "Task Transfer" },
      // { name: "Task Transfer" },
      // { name: "Reopen Task" },
      // { name: "TAT Reason" },
    ],
  },

  {
    id: "client-onboarding",
    name: "Client Onboarding",
    description:
      "Manage client onboarding and engagement workflows.",
    modules: [
      { name: "Engagement" },
      { name: "Assign Primary & Secondary BSE" },
      { name: "Feedback" },
      { name: "Audit Services" },
      { name: "Status" },
    ],
  },

  {
    id: "employee-onboarding",
    name: "Employee Onboarding",
    description:
      "Manage employee onboarding and configuration.",
    modules: [
      { name: "Sub-Team" },
      { name: "Timezone" },
      { name: "Role" },
      { name: "Priority" },
      { name: "Address" },
      { name: "EWS" },
      { name: "Service Category" },
      { name: "Reason Map" },
      { name: "Service Category" },
      { name: "Engagement Type" },
    ],
  },

  {
    id: "permission",
    name: "Permission",
    description:
      "Manage user roles and access permissions.",
    modules: [
      { name: "User Permission" },
      { name: "Role Permission" },
      { name: "Access Control" },
    ],
  },

  {
    id: "report",
    name: "Report",
    description:
      "View and manage workflow and performance reports.",
    modules: [
      { name: "Reports" },
      { name: "Task Report" },
      { name: "QC Report" },
      { name: "Export" },
    ],
  },
];