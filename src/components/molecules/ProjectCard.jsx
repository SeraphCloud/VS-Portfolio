import React from "react";
import "../../styles/components/ProjectCard.scss";

const ProjectCard = ({
  title,
  description,
  tags,
  demoLink,
  codeLink,
  icon,
}) => {
  return (
    <div className="project-card">
      <div className="project-image">{icon}</div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              Ver Projeto →
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
