import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from '../Screens/Home'
import { Login } from '../Screens/Login'
import { Contact } from '../Screens/Contact'
import { SingleProduct } from '../Screens/SingleProduct'
import { Signup } from '../Screens/Signup'
import { Cart } from '../Screens/Cart'

import { AuthProvider } from '../contexts/Auth'
import { CartProvider } from '../contexts/Cartcontext'



export default function Router () {
    return (
        <BrowserRouter>
        <AuthProvider>
        <CartProvider>
            
        <Routes>

            

        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        
        

        </Routes>

        </CartProvider>
        </AuthProvider>
        </BrowserRouter>
    )
}


  