import { HeaderProps } from '@/layout/Header/Header.props';
import styles from './Header.module.css';
import { JSX } from 'react';
import Image from 'next/image';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return (
        <div className={styles.title} {...props}>
            <span>.my_blog</span>
            <Image
                src={'/git.svg'}
                alt={'git'}
                width={40}
                height={24}
                className={styles.git_img}
            />
        </div>
    );
};
