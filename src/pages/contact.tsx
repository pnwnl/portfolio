import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

// Contact page component
const Contact: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact | Portfolio</title>
        <meta name="description" content="Get in touch with me" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="font-pixel text-retro-accent">Contact Me</span>
          </h1>
          <p className="text-xl text-retro-muted max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </header>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <form className="bg-retro-primary p-8 rounded-soft shadow-retro">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-retro-dark border border-retro-secondary rounded-soft text-retro-text focus:outline-none focus:ring-2 focus:ring-retro-accent"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-retro-dark border border-retro-secondary rounded-soft text-retro-text focus:outline-none focus:ring-2 focus:ring-retro-accent"
                placeholder="Your email"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 bg-retro-dark border border-retro-secondary rounded-soft text-retro-text focus:outline-none focus:ring-2 focus:ring-retro-accent"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-pixel text-retro-accent mb-6">OTHER WAYS TO REACH ME</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-retro-dark p-6 rounded-soft shadow-retro">
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-retro-accent">email@example.com</p>
            </div>
            <div className="bg-retro-dark p-6 rounded-soft shadow-retro">
              <h3 className="font-medium mb-2">LinkedIn</h3>
              <a href="#" className="text-retro-accent hover:underline">linkedin.com/in/username</a>
            </div>
            <div className="bg-retro-dark p-6 rounded-soft shadow-retro">
              <h3 className="font-medium mb-2">GitHub</h3>
              <a href="#" className="text-retro-accent hover:underline">github.com/username</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 