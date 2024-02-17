"use client";
import {LikeProps} from "@/components/Like/Like.props";
import {JSX, useState} from "react";
import LikeImg from "@/components/Like/LikeImage.svg";
import styles from './Like.module.css';
import cn from "classnames";

export const Like = ({count = 0, showCircle = false}: LikeProps): JSX.Element => {
    const [likeCount, setLikeCount] = useState<number>(count);
    const [like, setLike] = useState<boolean>(false);
    const incrementLike = () => {
        setLikeCount(prevState => prevState + 1);
        if (!like) {
            setLike(true);
        } else {
            setLike(false);
        }
        fetch('https://jsonplaceholder.typicode.com/posts/:id', {
            method: 'PATCH'
        }).then(resp =>
            console.log(resp)
        );
    };
    return (
        <div className={styles.like} onClick={incrementLike}>
            {!showCircle && (<span className={styles.like}>{likeCount}</span>)}
            <div className={cn({
                [styles.like_in_circle_off]: !showCircle,
                [styles.circle_on]: showCircle,
                [styles.circle_is_active]: like && showCircle,
            })}>
                <LikeImg className={cn(styles.like2, {
                    [styles.like_is_active]: like && showCircle,
                    [styles.like_not_active]: !like
                })}/>
            </div>
        </div>);
};