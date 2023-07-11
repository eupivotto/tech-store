import  { ReactNode, createContext, useState  } from "react";
import { useNavigate } from "react-router-dom";


type  IUserInfo = {
  email: string,
  password: string
} 



interface AuthContextData {
    authenticated: boolean;
    user: IUserInfo | null,
    userLogin: (email: string, password: string) => void,
    userLogout: () => void
  }
  



export const AuthContext = createContext<AuthContextData>({
    authenticated: false,
    user: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userLogin: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userLogout: () => {},
  });

export const AuthProvider = ({ children }:{ children: ReactNode }) => {
    
    const navigate = useNavigate() 
    const [ user, setUser] = useState<IUserInfo | null >(null) // userState com usuario iniciando nulo
    

    const userLogin = (email: string, password: string) => {
        console.log('Login auth', {email, password})
        setUser({password, email})
        
    }

    const userLogout = () => {
        console.log('Logout')
        setUser(null)
        navigate('/login')
    }


    return(
        
        <AuthContext.Provider 
        value = {{authenticated: !!user, user, userLogin, userLogout}}>
         {children}   
        </AuthContext.Provider>
        

    )
}