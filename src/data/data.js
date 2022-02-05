// Main projects imports
import mentorMatch from "../assets/mentorMatch.png";
import audiophile from "../assets/audiophile.png";
import productFeedback from "../assets/product_feedback.png";

// More projects imports
import clock from "../assets/screenshots/Clock.png";
import todo from "../assets/screenshots/ToDo.png";
import splitter from "../assets/screenshots/Splitter.png";
import loopstudios from "../assets/screenshots/Loop Studios.png";
import room from "../assets/screenshots/ROOM Furniture.png";
import dynamicPricing from "../assets/screenshots/Dynamic Pricing.png";
import pricingGrid from "../assets/screenshots/Product Pricing Grid.png";
import faqAccordion from "../assets/screenshots/FAQ Accordion.png";
import bootcampSignUp from "../assets/screenshots/Bootcamp Sign Up.png";
import testimonials from "../assets/screenshots/Testimonials Grid.png";
import blogr from "../assets/screenshots/Blogr.png";

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
      <div>
        I found this project on{" "}
        <a href="https://www.frontendmentor.io" className="link">
          Frontend Mentor
        </a>
        . Frontend Mentor is a site that supplies UI designs so users can code
        the designs without support or tutorials. The challenges range from
        “Newbie” to “Guru”. This project rates as one of the most challenging
        projects on the platform.
      </div>,
      "I used the MERN stack to complete this project. React allowed me to build a scalable front-end experience for the user. I also used Redux to help with the state management. All elements were custom styled using Styled Components. I built the backend using Node.js, Express, and MongoDB. I also built a REST API  for the front-end and back-end to communicate.  I used Redux-Thunk to request data to feed into the global state so each React component can get access to it.",
      "Take a look around the store and if you see anything you like add it to the cart. Don’t worry…whatever you order is on the house 😃.",
    ],
  },
  {
    name: "Product Feedback",
    screenshot: productFeedback,
    github: "https://github.com/jljakin2/product-feedback-next",
    live: "https://product-feedback-next.vercel.app/",
    tags: [
      "HTML",
      "CSS",
      "JSX",
      "Javascript",
      "Next.js",
      "MongoDB",
      "GraphQL",
      "React",
      "Styled-Components",
      "Apollo",
      "Git",
    ],
    description: [
      <div>
        This was another "Guru" level project from{" "}
        <a href="https://www.frontendmentor.io" className="link">
          Frontend Mentor
        </a>
        . The purpose of the app is to allow users to submit feedback and
        feature requests for a software platform. Users can submit a suggestion,
        see other suggestions and comment on them, up-vote their favorite
        suggestions, and see the status of their favorite suggestions based on
        the roadmap of features the platform team is currently working on.
      </div>,
      "I used Next.js and Styled Components to build out the front-end architecture. I really enjoy using Next.js, especially when it comes time to deploy the application. I stored all of the data in a MongoDB which is hooked up to a GraphQL API. I used Apollo on the front-end to connect to the GraphQL API. Lastly, I used KeystoneJS as a headless CMS so you can easily manage the back-end data via the simple CMS UI.",
    ],
  },
];

