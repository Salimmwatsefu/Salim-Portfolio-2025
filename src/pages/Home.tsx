import { Hero2 } from "../components/Hero";
import Navbar from "../components/Navbar";

import SidebarLayout from "../components/SidebarLayout";
import { getAllProjects } from "../utils/getProjects";
import Projects from "../components/Projects/Projects";
import About from "./About";




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
      <About />
     
    </div>
  );
}

export default Home;
