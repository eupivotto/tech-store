import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { IDataProduct } from '../services/types'

interface ICartContext {
  cartItems: IDataProduct[];
  addToCart: (item: IDataProduct) => void;
  isCartVisible: boolean;
  toggleCartVisibility: () => void;
  setCartItems: Dispatch<SetStateAction<IDataProduct[]>>;
}

interface ICartProviderProps {
    children: React.ReactNode;
  }

export const CartContext = createContext<ICartContext>({
    cartItems: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setCartItems: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addToCart: () => { },
    isCartVisible: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleCartVisibility: () => {},
    
}as ICartContext)

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<ICartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<IDataProduct[]>([])
  const [ isCartVisible, setIsCartVisible] = useState(false)

  const addToCart = (item: IDataProduct) => {
    setCartItems((prevCartItems) => [...prevCartItems, item])
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prevIsCartVisible) => !prevIsCartVisible)
  }


  useEffect(() => {
    // Salvando cartItems no localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])


  useEffect(() => {
    // Salvando cartItems no localStorage sempre que houver uma alteração
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])


  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, isCartVisible, toggleCartVisibility }}>
      {children}
    </CartContext.Provider>
  );
};

