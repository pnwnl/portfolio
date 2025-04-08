import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

// About page component
const About: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About Me | Portfolio</title>
        <meta name="description" content="Learn more about me and my background" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="font-pixel text-retro-accent">About Me</span>
          </h1>
          <p className="text-xl text-retro-muted max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Profile Section */}
          <div className="md:col-span-1">
            <div className="bg-retro-primary p-6 rounded-soft shadow-retro">
              <div className="aspect-square bg-retro-dark rounded-soft mb-6 flex items-center justify-center">
                <span className="font-pixel text-retro-accent text-2xl">PROFILE</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Lisandro Naranjo Guzman</h2>
              <p className="text-retro-muted mb-4">Software Development Engineer</p>
              
              <div className="border-t border-retro-dark pt-4 mt-4">
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-retro-muted mb-4">Seattle, WA</p>
                
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-retro-muted mb-4">lnara@gmail.com</p>
                
                <h3 className="font-medium mb-2">Social</h3>
                <div className="flex flex-wrap gap-2">
                  {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="text-retro-accent hover:text-retro-highlight"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="md:col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-pixel text-retro-accent mb-6">BIO</h2>
              <div className="bg-retro-dark p-6 rounded-soft shadow-retro mb-6">
                <p className="mb-4">
                  [Your introduction paragraph - who you are professionally]
                </p>
                <p className="mb-4">
                  [Your background, education, and key experiences]
                </p>
                <p>
                  [Your professional passions and what you're currently focusing on]
                </p>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-pixel text-retro-accent mb-6">EDUCATION</h2>
              <div className="space-y-6">
                {/* Education Items - Replace with your actual education */}
                {[
                  { degree: 'B.S. Computer Science', institution: 'University of Washington, Seattle', year: '2020 - 2024' }//,
                  //{ degree: 'Degree 2', institution: 'Institution 2', year: '20XX - 20XX' }
                ].map((edu, index) => (
                  <div key={index} className="bg-retro-dark p-6 rounded-soft shadow-retro">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-retro-accent mb-2">{edu.institution}</p>
                    <p className="text-retro-muted">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-pixel text-retro-accent mb-6">EXPERIENCE</h2>
              <div className="space-y-6">
                {/* Experience Items - Replace with your actual experience */}
                {[
                  { role: 'Role 1', company: 'Company 1', period: '20XX - Present', description: 'Description of responsibilities and achievements.' },
                  { role: 'Role 2', company: 'Company 2', period: '20XX - 20XX', description: 'Description of responsibilities and achievements.' }
                ].map((exp, index) => (
                  <div key={index} className="bg-retro-dark p-6 rounded-soft shadow-retro">
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-retro-accent mb-2">{exp.company}</p>
                    <p className="text-retro-muted mb-3">{exp.period}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Personal Interests Section */}
        <section>
          <h2 className="text-2xl font-pixel text-retro-accent mb-6 text-center">INTERESTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Interest Items - Replace with your actual interests */}
            {['Interest 1', 'Interest 2', 'Interest 3', 'Interest 4'].map((interest, index) => (
              <div key={index} className="bg-retro-primary p-4 rounded-soft shadow-retro text-center">
                <h3 className="font-medium">{interest}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 