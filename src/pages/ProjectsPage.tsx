import React from 'react'
import { getAllProjects } from '../utils/getProjects'
import Projects from '../components/Projects/Projects';


function ProjectsPage() {

    const projects = getAllProjects(); 

  return (
    <div>
        <Projects projects={projects} showSeeAll={false} />
    </div>
  )
}

export default ProjectsPage