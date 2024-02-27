import { JSX } from 'react';
import styles from './PosterHead.module.css';
import { Like } from '@/components';
import Image from 'next/image';

export const PosterHead = ({
    postTitle,
}: {
    postTitle: string;
}): JSX.Element => {
    if (!postTitle) return <></>;
    return (
        <>
            <h1>{postTitle}</h1>
            <div className={styles.tag}>
                <span>Front - end</span>
                <span>·</span>
                <span>1 месяц назад</span>
                <span>·</span>
                <span>3 минуты</span>
                <span>·</span>
                <Like />
            </div>
            <Image
                src={'/cart_img.png'}
                alt={'cart image'}
                width={687}
                height={440}
            />
        </>
    );
};
