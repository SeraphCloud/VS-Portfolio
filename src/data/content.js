import disneyPlusImg from "../assets/disney_plus.png";
import tmdbImg from "../assets/tmdb_app.png";
import gamesImg from "../assets/games_shop.png";
import taskImg from "../assets/task_manager.png";
import stockImg from "../assets/stock_manager.png";

export const projects = [
	{
		id: 1,
		title: "Clone da Interface do Disney+",
		description:
			"Recriação da interface do serviço de streaming Disney+, com foco na fidelidade visual e responsividade, utilizando tecnologias web modernas.",
		tags: ["React", "Styled Components", "UI Clone"],
		imgSrc: disneyPlusImg,
		demoLink: "https://projeto-disneyplus.vercel.app/",
		codeLink: "https://github.com/SeraphCloud/projeto-disneyplus",
	},
	{
		id: 2,
		title: "App de Filmes (TMDB)",
		description:
			"Aplicação para listagem e busca de filmes consumindo a API do The Movie Database (TMDB). Um projeto para praticar integração com APIs externas.",
		tags: ["React", "API", "JavaScript", "CSS"],
		imgSrc: tmdbImg,
		demoLink: "https://verzel-tmdb-app.vercel.app/",
		codeLink: "https://github.com/SeraphCloud/Verzel-TMDb-app",
	},
	{
		id: 3,
		title: "Loja de Games",
		description:
			"Interface de uma loja virtual de games, com layout moderno e focado na experiência do usuário para apresentação e venda de jogos.",
		tags: ["React", "UI/UX", "E-commerce"],
		imgSrc: gamesImg,
		demoLink: "https://site-games-shop-nine-gamma.vercel.app/",
		codeLink: "https://github.com/SeraphCloud/Site_GamesShop",
	},
	{
		id: 4,
		title: "Gerenciador de Tarefas",
		description:
			"Uma aplicação de lista de tarefas (To-Do List) para ajudar na organização do dia a dia, com funcionalidades de adicionar, remover e marcar tarefas como concluídas.",
		tags: ["JavaScript", "HTML", "CSS", "Organização"],
		imgSrc: taskImg,
		demoLink: "https://minhas-tarefas-ten-sandy.vercel.app/",
		codeLink: "https://github.com/SeraphCloud/minhas-tarefas",
	},
	{
		id: 5,
		title: "Gerenciador de Estoque (em andamento)",
		description:
			"Uma aplicação em Django para gerenciar estoques de pequenas empresas, com movimentações de entrada e saída, valores, quantidade de produtos e histórico completo de mudanças do estoque.",
		tags: ["Django", "API REST", "Organização", "Gestão"],
		imgSrc: stockImg,
		codeLink: "https://github.com/Devv-ictor/django-stock-manager",
	},
];

export const skills = {
	frontend: [
		"React.js",
		"TypeScript",
		"Tailwind CSS",
		"Sass/SCSS",
		"HTML5",
		"CSS3",
	],
	backend: ["Python", "Django", "Node.js", "PostgreSQL"],
	tools: [
		"Git & GitHub",
		"Figma",
		"Responsive Design",
		"Vercel",
		"Atomic Design",
	],
};
