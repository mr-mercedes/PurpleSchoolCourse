import {JSX} from "react";
import {ButtonProps} from "@/components/Button/Button.props";
import styles from "./Button.module.css";
import cn from 'classnames';
import Image from "next/image";


export const Button = ({children, arrow = 'none', appearance, className, ...props}: ButtonProps): JSX.Element => {


    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost',
        })} {...props}>
            {children}
            {arrow !== 'none' &&
                <span className={cn(styles.arrow, {
                    [styles.down]: arrow == 'down'
                })}><Image
                    src={'./arrow.svg'}
                    alt={'arrow'}
                    width={5.8}
                    height={10}
                /></span>}
        </button>);
};