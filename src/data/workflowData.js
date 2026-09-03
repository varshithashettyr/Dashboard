export const teams = [
  "N",
  "P",
  "Z",
  "ZA",
  "C",
  "GMI",
  "PB",
];

export const functionalityData = [
  {
    id: "working-queue",
    name: "Working Queue",

    modules: [
      "QC Form",
      "Task Allocation",
      "QA Form",
      "Query",
      "Working Queue",
    ],
  },

  {
    id: "service-sub-service",
    name: "Service/Sub-Service",

    modules: [
      "Services",
      "Sub-Services",
    ],
  },

  {
    id: "master",
    name: "Master",

    modules: [
      {
        name: "Sub-Team",
        type: "dropdown",
      },

      {
        name: "Timezone",
        type: "dropdown",
      },

      {
        name: "SOW",
        type: "dropdown",
      },

      {
        name: "Role",
        type: "dropdown",
      },

      {
        name: "Priority",
        type: "dropdown",
      },

      {
        name: "EWS",
        type: "normal",
      },

      {
        name: "Service Category",
        type: "dropdown",
      },

      {
        name: "Reason Map",
        type: "normal",
      },

      {
        name: "Engagement Type",
        type: "dropdown",
      },

      {
        name: "Hourly Rate",
        type: "normal",
      },

      {
        name: "Department",
        type: "dropdown",
      },

      {
        name: "No. of VA/BSE",
        type: "normal",
      },

      {
        name: "Admin Charges",
        type: "normal",
      },

      {
        name: "Billing Cycle",
        type: "dropdown",
      },

      {
        name: "Client Off-Boarding",
        type: "normal",
      },

      {
        name: "Task Status",
        type: "dropdown",
      },

      {
        name: "Task/QC Transfer/Reopen/TAT Reason",
        type: "dropdown",
      },
    ],

    address: {
      name: "Address",
      type: "normal",
    },
  },

  {
    id: "task-qc-master-transfer",
    name: "Task/QC Master/Transfer",

    modules: [
      "QC Transfer",
      "Task Transfer",
    ],
  },

  {
    id: "client-onboarding",
    name: "Client Onboarding",

    modules: [
      "Details",
      "Engagement",
      "Assign Primary & Secondary BSE",
      "Feedback",
    ],
  },

  {
    id: "employee-onboarding",
    name: "Employee Onboarding",

    modules: [
      "Onboarding",
      "Audit Services",
      "Status",
    ],
  },

  {
    id: "permission",
    name: "Permission",

    modules: [],
  },

  {
    id: "report",
    name: "Report",

    modules: [],
  },
];