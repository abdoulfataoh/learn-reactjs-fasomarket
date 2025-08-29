import { Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

export default function  StoreManangementLayout(){

    return(
        <div>
            <div className='flex text-xl font-bold items-center gap-2'>
                <img className='h-16 objet-contain' src={logo} />
                Administration du Market
            </div>

            <div className='flex'>
                <div className='min-h-screen border-r-2'>
                    <ul className="menu bg-base-200 w-56">
                        <li>
                            <NavLink to='/admin/products'>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/clients'>Clients</NavLink>
                        </li>
                    </ul>

                </div>

                <div className='w-full'>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
