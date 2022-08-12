import s from './styles.module.scss';
import { Github, X } from '../Icons';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export const SignInButton = () => {
    const {data: session} = useSession();

    return !session ? (
        <button className={s.signInButton} onClick={() => signIn('github')}>
            {<Github color='var(--c-yellow-accent-primary)' width={18} height={18} />}
            Sign in
        </button>
    ) : (
        <div className={s.loggedInIndicatorWrapper}>
            <div className={s.imageWrapper}>
                <Image src={session.user.image} alt={session.user.name} layout='fill' objectFit='cover'/>
            </div>
            <p>{session.user.name}</p>
            <button className={s.signOutButton} onClick={() => signOut()}>
                <span>Sign Out</span>
                <X color='var(--c-on-surface-primary)' width={20} height={20}/>
            </button>
        </div>
    )
};