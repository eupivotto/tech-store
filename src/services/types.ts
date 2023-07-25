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
  email: string,
  password: string,
  isAdmin: boolean
} 

export interface IDataProduct {
    name: string;
    category: string;
    description: string;
    brand: string;
    id: string;
    price: number;
    image: string;
    cartItems: [];
    totalAmount: number; 
    
    }   


    export interface RouteParams {
        id: string;
        [key: string]: string | undefined
      }


 export interface IDataProductId {
    name: string;
    id: string;
    price: number;
    image: string;
    brand: string;
    description: string;
    category: string;
 }     

 export type IUserSignup = {
  email:string,
  name:string,
  contato:string,
  Adress:string,
  road:string,
  Zipcode:string,
  password:string
}

export type IUserAdminPanel = {
  name: string;
  
};