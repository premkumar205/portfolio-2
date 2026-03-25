import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-dark-border bg-dark-bg/80 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <a href="#" className="text-xl font-bold tracking-tighter">
            Prem<span className="text-primary">kumar</span>
          </a>
        </div>
        
        <p className="text-dark-muted text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Premkumar. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
