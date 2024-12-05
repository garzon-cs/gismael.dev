import React from 'react'
import { ProjectCard } from './ProjectCard';

const projectCardStyle = 'bg-stone-100 dark:bg-gray-900 shadow-xl rounded-3xl p-3 mt-4 mb-4 lg:p-6 lg:m-10 transition duration-300';

export const ProjectGroup = ({groupTitle, projects=[], className}) => {
  return (
    <section className={className}>
        <h2 className='text-3xl lg:text-5xl font-bold'> {groupTitle} </h2>
        <ul>
            { projects.map(e => 
            <li className={projectCardStyle} key={e.title}> 
                <ProjectCard {...e} /> 
            </li> 
            )}
        </ul>
    </section>
  )
}
