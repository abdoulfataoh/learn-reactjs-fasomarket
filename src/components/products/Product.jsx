import Like from "../Like"


export default function ProductCard(props){

    return(
        <div className={`p-2 border rounded-md bg-white flex flex-col ${props.className}`}>
            <div className="flex justify-between mb-4">
                <Like />
                {props.price <= 60 && // Simulation promo pour activer certains badges
                    <span className="badge badge-error text-white font-semibold">Promo ({props.price}%) off</span>
                }   
            </div>
            <div className="flex justify-center h-45">
                <img 
                    className="object-contain h-48"
                    src={props.imgurl}
                ></img>
            </div> 

            <div className="mt-auto flex flex-col gap-4">

                <div className="mt-6 w-10/12 text-justify font-bold text-green-700">
                    {props.title}
                </div>

                <div className="text-gray-700 text-xl font-bold">
                    {props.price} {props.currency}
                </div>

                <div>
                    <button className="btn btn-success shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-black">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg> 
                        Ajouter dans le panier
                    </button>
                </div>

            </div>

        </div>
    )
}