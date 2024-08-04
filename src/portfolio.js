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
  username: "Saad Pasta",
  title: "Hello, I'm Ionut",
  subTitle: emoji(
      "Experienced Full-Stack Software Engineer 🚀 boasting over 6 years of proficiency in leveraging cutting-edge technologies such as React JS, TypeScript, Java, Spring Framework and GraphQL. Adept at crafting robust solutions, I excel in delivering high-quality code and am committed to driving project success. Currently seeking engaging contract opportunities with a focus on remote work arrangements."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/ionut-adrian-grad-348959157/",
  gmail: "ionutgrad101@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Babes-Bolyai University",
      logo: require("./assets/images/ubb_logo.jpg"),
      subHeader: "Master's Degree in Database",
      duration: "October 2019 - June 2021",
    },
    {
      schoolName: "Babes-Bolyai University",
      logo: require("./assets/images/ubb_logo.jpg"),
      subHeader: "Bachelor's Degree in Computer Science",
      duration: "October 2016 - June 2019",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Typescript / React", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java / Spring Boot",
      progressPercentage: "90%"
    },
    {
      Stack: "Apollo GraphQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Databases",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Software Engineer",
      company: "IT Teams",
      companylogo: require("./assets/images/it_teams.png"),
      date: "Oct 2022 – Present",
      desc: "Currently, I am actively collaborating with a renowned client specializing in energy solutions and services. Within this role, I am leveraging my expertise in Java, Spring Boot, React TypeScript, and GraphQL to spearhead the development of innovative features and functionalities, enhancing the client's offerings and market competitiveness.",
    },
    {
      role: "Front-End Developer",
      company: "Zenitech",
      companylogo: require("./assets/images/zenitechteam_logo.jpeg"),
      date: "Apr 2021 – Oct 2022",
      desc: "I served as a key contributor to the development of a platform focused on enhancing employee engagement and experience for companies worldwide. Through my expertise in React TypeScript and GraphQL, I played a vital role in shaping the platform's capabilities. My efforts were instrumental in propelling the company's evolution from an international player to a global leader, significantly broadening its influence and presence across diverse markets worldwide."
    },
    {
      role: "Fullstack Software Engineer",
      company: "Micro Focus",
      companylogo: require("./assets/images/mf_logo.png"),
      date: "Sep 2018 - Apr 2021",
      desc: "As a full-stack software engineer, I made significant contributions to the advancement of a highly impactful Robotic Process Automation (RPA) platform. This platform serves as a cornerstone for numerous clients, enabling them to effortlessly design and execute workflows with software robots, thereby elevating operational efficiency and productivity across various sectors. Leveraging my expertise in Java, Spring, React, and TypeScript, I played a pivotal role in ensuring the platform's effectiveness and widespread adoption within diverse industries."
    },
    {
      role: "Software Engineer Intern",
      company: "Micro Focus",
      companylogo: require("./assets/images/mf_logo.png"),
      date: "Jul 2018 - Sep 2018",
      desc: "I started my career as a Software Engineer Intern at Micro Focus, where I was responsible for developing and maintaining the company's internal software applications. I worked closely with the development team to design and implement new features, fix bugs, and improve the overall performance of the applications. I also gained experience in working with different programming languages and technologies, such as Java, Spring Boot, and React."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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

  achievementsCards: [
    {
      title: "Building Modern Projects with React",
      image: require("./assets/images/linkedin.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/1b94659f017cce394eee24086d83f191dc86796b4e12b8679bf039228d842b29?trk=backfilled_certificate"
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
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
    "Let's get in touch! I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
  number: "+40752490390",
  email_address: "ionutgrad101@gmail.com"
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
