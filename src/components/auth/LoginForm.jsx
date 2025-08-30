import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function LoginForm(){

    const navigate = useNavigate()
    const location = useLocation()

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')

    const [username, setUsername] = useState('')
    const [password, setPassord] = useState('')
    const [stayconnected, setStayconnected] = useState('')

    const from = location.state?.from?.pathname || '/'

    const setErrormsg = (error) => { 
        setError(error)
        setMsg(`Une erreur ${error.response.status} s'est produite`)
    }

    const setToken = (response) =>{
        setData(response.data)
        const token = response.data.token
        localStorage.setItem('token', token)
        navigate(from, {replace: true})
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if (username != '' && password != ''){
            setLoading(true)
            const body = {'username': username, 'password': password}

            axios.post('https://fakestoreapi.com/auth/login', body)
                .then(response => {setToken(response)})
                .catch(error => setErrormsg(error))
                .finally(() => {})

            setLoading(false)
            console.log(data)
            setMsg('')
        }

        else{
            setMsg('Le username et le mot de passe doivent etre non nuls')
        }

    }


    return(
        <div>
            <form className="border flex flex-col gap-2 w-full md:w-64">
                <label className="flex flex-col gap-4 w-full">
                    Username
                    <input type="text" onChange={e => setUsername(e.target.value)} className="input w-full" value={username} required/>
                </label>
                {msg}
                <label className="flex flex-col gap-4 w-full">
                    Password
                    <input type="text" onChange={e => setPassord(e.target.value)} className="input w-full" value={password} required/>
                </label>

                <label className="flex flex-col gap-4">
                    Restez connecter ?
                    <div className="flex gap-2">
                        <label className="flex gap-2">
                            Oui.
                            <input 
                                type="radio" value="true"
                                name="stayconnected"
                                checked={stayconnected === "true"}
                                onChange={e => setStayconnected("true")}
                            />
                        </label>

                        <label className="flex gap-2">
                            Non.
                            <input 
                                type="radio" value="false"
                                name="stayconnected"
                                checked={stayconnected === "false"}
                                onChange={e => setStayconnected("false")}
                            />
                        </label>
                    </div>
                </label>

                <div>
                    <button onClick={handleLogin} className="btn w-full">
                        Connection
                    </button>
                    <span className="text-red-700 text-[10px] font-meduim">{msg}</span>
                </div>
            </form>
        </div>
    )
}