import {JSX} from "react";
import styles from "./PosterHead.module.css";
import {Like} from "@/components";
import Image from "next/image";

export const PosterHead = ({postTitle}: { postTitle: string }): JSX.Element => {
    if (!postTitle) return <></>;
    return (
        <>
            <h1>{postTitle}</h1>
            <div className={styles.tag}>
                <div><span>Front - end</span></div>
                <div><span>·</span></div>
                <div><span>1 месяц назад</span></div>
                <div><span>·</span></div>
                <div><span>3 минуты</span></div>
                <div><span>·</span></div>
                <Like/></div>
            <Image
                src={'/cart_img.png'}
                alt={'cart image'}
                width={687}
                height={440}
            />
        </>
    );
};
