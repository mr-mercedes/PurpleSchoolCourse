import {InputProps} from "@/components/Input/Input.props";
import {ForwardedRef, forwardRef, JSX} from "react";
import cn from "classnames";
import styles from "./Input.module.css";

export const Input = forwardRef(({
                                     error,
                                     className,
                                     ...props
                                 }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input
                type="text"
                ref={ref}
                className={cn(styles.input, {
                    [styles.error]: error
                })}
                {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

Input.displayName = "Input";