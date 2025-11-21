import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminCategorySection from '../../components/admin/AdminCategorySection';
import Footer from '../../components/footer';
import '../../pages/producto.css'; // Reutilizamos estilos

const MenuAdmin = () => {
    const navigate = useNavigate();
    
    const categorias = [
        // "Promoción",  <-- Eliminado de aquí
        "Brasas",
        "Broaster",
        "Parrillas",
        "Menu",
        "Hamburguesas",
        "Piqueos",
        "Ensaladas",
        "Postres",
        "Bebidas",
        "Acompañamiento"
    ];

    const scrollToCategory = (catName: string) => {
        const id = catName.replace(/\s+/g, '-');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <AdminNavbar />
            
            {/* Barra de Herramientas Admin (Sticky) */}
            <div className="sticky top-0 z-20 bg-white shadow-sm border-b border-gray-200">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    
                    {/* Navegación de Categorías */}
                    <ul className='flex flex-row gap-6 overflow-x-auto min-w-0 flex-1 mr-4 no-scrollbar'>
                        {categorias.map((cat) => (
                            <li key={cat} className="flex-shrink-0">
                                <button 
                                    onClick={() => scrollToCategory(cat)}
                                    className="text-gray-600 hover:text-red-600 font-bold text-sm uppercase transition-colors whitespace-nowrap"
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Botón Crear Nuevo */}
                    <button 
                        onClick={() => navigate('/admin/producto/nuevo')}
                        className="bg-green-600 hover:bg-green-700 text-yellow-300 font-bold py-2 px-6 rounded-full shadow-md transition-transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                    >
                        <span className="text-xl leading-none">+</span> Nuevo Producto
                    </button>
                </div>
            </div>

            {/* Contenido */}
            <div className="container mx-auto mt-8 flex-grow">
                {categorias.map((cat) => (
                    <AdminCategorySection key={cat} categoryName={cat} />
                ))}
            </div>

            <Footer/>
        </div>
    );
}

export default MenuAdmin;
