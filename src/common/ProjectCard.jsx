import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin ,faGoogleDrive} from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ src, link, h3, p, demoLink, githubLink, linkedinLink ,googledrive}) {
  return (
    <div className="projectCard">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demoLink">
          Live Demo
        </a>
      )}
      <div className="iconLinks">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <span style={{ marginRight: '10px' }}>
            <FontAwesomeIcon icon={faGithub} size="3x" />
              </span>
          </a>
        )}
         {googledrive && (
          <a href={googledrive} target="_blank" rel="noopener noreferrer">
              <span style={{ marginRight: '10px' }}>
            <FontAwesomeIcon icon={faGoogleDrive} size="3x" />
              </span>
          </a>
        )}
        {linkedinLink && (
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <span style={{ marginRight: '10px' }}>
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
