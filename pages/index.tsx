import s from '../src/styles/home.module.scss';
import Head from 'next/head'
import Image from 'next/image';
import Illustration from '../public/illustration.svg';
import { Header } from '../src/components/Header';
import { ChevronLeft } from '../src/components/Icons';

export default function Home() {
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
                        <span>for $9,90 month</span>
                    </p>
                    <div className={s.buttonWrapper}>
                        <button className={s.subscribeButton}>
                            Subscribe now
                        </button>
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
