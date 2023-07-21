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