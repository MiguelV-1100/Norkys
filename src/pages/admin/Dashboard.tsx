import { Link } from 'react-router-dom';
import AdminNavbar from '../../components/admin/AdminNavbar';
import Footer from '../../components/footer';

const Dashboard = () => {
    // Datos Mock para el Dashboard
    const stats = [
        { label: "Pedidos Pendientes", value: "12", color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200" },
        { label: "Ventas de Hoy", value: "S/ 1,850", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" },
        { label: "Productos Activos", value: "45", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
        { label: "Clientes Nuevos", value: "8", color: "text-gray-800", bg: "bg-gray-100", border: "border-gray-200" },
    ];

    const recentOrders = [
        { id: "#1023", items: "1 Pollo a la Brasa + Inka Cola", total: "S/ 78.00", status: "En Cocina", time: "Hace 5 min" },
        { id: "#1022", items: "Mostrito + Chicha", total: "S/ 25.00", status: "Listo", time: "Hace 12 min" },
        { id: "#1021", items: "Parrilla Doble", total: "S/ 55.00", status: "Entregado", time: "Hace 25 min" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <AdminNavbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                
                {/* Header de Bienvenida */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-gray-600 uppercase">
                            Hola, <span className="text-black-600">Miguel</span> 👋
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-bold text-gray-700">Restaurante Abierto</span>
                    </div>
                </div>

                {/* Tarjetas de Estado Rápido */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className={`p-4 rounded-xl border ${stat.bg} ${stat.border} shadow-sm`}>
                            <p className="text-xs font-bold text-gray-500 uppercase mb-1">{stat.label}</p>
                            <p className={`text-2xl md:text-3xl font-black ${stat.color}`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Columna Izquierda: Accesos Rápidos y Alertas */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Accesos Rápidos */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 uppercase mb-4 flex items-center gap-2">
                                🚀 Acciones Rápidas
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link to="/admin/producto/nuevo" className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-500 hover:shadow-md transition-all flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                                        🍗
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 group-hover:text-red-600">Nuevo Producto</h3>
                                        <p className="text-xs text-gray-500">Agregar plato al menú</p>
                                    </div>
                                </Link>

                                <Link to="/admin/promociones" className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-yellow-500 hover:shadow-md transition-all flex items-center gap-4">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-yellow-400 group-hover:text-white transition-colors">
                                        🏷️
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 group-hover:text-yellow-600">Crear Promoción</h3>
                                        <p className="text-xs text-gray-500">Ofertas y descuentos</p>
                                    </div>
                                </Link>

                                <Link to="/admin/menu" className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-gray-500 hover:shadow-md transition-all flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-gray-800 group-hover:text-white transition-colors">
                                        📋
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 group-hover:text-gray-800">Gestionar Menú</h3>
                                        <p className="text-xs text-gray-500">Editar precios y platos</p>
                                    </div>
                                </Link>

                                <Link to="/admin/estadisticas" className="group bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-500 hover:shadow-md transition-all flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-2xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                                        📈
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 group-hover:text-red-600">Ver Reportes</h3>
                                        <p className="text-xs text-gray-500">Análisis de ventas</p>
                                    </div>
                                </Link>
                            </div>
                        </section>

                    </div>

                    {/* Columna Derecha: Actividad Reciente */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-800 uppercase">Últimos Pedidos</h2>
                            <Link to="/admin/pedidos" className="text-xs font-bold text-red-600 hover:underline">Ver todos</Link>
                        </div>
                        
                        <div className="space-y-6">
                            {recentOrders.map((order, i) => (
                                <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-black text-gray-800">{order.id}</span>
                                        <span className="text-xs font-bold text-gray-400">{order.time}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2 line-clamp-1">{order.items}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-gray-900">{order.total}</span>
                                        <span className={`px-2 py-1 rounded text-xs font-bold 
                                            ${order.status === 'En Cocina' ? 'bg-yellow-100 text-yellow-700' : 
                                              order.status === 'Listo' ? 'bg-green-100 text-green-700' : 
                                              'bg-gray-100 text-gray-600'}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <Link to="/admin/pedidos" className="block w-full mt-6 py-2 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-sm text-center">
                            Gestionar Pedidos
                        </Link>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Dashboard;
