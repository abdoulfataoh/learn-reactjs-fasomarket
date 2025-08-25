import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductsPage from "../pages/ProductsPage"

export default function MainLayout(props){

    return(
        <div className="border-4">
            <header className="h-24"><Header /></header>
            <main className="min-h-screen">
                <ProductsPage />
            </main>
            <footer className="h-10 border border-red-300">
                <Footer />
            </footer>
        </div>
    )
}