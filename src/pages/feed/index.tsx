import s from './styles.module.scss';
import Link from 'next/link';
import { Header } from "../../components/Header";
import { Filter, X, Bookmark, BookmarkFilled } from '../../components/Icons';
import { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';

//TYPE ANNOTATION
type Post = {
    slug: string;
    title: string;
    preview: string;
    updatedAtDisplay: string;
    updatedAt: string;
};

interface PostsProps {
    posts: Post[];
}

export default function Feed({ posts }: PostsProps) {
    const [inputContent, setInputContent] = useState('');
    const [bookmarkedPosts, setBookmarkedPosts] = useState<string[]>([]);

    function handleClearField() {
        setInputContent('');
    }

    function handleBookmark(postKey: string) {
        if (bookmarkedPosts.includes(postKey)) {
            let newList = bookmarkedPosts.filter(idx => idx !== postKey);
            setBookmarkedPosts(newList);
        } else {
            setBookmarkedPosts([...bookmarkedPosts, postKey]);
        }

    }

    //RETURNING STATEMENT
    return (
        <>
            <Head>
                <title>Feed | IgNews</title>
            </Head>
            <Header />
            <main className={s.sectionContainer}>
                <section className={s.contentContainer}>
                    <div className={s.postsTitleBar}>
                        <h1>Feed</h1>
                        <div className={s.inputFieldWrapper}>
                            <Filter color='var(--c-on-surface-primary)' width={24} height={24} />
                            <input
                                type='text'
                                placeholder='Type to filter'
                                value={inputContent}
                                onChange={(e) => setInputContent(e.target.value)}
                            />
                            {inputContent && (
                                <button className={s.clearButton} onClick={handleClearField}>
                                    <span>Clear filter</span>
                                    <X color='var(--c-on-surface-primary)' width={24} height={24} />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={s.postsList}>
                        {posts.map(({ title, updatedAt, updatedAtDisplay, preview, slug }) => (
                            <article className={s.postWrapper} key={slug}>
                                <Link href={`/feed/${slug}`}>
                                    <div className={s.leftWing}>
                                        <time dateTime={updatedAt}>{updatedAtDisplay}</time>
                                        <h2>{title}</h2>
                                        <p>{preview}</p>
                                    </div>
                                </Link>
                                <button className={s.bookmarkButton} onClick={() => handleBookmark(slug)}>
                                    <span>Bookmark post</span>
                                    {bookmarkedPosts.includes(slug)
                                        ? (
                                            <BookmarkFilled
                                                color='var(--c-green-accent-primary)'
                                                width={20}
                                                height={20}
                                            />
                                        )
                                        : <Bookmark width={20} height={20} />
                                    }
                                </button>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

//GETTING DATA FROM PRISMIC API
export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.getByType("post", {
        pageSize: 100
    });

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: post.data.title,
            preview: post.data.postcontent.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAtDisplay: new Date(post.last_publication_date).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }),
            updatedAt: post.last_publication_date
        };
    });

    return {
        props: { posts },
    };
};