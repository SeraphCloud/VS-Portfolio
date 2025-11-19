import React from "react";
import SkillItem from "../molecules/SkillItem";
import "../../styles/components/About.scss";

const About = () => {
  const skills = [
    "React.js",
    "Node.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Tailwind CSS",
    "Sass/SCSS",
    "MongoDB",
    "Git & GitHub",
    "Vercel",
    "Responsive Design",
    "Atomic Design",
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Sou estudante de Engenharia de Software (EAD) na UNINTER e
              apaixonado por desenvolvimento web. Minha jornada no
              desenvolvimento começou com HTML e CSS, e desde então tenho me
              dedicado a aprender e dominar tecnologias modernas.
            </p>
            <p>
              Atualmente, estou focado em construir aplicações web escaláveis e
              performáticas, com atenção especial para experiência do usuário e
              boas práticas de código. Busco minha primeira oportunidade
              profissional para aplicar meus conhecimentos e crescer como
              desenvolvedor.
            </p>
            <p>
              Quando não estou codando, gosto de estudar novas tecnologias,
              participar de comunidades de desenvolvedores e trabalhar em
              projetos pessoais para aprimorar minhas habilidades.
            </p>

            <div className="skills-list">
              {skills.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </div>
          </div>
          <div className="about-image">
            {/* Espaço para foto ou ilustração */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
