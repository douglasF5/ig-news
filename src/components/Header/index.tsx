import { MenuItem } from '../MenuItem';
import s from './styles.module.scss';
import Image from "next/image";
import Logo from '../../../public/logo.svg';
import { SubscribeButton } from '../SubscribeButton';
import { SignInButton } from '../SignInButton';

//TYPE ANNOTATION
type MenuItemData = {
    label: string;
    iconName: string;
    href: string;
    isVisible: boolean;
};

//EXPORTING COMPONENT
export const Header = () => {
    const menuItems: Array<MenuItemData> = [
        {
            label: 'Home',
            iconName: 'home',
            isVisible: true,
            href: '/'
        },
        {
            label: 'Feed',
            iconName: 'feed',
            isVisible: true,
            href: '/feed'
        },
        {
            label: 'Bookmarks',
            iconName: 'bookmark',
            isVisible: true,
            href: '/bookmarks'
        },
    ];

    //RETURN STATEMENT
    return (
        <header className={s.sectionContainer}>
            <div className={s.contentContainer}>
                <div className={s.leftWing}>
                    <Image src={Logo} alt='IgNews' />
                    <nav className={s.menuItemsWrapper}>
                        {menuItems.map(({ label, iconName, isVisible, href }: MenuItemData) => (isVisible &&
                            <MenuItem
                                key={label}
                                label={label}
                                iconName={iconName}
                                href={href}
                            />
                        ))
                        }
                    </nav>
                </div>
                <div className={s.rightWing}>
                    <SignInButton />
                    <SubscribeButton size='SM' dynamic={true} />
                </div>
            </div>
        </header>
    );
};