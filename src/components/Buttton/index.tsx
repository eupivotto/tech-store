import {PulseLoader} from 'react-spinners'
import {Button} from './styles'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isLoading?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ButtonPrimary ({title, isLoading, ...rest} :IButtonProps)  {
    return (
        <Button {...rest}>
        <PulseLoader color="#fff" />
        </Button>
    )
}