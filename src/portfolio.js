/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Vignesh Ramakrishnan',
  title: "Hi all, I'm Vignesh",
  subTitle: emoji(
    'A passionate Developer Support Engineer 🚀'
  ),
  resumeLink:
    '',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/Vignesh-Ramakrishnan-Personal',
  linkedin: 'https://www.linkedin.com/in/vignesh-ramakrishnan-4914617b/',
  gmail: 'vigneshram2611@gmail.com',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY ENGINEER SUPPORTING EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Support customers deploying applications in DigitalOcean Platform. Specialized in Storage - Block and Object Storage',
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Public Key Infrastructure',
      fontAwesomeClassname: 'fas fa-key',
    },
    {
      skillName: 'Load Balancer',
      fontAwesomeClassname: 'fas fa-network-wired',
    },
    {
      skillName: 'Networking',
      fontAwesomeClassname: 'fas fa-server',
    },
    {
      skillName: 'SaaS',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'nosql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Jansons Institute of Technology',
      logo: 'https://testvignesh.sfo2.digitaloceanspaces.com/jit.jpeg',
      subHeader: 'Bachelors of Engineering in Electronics and Communication Engineering',
      duration: 'August 2012 - April 2016',
      desc: 'Participated in the National level robotic competition. Presented papers in Universities and Colleges.',
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Cloud/Application Support', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Leadership',
      progressPercentage: '50%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '40%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Senior Solution Support Engineer',
      company: 'AppViewX',
      companylogo: 'https://testvignesh.sfo2.digitaloceanspaces.com/appviewx.jpeg',
      date: 'June 2016 – October 2019',
      desc:
        'AppViewX is automation and orchestration platform for managing load balancers and certificates',
      descBullets: [
       'Design and implement AppViewX Platform to Solve the toughest automation problems the customer is trying to solve.',
       'Final point of escalation for the customer',
       'Measure of quality and the feedback system to the AppViewX Development and Engineering team',
       'Offer 24x16x7 TAC support for systems and platform',
       'Provide workaround for the customer and create a follow on ticket if required',
       'Creating and improving content for the benefit of all support.',
       'Migrate the customer to the latest code of AppViewX and make this migration very smooth',
       'Make sound judgments when dealing with issues that arise during troubleshooting and have to determine the appropriate action to be taken for a given situation; and are able to prioritize instantly to prevent missed deadlines',
       'Act on the ability to generate required reports from the system as well as read and utilize information',
       'Povide feedback and suggestions to management for improved customer satisfaction, process improvements and system enhancements',
      ],
    },{
      role: 'Senior Developer Support Engineer',
      company: 'DigitalOcean',
      companylogo: 'https://testvignesh.sfo2.digitaloceanspaces.com/DigitalOcean.png',
      date: 'November 2020  – Present',
      desc:
        'DigitalOcean, Inc. is an American cloud infrastructure provider headquartered in New York City with data centers worldwide. DigitalOcean provides developers cloud services that help to deploy and scale applications that run simultaneously on multiple computers.',
      descBullets: [
        'Responding to a high volume of technical tickets generated by our customers in a timely manner',
        'Troubleshooting common Linux issues (CentOS, Fedora, Ubuntu, Debian), application stacks (LAMP, LEMP) and applications (WordPress, Ghost)',
        'Providing exceptional support for a growing number of products (Droplets, Load Balancers, Block Storage, Spaces)',
        'Working both collaboratively and independently with our support, product, and engineering teams',
        'Identifying, communicating, and documenting process and policy improvements',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'vigneshramakrishnan', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE😅'
  ),

  talks: [
    {
      title: 'Prototype of Aero Amphibian Robit',
      subtitle: '',
      slides_url: '',
      event_url: '',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    '',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-9791168459',
  emailAddress: 'vigneshram2611@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
};
