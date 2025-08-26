import InfoCarousel from "../components/InfoCarousel"
import { ProductsList } from "../components/products/ProductsList"

export default function(){

    return (
        <>
            <InfoCarousel className="mb-6 rounded-xl"/>
            <ProductsList />
        </>
    )
}