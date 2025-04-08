import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

// Home page component
const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-retro-black text-retro-text">
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="font-pixel text-retro-accent">Hello, </span>
                <span className="block mt-2">I'm Lisandro Naranjo Guzman</span>
              </h1>
              <p className="text-xl mb-6 text-retro-muted">
                Software Engineer passionate about creating meaningful digital experiences
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="px-6 py-2 bg-retro-secondary hover:bg-retro-highlight transition-colors rounded-soft shadow-retro hover:shadow-retro-hover transform hover:-translate-y-1">
                  About Me
                </Link>
                <Link href="/projects" className="px-6 py-2 bg-retro-primary hover:bg-retro-secondary transition-colors rounded-soft shadow-retro hover:shadow-retro-hover transform hover:-translate-y-1">
                  My Work
                </Link>
              </div>
            </div>
            <div className="bg-retro-primary p-8 rounded-soft shadow-retro">
              {/* Placeholder for profile image or animated element */}
              <div className="aspect-square bg-retro-dark rounded-soft flex items-center justify-center">
                <span className="font-pixel text-retro-accent text-2xl">PIXEL ART</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-pixel text-retro-accent mb-8">SKILLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Skill Items - Replace with your actual skills */}
            {['Java', 'Python', 'Spring Boot', 'Competitive Fighting Games'].map((skill, index) => (
              <div key={index} className="bg-retro-dark p-4 rounded-soft shadow-retro hover:shadow-retro-hover transform hover:-translate-y-1 transition-all">
                <h3 className="font-medium">{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section>
          <h2 className="text-2xl font-pixel text-retro-accent mb-8">FEATURED PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Cards - Replace with your actual projects */}
            {[1, 2].map((project) => (
              <div key={project} className="bg-retro-primary rounded-soft overflow-hidden shadow-retro hover:shadow-retro-hover transform hover:-translate-y-1 transition-all">
                <div className="aspect-video bg-retro-dark"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-retro-muted mb-4">Brief description of project {project}...</p>
                  <Link href={`/projects/${project}`} className="text-retro-accent hover:underline font-medium">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home; 