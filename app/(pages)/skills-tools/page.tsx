import Image from "next/image";
import { ToolsGrid } from "@/components/organisms/ToolsGrid";

export default function Skills() {
  return (
    <div className="home">
      <h1>Skills & Tools</h1>
      <h2>A coder by day, problem-solver by night!</h2>
      <p>I am a dedicated Software Engineer specializing in full-stack application development. I enjoy crafting responsive web solutions using modern technologies like Next.js, React, Tailwind CSS, Node.js, Express, and MongoDB, while also applying DevOps practices, continuously aiming to deliver high-quality, comprehensive, user-centric software solutions.</p>
      <div className="mt-8"><ToolsGrid /></div>
    </div>
  );
}
