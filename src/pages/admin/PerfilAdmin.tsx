import { useState } from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';
import Footer from '../../components/footer';
import usuario from '../../assets/svg/logo_usuario.svg';

const PerfilAdmin = () => {
    // Estado simulado del usuario
    const [user, setUser] = useState({
        nombre: "Miguel Ángel",
        apellido: "Admin",
        email: "admin@norkys.pe",
        telefono: "987654321",
        rol: "Administrador General",
        fechaRegistro: "15/01/2024"
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...user });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para guardar en backend
        setUser(formData);
        setIsEditing(false);
        alert("Perfil actualizado correctamente");
    };

    const handleCancel = () => {
        setFormData(user);
        setIsEditing(false);
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <AdminNavbar />
            
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-2xl font-black text-gray-800 uppercase mb-6 border-l-4 border-red-600 pl-4">
                        Mi Perfil
                    </h1>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Header del Perfil */}
                        <div className="bg-gray-900 p-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-24 h-24 bg-white rounded-full p-1">
                                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                                    <img src={usuario} alt="Profile" className="w-16 h-16 opacity-50" />
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-bold text-white">{user.nombre} {user.apellido}</h2>
                                <p className="text-yellow-400 font-medium">{user.rol}</p>
                                <p className="text-gray-400 text-sm mt-1">Miembro desde: {user.fechaRegistro}</p>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-gray-800 uppercase">Información Personal</h3>
                                {!isEditing && (
                                    <button 
                                        onClick={() => setIsEditing(true)}
                                        className="text-sm font-bold text-red-600 hover:underline flex items-center gap-1"
                                    >
                                        ✏️ Editar Datos
                                    </button>
                                )}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Campos de Solo Lectura */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Nombre</label>
                                        <input 
                                            type="text" 
                                            value={formData.nombre}
                                            disabled
                                            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-gray-500 font-medium cursor-not-allowed"
                                        />
                                        <p className="text-[10px] text-gray-400 mt-1">* Este campo no se puede modificar</p>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Apellido</label>
                                        <input 
                                            type="text" 
                                            value={formData.apellido}
                                            disabled
                                            className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-gray-500 font-medium cursor-not-allowed"
                                        />
                                    </div>

                                    {/* Campos Editables */}
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Correo Electrónico</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={`w-full border rounded-lg px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 ${
                                                isEditing ? 'bg-white border-gray-300 text-gray-800' : 'bg-gray-50 border-gray-200 text-gray-600'
                                            }`}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Teléfono / Celular</label>
                                        <input 
                                            type="tel" 
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            disabled={!isEditing}
                                            className={`w-full border rounded-lg px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-red-500 ${
                                                isEditing ? 'bg-white border-gray-300 text-gray-800' : 'bg-gray-50 border-gray-200 text-gray-600'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {isEditing && (
                                    <div className="flex justify-end gap-4 pt-4 border-t border-gray-100 mt-6">
                                        <button 
                                            type="button"
                                            onClick={handleCancel}
                                            className="px-6 py-2 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                                        >
                                            Cancelar
                                        </button>
                                        <button 
                                            type="submit"
                                            className="px-6 py-2 rounded-lg font-bold text-white bg-red-600 hover:bg-red-700 shadow-md transition-colors"
                                        >
                                            Guardar Cambios
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PerfilAdmin;
