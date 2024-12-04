import React, { useContext } from 'react';

import { FaBriefcase, FaLinkedin, FaGithub } from 'react-icons/fa';
import { languageContext } from '../contexts/LanguageContext';
import { NavLink } from 'react-router-dom';

const h1Style = 'text-6xl font-bold bg-gradient-to-r from-indigo-400 to-orange-400 text-transparent bg-clip-text';

const navStyle = 'flex flex-row space-x-4 lg:space-x-10';

const anchorStyle = 'flex bg-blue-700 rounded-3xl p-3 text-white font-semibold transition duration-300 ease-in-out transform md:hover:-translate-y-1 md:hover:bg-blue-800 shadow-lg';

const iconStyle = 'h-5 w-5 inline-block mr-2';

export const Index = () => {

    const {Strings} = useContext(languageContext);
    const {nav} = Strings;

  return (
    <header className='min-h-screen flex flex-col items-center justify-center space-y-8'>
      <h1 className={h1Style}>Gismael.dev</h1>
      <nav className={navStyle}>
        <NavLink
          className={anchorStyle}
          to={"portfolio"}
        >
            <FaBriefcase className={iconStyle} />
          {nav.portfolio}
        </NavLink>
        <a
          className={anchorStyle}
          href="https://www.linkedin.com/in/gerardo-ismael-garz%C3%B3n-dom%C3%ADnguez-b75ba3290/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <FaLinkedin className={iconStyle} />
          LinkedIn
        </a>
        <a
          className={anchorStyle}
          href="https://github.com/gismael-gzn"
          target="_blank"
          rel="noopener noreferrer"
        >
            <FaGithub className={iconStyle} />
          GitHub
        </a>
      </nav>
    </header>
  );
};
