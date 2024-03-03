import { JSX } from 'react';
import cn from 'classnames';
import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from '@/components/ButtonIcon/ButtonIcon.props';

export const ButtonIcon = ({
    icon,
    appearance,
    className,
    ...props
}: ButtonIconProps): JSX.Element => {
    const IconComp = icons[icon];
    return (
        <button
            className={cn(className,styles.button, {
                [styles.primary]: appearance == 'primary',
                [styles.white]: appearance == 'white',
            })}
            {...props}
        >
            <IconComp/>
        </button>
    );
};
