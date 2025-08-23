import ProductCard from "./products/Product"
import { ProductsList } from "./products/ProductsList"

export default function MainContent(){

    return (
        <div className="p-4">
            Produits
            <ProductsList />
        </div>
    )
}