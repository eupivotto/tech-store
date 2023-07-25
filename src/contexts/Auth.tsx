import { AxiosError } from "axios";
import { loginNewUser } from "../services/login.service";
import { AuthContextData } from "../services/types";
import { IUserSignup } from '../services/types'
import { IUserInfo } from '../services/types'

  
import  { ReactNode, createContext, useState  } from "react"
import { useNavigate } from "react-router-dom"


export const AuthContext = createContext<AuthContextData>({
    authenticated: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setAuthenticated: () => {},
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
    const [, setAuthenticated] = useState(false) 
    const [ user, setUser] = useState<IUserInfo | null >(null) // userState com usuario iniciando nulo
    const [token, setToken] = useState<string | null>(null)
    const [, setUsersignup] = useState<IUserSignup | null>(null)
    

    const userLogin = async (email: string, password: string) => {
      console.log('Login auth', { email, password });
    
      try {
        
        const response = await loginNewUser(email, password);
    
        if (response.token && response.user) {
          console.log('API Response:', response)
          // Verifica se o usuário é um administrador com base na propriedade 'isAdmin' da resposta da API
          const isAdmin = response.user.isAdmin === true;

          console.log('User data:', response.user)
    
          setUser(response.user);
          setToken(response.token);
          setAuthenticated(true);
    
          // Se o usuário for um administrador, redirecionar para a página de administração
          if (isAdmin) {
            navigate('/admin');
          } else {
            // Caso contrário, redirecionar para a página principal do usuário normal
            navigate('/');
          }
        } else {
          console.error('Token não encontrado na resposta da API de usuários');
        }
      } catch (error) {
        handleApiError(error);
      }
    };
    
    const handleApiError = (error: unknown) => {
      if (error instanceof AxiosError) {
        // Lógica para lidar com erros na chamada da API
        if (error.response) {
          if (error.response.status === 404) {
            console.error('Usuário não encontrado');
          }
        }
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
                  setAuthenticated,
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