import {ForwardedRef, forwardRef, JSX} from "react";
import cn from "classnames";
import styles from './TextArea.module.css';
import {TextAreaProps} from "@/components/TextArea/TextArea.props";

export const TextArea = forwardRef(({error,className, ...props}: TextAreaProps, ref:ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={cn(styles.textarea, {
                [styles.error]:error
            })} ref={ref} {...props}/>
            {error && <span className={styles.errorMessage} role={'alert'}>{error.message}</span>}
        </div>
    )
})