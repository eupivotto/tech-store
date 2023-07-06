import { Button } from "./styles";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
    isLoading:boolean;
  
 
}

export function ButtonPrimary({ title,isLoading,...rest}:IButtonProps) {
    return (
        <Button{...rest }>{isLoading ? "carregando..." : title}</Button>    
)

}