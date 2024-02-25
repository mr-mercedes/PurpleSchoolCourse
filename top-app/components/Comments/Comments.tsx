import {CommentsProps} from "@/components/Comments/Comments.props";
import {JSX} from "react";
import styles from "@/app/post/[id]/Post.module.css";


export const Comments = ({comments, ...props}: CommentsProps): JSX.Element => {
    return (
        <div {...props}>
            <h2>Комментарий</h2>
            {comments && (
                comments.map(c => {
                    return (
                        <div key={c.id}>
                            <div className={styles.post_comment_text}>
                                <span>{c.name}</span>
                                <span>·</span>
                                <span>{c.email}</span>
                            </div>
                            <p>{c.body}</p>
                        </div>

                    )
                })
            )}
        </div>
    )
}