import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

// Skill type definition
interface Skill {
  name: string;
  level: number;
  category: string;
}

// Skills page component
const Skills: NextPage = () => {
  // Sample skills data (replace with your actual skills)
  const skills: Skill[] = [
    // Technical Skills
    { name: 'JavaScript', level: 90, category: 'technical' },
    { name: 'TypeScript', level: 85, category: 'technical' },
    { name: 'React', level: 54, category: 'technical' },
    { name: 'Next.js', level: 72, category: 'technical' },
    { name: 'Node.js', level: 80, category: 'technical' },
    { name: 'CSS/SCSS', level: 85, category: 'technical' },
    { name: 'Tailwind CSS', level: 60, category: 'technical' },
    { name: 'Git', level: 92, category: 'technical' },
    
    // Soft Skills
    { name: 'Problem Solving', level: 92, category: 'soft' },
    { name: 'Communication', level: 85, category: 'soft' },
    { name: 'Teamwork', level: 90, category: 'soft' },
    { name: 'Adaptability', level: 88, category: 'soft' },
  ];

  // Group skills by category
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <div className="min-h-screen">
      <Head>
        <title>Skills | Portfolio</title>
        <meta name="description" content="My skills and competencies" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="font-pixel text-retro-accent">My Skills</span>
          </h1>
          <p className="text-xl text-retro-muted max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills.
          </p>
        </header>

        {/* Technical Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-pixel text-retro-accent mb-8">TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="bg-retro-primary p-6 rounded-soft shadow-retro">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-retro-accent">{skill.level}%</span>
                </div>
                <div className="w-full bg-retro-dark rounded-full h-2.5">
                  <div 
                    className="bg-retro-accent h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-pixel text-retro-accent mb-8">SOFT SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-retro-primary p-6 rounded-soft shadow-retro">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-retro-accent">{skill.level}%</span>
                </div>
                <div className="w-full bg-retro-dark rounded-full h-2.5">
                  <div 
                    className="bg-retro-highlight h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section>
          <h2 className="text-2xl font-pixel text-retro-accent mb-8">TOOLS & TECHNOLOGIES</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'VS Code', 'GitHub', 'Docker', 'AWS', 'Firebase', 
              'MongoDB', 'PostgreSQL', 'Figma', 'Photoshop', 'Illustrator',
              'Jira', 'Slack'
            ].map((tool, index) => (
              <div 
                key={index} 
                className="bg-retro-dark p-4 rounded-soft shadow-retro text-center hover:bg-retro-primary transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="mt-16 bg-retro-primary p-8 rounded-soft shadow-retro">
          <h2 className="text-2xl font-pixel text-retro-accent mb-4">CURRENTLY LEARNING</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {['Skill 1', 'Skill 2', 'Skill 3'].map((skill, index) => (
              <div key={index} className="bg-retro-dark p-4 rounded-soft shadow-retro text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills; 