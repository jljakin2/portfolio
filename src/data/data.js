import mentorMatch from "../assets/mentorMatch.png";
import audiophile from "../assets/audiophile.png";

export const projects = [
  {
    name: "Mentor Match",
    screenshot: mentorMatch,
    github: "https://github.com/jljakin2/mentorMatch",
    live: "https://mentor-match-us.herokuapp.com/",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "Express",
      "MongoDB",
      "API",
      "Pug",
      "UI Design",
      "Bootstrap",
      "Chart.js",
      "Git",
    ],
    description: [
      "Solving real-world problems using software is my favorite thing about learning to code. This project stemmed from that passion. My organization has a mentoring program. Mentors and mentees are able to use an application to pair with each other. The problem was, the application had limited functionality and the license was expensive. Due to these reasons, my organization decided to cancel the license. I saw the opportunity to build a custom application that provided better functionality. Plus, since it was internal, the data privacy would improve as well. I was able to deploy the app using our internal cloud and Cloud Foundry.",
      "The app uses Node.js for the server-side. Express for all route handling. And the app follows the Model-View-Controller (MVC) design pattern. Most of the styling is from Bootstrap and a few items were custom designed and styled using CSS. A REST API manages the data that feeds into a Mongo Database. The app uses Pug to render data on the front end.",
      "Feel free to set up a profile on the platform and try out some of the functionality. Fans of the office might even recognize a few names.",
    ],
  },
  {
    name: "Audiophile",
    screenshot: audiophile,
    github: "https://github.com/jljakin2/audiophile",
    live: "https://audiophileapp.herokuapp.com/",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "Express",
      "MongoDB",
      "API",
      "React",
      "Styled-Components",
      "Redux",
      "Git",
    ],
    description: [
      "I found this project on Frontend Mentor. Frontend Mentor is a site that supplies UI designs so users can code the designs without support or tutorials. The challenges range from “Newbie” to “Guru”. This project rates as one of the most challenging projects on the platform.",
      "I used the MERN stack to complete this project. React allowed me to build a scalable front-end experience for the user. I also used Redux to help with the state management. All elements were custom styled using Styled Components. I built the backend using Node.js, Express, and MongoDB. I also built a REST API  for the front-end and back-end to communicate.  I used Redux-Thunk to request data to feed into the global state so each React component can get access to it.",
      "Take a look around the store and if you see anything you like. Add it to the cart and don’t worry…whatever you order is on the house.",
    ],
  },
];

export const technical = {
  positions: [
    {
      heading: "Senior Business Operations Specialist",
      experienceItems: [
        "Influenced stakeholders to continue an outsourced mentorship program by designing an in-house platform, enabling 300+ associates across North America to pair up as mentors/mentees with self-service functions, saving $16k annually. (See Mentor Match above)",
        "Empowered business clients with custom-designed Python scripts and GUIs created with Python libraries to clean, manipulate, and automate manual data processing, reducing time spent on task from 50 hours to 2 hours.",
        "Revamped a company-wide 360º management survey process with Catalytic and Power BI, eliminating the need to hire multiple interns, saving $20k in annual operating costs, and 1k+ hours in processing time.",
      ],
    },
  ],
  skills: [
    { skillName: "HTML", skillLevel: "90%" },
    { skillName: "CSS", skillLevel: "90%" },
    { skillName: "Javascript", skillLevel: "85%" },
    { skillName: "Python", skillLevel: "70%" },
    { skillName: "React", skillLevel: "80%" },
    { skillName: "Redux", skillLevel: "70%" },
    { skillName: "Express", skillLevel: "90%" },
    { skillName: "MongoDB", skillLevel: "80%" },
    { skillName: "SQL", skillLevel: "70%" },
  ],
};

export const leadership = {
  positions: [
    {
      heading: "Senior Business Operations Specialist",
      experienceItems: [
        "Consultant to 10 technology and business partners across CA, MI, and Germany, facilitating various workshops to evaluate current state processes and create roadmaps aligning future state developments to business requirements.",
        "Leveraged custom-built analytics tools to expand transparency into business operations and discover and implement process improvements, saving clients an average 15% working time within three months across all identified solutions.",
        "Collaborated on a company-wide change in response to the pandemic by re-engineering work structures to a remote model affecting a population of 30k employees, working closely with division executives to validate model effectiveness.",
        "Delivered a keynote address to internal executives at a regional event, introducing digital transformation topics as well as ways to visualize and interpret data to enable more informed decision-making processes.",
      ],
    },
    {
      heading: "Project Manager (Scrum Master)",
      experienceItems: [
        "Directed an agile project team through development of a hybrid delivery truck on a multi-year Department of Energy government contract, from proof of concept to end of year approval with technology currently in production.",
      ],
    },
    {
      heading: "Senior Marketing Strategist",
      experienceItems: [
        "Ideated and implemented a demand generation campaign increasing Facebook following from 1k to 80k in one year.",
        "Acquired a partnership with two influencers with over 1M YouTube subscribers to drive engagement with recruiting demographics, resulting in over 1M total engagements across platforms and paving the way for future collaborations.",
        "Coordinated creative partners and public relations agencies to drive content for tradeshows such as the North American Auto Show, Mid-American Trucking Show, and a lifestyle campaign promoting the RAM 1500 in northern Michigan.",
      ],
    },
  ],

  skills: [
    { skillName: "Consulting", skillLevel: "90%" },
    { skillName: "Coaching", skillLevel: "90%" },
    { skillName: "Project Management", skillLevel: "85%" },
    { skillName: "Agile Methodology", skillLevel: "75%" },
    { skillName: "Leading Myself", skillLevel: "95%" },
    { skillName: "Leading Others", skillLevel: "85%" },
    { skillName: "Change Management", skillLevel: "75%" },
    { skillName: "Facilitation", skillLevel: "85%" },
    { skillName: "Problem Solving", skillLevel: "85%" },
  ],
};
