import { MenuItem } from '../MenuItem';
import s from './styles.module.scss';
import Image from "next/image";
import Logo from '../../../public/logo.svg';
import { useState } from 'react';
import { SubscribeButton } from '../SubscribeButton';
import { SignInButton } from '../SignInButton';

//TYPE ANNOTATION
type MenuItemData = {
    label: string;
    iconName: string;
    url: string;
    isVisible: boolean;
}

//EXPORTING COMPONENT
export const Header = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const menuItems: Array<MenuItemData> = [
        {
            label: 'Home',
            iconName: 'home',
            isVisible: true,
            url: ''
        },
        {
            label: 'Feed',
            iconName: 'feed',
            isVisible: true,
            url: ''
        },
        {
            label: 'Bookmarks',
            iconName: 'bookmarks',
            isVisible: false,
            url: ''
        },
    ];

    //RETURN STATEMENT
    return (
        <header className={s.sectionContainer}>
            <div className={s.contentContainer}>
                <div className={s.leftWing}>
                    <Image src={Logo} alt='IgNews'/>
                    <nav className={s.menuItemsWrapper}>
                        {menuItems.map(({ label, iconName, isVisible, url }: MenuItemData, idx) => (isVisible &&
                                <MenuItem
                                    key={idx}
                                    label={label}
                                    iconName={iconName}
                                    isSelected={selectedItem === idx}
                                    url={url}
                                    handleClick={() => setSelectedItem(idx)}
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