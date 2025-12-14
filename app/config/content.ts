import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiPhp, SiMysql, SiNodedotjs, SiMongodb } from "react-icons/si";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaBriefcase, FaGraduationCap, FaEnvelope, FaChartBar } from 'react-icons/fa';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { GiMaterialsScience } from "react-icons/gi";

export const ProfileData = {
    logoText: 'dev.Maanus',
    logoIcon: GiMaterialsScience,
    fname: 'Vishal',
    lname: 'Ravanank',
    tagline: 'A coder by day, Gym-rat by night!',
    intro: 'I am a dedicated Software Engineer specializing in full-stack application development. I enjoy crafting responsive web solutions using modern technologies like Next.js, React, Tailwind CSS, Node.js, Express, and MongoDB.',
    aboutSubTitle: 'More than just a title—let’s dive deeper!',
    aboutMe: `I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.
    With a strong foundation in JavaScript frameworks, I focus on creating scalable, efficient, and visually appealing applications. Currently, I am diving deeper into backend development with Node.js and Express to expand my skill set and deliver powerful, server-side solutions.
    Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives.`,
    Availability: "Yes",
    CurrentlyWorking: "None",
    Location: "Mumbai, India",
    navLinks : [
      { href: '/', label: 'Introduction', icon: FaHome },
      { href: '/about', label: 'About Me', icon: FaUser },
      { href: '/projects', label: 'Projects', icon: FaProjectDiagram },
      { href: '/skills-tools', label: 'Skills & Tools', icon: FaTools },
      { href: '/experience', label: 'Experience', icon: FaBriefcase },
      { href: '/education', label: 'Education', icon: FaGraduationCap },
      { href: '/stats', label: 'Stats', icon: FaChartBar },
      { href: '/contact', label: 'Contact', icon: FaEnvelope },
    ],
    skillsIntro: `As a full-stack Software Engineer, I specialize in building scalable web applications using modern technologies such as Next.js, React, and Tailwind CSS. I'm also expanding my expertise into DevOps and cloud practices to create efficient, maintainable, robust web solutions.`,
    skills: [
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "PHP", icon: SiPhp },
        { name: "MySQL", icon: SiMysql },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb }
    ],
    projects: [
      {
        id: "p1",
        title: "Nike Reimagined | Modern Redesign Concept",
        description:
          "A sleek and modern redesign of Nike’s official web experience built with React and Tailwind CSS.",
        link: "https://google.com"
      },
      {
        id: "p2",
        title: "Portfolio | Vishal Ravanank",
        description:
          "A dynamic portfolio showcasing projects, skills, and contributions using the latest web technologies.",
        link: "#"
      },
      {
        id: "p3",
        title: "News Hub | Real-Time News Platform",
        description:
          "A real-time news platform delivering the latest headlines across various categories using the News API.",
        link: "#"
      },
      {
        id: "p4",
        title: "Freshmart Store | Modern Grocery Web App",
        description:
          "A clean, modern, and responsive grocery store web app built with React, Vite, Redux, and Tailwind CSS.",
        link: "#"
      },
      {
        id: "p5",
        title: "GitHub Profile Viewer | Instant GitHub Insights",
        description:
          "A web app to instantly view detailed GitHub profiles with clean UI using HTML, CSS, and JavaScript.",
        link: "#"
      },
      {
        id: "p6",
        title: "UI Brix | Open-Source Components Library",
        description:
          "A growing library of open-source, reusable UI components built with React, Next.js, and TypeScript.",
        link: "#"
      },
    ],
    experienceIntro: `Throughout my journey as a developer, I have had the opportunity to work with cutting-edge technologies while also mastering the fine art of debugging at 2 AM. From building dynamic web applications to deciphering cryptic error messages, my experience has been a mix of structured learning and spontaneous problem-solving. Each project and internship has sharpened my ability to write clean code, collaborate effectively, and most importantly—fix bugs before they fix me.`,
    experiences: [
        {
          title: "Open Source Developer",
          org: "Hacktoberfest",
          date: "Oct. 2025 – Present",
          desc:
            "Currently contributing as an Open Source Developer at Hacktoberfest, working on various web development projects and collaborating with the global developer community.",
          badge: "Latest",
        },
        {
          title: "Trainee",
          org: "Sheriyans Coding School",
          date: "May 2025 – Oct. 2025",
          desc:
            "Learned full‑stack technologies and DevOps practices. Participated in hackathons and collaborated on projects with the developer community.",
        },
        {
          title: "Project Admin",
          org: "GSSoC25 (GirlScript Summer of Code)",
          date: "Aug. 2025 – Sept. 2025",
          desc:
            "Reviewed code, merged pull requests, and communicated with developers to ensure smooth project workflow and collaboration.",
        },
        {
          title: "Project New",
          org: "abhksdbk (GirlScript Summer of Code)",
          date: "Aug. 2025 – Sept. 2025",
          desc:
            "Reviewed code, merged pull requests, and communicated with developers to ensure smooth project workflow and collaboration.",
        },
    ],
    educationIntro: `Education has always been the cornerstone of my journey into the tech world. Pursuing a Bachelor's in Computer Application (BCA) at GH Raisoni College of Engineering and Management, Nagpur, has provided me a strong foundation in computer science and software development.`,
    education: [
        {
          title: "Bachelor of Computer Application",
          org: "GH Raisoni College of Engineering and Management · Nagpur, India",
          date: "Aug 2023 – June 2026 (Expected)",
          desc: "Pursuing BCA with a focus on programming, web development, and software engineering. Current CGPA: 8.40.",
          badge: "Undergraduate"
        },
        {
          title: "Higher Secondary Education (12th · Information Technology)",
          org: "NPW Science College · Lakhani",
          date: "July 2021 – May 2023",
          desc: "Completed Higher Secondary Education specializing in Information Technology. Achieved 70% overall and 95% in IT.",
          badge: "HSC"
        },
        {
          title: "Secondary Education (10th Grade)",
          org: "Shivaji Vidyalaya Seloti/Manegaon · SEE",
          date: "Apr 2012 - Mar 2021",
          desc: "Completed 10th grade with 82%. Assisted peers in learning computer skills through hands-on lab sessions.",
          badge: "SSC"
        }
    ],
    stats: { projects: 12, yearsExp: 6 },
    socials: [
      {
        key: "mail",
        label: "Email",
        url: "vishal.ravanank@gmail.com",
        icon: FiMail,
        isMail: true,
      },
      {
        key: "github",
        label: "GitHub",
        url: "https://github.com/",
        icon: FiGithub,
      },
      {
        key: "linkedin",
        label: "LinkedIn",
        url: "https://linkedin.com/",
        icon: FiLinkedin,
      },
      {
        key: "instagram",
        label: "Instagram",
        url: "",
        icon: FiInstagram,
      },
      {
        key: "twitter",
        label: "Twitter",
        url: "",
        icon: FaXTwitter,
      },
    ],
};