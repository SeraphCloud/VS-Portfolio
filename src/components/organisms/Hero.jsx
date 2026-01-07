import Button from "../atoms/Button";
import "../../styles/components/Hero.scss";

const Hero = () => {
	const handleProjectsScroll = () => {
		const projectsSection = document.getElementById("projects");
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const handleContactScroll = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section className="section hero" id="home">
			<div className="container">
				<div className="hero-content">
					<p className="subtitle">Olá, meu nome é</p>
					<h1>Victor A. Silva</h1>
					<h1 className="accent">
						Desenvolvedor <br /> Full-Stack
					</h1>
					<p>
						Desenvolvedor Full-Stack focado em construir aplicações web
						modernas, escaláveis e de alto desempenho. Especialista no
						ecossistema React, TypeScript e Python (Django).
					</p>
					<div className="cta-buttons">
						<Button variant="primary" onClick={handleProjectsScroll}>
							Ver Projetos
						</Button>
						<Button variant="secondary" onClick={handleContactScroll}>
							Entrar em Contato
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
