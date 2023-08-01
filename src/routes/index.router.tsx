import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from '../Screens/Home'
import { Login } from '../Screens/Login'
import { Contact } from '../Screens/Contact'
import { About } from '../Screens/About'
import { SingleProduct } from '../Screens/SingleProduct'
import { Signup } from '../Screens/Signup'
import { Cart } from '../Screens/Cart'
import { AdministrativePanel} from '../Screens/AdministrativePanel'
import { Success } from '../Screens/Success'



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
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<AdministrativePanel />} />
        <Route path='/success' element={<Success />} />
        
        
        

        </Routes>

        </CartProvider>
        </AuthProvider>
        </BrowserRouter>
    )
}


  