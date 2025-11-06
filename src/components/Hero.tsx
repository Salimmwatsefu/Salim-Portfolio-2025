"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

const Hero2 = () => {
  return (
    <div className="flex flex-col text-white relative">
      {/* Greeting Section */}
      <div className="relative flex flex-col md:mt-24 mt-14 md:ml-24 ml-14">
        {/* Waving hand animation */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="absolute -left-14 top-2 text-3xl"
        >
          👋
        </motion.div>

        {/* Orange glowing dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -left-5 top-32 w-4 h-4 rounded-full bg-orange-500 blur-md"
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold tracking-tight "
        >
          Hey!
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-500 tracking-[0.4em] text-[10px] mt-3"
        >
          WHAT&apos;S UP?
        </motion.h2>
      </div>

      {/* Hero Title & Description */}
      <div className="mt-20 md:ml-40 md:max-w-2xl mx-5 relative">
        {/* Thin orange accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent absolute -left-16 top-6 rounded-full"
        ></motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-semibold text-4xl leading-tight font-syne"
        >
          Software Engineer
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className=" font-normal text-xl leading-tight font-syne text-gray-500"
        >
          Frontend Engineering <span className=" font-bold text-orange-500 ">x</span> DevOps.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 text-gray-400 leading-relaxed text font-manrope "
        >
          I specialize in crafting high-performance, user-centered web applications with a strong focus on modern  <span className="text-orange-500 font-medium"> frontend development </span> .
          <br />
          <br />
          Alongside that, I manage full{" "}
          <span className="text-orange-500 font-medium">DevOps</span> {" "}
      
          workflows, from CI/CD automation and containerization to cloud infrastructure and system monitoring, ensuring that every product I build is stable, scalable, and production-ready.

          <br/>

          <br/>
          I occasionally explore <span className="text-orange-500 font-medium">AI</span> and <span className="text-orange-500 font-medium">ML</span>, building models and experimenting with <span className="text-orange-500 font-medium">NLP</span> systems to understand their real-world impact.
        </motion.p>
      </div>

      {/* Experience / Projects Stats */}
      <div className="absolute hidden md:block right-20 top-[300px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col gap-12"
        >
          {/* Years */}
          <div className="flex flex-col relative">
            <span className="text-4xl font-light tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              3+
            </span>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Years Experience
            </p>
            {/* subtle orange bar accent */}
            <div className="absolute -left-6 top-4 w-1 h-10 bg-orange-500/70 rounded-full"></div>
          </div>

          {/* Projects */}
          <div className="flex flex-col relative">
            <span className="text-4xl font-light tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              20+
            </span>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Projects
            </p>
            {/* subtle orange bar accent */}
            <div className="absolute -left-6 top-4 w-1 h-10 bg-yellow-500/90 rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Experience / Projects Stats */}
      <div className="block md:hidden mt-20 ml-5">

       

       {/* Icons */}
          <div className=" flex  gap-7">
                 <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                   <FaGithub size={22} />
                 </a>
                 <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                   <FaLinkedin size={22} />
                 </a>
                 <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                   <FaMedium size={22} />
                 </a>
                 <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                   <FaTwitter size={22} />
                 </a>
               </div>


               {/* Experience / Projects Stats */}
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex mt-20 gap-12"
        >
          {/* Years */}
          <div className="flex flex-col relative">
            <span className="text-4xl font-light tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              3+
            </span>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Years Experience
            </p>
            {/* subtle orange bar accent */}
            <div className="absolute -left-6 top-4 w-1 h-10 bg-orange-500/70 rounded-full"></div>
          </div>

          {/* Projects */}
          <div className="flex flex-col relative">
            <span className="text-4xl font-light tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
              20+
            </span>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Projects
            </p>
            {/* subtle orange bar accent */}
            <div className="absolute -left-6 top-4 w-1 h-10 bg-yellow-500/90 rounded-full"></div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export { Hero2 };
