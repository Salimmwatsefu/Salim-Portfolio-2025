import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectsCardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  titleColor?: string;
  description: string;
  tools: string | React.ReactNode;
  loading?: "lazy" | "eager";
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  href,
  imgSrc,
  imgAlt,
  title,
  description,
  tools,
  loading = "lazy",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Animation variants for the image fade-in
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  // Simulate loading start to show spinner immediately
  React.useEffect(() => {
    // Trigger loading state immediately
    setIsLoaded(false);
    setHasError(false);
  }, [imgSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true); // Hide spinner on error too
  };

  if (hasError) {
    return (
      <div className="rounded-2xl shadow-xl overflow-hidden relative h-[500px] bg-black group flex items-center justify-center">
        <Link to={href} className="block h-full w-full flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-16 h-16 border-4 border-gray-500/30 border-t-gray-500 rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-sm">Image failed to load</p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl shadow-xl overflow-hidden relative h-[500px] bg-black group">
      {/* Link wrapper */}
      <Link to={href} className="block h-full">
        {/* Image section */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {/* Loading Spinner Overlay - always show until loaded */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
              <motion.div
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
                </div>
                <p className="text-white text-sm font-medium">Loading...</p>
              </motion.div>
            </div>
          )}

          {/* Image - always render, but animate in */}
          <motion.img
            ref={imgRef}
            src={imgSrc}
            alt={imgAlt}
            loading={loading}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            variants={imageVariants}
            initial={false} // Don't animate on mount
            animate={isLoaded ? "visible" : "hidden"}
            onLoad={handleLoad}
            onError={handleError}
          />

          {/* Base overlay - fade in with image */}
          <motion.div 
            className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/20 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Extra darker overlay only at the bottom (where text is) */}
          <motion.div 
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Text overlay - stagger in after image */}
          <motion.div 
            className="absolute inset-0 z-10 flex flex-col justify-end p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h1 className="text-4xl font-bold mb-2 text-white tracking-tight">
              {title}
            </h1>
            <p className="text-sm text-gray-200 mb-2 leading-snug">
              {description}
            </p>
            <p className="text-sm text-orange-400 font-medium">
              {tools}
            </p>
          </motion.div>

          {/* Glowing accent dots - stagger in */}
          <motion.div 
            className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-500/80 blur-md animate-pulse"
            initial={{ opacity: 0, scale: 0 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
          <motion.div 
            className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-yellow-500/70 blur-sm animate-pulse"
            initial={{ opacity: 0, scale: 0 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsCard;