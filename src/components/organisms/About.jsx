import Section from "../atoms/Section";
import "../../styles/components/About.scss";
import { skills } from "../../data/content";

const About = () => {
	return (
		<Section id="about" title="Sobre Mim">
			<div className="about-content">
				<div className="about-text">
					<p>
						Olá! Sou o Victor Silva, desenvolvedor FullStack residente em
						Varginha/MG. Meu foco está na construção de aplicações modernas e
						escaláveis utilizando o ecossistema React e TypeScript, integrados a
						back-ends robustos em Python (Django) e Node.js.
					</p>
					<p>
						Minha abordagem ao desenvolvimento é guiada pela resolução de
						problemas. Recentemente, identifiquei a necessidade de criar um
						portfólio técnico que demonstrasse a integração completa de dados.
						Como situação e tarefa, decidi desenvolver o TMDb App, um
						gerenciador de filmes. A ação foi estruturar uma arquitetura que
						conectasse uma interface performática a um servidor estável, lidando
						com requisições assíncronas e tipagem rigorosa. O resultado foi uma
						plataforma fluida, com busca em tempo real e persistência de dados,
						que reflete minha capacidade de entregar soluções FullStack de ponta
						a ponta.
					</p>
					<h3>Para além do código</h3>
					<p>
						No meu dia a dia, busco o mesmo equilíbrio e evolução que aplico no
						desenvolvimento de software. Sou entusiasta da musculação, uma
						prática que me ensinou que a constância e a disciplina diária são as
						únicas formas de alcançar resultados sólidos a longo prazo —
						mentalidade que levo para cada projeto que inicio.
					</p>
					<p>
						Quando não estou estudando, gosto de jogar títulos AAA e FPS com
						amigos. Os jogos competitivos exercitam meu raciocínio lógico,
						tomada de decisão rápida e, principalmente, o trabalho em equipe sob
						pressão. Sou também um grande fã de filmes de suspense, o que
						alimenta meu lado analítico e a atenção aos detalhes (o famoso
						"olhar clínico" para encontrar bugs). Para recarregar as energias
						criativas, nada supera a experiência de concertos e shows, onde
						admiro o impacto de uma produção bem executada — algo que sempre
						busco replicar na entrega final dos meus sistemas.
					</p>

					<div className="skills-section">
						<h3>Front-end</h3>
						<div className="skills-group">
							{skills.frontend.map((skill) => (
								<span key={skill} className="skill-pill">
									{skill}
								</span>
							))}
						</div>
						<h3>Back-end</h3>
						<div className="skills-group">
							{skills.backend.map((skill) => (
								<span key={skill} className="skill-pill">
									{skill}
								</span>
							))}
						</div>
						<h3>Ferramentas e Design</h3>
						<div className="skills-group">
							{skills.tools.map((skill) => (
								<span key={skill} className="skill-pill">
									{skill}
								</span>
							))}
						</div>
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
