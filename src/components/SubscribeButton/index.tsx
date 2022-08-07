import s from './styles.module.scss';

//TYPE ANNOTATION
interface SubscribeButtonProps {
    priceId?: string;
    size: string;
    dynamic?: boolean;
}

//COMPONENT DEFINITION
export const SubscribeButton = ({ size, priceId, dynamic=false }: SubscribeButtonProps) => {
    const buttonSizeClass = size === 'LG' ? s.LG : s.SM;
    const isSubscribed = false;

    //RETURN STATEMENT
    return isSubscribed && dynamic ? (
        <div className={s.subscribedIndicatorWrapper}>Subscribed</div>
    ) : (
        <button className={`${s.subscribeButton} ${buttonSizeClass}`}>Subscribe now</button>
    )
}