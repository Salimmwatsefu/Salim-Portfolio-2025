import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

type BlogCardProps = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  loading?: "eager" | "lazy";
};

const BlogCard: React.FC<BlogCardProps> = ({
  href,
  imgSrc,
  imgAlt,
  title,
  description,
  date,
  readTime,
  loading = "lazy",
}) => {
  return (
    <Link to={href}>
      <article className="has-thumbnail bg-black/20 rounded-lg shadow-lg shadow-orange-500/10 overflow-hidden w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full h-32 sm:w-1/3 sm:h-auto flex-shrink-0 overflow-hidden">
  <img
    src={imgSrc}
    alt={imgAlt}
    className="object-cover w-full h-full"
    loading={loading}
  />
</div>

          <div className="p-4 sm:p-6 flex-1">
            <h2
              className="mt-2 font-semibold text-xl sm:text-2xl lg:text-3xl overflow-hidden text-ellipsis text-gray-200 font-syne"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </h2>
            <p
              className="mt-3 text-gray-400 text-sm sm:text-base pr-2 overflow-hidden text-ellipsis"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </p>
            <div className="mt-4 sm:mt-6">
              <div className="flex flex-wrap items-center space-x-2 text-xs sm:text-sm text-orange-500 font-syne">
                <p>{date}</p>
                <span>.</span>
                <p>{readTime}</p>
                <p>
                  <CiMenuKebab className="ml-2 sm:ml-4 text-lg sm:text-xl" />
                </p>
                <p className="ml-auto">
                  <FaArrowRight className="text-base sm:text-lg" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;