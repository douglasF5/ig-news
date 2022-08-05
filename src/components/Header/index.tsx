import { MenuItem, MenuItemProps } from '../MenuItem';
import s from './styles.module.scss';
import Image from "next/image";
import Logo from '../../../public/logo.svg';
import { AnimateSharedLayout } from 'framer-motion';
import { useState } from 'react';

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
                        <AnimateSharedLayout>
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
                        </AnimateSharedLayout>
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