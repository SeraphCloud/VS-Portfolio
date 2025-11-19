import React from "react";
import ProjectCard from "../molecules/ProjectCard";
import "../../styles/components/Projects.scss";

const Projects = () => {
  const projects = [
    {
      title: "Movie Listing App",
      description:
        "Aplicação web para listagem e busca de filmes, com sistema de favoritos e autenticação de usuários. Desenvolvida com foco em performance e experiência do usuário.",
      tags: ["Node.js", "PostgreSQL", "Tailwind CSS", "API Integration"],
      icon: "🎬",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Landing Page Responsiva",
      description:
        "Landing page moderna e totalmente responsiva, desenvolvida com foco em conversão e performance. Design minimalista e animações suaves.",
      tags: ["React", "Sass", "Responsive", "Animations"],
      icon: "📱",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Manager",
      description:
        "Gerenciador de tarefas com interface intuitiva e funcionalidades de CRUD. Organização por categorias e status, com persistência de dados.",
      tags: ["TypeScript", "React", "Local Storage", "Atomic Design"],
      icon: "✅",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
