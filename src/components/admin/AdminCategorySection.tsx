import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductosByCategoria } from '../../services/producto_service';
import type { Producto } from '../../models/producto';

interface AdminCategorySectionProps {
    categoryName: string;
}

const AdminCategorySection = ({ categoryName }: AdminCategorySectionProps) => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const data = await getProductosByCategoria(categoryName);
                setProductos(data);
            } catch (error) {
                console.error(`Error cargando ${categoryName}:`, error);
            } finally {
                setLoading(false);
            }
        };
        cargarProductos();
    }, [categoryName]);

    if (!loading && productos.length === 0) return null;

    return (
        <div id={categoryName.replace(/\s+/g, '-')} className='mb-12 mx-5 px-4 py-8 bg-white shadow-md rounded-xl border border-gray-100'>
            
            <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase border-b pb-4 border-gray-200 flex justify-between items-center">
                {categoryName}
                <span className="text-sm font-normal text-gray-500 normal-case">{productos.length} productos</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12'>
                {productos.map((prod) => (
                    <div key={prod.productoid} className='flex flex-row gap-4 group relative'>
                        
                        {/* 1. Imagen */}
                        <div className='w-2/5 flex-shrink-0'>
                            <img 
                                src={'/img/' + prod.image_path} 
                                className='w-full h-auto object-contain rounded-lg aspect-square bg-gray-50' 
                                alt={prod.nombre} 
                            />
                        </div>

                        {/* 2. Información */}
                        <div className='w-3/5 flex flex-col justify-between'>
                            <div>
                                <h3 className='font-bold text-gray-900 text-sm uppercase leading-tight mb-2'>
                                    {prod.nombre}
                                </h3>
                                <p className='text-xs text-gray-600 leading-snug line-clamp-3 mb-3 uppercase font-medium'>
                                    {prod.descripcion || 'Sin descripción'}
                                </p>
                            </div>

                            <div className='mt-auto'>
                                <p className='font-bold text-gray-800 mb-2 text-base'>
                                    S/ {parseFloat(prod.precio.toString()).toFixed(2)}
                                </p>
                                
                                {/* Botones de Acción Admin */}
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => navigate(`/admin/producto/editar/${prod.productoid}`)}
                                        className='flex-1 bg-green-600 hover:bg-green-700 text-yellow-300 font-bold py-1.5 px-2 rounded-lg text-xs transition-colors shadow-sm'
                                    >
                                        Editar
                                    </button>
                                    <button className='bg-red-100 hover:bg-red-200 text-red-600 font-bold py-1.5 px-3 rounded-lg text-xs transition-colors'>
                                        ✕
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminCategorySection;
