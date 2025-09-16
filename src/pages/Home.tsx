import { Hero2 } from "../components/Hero";
import Navbar from "../components/Navbar";

import SidebarLayout from "../components/SidebarLayout";
import { getAllProjects } from "../utils/getProjects";
import Projects from "../components/Projects/Projects";
import About from "./About";
import Blog from "./Blog";
import Footer from "./Footer";
import SectionDivider from "../components/ui/SectionDivider";
import { Section } from "lucide-react";





function Home() {

  const projects = getAllProjects();


  return (
    <div>
      {/* Desktop & tablet → Sidebar layout */}
      <div className="hidden md:block">
        <SidebarLayout>
          <div className="text-white">
            <Navbar />
            <Hero2 />
           
          </div>
        </SidebarLayout>
      </div>

      {/* Mobile → Simple layout without sidebar */}
      <div className="block md:hidden text-white">
        <Navbar />
        <Hero2 />
      </div>

      {/* Shared section (always visible) */}
      <Projects projects={projects} featuredOnly showSeeAll />;
      <SectionDivider />
      <About />
      <SectionDivider />
      <Blog />

      <SectionDivider />
      <Footer />
      
     
    </div>
  );
}

export default Home;
