interface AuthContextData {
  authenticated: boolean;
  user: IUserInfo | null;
  userLogin: (email: string, password: string) => void;
  userLogout: () => void;
  userAdmin: () =>  boolean;
}

type  IUserInfo = {
  email: string,
  password: string,
  isAdmin: boolean
} 
  
import  { ReactNode, createContext, useState  } from "react"
import { useNavigate } from "react-router-dom"


export const AuthContext = createContext<AuthContextData>({
    authenticated: false,
    user: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userLogin: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userLogout: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userAdmin: () => false,
  });

export const AuthProvider = ({ children }:{ children: ReactNode }) => {
    
    const navigate = useNavigate() 
    const [ user, setUser] = useState<IUserInfo | null >(null) // userState com usuario iniciando nulo
    

    const userLogin = (email: string, password: string) => {
        console.log('Login auth', {email, password})
        setUser({password, email, isAdmin: false})
        
    }

    const userAdmin = () => {
      return user?.isAdmin || false;
    }

    const userLogout = () => {
        console.log('Logout')
        setUser(null)
        navigate('/login')
    }


    return(
        
        <AuthContext.Provider 
        value = {{authenticated: !!user, 
                  user,
                  userLogin,
                  userLogout,
                  userAdmin }}>
         {children}   
        </AuthContext.Provider>
        

    )
}