import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiPhp, SiMysql, SiNodedotjs, SiMongodb } from "react-icons/si";

export const ProfileData = {
    name: 'Aditya Domle',
    tagline: 'A coder by day, problem-solver by night!',
    intro:
    'I am a dedicated Software Engineer specializing in full-stack application development. I enjoy crafting responsive web solutions using modern technologies like Next.js, React, Tailwind CSS, Node.js, Express, and MongoDB.',
    Availability: "Yes",
    CurrentlyWorking: "None",
    Location: "Mumbai, India",
    skills: [
        { name: "HTML", icon: SiHtml5 },
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
    { id: 'p1', title: 'Portfolio Site', description: 'Personal website with dark/light theme.' },
    { id: 'p2', title: 'UI Brix', description: 'Open-source UI components library.' },
    ],
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
    ],
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
          date: "Apr 2012 – Mar 2021",
          desc: "Completed 10th grade with 82%. Assisted peers in learning computer skills through hands-on lab sessions.",
          badge: "SSC"
        }
    ],
    stats: { projects: 12, yearsExp: 6 },
    contact: { email: 'you@example.com', phone: '+91-9999999999' },
    socials: { github: 'https://github.com/', linkedin: 'https://linkedin.com/', twitter: 'https://x.com/', instagram: 'https://instagram.com/' },
};