'use client';
import { ReviewFormProps } from '@/components/ReviewForm/ReviewForm.props';
import { JSX, useState } from 'react';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Button, Input, Rating, TextArea } from '@/components';
import CrossIcon from '@/public/cross.svg';
import { Controller, useForm } from 'react-hook-form';
import { IReviewFormInterface } from '@/components/ReviewForm/ReviewForm.interface';
import { sendForm } from '@/api/review';

export const ReviewForm = ({
    productId,
    isOpened,
    className,
    ...props
}: ReviewFormProps): JSX.Element => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
    } = useForm<IReviewFormInterface>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setIsError] = useState<string>('');
    const onSubmit = async (formData: IReviewFormInterface) => {
        try {
            const { message } = await sendForm({ ...formData }, productId);
            if (message) {
                setIsSuccess(true);
                reset();
            } else setIsError('Что-то пошло не так');
        } catch (e: any) {
            setIsError(e.message);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input
                    error={errors.name}
                    placeholder={'Имя'}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={!!errors.name}
                    {...register('name', {
                        required: { value: true, message: 'Заполните имя' },
                    })}
                />
                <Input
                    error={errors.title}
                    className={styles.title}
                    placeholder={'Заголовок отзыва'}
                    tabIndex={isOpened ? 0 : -1}
                    aria-invalid={!!errors.title}
                    {...register('title', {
                        required: {
                            value: true,
                            message: 'Заполните заголовок',
                        },
                    })}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name={'rating'}
                        rules={{
                            required: {
                                value: true,
                                message: 'Укажите рейтинг',
                            },
                        }}
                        render={({ field }) => (
                            <Rating
                                isEditable={true}
                                error={errors.rating}
                                rating={field.value}
                                setRating={field.onChange}
                                ref={field.ref}
                            />
                        )}
                    />
                </div>
                <TextArea
                    error={errors.description}
                    className={styles.description}
                    placeholder={'Текст отзыва'}
                    tabIndex={isOpened ? 0 : -1}
                    aria-label={'Текст отзыва'}
                    aria-invalid={!!errors.description}
                    {...register('description', {
                        required: {
                            value: true,
                            message: 'Заполните описание',
                        },
                    })}
                />
                <div className={styles.submit}>
                    <Button
                        appearance={'primary'}
                        onClick={() => clearErrors()}
                        tabIndex={isOpened ? 0 : -1}
                    >
                        Отправить
                    </Button>
                    <span className={styles.info}>
                        * Перед публикацией отзыв пройдет предварительную
                        модерацию и проверку
                    </span>
                </div>
            </div>
            {isSuccess && (
                <div className={cn(styles.panel, styles.success)}>
                    <div className={styles.successTitle} role={'alert'}>
                        Ваш отзыв отправлен
                    </div>
                    <div>
                        Спасибо, ваш отзыв будет опубликован после проверки.
                    </div>
                    <button
                        className={styles.close}
                        onClick={() => setIsSuccess(false)}
                        aria-label={'закрыть оповещение'}
                    >
                        <CrossIcon />
                    </button>
                </div>
            )}

            {error && (
                <div className={cn(styles.panel, styles.error)} role={'alert'}>
                    Что-то пошло не так, попробуйте обновить страницу
                    <button
                        className={styles.close}
                        onClick={() => setIsError('')}
                        aria-label={'закрыть оповещение'}
                    >
                        <CrossIcon />
                    </button>
                </div>
            )}
        </form>
    );
};
