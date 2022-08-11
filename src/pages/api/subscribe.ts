import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from 'faunadb';
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";
import { fauna } from "../../services/fauna";

type User = {
    ref: {
        id: string;
    }
}

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        
        const session = await getSession({ req });

        console.log(session);

        const user = await fauna.query<User>(
            q.Get(
                q.Match(
                    q.Index('user_by_email'),
                    q.Casefold(session.user.email)
                )
            )
        );

        const stripeCustomer = await stripe.customers.create({
            email: session.user.email
        });

        await fauna.query(
            q.Update(
                q.Ref(q.Collection('users'), user.ref.id),
                {
                    data: {
                        stripe_customer_id: stripeCustomer.id
                    }
                }
            )
        );

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [{
                price: 'price_1LTaTnCsLPrcC2xqi2OSOSZO'
            }],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        });

        return res.status(200).json({sessionId: stripeCheckoutSession.id})
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed.')
    }
}

export default subscribe;