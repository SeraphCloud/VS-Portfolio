import React from 'react';
import SkillItem from '../molecules/SkillItem';
import Section from '../atoms/Section';
import '../../styles/components/About.scss';
import { skills } from '../../data/content';

const About = () => {
  return (
    <Section id="about" title="Sobre Mim">
      <div className="about-content">
        <div className="about-text">
          <p>
            Sou estudante de Engenharia de Software (EAD) na UNINTER e
            apaixonado por desenvolvimento web. Minha jornada no desenvolvimento
            começou com HTML e CSS, e desde então tenho me dedicado a aprender e
            dominar tecnologias modernas.
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
            participar de comunidades de desenvolvedores e trabalhar em projetos
            pessoais para aprimorar minhas habilidades.
          </p>

          <div className="skills-list">
            {skills.map((skill) => (
              <SkillItem key={skill.id}>{skill.name}</SkillItem>
            ))}
          </div>
        </div>
        <div className="about-image">
          {/* Espaço para foto ou ilustração */}
        </div>
      </div>
    </Section>
  );
};

export default About;
