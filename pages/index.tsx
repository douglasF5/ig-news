import { GetStaticProps } from 'next';
import s from '../src/styles/home.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Illustration from '../public/illustration.svg';
import { Header } from '../src/components/Header';
import { ChevronLeft } from '../src/components/Icons';
import { stripe } from '../src/services/stripe';
import { SubscribeButton } from '../src/components/SubscribeButton';

interface HomeProps {
    product: {
        priceId: string;
        amount: number;
    }
}

export default function Home({ product }: HomeProps) {
    return (
        <>
            <Head>
                <title>Home | IgNews</title>
            </Head>
            <Header />
            <main className={s.sectionContainer}>
                <div className={s.illustration}>
                    <Image src={Illustration} alt="Illustration" />
                </div>
                <div className={s.contentContainer}>
                    <h1>
                        News about the <span>React</span> world
                    </h1>
                    <p>
                        Get acess to all publications{" "}
                        <span>for {product.amount} month</span>
                    </p>
                    <div className={s.buttonWrapper}>
                        <SubscribeButton size='LG' priceId={product.priceId}/>
                        <button className={s.secondaryButton}>
                            Check out the feed
                            <span className={s.iconWrapper}>
                                <ChevronLeft
                                    color="var(--c-on-surface-primary)"
                                    width={24}
                                    height={24}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const price = await stripe.prices.retrieve('price_1LTaTnCsLPrcC2xqi2OSOSZO');

    const product = {
        priceId: price.id,
        amount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format((price.unit_amount / 100)),
    }

    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24, //24 hours
    }
}
