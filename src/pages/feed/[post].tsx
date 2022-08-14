import s from '../../styles/post.module.scss';
import { ChevronLeft, Sun, Moon, Bookmark, BookmarkFilled } from '../../components/Icons';
import { motion, useScroll } from 'framer-motion';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Tooltip } from '../../components/Tooltip';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { getPrismicClient } from '../../services/prismic';
import { asHTML } from '@prismicio/helpers';
import Head from 'next/head';

//TYPE ANNOTATION
interface PostProps {
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    };
}

//COMPONENT DEFINITION
export default function Post({ post }: PostProps) {
    const { scrollYProgress } = useScroll();
    const [isLightTheme, setIsLightTheme] = useState(false);

    function handleSwitchTheme() {
        setIsLightTheme(!isLightTheme);
    }

    //RETURNING STATEMENT
    return (
        <>
            <Head>
                <title>{`${post.title}  | IgNews`}</title>
            </Head>
            <main className={`${s.sectionContainer} ${isLightTheme ? 'lightTheme' : ''}`}>
                <motion.div className={s.progressBar} style={{ scaleX: scrollYProgress }} />
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
                    </article>
                </section>
            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const session = await getSession({ req });
    const { post: slug } = params;

    console.log(session);

    const prismic = getPrismicClient();
    const response = await prismic.getByUID('post', String(slug), {});


    const post = {
        slug,
        title: response.data.title,
        content: asHTML(response.data.postcontent),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
    };

    // if(!session)

    return {
        props: {
            post,
        }
    };
};