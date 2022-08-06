import s from '../src/styles/post.module.scss';
import { ChevronLeft, Sun, Moon, Bookmark, BookmarkFilled } from '../src/components/Icons';
import { motion, useScroll } from 'framer-motion';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Tooltip } from '../src/components/Tooltip';

export default function Post() {
    const { scrollYProgress } = useScroll();
    const [isLightTheme, setIsLightTheme] = useState(false);

    function handleSwitchTheme() {
        setIsLightTheme(!isLightTheme);
    }

    //RETURNING STATEMENT
    return(
        <main className={`${s.sectionContainer} ${isLightTheme ? 'lightTheme' : ''}`}>
            <motion.div className={s.progressBar} style={{ scaleX: scrollYProgress }}/>
            <section className={s.contentContainer}>
                <div className={s.actionsWrapper}>
                    <Tippy placement='right' render={attrs => <Tooltip {...attrs}>Go back</Tooltip>}>
                        <button className={s.actionButton}>
                            <span>Go back</span>
                            <ChevronLeft width={24} height={24} />
                        </button>
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
                <div className={s.articleContent}>
                    <time>Mar 12, 2021</time>
                    <h1>Past, Present, and Future of React State Management</h1>
                    <p>React was introduced in May 2013. Its paradigm shift was that your UI was a function of your state. Given some component state, React can determine what your component will look like. React is built upon the idea of state. However, state has long been one of the most difficult parts of building a React application.

                    Let&apos;s imagine state management in React as a rugged tool belt. You&apos;ve used this tool belt for years, slowly adding new tools as needed. Each tool serves a very specific purpose. You don&apos;t use your hammer to screw in bolts. As a craftsman, you&apos;ve learned the right time and place to use each tool.

                    State management with React is a rugged tool belt, but not everyone has the prior experience to know which tool to reach for. This post will explain the past, present, and future of state management to help you make the correct decision for your team, project, or organization.</p>

                    <p>React was introduced in May 2013. Its paradigm shift was that your UI was a function of your state. Given some component state, React can determine what your component will look like. React is built upon the idea of state. However, state has long been one of the most difficult parts of building a React application.

                    Let&apos;s imagine state management in React as a rugged tool belt. You&apos;ve used this tool belt for years, slowly adding new tools as needed. Each tool serves a very specific purpose. You don&apos;t use your hammer to screw in bolts. As a craftsman, you&apos;ve learned the right time and place to use each tool.

                    State management with React is a rugged tool belt, but not everyone has the prior experience to know which tool to reach for. This post will explain the past, present, and future of state management to help you make the correct decision for your team, project, or organization.</p>

                    <p>React was introduced in May 2013. Its paradigm shift was that your UI was a function of your state. Given some component state, React can determine what your component will look like. React is built upon the idea of state. However, state has long been one of the most difficult parts of building a React application.

                    Let&apos;s imagine state management in React as a rugged tool belt. You&apos;ve used this tool belt for years, slowly adding new tools as needed. Each tool serves a very specific purpose. You don&apos;t use your hammer to screw in bolts. As a craftsman, you&apos;ve learned the right time and place to use each tool.

                    State management with React is a rugged tool belt, but not everyone has the prior experience to know which tool to reach for. This post will explain the past, present, and future of state management to help you make the correct decision for your team, project, or organization.</p>
                </div>

            </section>
        </main>
    );
}