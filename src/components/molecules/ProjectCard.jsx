import "../../styles/components/ProjectCard.scss";

const ProjectCard = ({
	title,
	description,
	tags,
	demoLink,
	codeLink,
	imgSrc,
	isAlternate,
}) => {
	return (
		<div className={`project-card ${isAlternate ? "alternate" : ""}`}>
			<div className="project-image">
				<img src={imgSrc} alt={title} />
			</div>
			<div className="project-content">
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="project-tags">
					{tags.map((tag) => (
						<span key={tag} className="tag">
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
