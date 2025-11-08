import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiDjango,
  SiNodedotjs,
  SiDocker,
  SiAmazonwebservices,
  SiGithubactions,
  SiTensorflow,
  SiPytorch,
  SiTerraform,
  SiDigitalocean,
} from "react-icons/si";
import type { IconType } from "react-icons";

const TechIcon = ({ icon: Icon, label, color = "" }: { icon: IconType; label: string; color?: string }) => (
  <div className="flex items-center space-x-2 text-gray-300">
    <Icon className={`text-xl ${color}`} />
    <span className="text-sm">{label}</span>
  </div>
);

export default function SkillsSection() {
  return (
    <section className="text-white mt-12">
      <header className="sm:flex sm:items-center">
        <h1 className="mt-2  sm:mt-0 font-bold text-2xl text-gray-100">
          My Skills
        </h1>
      </header>

      <div className=" grid md:grid-cols-2 grid-cols-1 space-x-5 space-y-10 my-10 ">

      {/* FRONTEND */}
      <div className=" border py-10 px-5 border-orange-100/20 rounded-lg shadow-lg shadow-orange-500/10 hover:border-orange-300/70 transition-all duration-300  ">
      <h2 className=" my-5 font-semibold text-gray-300 text-xl">Frontend</h2>
      <p className="text-gray-300 mt-3 leading-relaxed">
        I craft high-performance, user-centered interfaces using modern frameworks and component-driven architectures.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-6 gap-4">
        <TechIcon icon={SiTypescript} label="TypeScript" color="text-blue-500" />
        <TechIcon icon={SiReact} label="React.js" color="text-cyan-400" />
        <TechIcon icon={SiNextdotjs} label="Next.js" />
        <TechIcon icon={SiTailwindcss} label="Tailwind CSS" color="text-sky-400" />
        <TechIcon icon={SiFramer} label="Framer Motion" color="text-pink-500" />
      </div>
      </div>

      {/* DEVOPS */}
       <div className="border py-10 px-5 border-orange-100/20 rounded-lg shadow-lg shadow-orange-500/10 hover:border-orange-300/70 transition-all duration-300">
      <h2 className="my-5 font-semibold text-gray-300 text-xl">DevOps & Infrastructure</h2>
      <p className="text-gray-300 mt-3 leading-relaxed">
        I manage full DevOps pipelines — from CI/CD and containerization to cloud infrastructure and monitoring.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-6 gap-4">
        <TechIcon icon={SiDocker} label="Docker" color="text-blue-400" />
        <TechIcon icon={SiTerraform} label="Terraform" color="text-blue-500" />
        <TechIcon icon={SiAmazonwebservices} label="AWS" color="text-yellow-400" />
        <TechIcon icon={SiDigitalocean} label="DigitalOcean" color="text-blue-400" />
        <TechIcon icon={SiGithubactions} label="GitHub Actions" color="text-gray-400" />
      </div>
      </div>

      {/* BACKEND + ML */}
       <div className="border py-10 px-5 border-orange-100/20 rounded-lg shadow-lg shadow-orange-500/10 hover:border-orange-300/70 transition-all duration-300">
      <h2 className="my-5 font-semibold text-gray-300 text-xl">Backend & Machine Learning</h2>
      <p className="text-gray-300 mt-3 leading-relaxed">
        I build scalable backend systems and occasionally explore AI/ML — training models, running NLP experiments, and integrating intelligent features into real-world products.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-6 gap-4">
        <TechIcon icon={SiNodedotjs} label="Node.js" color="text-green-500" />
        <TechIcon icon={SiDjango} label="Django" color="text-green-700" />
        <TechIcon icon={SiPostgresql} label="PostgreSQL" color="text-blue-400" />
        <TechIcon icon={SiTensorflow} label="TensorFlow" color="text-orange-400" />
        <TechIcon icon={SiPytorch} label="PyTorch" color="text-red-500" />
      </div>
      </div>


      </div>
    </section>
  );
}
