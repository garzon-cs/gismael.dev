import React, { useContext } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { languageContext } from '../contexts/LanguageContext';

export const Footer = () => {

    const {Strings} = useContext(languageContext);
    const {footer} = Strings;

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div>
          {footer.rights}
        </div>
        <div className='text-center m-2'>
          {footer.disclaimer_js}
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/gerardo-ismael-garz%C3%B3n-dom%C3%ADnguez-b75ba3290/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hover:text-indigo-500"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/gismael-gzn"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hover:text-indigo-500"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
