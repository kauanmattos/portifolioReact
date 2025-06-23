const habilidades = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Adobe',
  'Node.js', 'Figma', 'Git & GitHub', 'CSS'
];

const About = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-center text-orange-700">Sobre Mim</h2>
      <p className="text-black text-base mb-6">
        Sou um desenvolvedor Full-stack apaixonado por transformar ideias em soluções digitais. 
        Curioso e determinado, estou sempre em busca de aprender mais para entregar projetos cada vez melhores.
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tecnologias que domino:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {habilidades.map((habilidades, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-800 py-2 px-3 rounded-full text-sm font-medium"
            >
              {habilidades}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
