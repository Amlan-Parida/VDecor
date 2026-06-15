import { HomeClient } from "@/components/home-client";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return <HomeClient projects={projects} />;
}
