const projectCard = ({ tittle, description, image, link }) => {
    return(
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <image src="" alt="" className="w-full h-48 object-cover"/>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tittle}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                {link && (
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Ver Projeto
                    </a>
                )}
            </div>
        </div>
    );
};

export default projectCard;