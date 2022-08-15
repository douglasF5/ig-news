import s from '../../../styles/post.module.scss';
import { ChevronLeft, Sun, Moon, Bookmark, BookmarkFilled } from '../../../components/Icons';
import { SubscribeButton } from '../../../components/SubscribeButton';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Tooltip } from '../../../components/Tooltip';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../../services/prismic';
import { asHTML } from '@prismicio/helpers';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

//TYPE ANNOTATION
interface PostPreviewProps {
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    };
}

//COMPONENT DEFINITION
export default function PostPreview({ post }: PostPreviewProps) {
    const { data: session } = useSession();
    const router = useRouter();
    const [isLightTheme, setIsLightTheme] = useState(false);

    function handleSwitchTheme() {
        setIsLightTheme(!isLightTheme);
    }

    useEffect(() => {
        if (session?.activeSubscription) {
            router.push(`/feed/${post.slug}`);
        }
    }, [session, post.slug, router]);

    //RETURNING STATEMENT
    return (
        <>
            <Head>
                <title>{`${post.title}  | IgNews`}</title>
            </Head>
            <main className={`${s.sectionContainer} ${isLightTheme ? 'lightTheme' : ''}`}>
                <section className={s.contentContainer}>
                    <div className={s.actionsWrapper}>
                        <Tippy placement='right' render={attrs => <Tooltip {...attrs}>Go back</Tooltip>}>
                            <div className={s.tooltipWrapper}>
                                <Link href='/feed'>
                                    <a className={s.actionButton}>
                                        <span>Go back</span>
                                        <ChevronLeft width={24} height={24} />
                                    </a>
                                </Link>
                            </div>
                        </Tippy>
                        <Tippy placement='right' render={attrs => <Tooltip {...attrs}>Switch theme</Tooltip>}>
                            <button className={s.actionButton} onClick={handleSwitchTheme}>
                                <span>Switch theme</span>
                                {!isLightTheme
                                    ? <Sun width={24} height={24} />
                                    : <Moon width={24} height={24} />
                                }
                            </button>
                        </Tippy>
                        <Tippy placement='right' render={attrs => <Tooltip {...attrs}>Bookmark</Tooltip>}>
                            <button className={s.actionButton}>
                                <span>Bookmark</span>
                                <Bookmark width={24} height={24} />
                            </button>
                        </Tippy>
                    </div>
                    <article className={s.articleWrapper}>
                        <time>{post.updatedAt}</time>
                        <h1>{post.title}</h1>
                        <div className={s.articleContent} dangerouslySetInnerHTML={{ __html: post.content }} />
                        <footer className={s.paywallMessageWrapper}>
                            <div className={s.paywallMessage}>
                                <h3>🤓 Subscribe to keep reading!</h3>
                                <SubscribeButton size='SM' dynamic={false} />
                            </div>
                        </footer>
                    </article>
                </section>
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { post: slug } = params;

    const prismic = getPrismicClient();
    const response = await prismic.getByUID('post', String(slug), {});


    const post = {
        slug,
        title: response.data.title,
        content: asHTML(response.data.postcontent.splice(0, 4)),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
    };

    return {
        props: {
            post,
        },
        revalidate: 60 * 30 //30 min
    };
};