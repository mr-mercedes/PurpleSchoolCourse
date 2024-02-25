import styles from "./PosterBody.module.css";
import {Like} from "@/components";
import {JSX} from "react";

export const PosterBody = ({postBody}: { postBody: string }): JSX.Element => {
    if (!postBody) return <></>;
    return (
        <>
            <div className={styles.post_body}>
                <p className={styles.post_text}>{postBody}</p>
            </div>
            <div className={styles.post_body}>
                <h2>Что такое грид?</h2>
                <span
                    className={styles.post_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, fugit.</span>
            </div>
            <div className={styles.post_middle}>
                <span>Понравилось? Жми</span>
                <Like showCircle={true}/>
            </div>
        </>
    );
};