export const technical = {
  positions: [
    {
      heading: "Senior Business Operations Specialist",
      experienceItems: [
        "Influenced executives to continue an outsourced mentorship program by designing an in-house platform, enabling 300+ associates across North America to pair up as mentors/mentees with self-service functions, saving $16k annually. (See Mentor Match above)",
        "Empowered business clients with custom-designed Python scripts and GUIs created with Python libraries to clean, manipulate, and automate manual data processing, reducing time spent on task from 50 hours to 2 hours.",
        "Revamped a companywide 360º management survey process with Catalytic and Power BI, eliminating the need to hire multiple interns, saving $20k in annual operating costs, and 1k+ hours in processing time.",
        "Created and executed a Fundamentals of Python training series which was taken by over 100 associates aimed at helping participants begin using Python in their organizations for data analytics and automation.",
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
        "Lead Consultant to 10 technology and business partners across CA, MI, and Germany, facilitating strategy workshops to evaluate current state processes and create roadmaps aligning future state developments to business requirements.",
        "Leveraged data analytics tools to expand transparency into business operations and discover and implement process improvements, saving clients an average of 15% working time within three months across many functions.",
        "Change Manager for a companywide change in response to the pandemic by reengineering work structures to a remote model affecting a population of 30k employees, working closely with division executives to validate model effectiveness.",
        "Delivered a keynote address to internal executives at a regional event, introducing digital transformation topics as well as ways to visualize and interpret data to enable more informed decision-making processes.",
      ],
    },
    {
      heading: "Project Manager (Scrum Master)",
      experienceItems: [
        "Directed an agile project team through the development of a hybrid delivery truck on a multi-year Department of Energy government contract, from proof of concept to end-of-year approval with technology currently in production.",
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

export const moreProjects = [
  // keep descriptions to 25-30 words
  {
    id: 1,
    name: "Clock App",
    description:
      "Real-time clock app that provides information about the user's location and motivational quotes. The content dynamically changes including the background based on the time of day.",
    screenshot: clock,
    github: "https://github.com/jljakin2/clock",
    live: "https://clock-neon-ten.vercel.app/",
  },
  {
    id: 2,
    name: "ToDo App",
    description:
      "Classic todo app that lets users add their todo items and filter them based on status. Users can toggle between light and dark mode.",
    screenshot: todo,
    github: "https://github.com/jljakin2/darkLightTodoList",
    live: "https://dark-light-todo-list.vercel.app/",
  },
  {
    id: 3,
    name: "Splitter",
    description:
      "Tip calculator that lets users enter their bill and party size to calculate how much they should tip based on the percentage they want to pay.",
    screenshot: splitter,
    github: "https://github.com/jljakin2/tipCalculator",
    live: "https://tip-calculator-lake.vercel.app/",
  },
  {
    id: 4,
    name: "Loop Studios",
    description:
      "Landing page for a fictional VR company. Built with vanilla JS and Sass to organize styles. Layout mainly uses flexbox with some grid for the photos.",
    screenshot: loopstudios,
    github: "https://github.com/jljakin2/loopstudios",
    live: "https://loopstudios-jljakin2.vercel.app/",
  },
  {
    id: 5,
    name: "ROOM Furniture",
    description:
      "Landing page for a fictional furniture company called ROOM. There is a custom carousel that allows the user to view multiple products from the home page.",
    screenshot: room,
    github: "https://github.com/jljakin2/roomCarousel",
    live: "https://room-carousel.vercel.app/",
  },
  {
    id: 6,
    name: "Dynamic Pricing",
    description:
      "Pricing component with a custom range input that allows users to see their price based on page views. Option to toggle billing from per month to per year.",
    screenshot: dynamicPricing,
    github: "https://github.com/jljakin2/pricing_component",
    live: "https://pricing-component-git-master-jljakin2.vercel.app/",
  },
  {
    id: 7,
    name: "Blogr",
    description:
      "Responsive landing page for a fake blogging company called Blogr. I used Sass for the styling with customized media-query mixins to handle the responsiveness.",
    screenshot: blogr,
    github: "https://github.com/jljakin2/blogr",
    live: "https://blogr-jljakin2.vercel.app/",
  },
  {
    id: 8,
    name: "Product Pricing Grid",
    description:
      "Pricing component that could be used in any type of application. I used Grid for the layout and the design is responsive for all devices.",
    screenshot: pricingGrid,
    github: "https://github.com/jljakin2/singlePriceGrid",
    live: "https://single-price-grid-git-master-jljakin2.vercel.app/",
  },
  {
    id: 9,
    name: "FAQ Accordion",
    description:
      "FAQ accordion component where users can click on the questions and the answer will appear underneath each question. Fully responsive and built using HTML/CSS (Sass) and vanilla JS.",
    screenshot: faqAccordion,
    github: "https://github.com/jljakin2/faqAccordion",
    live: "https://faq-accordion-jljakin2.vercel.app/",
  },
  {
    id: 10,
    name: "Bootcamp Sign Up",
    description:
      "Sign up component for a fictional coding Bootcamp. Fully responsive built using HTML/CSS and vanilla JS for the custom form validation.",
    screenshot: bootcampSignUp,
    github: "https://github.com/jljakin2/signUpForm",
    live: "https://sign-up-form-jljakin2.vercel.app/",
  },
  {
    id: 11,
    name: "Testimonials Grid",
    description:
      "Testimonials component built using CSS Grid. Fully responsive and developed using a desktop-first workflow.",
    screenshot: testimonials,
    github: "https://github.com/jljakin2/gridTestimonials",
    live: "https://grid-testimonials-seven.vercel.app/",
  },
];
