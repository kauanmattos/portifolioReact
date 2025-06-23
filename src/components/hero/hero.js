const Hero = () => {
    return (
        <section
        id="inicio"
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/imagem.jpg')" }}
        >
            <div className="text-center bg-orange-700 bg-opacity-50 p-4 rounded">
            <h1 className="text-5xl font-bold mb-4">Bem vindo ao Meu Portfólio!</h1>
            <p className="text-xl">Kauan Mattos</p>
            </div>
        </section>
    );
};

export default Hero;