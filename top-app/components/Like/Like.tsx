"use client";
import {LikeProps} from "@/components/Like/Like.props";
import {JSX, useState} from "react";
import Image from "next/image";
import styles from './Like.module.css';
import cn from "classnames";

export const Like = ({count = 0, showCircle = false}: LikeProps): JSX.Element => {
    const [likeCount, setLikeCount] = useState<number>(count);
    const [like, setLike] = useState<boolean>(false);
    const incrementLike = () => {
        setLikeCount(likeCount + 1);
        if (!like) setLike(true);
        setLike(false);
        fetch('https://jsonplaceholder.typicode.com/posts/:id', {
            method: 'PATCH'}).then(resp =>
            console.log(resp)
        );
    };

    return (
        <div className={styles.like}>
            <span className={styles.like}>{likeCount}</span>
            <div className={cn({
                [styles.like_in_circle_off]: !showCircle,
                [styles.like_in_circle_on]: showCircle,
            })}>
                <Image
                    src={'/like.svg'}
                    alt={'like'}
                    height={16}
                    width={16}
                    onClick={incrementLike}
                className={cn({
                    [styles.like_is_active]: like,
                    [styles.like_not_active]: !like
                })}/>
            </div>
        </div>);
};