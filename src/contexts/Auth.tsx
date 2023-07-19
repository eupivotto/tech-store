import  { ReactNode, createContext, useState  } from "react";


type IUserSignup = {
    email:string,
    name:string,
    contato:string,
    Adress:string,
    road:string,
    Zipcode:string,
    password:string
};

interface AuthContextData {
  authenticated: boolean;
  user: IUserSignup | null,
  userLogin: (email: string, password: string) => void,
  userSignup:(
    email:string,
    name:string,
    contato:string,
    Adress:string,
    road:string,
    Zipcode:string,
    password:string)=> void,
  userLogout: () => void
}

export const AuthContext = createContext<AuthContextData>({
  authenticated: false,
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  userLogin: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  userLogout: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  userSignup: () => {},
});

export const AuthProvider = ({ children }:{children:ReactNode}) => {
  // userState com usuario iniciando nulo
  const [user, setUser] = useState<IUserSignup | null>(null);

  const userLogin = (email: string, password: string) => {
    console.log('Login auth', { email, password });
    setUser({ email, password });
  };

  const userSignup = (userData: IUserSignup) => {
    console.log('Signup auth', userData);
    setUser(userData);
  };

  const userLogout = () => {
    console.log('Logout');
  };

  const authenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ authenticated, user, userLogin, userLogout, userSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
};
