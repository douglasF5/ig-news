import s from './styles.module.scss';
import { motion } from 'framer-motion';
import { HomeIcon, FileText, Bookmark } from '../Icons/index';
import Link from 'next/link';
import { useRouter } from 'next/router';

//TYPE ANNOTATION
type MenuItemProps = {
    label: string;
    iconName: string;
    href: string;
};

export const MenuItem = ({ label, iconName, href }: MenuItemProps) => {
    const { asPath } = useRouter();
    const isSelected = asPath === href;

    //ICONS
    const i = {
        color: `var(--c-on-surface-${isSelected ? 'primary' : 'secondary'})`,
        size: 18,
    };
    const icon = {
        'home': <HomeIcon color={i.color} width={i.size} height={i.size} />,
        'feed': <FileText color={i.color} width={i.size} height={i.size} />,
        'bookmark': <Bookmark color={i.color} width={i.size} height={i.size} />,
    };

    //RETURNING STATEMENT
    return (
        <motion.div className={s.itemWrapper}>
            <Link href={href}>
                <a
                    className={`${s.linkWrapper} ${isSelected ? s.selected : ''}`}
                >
                    {icon[iconName]}
                    <span>{label}</span>
                </a>
            </Link>
            {isSelected && (
                <motion.div
                    layoutId='underline'
                    className={s.underline}
                />
            )}
        </motion.div>
    );
};