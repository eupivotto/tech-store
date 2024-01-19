export interface AuthContextData {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  user: IUserInfo | null;
  token: string | null;
  setToken: (token: string | null) => void;
  userLogin: (email: string, password: string) => void;
  userSignup:(userData: IUserSignup) => void;
  userLogout: () => void;
  userAdmin: () =>  boolean;
  userAdminPanel: (name: string) => void,
}

export type  IUserInfo = {
 
  name?: string;
  email?: string,
  password?: string,
  isAdmin?: boolean
  user?: string;
} 

export interface IDataProduct {
    title?: string;
    category?: string;
    description?: string;
    id: string;
    price?: number;
    image?: string;
    cartItems?: [];
    
    }   


 export interface RouteParams {
     id: string;
    [key: string]: string | undefined
  }


 export interface IDataProductId {
    title?: string;
    id?: string;
    price?: number;
    image?: string;
    description?: string;
 }     

 export type IUserSignup = {
  email:string,
  name:string,
  contato:string,
  Adress:string,
  road:string,
  Zipcode:string,
  password:string,
  isAdmin: boolean
}

export type IUserAdminPanel = {
  name: string;
  
};

export interface IOrderData {
  cartItems: IDataProduct[];
  totalAmount: number;
  
}

export interface ContactFormData {
  name: string;
  email: string;
  password: string;
  message: string;
}