import React from "react";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";

// Define BlogPost type
type BlogPost = {
  id: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

// Sample blog posts with custom descriptions
const blogPosts: BlogPost[] = [
  {
    id: "1",
    imgSrc: "https://plus.unsplash.com/premium_photo-1669530958591-15cbad83785b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV4dCUyMEpTfGVufDB8fDB8fHww",
    imgAlt: "Next.js framework illustration",
    title: "Next.js: The Next Generation of React",
    description: "Discover how Next.js supercharges React with powerful tools like server-side rendering and dynamic routing to build lightning-fast, SEO-friendly web apps.",
    date: "May 13, 2023",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: "2",
    imgSrc: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "WSL Ubuntu setup",
    title: "How to install WSL 2 + Ubuntu 20.04 LTS on Windows and open Visual Studio Code from the terminal",
    description: "Set up a seamless Ubuntu environment on Windows with WSL 2 and integrate Visual Studio Code for a powerful cross-platform coding experience.",
    date: "Jul 26, 2023",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: "3",
    imgSrc: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Django models diagram",
    title: "Understanding Models in Django",
    description: "Unlock the power of Django models to structure your database with ease, mastering one-to-one, one-to-many, and many-to-many relationships.",
    date: "Jul 26, 2023",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: "4",
    imgSrc: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Docker container illustration",
    title: "Containerizing Next.js App with Docker",
    description: "Learn to package your Next.js app in a Docker container for consistent, portable deployments across any environment.",
    date: "Nov 28, 2023",
    readTime: "6 min read",
    featured: false,
  },
];

// Animation variants for the header
const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" } as const,
  },
};

// Animation variants for the blog cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" } as const,
  }),
};

// Blog component
type BlogProps = {
  featuredOnly?: boolean;
};

const Blog: React.FC<BlogProps> = ({ featuredOnly = false }) => {
  const filtered = featuredOnly ? blogPosts.filter((p) => p.featured) : blogPosts;

  return (
    <div className="mt-16 sm:mt-24 lg:mt-32 text-white">
      <motion.div
        className="mx-4 sm:mx-8 lg:ml-16 flex relative mb-10 sm:mb-12 lg:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
      >
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-200 font-syne relative z-10">
            Blog Posts
          </h1>
          <p className="text-xs sm:text-sm mt-1 text-gray-400 tracking-wider">
            Insights, ideas, and inspiration
          </p>
        </div>
        <div className="absolute left-0 top-1/2 w-12 sm:w-16 h-[2px] bg-orange-500 rotate-12"></div>
        <div className="h-[2px] sm:h-[3px] bg-gradient-to-r from-orange-500 to-transparent rounded transform origin-right -rotate-12 mt-10 sm:mt-12 w-12 sm:w-16" />
      </motion.div>

      <div className="my-10 sm:my-12 mx-4 sm:mx-8 lg:mx-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {filtered.map((post, index) => (
          <motion.div
            key={post.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
          >
            <BlogCard
              href={`/blog/${post.id}`}
              imgSrc={post.imgSrc}
              imgAlt={post.imgAlt}
              title={post.title}
              description={post.description}
              date={post.date}
              readTime={post.readTime}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;