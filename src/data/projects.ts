export type Project = {
  slug: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  tools?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "siman-center",
    href: "/projects/siman-center",
    imgSrc: "/siman1.jpeg",
    imgAlt: "Siman Center",
    title: "Siman Center",
    description: "This is the first project description.",
    tools: "Website",
    featured: true,
  },
  {
    slug: "scam-shield",
    href: "/projects/scam-shield",
    imgSrc: "/scam3.png",
    imgAlt: "SMS Scam Shield",
    title: "SMS Scam Shield",
    description: "Detect scam SMS messages.",
    tools: "Machine Learning - NLP",
    featured: true,
  },
  {
    slug: "redhot-tales",
    href: "/projects/redhot-tales",
    imgSrc: "/hero-reading.jpg",
    imgAlt: "Redhot Tales",
    title: "Redhot Tales",
    description: "Third project with amazing features.",
    tools: "Web Application",
  },
  {
    slug: "my-souls-universe",
    href: "/projects/my-souls-universe",
    imgSrc: "/msu1.png",
    imgAlt: "My Souls Universe",
    title: "My Soul's Universe",
    description: "Fourth project with amazing features.",
    tools: "Website",
  },
];
