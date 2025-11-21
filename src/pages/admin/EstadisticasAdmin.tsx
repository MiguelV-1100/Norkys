import AdminNavbar from '../../components/admin/AdminNavbar';
import Footer from '../../components/footer';

const EstadisticasAdmin = () => {
    // Datos Mock para visualización
    const kpis = [
        { title: "Ventas del Día", value: "S/ 1,450.00", change: "+12%", color: "text-gray-900" },
        { title: "Pedidos Hoy", value: "58", change: "+5%", color: "text-gray-900" },
        { title: "Ticket Promedio", value: "S/ 25.00", change: "-2%", color: "text-gray-900" },
        { title: "Prod. Estrella", value: "1/4 Pollo", change: "🔥", color: "text-red-600" },
    ];

    const topProductos = [
        { nombre: "1/4 Pollo con Papas", ventas: 120, porcentaje: "80%" },
        { nombre: "Mostrito", ventas: 85, porcentaje: "65%" },
        { nombre: "Parrilla Mixta", ventas: 45, porcentaje: "40%" },
        { nombre: "Chaufa de Pollo", ventas: 30, porcentaje: "25%" },
    ];

    // Datos para Horas Punta
    const peakHours = [
        { hour: "12 PM", orders: 45, height: "100%" },
        { hour: "1 PM", orders: 38, height: "85%" },
        { hour: "2 PM", orders: 25, height: "55%" },
        { hour: "7 PM", orders: 35, height: "75%" },
        { hour: "8 PM", orders: 42, height: "95%" },
        { hour: "9 PM", orders: 30, height: "65%" },
    ];

    // Datos por Categoría
    const categoryPerformance = [
        { category: "Brasas & Pollos", value: "S/ 8,500", percent: 50, color: "bg-red-600" },
        { category: "Parrillas", value: "S/ 4,200", percent: 25, color: "bg-yellow-400" },
        { category: "Bebidas", value: "S/ 2,100", percent: 15, color: "bg-gray-800" },
        { category: "Otros", value: "S/ 1,800", percent: 10, color: "bg-gray-400" },
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <AdminNavbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-2xl font-black text-gray-800 uppercase mb-6 border-l-4 border-green-600 pl-4">
                    Estadísticas Generales
                </h1>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {kpis.map((kpi, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">{kpi.title}</p>
                            <div className="flex items-end justify-between">
                                <h3 className={`text-3xl font-black ${kpi.color}`}>{kpi.value}</h3>
                                <span className={`text-xs font-bold px-2 py-1 rounded ${kpi.change.includes('+') ? 'bg-green-100 text-green-700' : kpi.change.includes('-') ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {kpi.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Gráfico Simulado: Ventas Semanales */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase">Ventas de la Semana</h3>
                        <div className="flex items-end justify-between h-64 gap-2">
                            {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                                <div key={i} className="w-full flex flex-col items-center gap-2 group">
                                    <div 
                                        className="w-full bg-red-100 rounded-t-lg relative group-hover:bg-red-600 transition-colors duration-300"
                                        style={{ height: `${height}%` }}
                                    >
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">
                                            {height * 10}
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase">
                                        {['L', 'M', 'M', 'J', 'V', 'S', 'D'][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Productos */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase">Platos Más Vendidos</h3>
                        <div className="space-y-6">
                            {topProductos.map((prod, i) => (
                                <div key={i}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-bold text-gray-700">{prod.nombre}</span>
                                        <span className="text-sm font-bold text-gray-500">{prod.ventas} ventas</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                                        <div 
                                            className="bg-yellow-400 h-2.5 rounded-full" 
                                            style={{ width: prod.porcentaje }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 text-red-600 font-bold text-sm hover:underline">
                            Ver reporte completo →
                        </button>
                    </div>

                </div>

                {/* --- NUEVA SECCIÓN: ANÁLISIS DE VENTAS --- */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Tabla de Últimas Transacciones */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-800 uppercase">Últimas Transacciones</h3>
                            <button className="text-xs font-bold text-red-600 hover:underline">Ver todas</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 rounded-l-lg">ID Pedido</th>
                                        <th className="px-4 py-3">Cliente</th>
                                        <th className="px-4 py-3">Fecha</th>
                                        <th className="px-4 py-3">Monto</th>
                                        <th className="px-4 py-3 rounded-r-lg">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { id: "#PED-001", cliente: "Juan Pérez", fecha: "Hoy, 12:30", monto: "S/ 45.90", estado: "Completado", color: "text-green-700 bg-green-100" },
                                        { id: "#PED-002", cliente: "Maria Lopez", fecha: "Hoy, 12:45", monto: "S/ 120.00", estado: "Pendiente", color: "text-yellow-700 bg-yellow-100" },
                                        { id: "#PED-003", cliente: "Carlos Ruiz", fecha: "Hoy, 13:10", monto: "S/ 28.50", estado: "Completado", color: "text-green-700 bg-green-100" },
                                        { id: "#PED-004", cliente: "Ana Torres", fecha: "Hoy, 13:15", monto: "S/ 65.00", estado: "Cancelado", color: "text-red-700 bg-red-100" },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-3 font-medium text-gray-900">{row.id}</td>
                                            <td className="px-4 py-3 text-gray-600">{row.cliente}</td>
                                            <td className="px-4 py-3 text-gray-500">{row.fecha}</td>
                                            <td className="px-4 py-3 font-bold text-gray-800">{row.monto}</td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.color}`}>
                                                    {row.estado}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Métodos de Pago y Comparativa */}
                    <div className="space-y-6">
                        
                        {/* Métodos de Pago */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">Métodos de Pago</h3>
                            <div className="space-y-4">
                                {[
                                    { metodo: "Tarjeta (Visa/Master)", porcentaje: 45, color: "bg-gray-800" },
                                    { metodo: "Yape / Plin", porcentaje: 35, color: "bg-red-600" },
                                    { metodo: "Efectivo", porcentaje: 20, color: "bg-yellow-400" },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs font-bold text-gray-600 mb-1">
                                            <span>{item.metodo}</span>
                                            <span>{item.porcentaje}%</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2">
                                            <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.porcentaje}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Comparativa Mensual */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-md text-white">
                            <h3 className="text-sm font-bold text-gray-300 uppercase mb-1">Rendimiento Mensual</h3>
                            <p className="text-xs text-gray-400 mb-4">Noviembre vs Octubre</p>
                            
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-black text-yellow-400">+15%</div>
                                <div className="text-sm leading-tight text-gray-300">
                                    Has superado las ventas<br/>del mes anterior.
                                </div>
                            </div>
                            <div className="mt-4 w-full bg-gray-700 rounded-full h-1.5">
                                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* --- NUEVA SECCIÓN: ANÁLISIS OPERATIVO --- */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Horas Punta */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase">Horas Punta (Pedidos)</h3>
                        <div className="flex items-end justify-between h-48 gap-2">
                            {peakHours.map((item, i) => (
                                <div key={i} className="w-full flex flex-col items-center gap-2 group">
                                    <div 
                                        className="w-full bg-gray-800 rounded-t-lg relative group-hover:bg-red-600 transition-colors duration-300"
                                        style={{ height: item.height }}
                                    >
                                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">
                                            {item.orders}
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">
                                        {item.hour}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rendimiento por Categoría */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase">Ventas por Categoría</h3>
                        <div className="space-y-5">
                            {categoryPerformance.map((cat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm font-bold text-gray-700 mb-1">
                                        <span>{cat.category}</span>
                                        <span>{cat.value}</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                                        <div className={`${cat.color} h-2.5 rounded-full`} style={{ width: `${cat.percent}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sugerencias Inteligentes */}
                    <div className="bg-yellow-50 p-6 rounded-xl shadow-sm border border-yellow-200">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">💡</span>
                            <h3 className="text-lg font-black text-yellow-800 uppercase">Sugerencias</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-yellow-100 shadow-sm">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Inventario</p>
                                <p className="text-sm text-gray-700 font-medium">
                                    El stock de <span className="font-bold text-red-600">Papas Nativas</span> está bajo. Considera reabastecer antes del fin de semana.
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-yellow-100 shadow-sm">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Marketing</p>
                                <p className="text-sm text-gray-700 font-medium">
                                    Las ventas de <span className="font-bold text-gray-800">Ensaladas</span> bajaron un 10%. Sugerimos lanzar una promo "Combo Saludable".
                                </p>
                            </div>
                            <button className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-lg text-sm transition-colors">
                                Ver más insights
                            </button>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default EstadisticasAdmin;
