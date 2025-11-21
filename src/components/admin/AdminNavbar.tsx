import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/norkys_logo.png';
import usuario from '../../assets/svg/logo_usuario.svg';
import menuBurger from '../../assets/svg/menu-burger.svg';
import '../../components/navbar.css'; // Reutilizamos estilos base

const AdminNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Helper para verificar ruta activa
    const isActive = (path: string, exact = false) => {
        if (exact) {
            return location.pathname === path ? 'text-red-600' : 'text-gray-700';
        }
        return location.pathname.startsWith(path) ? 'text-red-600' : 'text-gray-700';
    };

    return (
        <header>
            <nav className='bar-navegation flex flex-row items-center shadow-md justify-between px-5 relative z-30 bg-white'>
                <div className='flex flex-row items-center gap-4'>
                    {/* Botón Hamburguesa (Visible siempre para abrir sidebar) */}
                    <button className='cursor-pointer' onClick={toggleMenu}>
                        <img src={menuBurger} className='w-8 h-8' alt="menú" />
                    </button>

                    {/* Logo */}
                    <Link to="/admin" className='cursor-pointer'>
                        <img src={logo} alt="logo" className='logo' />
                    </Link>
                </div>

                {/* Menú de Administración (Desktop) */}
                <div className='hidden md:flex flex-row gap-8'>
                    <Link to="/admin" className={`font-bold hover:text-red-600 uppercase ${isActive('/admin', true)}`}>
                        Inicio
                    </Link>
                    <Link to="/admin/promociones" className={`font-bold hover:text-red-600 uppercase ${isActive('/admin/promociones')}`}>
                        Promociones
                    </Link>
                    <Link to="/admin/menu" className={`font-bold hover:text-red-600 uppercase ${isActive('/admin/menu')}`}>
                        Menú
                    </Link>
                    <Link to="/admin/pedidos" className={`font-bold hover:text-red-600 uppercase ${isActive('/admin/pedidos')}`}>
                        Pedidos
                    </Link>
                    <Link to="/admin/estadisticas" className={`font-bold hover:text-red-600 uppercase ${isActive('/admin/estadisticas')}`}>
                        Estadísticas
                    </Link>
                </div>

                {/* Perfil */}
                <div className='flex flex-row justify-between items-center'>
                    <Link to="/admin/perfil" className='user flex items-center font-bold font-sans cursor-pointer hover:text-red-600'>
                        <span className='mr-2 hidden md:block'>Perfil</span>
                        <img src={usuario} alt="usuario" className='w-6 h-6' />
                    </Link>
                </div>
            </nav>

            {/* --- SIDEBAR / OFFCANVAS (Móvil) --- */}
            <div className={`
                fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                
                {/* Cabecera del menú */}
                <div className="flex justify-between items-center p-4 border-b bg-gray-50">
                    <h2 className="font-bold text-lg text-gray-700">Administración</h2>
                    <button 
                        onClick={toggleMenu} 
                        className="text-gray-500 hover:text-red-500 font-bold text-2xl focus:outline-none"
                    >
                        &times;
                    </button>
                </div>

                {/* Lista de enlaces */}
                <div className="flex flex-col p-4 space-y-6 items-center">
                    <img src={logo} alt="Norkys" className='w-32 mb-2'/>
                    
                    <Link 
                        to="/admin" 
                        onClick={toggleMenu}
                        className={`font-medium text-lg hover:text-red-600 ${isActive('/admin', true)}`}
                    >
                        Inicio
                    </Link>

                    <Link 
                        to="/admin/promociones" 
                        onClick={toggleMenu}
                        className={`font-medium text-lg hover:text-red-600 ${isActive('/admin/promociones')}`}
                    >
                        Promociones
                    </Link>
                    
                    <Link 
                        to="/admin/menu" 
                        onClick={toggleMenu}
                        className={`font-medium text-lg hover:text-red-600 ${isActive('/admin/menu')}`}
                    >
                        Menú
                    </Link>

                    <Link 
                        to="/admin/pedidos" 
                        onClick={toggleMenu}
                        className={`font-medium text-lg hover:text-red-600 ${isActive('/admin/pedidos')}`}
                    >
                        Pedidos
                    </Link>

                    <Link 
                        to="/admin/estadisticas" 
                        onClick={toggleMenu}
                        className={`font-medium text-lg hover:text-red-600 ${isActive('/admin/estadisticas')}`}
                    >
                        Estadísticas
                    </Link>

                    <div className="w-full border-t border-gray-200 my-2"></div>

                    <Link 
                        to="/admin/perfil" 
                        onClick={toggleMenu}
                        className={`font-medium text-lg hover:text-red-600 ${isActive('/admin/perfil')}`}
                    >
                        Mi Perfil
                    </Link>
                    
                    <button className='text-red-600 font-bold mt-4'>
                        Cerrar Sesión
                    </button>
                </div>
            </div>
            
            {/* Overlay para cerrar al hacer click fuera */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={toggleMenu}
                ></div>
            )}

        </header>
    );
}

export default AdminNavbar;
