import {TextareaProps} from "@/components/Textarea/Textarea.props";
import {ForwardedRef, forwardRef, JSX} from "react";
import cn from "classnames";
import styles from "./Textarea.module.css";

export const Textarea = forwardRef(({
                                        error,
                                        className,
                                        ...props
                                    }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.textareaWrapper)}>
            <textarea ref={ref} className={cn(styles.textarea, {
                [styles.error]: error
            })} {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

Textarea.displayName = 'Textarea';