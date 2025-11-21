import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/admin/AdminNavbar';
import AdminCategorySection from '../../components/admin/AdminCategorySection';
import Footer from '../../components/footer';
import '../../pages/producto.css';

const PromocionesAdmin = () => {
    const navigate = useNavigate();
    
    // Solo mostramos la categoría Promoción
    const categoria = "Promoción";

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <AdminNavbar />
            
            {/* Barra de Herramientas Admin */}
            <div className="sticky top-0 z-20 bg-white shadow-sm border-b border-gray-200">
                <div className="container mx-auto px-4 py-3 flex justify-center items-center">
                    
                    {/* Botón Crear Nuevo */}
                    <button 
                        onClick={() => navigate('/admin/producto/nuevo')}
                        className="bg-green-600 hover:bg-green-700 text-yellow-300 font-bold py-2 px-6 rounded-full shadow-md transition-transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                    >
                        <span className="text-xl leading-none">+</span> Nueva Promoción
                    </button>
                </div>
            </div>

            {/* Contenido */}
            <div className="container mx-auto mt-8 flex-grow">
                <AdminCategorySection categoryName={categoria} />
            </div>

            <Footer/>
        </div>
    );
}

export default PromocionesAdmin;
