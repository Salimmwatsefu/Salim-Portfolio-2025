import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import yaml from "js-yaml";
import { motion, useMotionValue, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const projectFiles = import.meta.glob("../content/projects/*.md", {
  as: "raw",
  eager: true,
});

type ProjectContent = {
  title: string;
  tools?: string;
  imgSrc?: string;
  imgAlt?: string;
  overview?: string;
  industry?: string;
  site?: string;
  technology?: string[];
  problem?: string;
  role?: string;
  solution?: string;
};

export default function IndividualProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectContent | null>(null);
  const [scrollStage, setScrollStage] = useState<'initial' | 'revealing' | 'unlocked'>('initial');

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const overlayOpacity = useMotionValue(0);
  const textOpacity = useMotionValue(0);
  const textY = useMotionValue(50);
  const [scrollYProgress, setScrollYProgress] = useState(useMotionValue(0));

  // Load project content
  useEffect(() => {
    if (!id) return;
    const filePath = `../content/projects/${id}.md`;
    const rawContent = (projectFiles[filePath] as string) || null;
    if (!rawContent) return;
    const frontmatterMatch = rawContent.match(/^---\n([\s\S]+?)\n---/);
    if (!frontmatterMatch) return;
    const fm = frontmatterMatch[1];
    const data = yaml.load(fm) as any;

    setProject({
      title: data.title,
      tools: data.tools,
      imgSrc: data.imgSrc,
      imgAlt: data.imgAlt,
      overview: data.overview,
      industry: data.industry,
      site: data.site,
      technology: data.technology,
      problem: data.problem,
      role: data.role,
      solution: data.solution,
    });
  }, [id]);

  // Hero scroll handling - Updated to support mobile
  useEffect(() => {
    let touchStartY = 0;
    let hasScrolled = false;

    const handleScroll = (e: WheelEvent) => {
      if (scrollStage === 'unlocked') return;
      e.preventDefault();
      if (scrollStage === 'initial' && e.deltaY > 0) {
        triggerReveal();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (scrollStage === 'unlocked') return;
      touchStartY = e.touches[0].clientY;
      hasScrolled = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (scrollStage === 'unlocked' || hasScrolled) return;
      e.preventDefault();
      
      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY;
      
      // Trigger on swipe down (deltaY > 0)
      if (deltaY > 30 && scrollStage === 'initial') { // 30px threshold
        hasScrolled = true;
        triggerReveal();
      }
    };

    const handleTouchEnd = () => {
      // Reset after a short delay
      setTimeout(() => {
        hasScrolled = false;
      }, 300);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (scrollStage !== 'unlocked') {
        const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'End', 'Home'];
        if (keys.includes(e.code)) e.preventDefault();
      }
    };

    // Extract reveal logic to reusable function
    const triggerReveal = () => {
      setScrollStage('revealing');
      overlayOpacity.set(0.7);
      textOpacity.set(1);
      textY.set(0);
      setTimeout(() => setScrollStage('unlocked'), 1200);
    };

    if (scrollStage !== 'unlocked') document.body.style.overflow = 'hidden';
    
    // Add all event listeners
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [scrollStage, overlayOpacity, textOpacity, textY]);

  // Initialize useScroll for hero section parallax
  useEffect(() => {
    if (heroRef.current) {
      const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
      });
      setScrollYProgress(scrollYProgress);
    }
  }, []);

  // Parallax effect for hero section (subtle to avoid gap)
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Updated helper to render Markdown content with staggered animations
  const renderMarkdownContent = (content?: string, delayOffset = 0) => {
    if (!content) return null;

    return (
      <div className="prose prose-invert prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => (
              <motion.p
                className="text-gray-200 leading-relaxed text-lg mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{
                  duration: 0.6,
                  delay: delayOffset + 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {children}
              </motion.p>
            ),
            li: ({ children }) => (
              <motion.li
                className="text-gray-200 leading-relaxed ml-6 list-disc text-lg mb-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{
                  duration: 0.6,
                  delay: delayOffset + 0.15,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {children}
              </motion.li>
            ),
            strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
            em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
            h1: ({ children }) => (
              <motion.h1
                className="text-2xl font-bold text-white mb-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: delayOffset,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {children}
              </motion.h1>
            ),
            h2: ({ children }) => (
              <motion.h2
                className="text-xl font-semibold text-white mb-3 mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: delayOffset + 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {children}
              </motion.h2>
            ),
            h3: ({ children }) => (
              <motion.h3
                className="text-lg font-semibold text-orange-300 mb-3 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: delayOffset + 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {children}
              </motion.h3>
            ),
            a: ({ children, href }) => (
              <motion.a
                href={href}
                className="text-orange-300 hover:text-orange-400 underline transition-colors duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: delayOffset + 0.15,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {children}
              </motion.a>
            ),
            blockquote: ({ children }) => (
              <motion.blockquote
                className="border-l-4 border-orange-500/30 pl-4 italic text-gray-300 bg-gray-900/50 py-3 rounded-r-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: delayOffset + 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {children}
              </motion.blockquote>
            ),
            code: ({ children, className }) => {
              const inline = !className?.includes("language-");
              return inline ? (
                <code className="bg-gray-800/50 text-orange-300 px-1 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              ) : (
                <motion.pre
                  className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: delayOffset + 0.2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <code className={className}>{children}</code>
                </motion.pre>
              );
            },
            img: ({ src, alt }) => (
              <motion.img
                src={src || ""}
                alt={alt || ""}
                className="rounded-lg shadow-lg max-w-full h-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: delayOffset + 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  };

  // Legacy renderLines for overview (keeps existing behavior)
  const renderLines = (text?: string) =>
    text?.split("\n").map((line, i) =>
      line.trim().startsWith("-") ? (
        <motion.li
          key={i}
          className="text-gray-200 leading-relaxed ml-6 list-disc text-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {line.replace(/^- /, "")}
        </motion.li>
      ) : (
        <motion.p
          key={i}
          className="text-gray-200 leading-relaxed text-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {line}
        </motion.p>
      )
    );

  if (!project) return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
      <div className="text-xl">Loading project...</div>
    </div>
  );

  return (
    <div ref={containerRef} className="text-white snap-y snap-mandatory overflow-y-scroll h-screen bg-transparent">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative w-full min-h-screen snap-start flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ y: parallaxY }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={project.imgSrc}
            alt={project.imgAlt || project.title}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center max-w-4xl w-full"
          style={{ opacity: textOpacity, y: textY }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: scrollStage !== 'initial' ? 1 : 0, y: scrollStage !== 'initial' ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            {project.title}
          </motion.h1>

          {project.overview && (
            <motion.div
              className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: scrollStage !== 'initial' ? 1 : 0, y: scrollStage !== 'initial' ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {renderLines(project.overview)}
            </motion.div>
          )}

          {scrollStage === 'initial' && (
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col items-center text-white/70">
                <span className="text-sm font-medium mb-2">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 13l3 3 3-3" />
                    <path d="M7 6l3 3 3-3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.section>

      {/* Scroll-triggered Content Sections */}
      <AnimatePresence>
        {scrollStage === 'unlocked' && (
          <>
            {/* Combined Industry & Live Site Section */}
            {(project.industry || project.site) && (
              <motion.section
                className="w-full snap-start flex items-center justify-center px-4 sm:px-6 md:px-8 py-16"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="max-w-4xl w-full space-y-8">
                  {/* Industry Content */}
                  {project.industry && (
                    <div className="space-y-6">
                      <motion.h2
                        className="text-sm font-semibold text-orange-400/70 uppercase tracking-wider"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      >
                        Industry
                      </motion.h2>
                      <div className="text-lg text-gray-300 leading-relaxed">
                        {renderMarkdownContent(project.industry, 0.3)}
                      </div>
                    </div>
                  )}

                  {/* Live Site Content */}
                  {project.site && (
                    <div className="space-y-6 pt-6 border-t border-orange-900/20">
                      <motion.h2
                        className="text-sm font-semibold text-orange-400/70 uppercase tracking-wider"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      >
                        Live Site
                      </motion.h2>
                      <motion.a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-300 underline text-lg hover:text-orange-400 transition-colors duration-300"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      >
                        {project.site}
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.section>
            )}

            {project.technology && (
              <motion.section
                className="w-full snap-start flex items-center justify-center px-4 sm:px-6 md:px-8 py-16"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="max-w-4xl w-full space-y-6">
                  <motion.h2
                    className="text-sm font-semibold text-orange-400/70 uppercase tracking-wider"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    Technologies Used
                  </motion.h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technology.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-orange-900/20 text-orange-300 text-sm rounded-full border border-orange-900/40 hover:bg-orange-900/30 transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: [0.4, 0, 0.2, 1] }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {project.role && (
              <motion.section
                className="w-full snap-start flex items-center justify-center px-4 sm:px-6 md:px-8 py-16"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="max-w-4xl w-full space-y-6">
                  <motion.h2
                    className="text-sm font-semibold text-orange-400/70 uppercase tracking-wider"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    My Role
                  </motion.h2>
                  <div className="text-lg text-gray-300 leading-relaxed">
                    {renderMarkdownContent(project.role, 0.2)}
                  </div>
                </div>
              </motion.section>
            )}

            {project.problem && (
              <motion.section
                className="w-full snap-start flex items-center justify-center px-4 sm:px-6 md:px-8 py-16"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="max-w-4xl w-full space-y-6">
                  <motion.h2
                    className="text-sm font-semibold text-orange-400/70 uppercase tracking-wider"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    Problem Statement
                  </motion.h2>
                  <div className="text-lg text-gray-300 leading-relaxed">
                    {renderMarkdownContent(project.problem, 0.2)}
                  </div>
                </div>
              </motion.section>
            )}

            {project.solution && (
              <motion.section
                className="w-full snap-start flex items-center justify-center px-4 sm:px-6 md:px-8 py-16"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="max-w-4xl w-full space-y-6">
                  <motion.h2
                    className="text-sm font-semibold text-orange-400/70 uppercase tracking-wider"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    Solution
                  </motion.h2>
                  <div className="text-lg text-gray-300 leading-relaxed">
                    {renderMarkdownContent(project.solution, 0.2)}
                  </div>
                </div>
              </motion.section>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}