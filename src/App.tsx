import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Productos from './pages/productos'
import Busqueda from './pages/busqueda'
import Dashboard from './pages/admin/Dashboard'
import MenuAdmin from './pages/admin/MenuAdmin'
import PromocionesAdmin from './pages/admin/PromocionesAdmin'
import ProductForm from './pages/admin/ProductForm'
import EstadisticasAdmin from './pages/admin/EstadisticasAdmin'
import PerfilAdmin from './pages/admin/PerfilAdmin'
import PedidosAdmin from './pages/admin/PedidosAdmin'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Productos/>}/>
      <Route path='/busqueda/:query' element={<Busqueda/>}/>
      
      {/* Rutas de Administración */}
      <Route path='/admin' element={<Dashboard/>}/>
      <Route path='/admin/menu' element={<MenuAdmin/>}/>
      <Route path='/admin/promociones' element={<PromocionesAdmin/>}/>
      <Route path='/admin/pedidos' element={<PedidosAdmin/>}/>
      <Route path='/admin/estadisticas' element={<EstadisticasAdmin/>}/>
      <Route path='/admin/perfil' element={<PerfilAdmin/>}/>
      <Route path='/admin/producto/nuevo' element={<ProductForm/>}/>
      <Route path='/admin/producto/editar/:id' element={<ProductForm/>}/>
    </Routes>
  )
}

export default App
