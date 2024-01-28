"use client"
import {LikeProps} from "@/components/Like/Like.props";
import {JSX, useState} from "react";
import Image from "next/image";
import styles from './Like.module.css';

export const Like = ({count = 0}: LikeProps): JSX.Element => {
    const [likeCount, setLikeCount] = useState(count);
    return (
        <div className={styles.like}>
            <span className={styles.like}>{likeCount}</span>
            <Image
                src={'/like.svg'}
                alt={'like'}
                height={16}
                width={16}
                onClick={() => setLikeCount(likeCount + 1)}/>
        </div>)
}