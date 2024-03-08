import {InputProps} from "@/components/Input/Input.props";
import {ForwardedRef, forwardRef, JSX} from "react";
import cn from "classnames";
import styles from './Input.module.css';

export const Input = forwardRef(({className,error, ...props}:InputProps, ref:ForwardedRef<HTMLInputElement>):JSX.Element => {
    return(
        <div className={cn(styles.inputWrapper, className)}>
            <input className={cn(styles.input, {
                [styles.error]: error
            })} ref={ref} type="text" {...props}/>
            {error && <span className={styles.errorMessage} role={'alert'}>{error.message}</span>}
        </div>
    )
});