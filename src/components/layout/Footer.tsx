import React from 'react';
import Link from 'next/link';

// Footer component
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-retro-dark py-8 mt-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-pixel text-retro-accent text-xl mb-4">
              <span className="text-retro-highlight">&lt;</span>
              Portfolio
              <span className="text-retro-highlight">/&gt;</span>
            </h3>
            <p className="text-retro-muted">
              A passionate developer creating meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-retro-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-retro-muted hover:text-retro-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-retro-muted hover:text-retro-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-retro-muted hover:text-retro-accent transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-retro-muted hover:text-retro-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-medium text-retro-text mb-4">Connect</h4>
            <div className="flex space-x-4">
              {/* Social Media Icons - Replace with your actual links */}
              {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-retro-muted hover:text-retro-accent transition-colors"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-retro-primary text-center text-retro-muted text-sm">
          <p>© {currentYear} [Your Name] | All Rights Reserved</p>
          <p className="mt-2 font-pixel text-xs text-retro-accent">Made with ♥ and Retro Vibes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 