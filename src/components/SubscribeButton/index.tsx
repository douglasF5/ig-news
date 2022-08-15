import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
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
export const SubscribeButton = ({ size, dynamic = false }: SubscribeButtonProps) => {
    const { data: session } = useSession();
    const router = useRouter();

    const buttonSizeClass = size === 'LG' ? s.LG : s.SM;

    //EVENT HANDLERS
    async function handleSubscribe() {
        if (!session) {
            signIn('github');
            return;
        }

        if (session?.activeSubscription) {
            router.push('/feed');
        }

        try {
            const response = await api.post('/subscribe');
            const { sessionId } = await response.data;
            const stripe = await getStripeJs();
            await stripe.redirectToCheckout({ sessionId });
        } catch (err) {
            alert(err.message);
        }
    }

    //RETURN STATEMENT
    return session?.activeSubscription && dynamic ? (
        <div className={s.subscribedIndicatorWrapper}>Subscribed</div>
    ) : (
        <button className={`${s.subscribeButton} ${buttonSizeClass}`} onClick={handleSubscribe}>Subscribe now</button>
    );
};