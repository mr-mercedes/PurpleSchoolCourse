import {JSX} from "react";
import cn from "classnames";
import styles from './TextArea.module.css';
import {TextAreaProps} from "@/components/TextArea/TextArea.props";

export const TextArea = ({className, ...props}: TextAreaProps): JSX.Element => {
    return (<textarea className={cn(className, styles.textarea)} {...props}/>)
}