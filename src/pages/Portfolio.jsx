import React, { useContext } from 'react'
import { languageContext } from '../contexts/LanguageContext'
import { ProjectGroup } from '../components/ProjectGroup';

const dummyProjects = [
  {
      title: 'Portfolio Website',
      url: 'https://myportfolio.com',
      anchorText: 'Visit Portfolio',
      techstack: 'React, CSS, Node.js',
      description: 'A personal portfolio website showcasing my projects and skills.',
      images: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/200'
      ],
      status: 'In active development',
      className: 'project-portfolio'
  },
  {
      title: 'E-commerce App',
      url: 'https://shoponline.com',
      anchorText: 'Shop Now',
      techstack: 'Vue.js, TailwindCSS, Firebase',
      description: 'An e-commerce platform with real-time inventory management and user accounts.',
      images: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/200',
          'https://via.placeholder.com/250'
      ],
      status: 'Discontinued',
      className: 'project-ecommerce'
  },
  {
      title: 'Task Manager',
      url: 'https://taskmanager.com',
      anchorText: 'Manage Tasks',
      techstack: 'Angular, Bootstrap, Express.js',
      description: 'A task management app for organizing personal and team tasks efficiently.',
      images: [],
      status: 'On hold',
      className: 'project-taskmanager'
  },
  {
      title: 'Blog Platform',
      url: 'https://myblogplatform.com',
      anchorText: 'Read Blogs',
      techstack: 'Next.js, TailwindCSS, MongoDB',
      description: 'A modern blogging platform for creating and sharing articles with analytics support.',
      images: [
          'https://via.placeholder.com/150',
      ],
      status: 'Active',
      className: 'project-blogplatform'
  },
];

export default dummyProjects;

export const Portfolio = () => {

    const {Strings} = useContext(languageContext);
    const {page_portfolio} = Strings;

  return (
    <main className='min-h-screen ml-2 mt-10 lg:m-20'>
        <h1 className='flex flex-col space-y-4'>
            <span className='text-5xl lg:text-8xl font-bold'>{page_portfolio.role}</span>
            <span className='text-3xl lg:text-6xl'> Gerardo Garzón </span>
        </h1>

        <ProjectGroup 
          groupTitle={'My Freelance Work'} 
          projects={dummyProjects}
          className='mt-10 lg:mt-24 p-2'
        />

    </main>
  )
}
