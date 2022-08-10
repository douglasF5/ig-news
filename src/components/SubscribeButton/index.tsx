import { useSession, signIn } from 'next-auth/react';
import s from './styles.module.scss';

//TYPE ANNOTATION
interface SubscribeButtonProps {
    priceId?: string;
    size: string;
    dynamic?: boolean;
}

//COMPONENT DEFINITION
export const SubscribeButton = ({ size, priceId, dynamic=false }: SubscribeButtonProps) => {
    const {data: session} = useSession();

    const buttonSizeClass = size === 'LG' ? s.LG : s.SM;
    const isSubscribed = false;

    //EVENT HANDLERS
    function handleSubscribe() {
        if(!session) {
            signIn('github');
            return;
        }

        //start checkout session
    }

    //RETURN STATEMENT
    return isSubscribed && dynamic ? (
        <div className={s.subscribedIndicatorWrapper}>Subscribed</div>
    ) : (
        <button className={`${s.subscribeButton} ${buttonSizeClass}`} onClick={handleSubscribe}>Subscribe now</button>
    )
}