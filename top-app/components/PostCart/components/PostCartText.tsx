import { PostCartTextProps } from '@/components/PostCart/components/PostCartText.props';
import { JSX } from 'react';
import styles from './PostCartText.module.css';
import cn from 'classnames';

export const PostCartText = ({
    children,
    size = 14,
    className,
    ...props
}: PostCartTextProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.small]: size == 12,
                [styles.medium]: size == 14,
                [styles.large]: size == 18,
            })}
            {...props}
        >
            {children}
        </p>
    );
};
