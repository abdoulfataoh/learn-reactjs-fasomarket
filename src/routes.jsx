import {createBrowserRouter} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import PayPage from './pages/PayPage'
import MainLayout from './layouts/MainLayout'
import LoginPage from './pages/LoginPage'
import AutLayout from './layouts/AuthLayout'
import ProductDetail from './pages/ProductDetail'
import StoreManangementLayout from './layouts/StoreManangementLayout'
import ProductsManagementPage from './pages/ProductsManagementPage'
import ClientsManagementPage from './pages/ClientsManagementPage'
import Error404 from './pages/Error404'

const router = createBrowserRouter([

    {
        element: <MainLayout />,
        children:[
            {path: '/', element: <ProductsPage />},
            {path: '/cart', element: <CartPage />},
            {path: '/pay', element: <PayPage />},
            {path: '/products/:product_id', element: <ProductDetail />},

        ]
    },

    {
        element: <AutLayout />,
        children:[
            {path: '/login', element: <LoginPage />},
        ]
    },

    {
        element: <StoreManangementLayout />,
        children: [
            {path: '/admin/products', element: <ProductsManagementPage />},
            {path: '/admin/clients', element: <ClientsManagementPage />},
        ]
    },

    {
        path: '*',
        element: <Error404 />
    }



])

export default router