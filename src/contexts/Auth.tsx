import { AuthContextData } from "../services/types";
import { IUserSignup } from '../services/types'
import { IUserInfo } from '../services/types'

  
import  { ReactNode, createContext, useState  } from "react"
import { useNavigate } from "react-router-dom"


export const AuthContext = createContext<AuthContextData>({
    authenticated: false,
    user: null,
    token: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setToken: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userLogin: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userLogout: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userAdmin: () => false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    userSignup: () => {},
  });

export const AuthProvider = ({ children }:{ children: ReactNode }) => {
    
    const navigate = useNavigate() 
    const [ user, setUser] = useState<IUserInfo | null >(null) // userState com usuario iniciando nulo
    const [token, setToken] = useState<string | null>(null)
    const [, setUsersignup] = useState<IUserSignup | null>(null)
    

    const userLogin = (email: string, password: string) => {
        console.log('Login auth', {email, password})
        const tokenFromAPI = 'TOKEN_FROM_API'
        setUser({password, email, isAdmin: true})
        setToken(tokenFromAPI)

        if (!user) {
         
          navigate("/login")
        }
        
    }

    const userAdmin = () => {
      return !!user?.isAdmin;
    }

    const userSignup = (userData: IUserSignup) => {
      console.log('Signup auth', userData);
      setUsersignup(userData);
    }

    const userLogout = () => {
        console.log('Logout')
        setUser(null)
        setToken(null)
        navigate('/login')
    }

    const updateToken = (newToken: string | null) => {
      setToken(newToken);
    };

    return(
        
        <AuthContext.Provider 
        value = {{authenticated: !!user, 
                  user,
                  token,
                  setToken: updateToken,
                  userLogin,
                  userSignup,
                  userLogout,
                  userAdmin }}>
         {children}   
        </AuthContext.Provider>
        

    )
}