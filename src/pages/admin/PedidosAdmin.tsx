import { useState } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import Footer from '../../components/footer';

const PedidosAdmin = () => {
    const [filter, setFilter] = useState('Todos');

    // Mock Data
    const orders = [
        { id: "#1025", customer: "Juan Pérez", items: ["1 Pollo a la Brasa", "1 Inka Cola 1.5L"], total: "S/ 78.00", status: "Pendiente", time: "Hace 2 min", payment: "Yape" },
        { id: "#1024", customer: "Maria Rodriguez", items: ["1/4 Pollo Parte Pecho", "1 Chicha Morada"], total: "S/ 28.00", status: "En Cocina", time: "Hace 15 min", payment: "Efectivo" },
        { id: "#1023", customer: "Carlos Gomez", items: ["1 Parrilla Doble", "2 Cusqueña Trigo"], total: "S/ 85.00", status: "Listo", time: "Hace 25 min", payment: "Tarjeta" },
        { id: "#1022", customer: "Ana Torres", items: ["1 Mostrito", "1 Inka Cola 500ml"], total: "S/ 32.00", status: "Entregado", time: "Hace 45 min", payment: "Plin" },
        { id: "#1021", customer: "Luis Diaz", items: ["1 Salchipapa", "1 Chicha"], total: "S/ 22.00", status: "Cancelado", time: "Hace 1 hora", payment: "Efectivo" },
    ];

    const filteredOrders = filter === 'Todos' ? orders : orders.filter(o => o.status === filter);

    const getStatusColor = (status: string) => {
        switch(status) {
            case 'Pendiente': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'En Cocina': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'Listo': return 'bg-green-100 text-green-800 border-green-200';
            case 'Entregado': return 'bg-gray-100 text-gray-600 border-gray-200';
            case 'Cancelado': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <AdminNavbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-2xl font-black text-gray-800 uppercase border-l-4 border-green-600 pl-4">
                        Gestión de Pedidos
                    </h1>
                    
                    {/* Filtros */}
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        {['Todos', 'Pendiente', 'En Cocina', 'Listo', 'Entregado'].map(status => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                                    filter === status 
                                    ? 'bg-yellow-400 text-gray-900 shadow-md' 
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                            {/* Header Card */}
                            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                <div>
                                    <span className="font-black text-lg text-gray-800">{order.id}</span>
                                    <p className="text-xs text-gray-500 font-medium">{order.time}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                                    {order.status}
                                </span>
                            </div>

                            {/* Body Card */}
                            <div className="p-4">
                                <div className="mb-4">
                                    <p className="text-sm font-bold text-gray-700 mb-1">Cliente:</p>
                                    <p className="text-gray-600 text-sm">{order.customer}</p>
                                </div>

                                <div className="mb-4">
                                    <p className="text-sm font-bold text-gray-700 mb-2">Detalle del Pedido:</p>
                                    <ul className="space-y-1">
                                        {order.items.map((item, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="text-red-500 mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-4">
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Total</p>
                                        <p className="text-xl font-black text-gray-900">{order.total}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 font-bold uppercase">Pago</p>
                                        <p className="text-sm font-bold text-gray-700">{order.payment}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Card Actions */}
                            <div className="p-4 bg-gray-50">
                                <button className="w-full py-2 bg-gray-900 text-yellow-400 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors shadow-sm">
                                    Ver Detalle
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default PedidosAdmin;
