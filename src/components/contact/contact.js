const Contact = () => (
    <section id="contato" className="py-24 bg-orange-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-orange-700 text-center mb-4">Entre em Contato</h2>
        <p className="text-center text-gray-600 mb-10">
          Tem uma ideia, projeto ou só quer bater um papo? Manda a mensagem aí que eu respondo!
        </p>
  
        <form className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-6 animate-fade-in border border-orange-100">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-orange-800 mb-1">Nome</label>
              <input
                type="text"
                placeholder="Ex: João Silva"
                className="w-full border border-orange-200 bg-orange-100 text-gray-800 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-orange-800 mb-1">E-mail</label>
              <input
                type="email"
                placeholder="Ex: joao@email.com"
                className="w-full border border-orange-200 bg-orange-100 text-gray-800 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                disabled
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-orange-800 mb-1">Mensagem</label>
            <textarea
              placeholder="Escreva sua mensagem aqui..."
              className="w-full border border-orange-200 bg-orange-100 text-gray-800 px-4 py-3 rounded-xl h-36 resize-none focus:ring-2 focus:ring-orange-500 outline-none"
              disabled
            />
          </div>
          <button
            type="submit"
            disabled
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-xl cursor-not-allowed opacity-80 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
  
  export default Contact;
  