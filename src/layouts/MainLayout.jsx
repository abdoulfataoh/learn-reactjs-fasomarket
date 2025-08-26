import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductsPage from "../pages/ProductsPage"
import CartPage from "../pages/CartPage"
// import {RouterProvider} from 'react-router-dom'
import router from "../routes"
import { Outlet } from "react-router-dom"

export default function MainLayout(props){

    return(
        <div className="border-4">
            <header className="h-24 mb-4 px-6 py-2">
                <Header />
            </header>
            <main className="min-h-screen px-6">
            
                <Outlet />

            </main>
            <footer className="h-20 mt-4 p-1">
                <Footer />
            </footer>
        </div>
    )
}