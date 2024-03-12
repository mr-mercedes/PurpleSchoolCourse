import { HeaderProps } from '@/layout/Header/Header.props';
import styles from './Header.module.css';
import { JSX } from 'react';
import Image from 'next/image';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return (
        <div className={styles.title} {...props}>
            <span tabIndex={0}>.my_blog</span>
            <Image
                tabIndex={0}
                src={'/git.svg'}
                alt={'git'}
                width={40}
                height={24}
                className={styles.git_img}
            />
        </div>
    );
};
