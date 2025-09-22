import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface ProjectsCardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  titleColor?: string;
  description: string;
  tools: string | React.ReactNode;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  href,
  imgSrc,
  imgAlt,
  title,
  description,
  tools,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [imgSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  if (hasError) {
    return (
      <div className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
        <Link to={href} className="block h-full flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-8 h-8 border-2 border-gray-600/30 border-t-gray-600 rounded-full animate-spin mb-2 mx-auto"></div>
            <p className="text-xs font-medium">Image failed to load</p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
      <Link to={href} className="block h-full">
        <div className="relative w-full h-full">
          {/* Loading spinner */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/95 z-20 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-6 h-6 border-2 border-orange-400/30 border-t-orange-400 rounded-full animate-spin"></div>
                <p className="text-xs text-gray-400 font-medium">Loading...</p>
              </div>
            </div>
          )}

          {/* Image */}
          <img
            ref={imgRef}
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onLoad={handleLoad}
            onError={handleError}
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl transition-all duration-300 group-hover:from-black/40"></div>

          {/* Content overlay */}
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-white leading-tight line-clamp-1 group-hover:text-orange-300 transition-colors duration-300">
                {title}
              </h1>
              <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                {description}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className=" text-orange-400 font-medium">{tools}</span>
                <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-orange-400/50 transition-colors duration-300 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-orange-400/60 backdrop-blur-sm group-hover:bg-orange-400/80 transition-all duration-300" />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsCard;