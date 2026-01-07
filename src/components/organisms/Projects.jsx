import ProjectCard from "../molecules/ProjectCard";
import Section from "../atoms/Section";
import "../../styles/components/Projects.scss";
import { projects } from "../../data/content";

const Projects = () => {
	return (
		<Section id="projects" title="Projetos">
			<div className="projects-grid">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						tags={project.tags}
						demoLink={project.demoLink}
						codeLink={project.codeLink}
						imgSrc={project.imgSrc}
						isAlternate={index % 2 !== 0}
					/>
				))}
			</div>
		</Section>
	);
};

export default Projects;
