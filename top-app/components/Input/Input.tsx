import {InputProps} from "@/components/Input/Input.props";
import {JSX} from "react";
import cn from "classnames";
import styles from './Input.module.css';

export const Input = ({className, ...props}:InputProps):JSX.Element => {
    return(<input className={cn(className, styles.input)}  type="text" {...props}/>)
}