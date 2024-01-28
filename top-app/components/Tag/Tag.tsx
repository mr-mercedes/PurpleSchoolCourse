import {JSX} from "react";
import {TagProps} from "@/components/Tag/Tag.props";
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({children, size = 14, color, href, className, ...props}: TagProps): JSX.Element => {

    return (
        <div className={cn(styles.tag, className, {
            [styles.small]: size == 12,
            [styles.medium]: size == 14,
            [styles.ghost]: color == 'ghost',
            [styles.green]: color == 'green',
            [styles.primary]: color == 'primary',
            [styles.red]: color == 'red',
        })}{...props}>
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>)
}