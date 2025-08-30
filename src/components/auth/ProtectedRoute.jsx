import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"


export default function ProtectedRoute(props){

    const token = localStorage.getItem('token')
    const location = useLocation()

    console.log(location)

    if (!token){
        return <Navigate to="/login" state={{from: location}} replace/>
    }

    return props.children
}
