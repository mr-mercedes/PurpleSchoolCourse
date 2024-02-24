"use client";
import React, {JSX, useEffect, useState} from "react";
import styles from './Rating.module.css';
import cn from 'classnames';
import {RatingProps} from "@/components/Rating/Rating.props";
import Image from "next/image";
import StarIcon from "@/public/star.svg";
import StarFillIcon from "@/public/star_fill.svg";
export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span key={i} className={cn(styles.star, {
                    [styles.editable]: isEditable
                })}
                      onMouseEnter={() => changeDisplay(i + 1)}
                      onMouseLeave={() => constructRating(rating)}
                      onClick={() => onclick(i + 1)}>
                    {
                        i < currentRating
                            ? <StarFillIcon alt={'star fill'}
                                     tabIndex={isEditable ? 0 : -1}
                                     onKeyDown={(e: React.KeyboardEvent<HTMLImageElement>) => isEditable && handleSpace(i + 1, e)}/>
                            : <StarIcon alt={'star'}
                                     tabIndex={isEditable ? 0 : -1}
                                     onKeyDown={(e: React.KeyboardEvent<HTMLImageElement>) => isEditable && handleSpace(i + 1, e)}/>
                    }
                </span>

            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (rating: number) => {
        if (!isEditable) return;
        constructRating(rating);
    };
    const onclick = (rating: number) => {
        if (!isEditable || !setRating) return;
        setRating(rating);
    };
    const handleSpace = (rating: number, e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.code != 'Space' || !setRating) return;
        setRating(rating);
    };

    return (<div {...props}>
        {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>);
};