import s from './styles.module.scss';
import { motion } from 'framer-motion';
import { HomeIcon, FileText, Bookmark } from '../Icons/index';

//TYPE ANNOTATION
type MenuItemProps = {
    label: string;
    iconName: string;
    isSelected: boolean;
    url: string;
    handleClick: () => void;
}

export const MenuItem = ({ label, iconName, isSelected, url, handleClick }: MenuItemProps) => {
    //ICONS
    const i = {
        color: `var(--c-on-surface-${isSelected ? 'primary' : 'secondary'})`,
        size: 18,
    } 
    const icon = {
        'home': <HomeIcon color={i.color} width={i.size} height={i.size} />,
        'feed': <FileText color={i.color} width={i.size} height={i.size} />,
        'bookmark': <Bookmark color={i.color} width={i.size} height={i.size} />,
    }

    //RETURNING STATEMENT
    return (
        <motion.div className={s.itemWrapper}>
            <div
                onClick={handleClick}
                className={`${s.linkWrapper} ${isSelected ? s.selected : ''}`}
            >
                {icon[iconName]}
                <span>{label}</span>
            </div>
            {isSelected && (
                <motion.div
                    layoutId='underline'
                    className={s.underline}
                />
            )}
        </motion.div>
    );
};