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
      <div className="rounded-2xl shadow-xl overflow-hidden relative h-[500px] bg-black group flex items-center justify-center">
        <Link to={href} className="h-full w-full flex items-center justify-center">
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
      <Link to={href} className="block h-full">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {/* Spinner while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
                  <div
                    className="absolute inset-0 w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"
                    style={{ animationDuration: "1.5s" }}
                  ></div>
                </div>
                <p className="text-white text-sm font-medium">Loading...</p>
              </div>
            </div>
          )}

          {/* Image */}
          <img
            ref={imgRef}
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            onLoad={handleLoad}
            onError={handleError}
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/20 rounded-2xl"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl pointer-events-none"></div>

          {/* Text overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
            <h1 className="text-4xl font-bold mb-2 text-white tracking-tight">
              {title}
            </h1>
            <p className="text-sm text-gray-200 mb-2 leading-snug">
              {description}
            </p>
            <p className="text-sm text-orange-400 font-medium">{tools}</p>
          </div>

          {/* Accent dots */}
          <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-500/80 blur-md animate-pulse" />
          <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-yellow-500/70 blur-sm animate-pulse" />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsCard;
