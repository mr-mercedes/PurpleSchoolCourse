'use client';
import React, {
    ForwardedRef,
    forwardRef,
    JSX,
    useEffect, useRef,
    useState, KeyboardEvent
} from 'react';
import styles from './Rating.module.css';
import cn from 'classnames';
import { RatingProps } from '@/components/Rating/Rating.props';
import StarIcon from '@/public/star.svg';
import StarFillIcon from '@/public/star_fill.svg';

export const Rating = forwardRef(
    (
        { isEditable = false, rating, setRating, tabIndex, error, ...props }: RatingProps,
        ref: ForwardedRef<HTMLDivElement>,
    ): JSX.Element => {
        const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
            new Array(5).fill(<></>),
        );
        const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);
        useEffect(() => {
            constructRating(rating);
        }, [rating,tabIndex]);
        const computeFocus = (r: number, i: number): number => {
            if (!isEditable) {
                return -1;
            }
            if (!rating && i == 0) {
                return tabIndex ?? 0;
            }
            if (r == i + 1) {
                return tabIndex ?? 0;
            }
            return -1;
        };
        const constructRating = (currentRating: number) => {
            const updatedArray = ratingArray.map(
                (r: JSX.Element, i: number) => {
                    return (
                        <span
                            key={i}
                            className={cn(styles.star, {
                                [styles.editable]: isEditable,
                            })}
                            onMouseEnter={() => changeDisplay(i + 1)}
                            onMouseLeave={() => constructRating(rating)}
                            onClick={() => onclick(i + 1)}
                            tabIndex={computeFocus(rating, i)}
                            onKeyDown={handleKey}
                            ref={r => ratingArrayRef.current?.push(r)}
                            role={isEditable ? 'slider' : ''}
                            aria-invalid={error ? true : false}
                            aria-valuenow={rating}
                            aria-valuemax={5}
                            aria-label={isEditable ? 'Укажите рейтинг' : ('рейтинг' + rating)}
                            aria-valuemin={1}
                        >
                            {i < currentRating ? (
                                <StarFillIcon
                                    alt={'star fill'}
                                    tabIndex={isEditable ? 0 : -1}
                                    onKeyDown={(
                                        e: React.KeyboardEvent<HTMLImageElement>,
                                    ) => isEditable && handleSpace(i + 1, e)}
                                />
                            ) : (
                                <StarIcon
                                    alt={'star'}
                                    tabIndex={isEditable ? 0 : -1}
                                    onKeyDown={(
                                        e: React.KeyboardEvent<HTMLImageElement>,
                                    ) => isEditable && handleSpace(i + 1, e)}
                                />
                            )}
                        </span>
                    );
                },
            );
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
        const handleSpace = (
            rating: number,
            e: React.KeyboardEvent<HTMLImageElement>,
        ) => {
            if (e.code != 'Space' || !setRating) return;
            setRating(rating);
        };
        const handleKey = (e: KeyboardEvent) => {
            if (!isEditable || !setRating) {
                return;
            }
            if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
                if (!rating) {
                    setRating(1);
                } else {
                    e.preventDefault();
                    setRating(rating < 5 ? rating + 1 : 5);
                }
                ratingArrayRef.current[rating]?.focus();
            }
            if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
                e.preventDefault();
                setRating(rating > 1 ? rating - 1 : 1);
                ratingArrayRef.current[rating - 2]?.focus();
            }
        };

        return (
            <div
                {...props}
                ref={ref}
                className={cn(styles.ratingWrapper, {
                    [styles.error]: error,
                })}
            >
                {ratingArray.map((r, i) => (
                    <span key={i}>{r}</span>
                ))}
                {error && (
                    <span className={styles.errorMessage}>{error.message}</span>
                )}
            </div>
        );
    },
);
