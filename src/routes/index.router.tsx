import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from '../Screens/Home'
import { Login } from '../Screens/Login'
import { Shop } from '../Screens/Shop'
import { Contact } from '../Screens/Contact'
import {Signup} from '../Screens/Signup'
import {AdministrativePanel} from '../Screens/AdministrativePanel'

import { AuthProvider } from '../contexts/Auth'

export default function Router () {
    return (
        <BrowserRouter>
        <AuthProvider>
            
        <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/administrativepanel' element={<AdministrativePanel />} />
        </Routes>

        </AuthProvider>
        </BrowserRouter>
    )
}


  