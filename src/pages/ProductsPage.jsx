import { ProductsList } from "../components/products/ProductsList"

export default function(){

    return (
        <>
            <div className="p-4 text-4xl text-gray-700 font-bold tracking-tight">Les produicts disponibles</div>
            <ProductsList />
        </>
    )
}