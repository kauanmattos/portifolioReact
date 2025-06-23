// className = Tem exatamente o mesmo propósito que o atributo class no HTML: aplicar uma ou mais classes CSS a um elemento.
// li = item de lista

const Menu = () => {
    return(
        <nav className="fixed top-0 w-full bg-orange-700 text-white p-4 z-50">
            <ul className="flex justify-around">
                <li><a href="#inicio" className="hover:text-black">Início</a></li> 
                <li><a href="#projetos" className="hover:text-black">Projetos</a></li> 
                <li><a href="#sobre" className="hover:text-black">Sobre</a></li>
                <li><a href="#contato" className="hover:text-black">Contato</a></li>
            </ul>
        </nav>
    )
}
export default Menu;