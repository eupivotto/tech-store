import { createContext, useState } from "react";

type IUserSignup = {
  nome: string;
  bairro: string;
  rua: string;
  cep: string;
  complemento: string;
  telefone: string;
  email: string;
};

interface IAuthContext {
  authenticated: boolean;
  user: IUserSignup | null;
  userLogin: (email: string, password: string) => void;
  userLogout: () => void;
  userSignup: (userData: IUserSignup) => void;
}

export const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  user: null,
  userLogin: () => {},
  userLogout: () => {},
  userSignup: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
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
