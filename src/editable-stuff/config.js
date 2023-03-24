// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mobina",
  middleName: "",
  lastName: "Goodarzi",
  message: " Love to code and learn new things. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mobinagoodarzii",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mobina-goodarzi/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mobina_p.jpg"),
  imageSize: 375,
  message:
    "My name is Mobina Goodarzi. I’m a graduate of 2022 from Islamic Azad University at Tehran, Iran with a degree in Biomedical Engineering. I really like doing back-end and I'm currently learning to code spring boot on kotlin. and in my free time I really like to learn about every aspects of what computers present to us because there is always so much to learn.",
  resume: "#",
};

const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "mobinagoodarzii",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/mobina_p.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/mobina_p.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 60 },
    { name: "Kotlin", value: 35 },
    { name: "Spring Boot", value: 35 },
    { name: "Bash/Linux", value: 50 },
    { name: "Python DataAnalysis", value: 80 },
    { name: "HTML/CSS", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mobinagoodarzi79@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Offce Expert, Tapsell (Pegah Dadeh Kavan Sharif)',
      companylogo: 'https://tapsell.ir/wp-content/uploads/2018/02/logo-1.png',
      date: 'Feb 2021 – Present',
    },
    {
      role: 'Offce Expert and Project Assistant, Done Associates',
      companylogo: 'https://www.doneassociates.com/IMG/logo_type1.svg',
      date: 'June 2020 – Feb 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
