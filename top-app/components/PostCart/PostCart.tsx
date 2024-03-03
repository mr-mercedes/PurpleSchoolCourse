'use client';
import { JSX } from 'react';
import Image from 'next/image';
import { Like } from '@/components';
import styles from './PostCart.module.css';
import { PostCartText } from '@/components/PostCart/components/PostCartText';
import { PostCartProps } from '@/components/PostCart/PostCart.props';
import Link from 'next/link';
import { motion } from 'framer-motion';
export const PostCart = ({
    tag,
    title,
    text,
    last_change,
    post_id,
}: PostCartProps): JSX.Element => {
    const variants = {
        hidden: { opacity: 0 },
        visible: (i: number) => {
            const delay = i * 0.5;
            return {
                opacity: 1,
                transition: {
                    opacity: { delay, duration: 0.3 },
                },
            };
        },
    };
    return (
        <motion.div
            variants={variants}
            initial={'hidden'}
            animate={'visible'}
            custom={Number(post_id)}
            className={styles.wrapper}
        >
            <Image
                src={'/cart_img.png'}
                alt={'cart image'}
                width={330}
                height={200}
            />
            <div className={styles.tag}>
                <PostCartText size={12}>{tag}</PostCartText>
                <Like />
            </div>
            <div className={styles.post_text}>
                <PostCartText size={18}>{title}</PostCartText>
                <PostCartText size={14}>{text}</PostCartText>
            </div>
            <div className={styles.post_footer}>
                <PostCartText size={12}>{last_change}</PostCartText>
                <Link href={`/post/${post_id}`}>
                    <span className={styles.post_btn}>
                        Читать
                        <Image
                            src={'/arrow.svg'}
                            alt={'cart image'}
                            width={20}
                            height={20}
                        />
                    </span>
                </Link>
            </div>
        </motion.div>
    );
};
