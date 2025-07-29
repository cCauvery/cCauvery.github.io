export interface FacultyMember {
  name: string;
  designation: string;
  department: string;
  imgSrc: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  qualification?: string;
  supervisors: string;
  imgSrc: string;
}

export interface TeamData {
  Professor: FacultyMember[];
  Members: TeamMember[];
}

export const iisc: TeamData = {
  Professor: [
    {
      name: 'Prof. Praveen C Ramamurthy',
      designation: 'Chair & Professor ',
      department: 'ICWaR & Dept. of Materials Engineering',
      imgSrc: 'assets/images/Faculty/IISc/IISc_Praveen C Ramamurthy.png'
    },
    {
      name: 'Prof. Nagesh Kumar Dasika',
      designation: 'Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/IISc/IISc_Nagesh Kumar Dasika.jpg'
    },
    {
      name: 'Prof. Sekhar M',
      designation: 'Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/IISc/IISc_Sekhar M.jpg'
    },
    {
      name: 'Prof. V.V. Srinivas ',
      designation: 'Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/IISc/IISc_V. V. Srinivas.jpg'
    },
    {
      name: 'Dr. Lakshminarayana Rao',
      designation: 'Associate Professor',
      department: 'Centre for Sustainable Technologies',
      imgSrc: 'assets/images/Faculty/IISc/IISc_L N Rao.jpg'
    },
    {
      name: 'Dr. Rajarshi Das Bhowmik',
      designation: 'Assistant Professor',
      department: 'Interdisciplinary Centre for Water Research (ICWaR)',
      imgSrc: 'assets/images/Faculty/IISc/IISc_Rajarshi Das Bhowmik.jpg'
    },
    {
      name: 'Dr. Bramha Dutt Vishwakarma',
      designation: 'Assistant Professor, ICWaR',
      department: 'Interdisciplinary Centre for Water Research (ICWaR)',
      imgSrc: 'assets/images/Faculty/IISc/IISc_Bramha Vishwakarma.jpg'
    },
    {
      name: 'Dr. Debsunder Dutta',
      designation: 'Assistant Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/IISc/IISc_Debsunder Dutta.jpg'
    }
  ],
  Members: [
    {
      name: 'Dr. Suyog Gupta',
      designation: 'Research Associate',
      qualification: 'Ph.D',
      supervisors: 'Prof. Praveen C Ramamurthy',
      imgSrc: 'assets/images/Staffs/IISc/Dr.Suyog_Gupta.webp '
    },
    {
      name: 'Dr. Retinder Kour ',
      designation: 'Research Associate',
      qualification: 'Ph.D',
      supervisors: 'Prof. Praveen C Ramamurthy',
      imgSrc: 'assets/images/Staffs/IISc/Dr.RetinderK.webp'
    },
    {
      name: 'Dr. Dagani Koteswara Rao ',
      designation: 'Research Associate',
      qualification: 'Ph.D',
      supervisors: 'Prof. Srinivas V.V.',
      imgSrc: 'assets/images/Staffs/IISc/Dr.Koteswara_Rao.jpg'
    },
    {
      name: 'Dr. Daljeet Singh Dhanjal',
      designation: 'Senior Project Associate',
      qualification: 'Ph.D',
      supervisors: 'Prof. Praveen C Ramamurthy',
      imgSrc: 'assets/images/Staffs/IISc/Dr.DaljeetSD.webp'
    },
    {
      name: 'Dr. Suhail Ahmed',
      designation: 'Senior Research Fellow',
      qualification: 'Ph.D',
      supervisors: 'Prof. Praveen C Ramamurthy',
      imgSrc: 'assets/images/Staffs/IISc/Dr.SuhailAhmad.jpg'
    },
    {
      name: 'Mr. Ramesh N',
      designation: 'Project Associate II',
      qualification: 'M.Sc',
      supervisors: 'Dr. Lakshminarayana Rao',
      imgSrc: 'assets/images/Staffs/IISc/Ramesh_N.jpg'
    },
    {
      name: 'Ms. Swetha G',
      designation: 'Program Assistant',
      qualification: 'M.Com',
      supervisors: 'Prof. Praveen C Ramamurthy',
      imgSrc: 'assets/images/Staffs/IISc/Swetha.jpg '
    }
  ],
};

