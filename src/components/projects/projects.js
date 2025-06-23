const projects = [
  {
    id: 1,
    title: 'Jogo 2D Unity',
    description: 'Jogo em plataforma 2D feito na Unity.',
    image: '/images/project3.avif',
    link: 'https://github.com/kauanmattos/Aula-Unity---2D-Game-Kit'
  },
    {
    id: 2,
    title: 'Ecommerce Simples',
    description: 'Um projeto simples de e-commerce usando React e Redux.',
    image: '/images/project1.jpg',
    link: 'https://github.com/kauanmattos/'
    },
      {
    id: 3,
    title: 'Clone Netflix',
    description: 'Um clone da Netflix com React e API de filmes.',
    image: '/images/project2.png',
    link: 'https://github.com/kauanmattos/netflix-clone'
  },
];

const Projects = () => (
  <section id="projetos" className="py-10 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-orange-700">Projetos</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300 animate-fade-in"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-contain bg-gray-100" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
              <p className="text-black">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;