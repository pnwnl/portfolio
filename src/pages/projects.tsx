import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

// Projects page component
const Projects: NextPage = () => {
  // Sample projects data (replace with your actual projects)
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of your first project. Explain what it does and what technologies were used.',
      tags: ['React', 'TypeScript', 'Tailwind'],
      image: '/images/project1.png',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of your second project. Explain what it does and what technologies were used.',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
      image: '/images/project2.png',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of your third project. Explain what it does and what technologies were used.',
      tags: ['JavaScript', 'CSS', 'HTML'],
      image: '/images/project3.png',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A brief description of your fourth project. Explain what it does and what technologies were used.',
      tags: ['Python', 'Django', 'PostgreSQL'],
      image: '/images/project4.png',
    },
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Projects | Portfolio</title>
        <meta name="description" content="My portfolio projects and work samples" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="font-pixel text-retro-accent">My Projects</span>
          </h1>
          <p className="text-xl text-retro-muted max-w-2xl mx-auto">
            A showcase of my work, personal projects, and contributions.
          </p>
        </header>

        {/* Filter Categories - Can be expanded with filtering functionality */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 bg-retro-primary rounded-soft text-retro-text shadow-retro hover:shadow-retro-hover">
            All
          </button>
          <button className="px-4 py-2 bg-retro-dark rounded-soft text-retro-muted shadow-retro hover:shadow-retro-hover">
            Web
          </button>
          <button className="px-4 py-2 bg-retro-dark rounded-soft text-retro-muted shadow-retro hover:shadow-retro-hover">
            Mobile
          </button>
          <button className="px-4 py-2 bg-retro-dark rounded-soft text-retro-muted shadow-retro hover:shadow-retro-hover">
            Design
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card transform hover:-translate-y-2">
              <div className="aspect-video bg-retro-dark relative overflow-hidden">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-pixel text-retro-accent text-xl">PROJECT {project.id}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-retro-muted mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-retro-dark text-retro-accent text-sm rounded-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="btn-secondary"
                  >
                    View Details
                  </Link>
                  <a 
                    href="#" 
                    className="btn-primary"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-retro-primary p-8 rounded-soft shadow-retro">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-retro-muted mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects; 