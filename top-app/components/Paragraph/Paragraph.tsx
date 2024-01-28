import {JSX} from "react";
import {ParagraphProps} from "@/components/Paragraph/Paragraph.props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({size = 16, children, className, ...props}:ParagraphProps):JSX.Element => {

    return (<p className={cn(styles.p ,className, {
        [styles.small]: size == 14,
        [styles.medium]: size == 16,
        [styles.large]: size == 18
    })}{...props}>{children}</p>)
}