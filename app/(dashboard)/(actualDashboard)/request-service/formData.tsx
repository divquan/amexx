export const formData = [
  {
    title: "Where are you looking to unlock your potential?",
    groupKey: "unlockPotential",
    items: [
      {
        title: "Free School Consultation Call",
        description: "Get into your dream grad school.",
        value: "school-consultation",
        isSchool: true,
      },
      {
        title: "Free Work Consultation Call",
        description: "Land your dream job.",
        value: "job-consultation",
        isSchool: false,
      },
    ],
  },
  {
    title: "What type of service are you looking for?",
    groupKey: "typeOfService",
    items: [
      {
        title: "School Packages",
        description:
          "We guide your through the entire process, from school list to the application documents.",
        value: "school-packages",
        isSchool: true,
      },
      {
        title: "Individual Services",
        description: "We help you prepare compelling application documents.",
        value: "individual-service",
        isSchool: false,
      },
    ],
  },
  {
    title: "Which package best fits your needs?",
    groupKey: "packageFitNeed",
    items: [
      {
        title: "Basic",
        description:
          "Assistance to apply to 2 schools/programs of your choice. It includes 2 School CVs, 2 Statements/Application Essays, and 6 sets of sample Recommendation Letters.",
        value: "basic-school-packages",
        isSchool: true,
      },
      {
        title: "Intermediate",
        description:
          "Assistance to apply to 3 schools/programs of your choice. It includes a Personalized List of Potential Schools, 3 School CVs, 3 Statements/Application Essays, and 9 sets of sample Recommendation Letters.",
        value: "intermediate-school-packages",
        isSchool: false,
      },
      {
        title: "Comprehensive",
        description:
          "Assistance to apply to 5 schools/programs of your choice. It includes a Personalized List of Potential Schools, 5 School CVs, 5 Statements/Application Essays, and 15 sets of sample Recommendation Letters.",
        value: "comprehensive-school-packages",
        isSchool: false,
      },
    ],
  },
];
