import {ReviewProps} from "@/components/Review/Review.props";
import {JSX} from "react";
import cn from "classnames";
import styles from "./Review.module.css";
import UserIcon from "@/public/user.svg";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {Rating} from "@/components";
export const Review = ({review, className, ...props}:ReviewProps):JSX.Element => {
    const { name, title, description, createdAt, rating } = review;
    return (
        <div className={cn(styles.review, className)} {...props}>
            <UserIcon className={styles.user}/>
            <div className={styles.title}>
                <span className={styles.name}>{name}:</span>&nbsp;
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                <span>{format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}</span>
            </div>
            <div className={styles.rating}>
                <Rating rating={rating}/>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}