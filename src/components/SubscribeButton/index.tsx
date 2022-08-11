import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
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
    async function handleSubscribe() {
        if(!session) {
            signIn('github');
            return;
        }

        try {
            const response = await api.post('/subscribe');
            const { sessionId } = response.data;
            const stripe = await getStripeJs();
            await stripe.redirectToCheckout({ sessionId });
        } catch(err) {
            alert(err.message);
        }
    }

    //RETURN STATEMENT
    return isSubscribed && dynamic ? (
        <div className={s.subscribedIndicatorWrapper}>Subscribed</div>
    ) : (
        <button className={`${s.subscribeButton} ${buttonSizeClass}`} onClick={handleSubscribe}>Subscribe now</button>
    )
}