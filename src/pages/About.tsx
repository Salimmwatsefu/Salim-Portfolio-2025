
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiCommand, FiCpu, FiDatabase, FiFeather, } from "react-icons/fi";
import { TbBrandReact, TbBrandTypescript } from "react-icons/tb";

import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-router";
import { SiTypescript, SiNextdotjs, SiReact, SiTailwindcss, SiFramer, SiPostgresql, SiSqlite, SiExpress, SiFlask,  SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas } from "react-icons/si";
import { FaBrain, FaRobot, FaLanguage } from "react-icons/fa";







function About() {


  type TechIconProps = {
  icon: React.ElementType;
  label: string;
  color?: string; // optional custom color
};

const TechIcon: React.FC<TechIconProps> = ({ icon: Icon, label, color }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Icon wrapper with white square background */}
      <div className="bg-white p-2 rounded-md flex items-center justify-center w-8 h-8">
        <Icon className={`text-xl ${color ? color : "text-black"}`} />
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

  
const quotes = [
  {
    icon: <FiCode className="w-8 h-8 text-white" />,
    text: "The web should be an inclusive space where creativity meets functionality",
    author: "Tim Berners-Lee"
  },

  // Add more quotes...
];
  return (
    <section className="min-h-screen pb-20 md:pt-8 pt-1 px-4 sm:px-8 ">

      <div className="max-w-6xl mx-auto mt-10">
        {/* Creative Philosophy Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 "
        >
          
          <div className='sm:ml-16'>
         <div>
          <h1 className="text-5xl font-semibold text-gray-200 font-syne relative z-10">
            About me
          </h1>
          <p className="text-sm mt-1 text-gray-400 tracking-wider">
            Designs that breathe, code that speaks
          </p>
        </div>

         <div className="-mt-8 w-16 h-[2px] bg-orange-500 rotate-12"></div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 1 }}
                  className="h-[3px] bg-gradient-to-r from-orange-500 to-transparent rounded transform origin-right -rotate-12 mt-7 ml-52"
                />
      </div>
         
        </motion.div>

        





        <div className='flex flex-wrap justify-center gap-5 mb-10'>
          <div className="inline-block px-4 py-2 bg-orange-500/30 rounded-full text-white/50 font-mono text-sm ">
                <span className="mr-2">✦</span>
                Frontend Obsession
              </div>
              <div className="inline-block px-4 py-2 bg-orange-500/30 rounded-full text-white/50 font-mono text-sm  ">
                <span className="mr-2">#</span>
                Pixel Perfect
              </div>
              <div className="inline-block px-4 py-2 bg-orange-500/30 rounded-full text-white/50 font-mono text-sm  ">
                <span className="mr-2">✦</span>
                Creative Coder
              </div>
              <div className="inline-block px-4 py-2 bg-orange-500/30 rounded-full text-white/50 font-mono text-sm  ">
                <span className="mr-2">✦</span>
                Accessible
              </div>
              <div className="inline-block px-4 py-2 bg-orange-500/30 rounded-full text-white/50 font-mono text-sm  ">
                <span className="mr-2">✦</span>
                Machine Learning
              </div>
          </div>

       

        {/* Frontend Passion Section */}
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    
    <div className=" flex items-center">

      <div className="ml-4">
        
        
      </div>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
      <blockquote>
        <header className="sm:flex sm:items-center">
          
          <h1 className="mt-2 font-bold sm:ml-4 sm:mt-0 text-white text-2xl">
          Get to know me!
          </h1>
        </header>

       <p className="mt-5 text-gray-200 gap-3 text-base tracking-wide">
  As a <span className="font-bold text-orange-400">Fullstack Developer</span> I am proficient 
  in both front-end and back-end technologies.<br />
  Beyond web development, I specialize in{" "}
  <span className="font-bold text-orange-400">Machine Learning, AI, and NLP</span>, 
  building intelligent systems and data-driven solutions.<br />
  In addition to my technical skills, I am a strong problem solver with excellent communication abilities.<br />
  I am excited about the opportunity to use my combined expertise to create innovative solutions 
  that make a positive impact.<br />
  
</p>

        

         <div className=' rounded-lg mt-10 '>

          <div className='absolute border-2 border-orange-700 md:h-[400px] h-[330px] rounded-lg md:w-[400px]  w-[330px] ml-10 mt-6  '></div>
          <img
          alt=''
          src='salim.jpg'
          className='rounded-lg md:w-[80%] w-[90%] z-50 relative'
          />
         </div>

          {/* Philosophy Grid */}
        
<div className="grid md:grid-cols-2 gap-8 mb-28 mt-20  ">
  {/* Decorative background elements */}
  <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-15 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-800/10 dark:bg-gray-100/10 rounded-full blur-3xl"></div>
  </div>

  {quotes.map((quote, index) => (
    <motion.div
      key={index}
      
      className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800 
                border-2 border-gray-200 dark:border-gray-700
                relative overflow-hidden
                hover:shadow-xl transition-shadow duration-300 md:w-[500px]"
    >
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent pointer-events-none" />
      
      {/* Animated icon */}
      <div className="mb-6 relative">
        <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl w-fit
                       transform transition-transform hover:scale-105">
          {quote.icon}
        </div>
      </div>

      {/* Quote text */}
      <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-100 mb-4 
                    leading-tight font-serif italic">
        "{quote.text}"
      </h3>
      
      {/* Author */}
      <p className="text-gray-600 dark:text-gray-300 font-medium 
                   border-l-4 border-orange-500 pl-4 mt-6">
        — {quote.author}
      </p>

      {/* Decorative corner */}
      <div className="absolute bottom-2 right-2 text-orange-500/20 dark:text-orange-400/10 
                     text-6xl transform -rotate-12 -translate-y-4">
        ”
      </div>
    </motion.div>
  ))}
</div>
         

        
      </blockquote>

      <blockquote>
        <header className="sm:flex sm:items-center">
          

          <h1 className="mt-2 sm:ml-4 sm:mt-0 text-gray-200 font-bold text-2xl">
            My Skills
          </h1>
        </header>

        <div className="text-white">
      {/* FRONTEND */}
      <h2 className="mt-16 font-semibold text-gray-300 text-xl">FRONTEND APPS</h2>
      <p className="text-base mt-6">
        I build intuitive and visually appealing client-side
applications with modern features like SPA among
other best practices for SEO optimisation. I Use
modern tech such as:
      </p>
      <div className="grid grid-cols-2 mt-6 gap-4">
        <TechIcon icon={SiTypescript} label="TypeScript" color="text-blue-500" />
        <TechIcon icon={SiNextdotjs} label="Next.js" />
        <TechIcon icon={SiReact} label="React.js" color="text-cyan-400" />
        <TechIcon icon={SiTailwindcss} label="Tailwind CSS" color="text-sky-400" />
        <TechIcon icon={SiFramer} label="Framer Motion" color="text-pink-500" />
      </div>

      {/* BACKEND */}
      <h2 className="mt-16 font-semibold text-gray-300 text-xl">BACKEND APPS</h2>
      <p className="text-base mt-6">
       Build scalable and maintainable server applications
using modern technology stacks such as:
      </p>
      <div className="grid grid-cols-2 mt-6 gap-4">
        <TechIcon icon={SiPostgresql} label="PostgreSQL" color="text-sky-600" />
        <TechIcon icon={SiSqlite} label="SQLite3" color="text-blue-400" />
        <TechIcon icon={SiExpress} label="Express.js" />
        <TechIcon icon={SiFlask} label="Flask" />
      </div>

      <section className="mt-16">
      {/* HEADING */}
      <h2 className="font-semibold text-gray-300 text-xl">MACHINE LEARNING & AI</h2>
      <p className="text-base mt-6">
        Designing and training intelligent systems using modern ML, AI, and NLP frameworks:
      </p>

      {/* ICON GRID */}
      <div className="grid grid-cols-2  mt-6 gap-6">
        <TechIcon icon={SiPytorch} label="PyTorch" color="text-orange-500" />
        <TechIcon icon={SiScikitlearn} label="Scikit-learn" color="text-blue-500" />
        <TechIcon icon={FaBrain} label="Deep Learning" color="text-purple-400" />
        <TechIcon icon={FaRobot} label="AI Systems" color="text-pink-400" />
        <TechIcon icon={FaLanguage} label="NLP" color="text-indigo-400" />
      </div>
    </section>
    </div>

            
        

        

        
      </blockquote>

      

     

      
      
    </div>
  </div>

       
        
      </div>
             
    </section>
  )
}

export default About