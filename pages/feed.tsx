import s from '../src/styles/feed.module.scss';
import { Header } from "../src/components/Header";
import { Filter, X, Bookmark, BookmarkFilled } from '../src/components/Icons';
import { useState } from 'react';
import Head from 'next/head';

export default function Feed() {
    const postsData = [
        {
            title: 'Creating a Monorepo with Lerna & Yarn Workspaces',
            publishDate: 'Mar 12, 2021',
            preview: 'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
        },
        {
            title: 'Creating a Monorepo with Lerna & Yarn Workspaces',
            publishDate: 'Mar 12, 2021',
            preview: 'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
        },
        {
            title: 'Creating a Monorepo with Lerna & Yarn Workspaces',
            publishDate: 'Mar 12, 2021',
            preview: 'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
        },
        {
            title: 'Creating a Monorepo with Lerna & Yarn Workspaces',
            publishDate: 'Mar 12, 2021',
            preview: 'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
        },
        {
            title: 'Creating a Monorepo with Lerna & Yarn Workspaces',
            publishDate: 'Mar 12, 2021',
            preview: 'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
        },
        {
            title: 'Creating a Monorepo with Lerna & Yarn Workspaces',
            publishDate: 'Mar 12, 2021',
            preview: 'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
        }
    ];
    const [inputContent, setInputContent] = useState('');
    const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

    function handleClearField() {
        setInputContent('');
    }

    function handleBookmark(postIndex: number) {
        if(bookmarkedPosts.includes(postIndex)) {
            let newList = bookmarkedPosts.filter(idx => idx !== postIndex);
            setBookmarkedPosts(newList);
        } else {
            setBookmarkedPosts([...bookmarkedPosts, postIndex]);
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
                                    <X color='var(--c-on-surface-primary)' width={24} height={24}/>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={s.postsList}>
                        {postsData.map(({title, publishDate, preview}, idx) => (
                            <article key={idx} className={s.postWrapper}>
                                <div className={s.leftWing}>
                                    <time>{publishDate}</time>
                                    <h2>{title}</h2>
                                    <p>{preview}</p>
                                </div>
                                <button className={s.bookmarkButton} onClick={() => handleBookmark(idx)}>
                                    <span>Bookmark post</span>
                                    {bookmarkedPosts.includes(idx)
                                        ? (
                                            <BookmarkFilled
                                                color='var(--c-green-accent-primary)'
                                                width={20}
                                                height={20}
                                            />
                                        )
                                        : <Bookmark width={20} height={20}/>
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