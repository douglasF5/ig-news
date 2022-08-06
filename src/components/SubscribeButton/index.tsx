import s from './styles.module.scss';

//TYPE ANNOTATION
interface SubscribeButtonProps {
    priceId?: string;
    size: string;
}

//COMPONENT DEFINITION
export const SubscribeButton = ({ size, priceId }: SubscribeButtonProps) => {
    const buttonSizeClass = size === 'LG' ? s.LG : s.SM;

    //RETURN STATEMENT
    return (
        <button className={`${s.subscribeButton} ${buttonSizeClass}`}>Subscribe now</button>
    );
}