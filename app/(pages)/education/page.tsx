import { TimelineList } from "@/components/organisms/TimelineList";
import { ProfileData } from "@/config/content";


export default function Education() {
  const education = ProfileData.education;
  return (
    <div className="home">
      <h1>Education</h1>
      <h2>A coder by day, problem-solver by night!</h2>
      <p>I am a dedicated Software Engineer specializing in full-stack application development. I enjoy crafting responsive web solutions using modern technologies like Next.js, React, Tailwind CSS, Node.js, Express, and MongoDB, while also applying DevOps practices, continuously aiming to deliver high-quality, comprehensive, user-centric software solutions.</p>
      <div className="mt-8"><TimelineList items={education}/></div>
    </div>
  );
}
