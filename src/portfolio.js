/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohssine's Portfolio",
  description:
    "A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mohssine SERRAJI Portfolio",
    type: "website",
    //url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "SERRAJI Mohssine",
  logo_name: "SERRAJI",
  nickname: "byteai",
  subTitle:
    "A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1-RovLu1fuII0z9YvIqZYmzreimvgPCXv/view?usp=sharing",
  portfolio_repository: "https://github.com/MohssineSERRAJI/masterPortfolio",
  githubProfile: "https://github.com/MohssineSERRAJI",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/MohssineSERRAJI/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/serraji-mohssine/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC5BgQkQH7TgOkeCf5EXdBxQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:sera.mohssine@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/serrajimohssine",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sera.mohssine/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various Deep Learning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modeling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Ionic framework, React Native.",
        "⚡ Creating application backend in Node, Express, Flask & Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        //{
        // skillName: "Kubernetes",
        // fontAwesomeClassname: "simple-icons:kubernetes",
        // style: {
        // color: "#326CE5",
        // },
        //},
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    /*{
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },*/
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Université de Reims Champagne-Ardenne",
      subtitle: "Master's degree, Artificial Intelligence",
      logo_path: "reims-logo.png",
      alt_name: "Université de Reims Champagne-Ardenne",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied basic Artificial Intelligence subjects.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing.",
      ],
      website_link: "https://www.univ-reims.fr/",
    },
    {
      title: "ENSAM Casablanca",
      subtitle: "Master's Degree, Big Data And Internet Of Things",
      logo_path: "ensam.png",
      alt_name: "ENSAM Casablanca",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I have studied basic Big Data & Internet Of Things subjects.",
        "⚡ Apart from this, I have done courses on Cloud Computing Cloud computing, Business  intelligence and Statistics.",
      ],
      website_link: "http://www.ensam-casa.ma/",
    },
    {
      title: "FST Settat",
      subtitle: "Bachelor of Science and Technology, Computer Engineering",
      logo_path: "fst.png",
      alt_name: "FST Settat",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects.",
        "⚡ Apart from this, I have done courses on Web Development, Mobile Development and  Computer Network",
      ],
      website_link: "http://www.fsts.ac.ma/",
    },
  ],
};

const certifications = {
  certifications: [
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },*/
    /*{
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },*/
    /*
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },*/
    /*
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },*/
    {
      title: "Data Science Professional Certificate",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/PSUEQCXF4YTY",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    /*
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },*/
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/QNCCZ2XDV693",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Scrum Foundation Professional Certificate ",
      subtitle: "CertiProf",
      logo_path: "certifpro.png",
      certificate_link:
        "https://drive.google.com/file/d/1CI8_wGA1k37fhZXnPSwiYKTVDYuesYWI/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#F74A00",
    },
    /*
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving projects as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Junior Data Scientist",
          company: "X-FAB",
          company_url: "https://www.xfab.com/",
          logo_path: "logo-xfab.png",
          duration: "Sep 2021 - PRESENT",
          location: "Corbeil-Essonnes, France",
          description:
            "I am currently working on Creating AI models for Prediction.",
          color: "#43B1CD",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Faculte Polytechnique de Mons",
          company_url: "https://web.umons.ac.be/fpms/en/",
          logo_path: "mons-logo.png",
          duration: "Apr 2021 - Aug 2021",
          location: "Mons, Walloon Region, Belgium",
          description:
            "I have worked on a project for image segmentation using Deep Learning techniques for the problem of coronary artery disease based on real data.",
          color: "#024887",
        },
        {
          title: "Full Stack Developer",
          company: "Moroccan Airports Authority",
          company_url: "https://www.onda.ma/",
          logo_path: "moroco-logo.png",
          duration: "Apr 2019 - May 2019",
          location: "Casablanca, Morocco",
          description:
            "I have worked on a project for Two-month end-of-study project internship at the national airports office during which I created the application that manages airport resources developed in JavaFX as well an application that displays flight information to the various dedicated screens developed in Framework Electron.",
          color: "#000068",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developers Group",
          company: "Google",
          company_url: "https://developers.google.com/community/gdg",
          logo_path: "gdg-logo.png",
          duration: "Sep 2019 - Jan 2021",
          location: "Settat, Morocco",
          description:
            "We plan and host meetup events on a wide range of technical topics",
          color: "#069D55",
        },
        {
          title: "Developer Student Clubs",
          company: "Google",
          company_url: "https://gdsc.community.dev/",
          logo_path: "dsc-logo.png",
          duration: "Oct 2019 - Jan 2021",
          location: "Casablanca, Morocco",
          description:
            "DSC Ensam for a goal of helping the students of ensam in technology; everything from the Android, Chrome, Drive, and Google Cloud platforms, to product APIs like the Cast API, Maps API, and YouTube API.",
          color: "#D74037",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mohssine.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with DL, ML, AI, React, Cloud and Opensource Development.",
  },
  /*
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },*/
  addressSection: {
    title: "Address",
    subtitle: "Paris, France",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/VL6TUDkPiuiNSYP5A",
  },
  phoneSection: {
    title: "Email",
    subtitle: "sera.mohssine@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
