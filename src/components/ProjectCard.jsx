import React, { useContext } from 'react';
import { languageContext } from '../contexts/LanguageContext';
import { Gallery } from './Gallery';

const getStatusColor = (status, itl_dev, itl_man, itl_arc) => {
    switch (status) {        
        case itl_dev:
            return 'text-green-600 dark:text-green-400';
            
            case itl_man:
                return 'text-yellow-600 dark:text-yellow-400';

            case itl_arc:
                return 'text-red-600 dark:text-red-400';
    }
}

const spanStyle = 'font-semibold text-gray-700 dark:text-gray-300';
const liStyle = 'text-lg text-gray-600 dark:text-gray-400 mb-2';

export const ProjectCard = ({
  title,
  url,
  anchorText,
  techStack,
  description,
  images = [],
  status,
}) => {
  const { Strings } = useContext(languageContext);
  const { project_card } = Strings;

  return (
    <article>
      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {title}
      </h3>

      {/* Project Details */}
      <ul className="text-lg mb-4">
        <li className={liStyle}>
          <span className={spanStyle}>{project_card.site}:</span>{' '}
          <a
            href={url}
            className="text-blue-500 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {anchorText}
          </a>
        </li>
        <li className={liStyle}>
          <span className={spanStyle}>{project_card.techStack}:</span> {techStack}
        </li>
        <li className={liStyle}>
          <span className={spanStyle}>{project_card.status}:</span>{' '}
          <span className={getStatusColor(status, project_card.status_dev, project_card.status_man, project_card.status_arc)}>{status}</span>
        </li>
      </ul>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300">{description}</p>

      {/* Gallery */}
      <Gallery images={images} />
    </article>
  );
};
