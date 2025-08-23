import { useEffect, useState } from "react"
import ProductCard from "./Product"
import axios from "axios"

export function ProductsList(){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            console.log('Appel API')
            setLoading(true)
            axios.get('https://fakestoreapi.com/products')
                .then((response) => setData(response.data))
                .catch((error) => setError(error) )
                .finally(() => {})
            setLoading(false)
        },
        []
    )

    if(loading){
        return(
            <span class="loading loading-spinner loading-xl"></span>
        )
    }

    if (error){
        return(
            <p className="text-red-700">Une erreur s'est produite</p>
        )
    }

    if (data){
        return(
            <div className="flex gap-2 justify-between flex-wrap">

                { data.map(p => 
                        <ProductCard 
                            title={p.title}
                            currency="XOF"
                            price={p.price}
                            imgurl={p.image}
                        />
                    )
                }


            </div>
        )
    }
}