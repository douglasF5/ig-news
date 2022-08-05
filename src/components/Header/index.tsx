import { MenuItem } from '../MenuItem';
import s from './styles.module.scss';
import Image from "next/image";
import Logo from '../../../public/logo.svg';
import { Github } from '../Icons';
import { useState } from 'react';

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

    //RETURNING STATEMENT
    return (
        <header className={s.sectionContainer}>
            <div className={s.contentContainer}>
                <div className={s.leftWing}>
                    <Image src={Logo} alt='IgNews'/>
                    <div className={s.menuItemsWrapper}>
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
                    </div>
                </div>
                <div className={s.rightWing}>
                    <button className={s.signInButton}>
                        {<Github color='var(--c-yellow-accent-primary)' width={24} height={24} />}
                        Sign in
                    </button>
                    <button className={s.subscribeButton}>Subscribe now</button>
                </div>
            </div>
        </header>
    );
};