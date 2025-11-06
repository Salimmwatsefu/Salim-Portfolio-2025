import { motion } from "framer-motion";
import SectionDivider from "../ui/SectionDivider";
import OutsideTerminal from "./OutsideTerminal";
import SkillsSection from "./SkillsSection";


export default function AboutHome() {
  return (
    <section className="pb-10 md:pt-8 pt-1 px-4 sm:px-8">
      {/* --- Header --- */}
      <div className="max-w-6xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="sm:ml-16">
            <div>
              <h1 className="text-5xl font-semibold text-gray-200 font-syne relative z-10">
                About Me
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

        {/* --- Section Chips --- */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {[
            "Frontend Obsession",
            "Pixel Perfect",
            "Creative Coder",
            "DevOps",
            "Machine Learning",
          ].map((tag, i) => (
            <div
              key={i}
              className="inline-block px-4 py-2 bg-orange-500/30 rounded-full text-white/50 font-mono text-sm"
            >
              <span className="mr-2">✦</span>
              {tag}
            </div>
          ))}
        </div>

        {/* --- Skills Section --- */}
        <SkillsSection />

        {/* Divider for spacing between sections on mobile */}
        <div className="block md:hidden my-10">
          <SectionDivider />
        </div>

        {/* --- Outside Terminal Section --- */}
        <OutsideTerminal />
      </div>
    </section>
  );
}
