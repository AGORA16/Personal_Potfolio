/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Govindaraj Arumugavel",
  title: "Hi all, I'm Govind",
  subTitle: emoji(
    "Full-Stack Developer with experience in designing and developing dynamic, secure, and high-performing applications. Skilled in translating UI/UX designs into interactive interfaces, building scalable backend services, and ensuring seamless system integration. Passionate about optimizing performance and enhancing user experience."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14dl1SB5wj-XD9-147VCspjG85wx6q2Dh/view?usp=drivesdk ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/agora16",
  linkedin: "https://www.linkedin.com/in/govindaraj-a-143329213",
  gmail: "govind.raj0016@@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "spring",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "kafka",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jansons Institute of Technology, Coimabtore",
      logo: require("./assets/images/jit.png"),
      subHeader: "Bachelors of Engineering in Electronics and communication engineering",
      duration: "Augest 2018 - June 2022",
      desc: "Graduated with strong foundation in Electronics and communication with the score of 77%",
      descBullets: [
        "Gained practical knowledge in embedded systems, communication protocols and signal processing",
        "Engaged in technical projects and workshops to improve real-time skills"
      ]
    },
    {
      schoolName: "Government higher Secondary School, Chatrapatti",
      logo: require("./assets/images/tnschool.png"),
      subHeader: "Maths-Biology",
      duration: "September 2016 - April 2017",
      desc: "Excelled in core subjects such as mathematics, physics, biology which helps to build a strong analytical foundation",
      descBullets: ["Participated in science fairs and competitive exams to enchance problem solving skills"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "Database",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Grid Dynamics, Chennai",
      companylogo: require("./assets/images/griddynamics.png"),
      date: "March 2024 – Present",
      desc: "Working on developing scalable and efficient software solutions using modern technologies.",
      descBullets: [
        "Full-Stack Development: Developed and maintained a full-stack enterprise application, ensuring seamless integration between frontend and backend.",
        "Real-Time Dashboard: Designed and implemented responsive UI components for the real-time dashboard, enabling users to track sales, team performance, and business growth metrics.",
        "API Development & Optimization: Developed and optimized RESTful APIs for customer & team management, goal setting, and progress tracking, ensuring smooth data flow between services.",
        "Security & Access Control: Implemented authentication, authorization (JWT/OAuth), and role-based access control (RBAC) to manage user permissions across multiple functionalities.",
        "Performance & Scalability: Collaborated with cross-functional teams to debug, troubleshoot, and optimize performance, ensuring high availability and scalability for multi-device access."
      ]
    },
    {
      role: "Trainee Software Engineer",
      company: "Grid Dynamics, Chennai",
      companylogo: require("./assets/images/griddynamics.png"),
      date: "September 2023 – February 2024",
      desc: "Gained hands-on experience in software development, debugging, and testing.",
      descBullets: [
        "UI & API Integration: Assisted in the development of UI components for the business performance dashboard and integrated APIs to display real-time sales and earnings reports.",
        "Bug Fixing & Troubleshooting: Worked on debugging and troubleshooting issues in customer & team management modules, improving data consistency",
        "Microservices & Database Management: Gained hands-on experience with microservices architecture and database management, optimizing queries for better performance.",
        "Agile & Collaboration: Participated in code reviews, sprint planning, and Agile development workflows, contributing to efficient software delivery.",
        "CI/CD & Deployment: Explored CI/CD pipelines and deployment strategies, ensuring seamless multi-device accessibility across web and mobile platforms."
      ]
    }    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/flp.png"),
      projectName: "FLP360",
      projectDesc: "FLP360 is a business management platform designed for Forever Living Product (FLP) distributors. It offers advanced tools to track sales, manage customer relationships, analyze performance metrics, and enhance marketing efforts through an intuitive dashboard. The platform provides real-time data insights, commission tracking, and mobile-friendly access to help business owners streamline operations efficiently.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://flp360mobile.foreverliving.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "",
      image: require("./assets/images/aws.png"),
      imageAlt: "AWS logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13HVrn0tVvOgjYuGXgzELpINug7m9sWcV/view?usp=drivesdk"
        }
      ]
    },
    {
      title: "Python Full Stack Developer",
      subtitle:
        "",
      image: require("./assets/images/qsp.png"),
      imageAlt: "QSP logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9080045517",
  email_address: "govind.raj0016@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