export const nitt: TeamData = {
  Professor: [
    {
      name: 'Dr. Nisha Radhakrishnan',
      designation: 'Associate Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/NITT/Dr.Nisha_Radhakrishnan.jpeg'
    },
    {
      name: 'Dr. R. Manjula',
      designation: 'Associate Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/NITT/Dr.R.Manjula.jpg'
    },
    {
      name: 'Dr. S. Saravanan',
      designation: 'Associate Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/NITT/Dr.S.Saravanan.JPG'
    },
    {
      name: 'Dr. Aneesh Mathew',
      designation: 'Assistant Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/NITT/Dr.Aneesh_Mathew.jpg'
    },
    {
      name: 'Dr. Laveti N V Satish',
      designation: 'Assistant Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/NITT/Dr.Laveti_NV.jpg'
    },
    {
      name: 'Dr. P. Prabu',
      designation: 'Assisstant Professor',
      department: 'Dept. of Civil Engineering',
      imgSrc: 'assets/images/Faculty/NITT/Dr.P.Prabu.jpg'
    }
  ],
  Members: [
    {
      name: 'M.Banu',
      designation: 'Project Associate',
      qualification: 'M.Tech Geoinformatics',
      supervisors: 'Dr. Nisha Radhakrishnan',
      imgSrc: 'assets/images/Staffs/NITT/BanuM (Project Associate).jpg'
    },
    {
      name: 'J.Haarinie Subbha',
      designation: 'Project Associate',
      qualification: 'M.E Irrigation Water Management',
      supervisors: 'Dr. R. Manjula',
      imgSrc: 'assets/images/Staffs/NITT/HaarinieS (Project Associate).jpg'
    },
    {
      name: 'M. Pavithra Mathisu',
      designation: 'Scientific Administrative Assistant',
      qualification: 'M.Com',
      supervisors: 'Dr. Nisha Radhakrishnan',
      imgSrc: 'assets/images/Staffs/NITT/Pavithra Mathisu (Scientific Administrative Assistant).jpg'
    },
    {
      name: 'S. Vidhya Shangari ',
      designation: 'Project Assistant',
      qualification: 'M.Tech Structural Engineering',
      supervisors: 'Dr. R. Manjula',
      imgSrc: 'assets/images/Staffs/NITT/S.Vidhya Shangari  (Project Assisatant).jpg'
    },
    {
      name: 'S. Kirana Haasika ',
      designation: 'Project Assistant',
      qualification: 'B.E Agricultural Engineering',
      supervisors: 'Dr. Nisha Radhakrishnan & Dr. R. Manjula',
      imgSrc: 'assets/images/Staffs/NITT/S. KIRANA HAASIKA (Project Assistant).jpg'
    },
    {
      name: 'S. Karthikeyan ',
      designation: 'Project Assistant',
      qualification: 'B.E Agricultural Engineering',
      supervisors: 'Dr. Nisha Radhakrishnan & Dr. S. Saravannan',
      imgSrc: 'assets/images/Staffs/NITT/Karthikeyan Selvaraj (Project Assistant).jpeg'
    },
    {
      name: 'M. Muneeskumar ',
      designation: 'Project Assistant',
      qualification: 'M.E Environmental Engineering',
      supervisors: 'Dr. Nisha Radhakrishnan & Dr. S. Saravannan',
      imgSrc: 'assets/images/Staffs/NITT/MUNEESKUMAR M (Project Assistant ).jpg'
    },
    {
      name: 'K. Kalaivanan ',
      designation: 'Project Assistant',
      qualification: 'M.E Structural Engineering',
      supervisors: 'Dr. Nisha Radhakrishnan & Dr. S. Saravannan',
      imgSrc: 'assets/images/Staffs/NITT/Kalaivanan K. (Project Assistant).jpg'
    },
  ],
};
