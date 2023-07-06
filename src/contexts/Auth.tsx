import  { createContext, useState  } from "react";




export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    // userState com usuario iniciando nulo
    const [ user, setUser] = useState(null) 

    const userLogin = (email, password) => {
        console.log('Login auth', {email, password})
        setUser({id:'123', email})
    }

    const userLogout = () => {
        console.log('Logout')
    }

    //se o user for ! null 
    //autthenticated = true

    //se o user for = null
    //autthenticated = false

    return(
        
        <AuthContext.Provider 
        value = {{authenticated: !!user, user, userLogin, userLogout}}>
         {children}   
        </AuthContext.Provider>
        

    )
}