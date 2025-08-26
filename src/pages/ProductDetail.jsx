import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ProductDetail(){
    const {product_id} = useParams()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(true)

    const fetchProductcallback = () => {
        setLoading(true)
        const url = 'https://fakestoreapi.com/products/'+ product_id
        console.log(url)
        axios.get(url)
        .then(response => setData(response.data))
        .catch(error => setError(error))
        .finally(() => {})

        setLoading(false)
    }

    useEffect(
        fetchProductcallback,
        []
    )

    if (loading){
        return(
            <span className="loading loading-bars loading-xl"></span>
        )
    }

    // if (error) {
    //     return(
    //         <p>
    //             Une erreur s'est produite
    //             {error} {data}
    //             <button>
    //                 actualiser
    //             </button>
    //         </p>
    //     )
    // }

    if (data) {
        return(
            <div className="flex flex-col gap-4">
                <img className="h-100 w-100" src={data.image}/>
                <div>
                    {data.title}
                </div>

                <div>
                    {data.description}
                </div>

            </div>
        )
    }
}