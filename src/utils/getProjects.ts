// src/utils/getProjects.ts
import { marked } from "marked";

export type Project = {
  id: string;
  title: string;
  tools: string;
  imgSrc: string;
  imgAlt: string;
  featured?: boolean;
  content: string; // HTML content
};

// import all markdown files
const projectFiles = import.meta.glob("../content/projects/*.md", { as: "raw", eager: true });

export function getAllProjects(): Project[] {
  const projects: Project[] = [];

  for (const path in projectFiles) {
    const raw = projectFiles[path] as string;

    // manual frontmatter parsing
    const frontmatterMatch = raw.match(/^---\n([\s\S]+?)\n---/);
    let data: any = {};
    let content = raw;

    if (frontmatterMatch) {
      const fm = frontmatterMatch[1];
      fm.split("\n").forEach((line) => {
        const [key, ...rest] = line.split(":");
        if (key && rest.length) data[key.trim()] = rest.join(":").trim();
      });
      content = raw.slice(frontmatterMatch[0].length); // markdown content
    }

    projects.push({
      id: data.id,
      title: data.title,
      tools: data.tools,
      imgSrc: data.imgSrc,
      imgAlt: data.imgAlt,
      featured: data.featured === "true",
      content: marked(content) as string,
    });
  }

  return projects;
}
