import s from './styles.module.scss';

type TooltipProps = {
    children: string;
}

export const Tooltip = ({ children }: TooltipProps) => {
    return (
        <div className={s.tooltipWrapper}>
            {children}
        </div>
    )
};