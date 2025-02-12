export enum Quarter {
  Q1 = "Quarter 1",
  Q2 = "Quarter 2",
  Q3 = "Quarter 3",
  Q4 = "Quarter 4"
}

export interface Mission {
  heading: string;
  description: string;
  quarterLinks?: Partial<Record<Quarter, string>>;
}

export const missions: Mission[] = [
  {
    heading: "Mission 1",
    description: "Collection and Collation of Information of the River Basin",
    quarterLinks: {
      [Quarter.Q1]: "https://drive.google.com/file/d/1-exm8O8oTuHA99wVF3M3ONzna3rponWA/view?usp=sharing"
    }
  },
  {
    heading: "Mission 2",
    description: "Aviral Dhara"
  },
  {
    heading: "Mission 3",
    description: "Nirmal Dhara"
  },
  {
    heading: "Mission 4",
    description: "Ecological Restoration"
  },
  {
    heading: "Mission 5",
    description: "Sustainable Agriculture"
  },
  {
    heading: "Mission 6",
    description: "Geological Safeguarding"
  },
  {
    heading: "Mission 7",
    description: "Basin Protection from Natural Disasters"
  },
  {
    heading: "Mission 8",
    description: "River Hazard Management"
  },
  {
    heading: "Mission 9",
    description: "Environmental Knowledge Building and Sensitization"
  }
];
