import s from './styles.module.scss';
import Image from "next/image";
import Logo from '../../../public/logo.svg';

type MenuItem = {
    label: string;
    icon: string;
    isVisible: boolean;
}

//EXPORTING COMPONENT
export const Header = () => {
    const menuItems: Array<MenuItem> = [
        {
            label: 'Home',
            icon: 'Home',
            isVisible: true
        },
        {
            label: 'Feed',
            icon: 'Feed',
            isVisible: true
        },
        {
            label: 'Bookmarks',
            icon: 'Bookmarks',
            isVisible: false
        },
    ];

    //RETURNING STATEMENT
    return (
        <header className={s.sectionContainer}>
            <div className={s.contentContainer}>
                <div className={s.leftWing}>
                    <Image src={Logo} alt='IgNews'/>
                    <div>
                        {
                            menuItems.map(({ label, icon, isVisible }: MenuItem) => {
                                return (
                                    isVisible && <button>{label}</button>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={s.rightWing}>
                    <button>Sign in</button>
                    <button>Subscribe now</button>
                </div>
            </div>
        </header>
    );
};