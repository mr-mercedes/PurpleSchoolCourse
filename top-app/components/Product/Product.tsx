"use client";
import {ProductProps} from "@/components/Product/Product.props";
import {JSX, useRef, useState} from "react";
import {Button, Card, Divider, Rating, Review, ReviewForm, Tag} from "@/components";
import styles from "./Product.module.css";
import Image from "next/image";
import {declOfNum, priceRu} from "@/helpers/helpers";
import cn from "classnames";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);
    const scrollToReview = () => {
        setIsReviewOpened(true);
        setTimeout(() => {
            reviewRef.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
            });
        }, 50)
    }
    const cdnDomain = "https://cdn-bucket.hb.bizmrg.com/courses-top-images/2022-04-21/";
    return (
        <div className={className} {...props}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={cdnDomain + product.image.split("/").pop() ?? ''}
                        alt={product.title}
                        width={70}
                        height={70}/>
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice &&
                        <Tag className={styles.oldPrice} color="green">
                            {priceRu(product.price - product.oldPrice)}
                        </Tag>}
                </div>
                <div className={styles.credit}>
                    {product.credit}/<span className={styles.month}>мес</span>
                </div>
                <div className={styles.rating}>
                    <Rating rating={product.reviewAvg ?? product.initialRating}/>
                </div>
                <div className={styles.tags}>
                    {product.categories.map(p =>
                        <Tag key={p} className={styles.category} color={'ghost'}>{p}</Tag>
                    )}
                </div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}>
                    <a href="#ref"
                       onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a>
                </div>
                <Divider className={styles.hr}/>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}></span>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)}/>
                <div className={styles.actions}>
                    <Button appearance={'primary'}>Узнать подробнее</Button>
                    <Button
                        appearance={'ghost'}
                        arrow={isReviewOpened ? 'down' : 'right'}
                        className={styles.reviewButton}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <Card color={'blue'} className={cn(styles.reviwes, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened,
            })} ref={reviewRef}>
                {product.reviews.map(r => {
                    return (
                        <div key={r._id}>
                            <Review review={r}/>
                            <Divider/>
                        </div>
                    )
                })}
                <ReviewForm productId={product._id}/>
            </Card>
        </div>
    )
}