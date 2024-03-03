'use client';
import { SkipLinkProps } from '@/components/SkipLink/SkipLink.props';
import React, { JSX, useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import styles from './SkipLink.module.css';

export const SkipLink = ({ ...props }: SkipLinkProps): JSX.Element => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
        useState<boolean>(false);
    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            const body = document.getElementById('content_body');
            if (body) body.focus();
        }
        setIsSkipLinkDisplayed(false);
    };
    return (
        <a
            tabIndex={1}
            onFocus={() => setIsSkipLinkDisplayed(true)}
            onKeyDown={skipContentAction}
            className={cn(styles.skipLink, {
                [styles.displayed]: isSkipLinkDisplayed,
            })}
            href="#"
            {...props}
        >
            Сразу к содержанию
        </a>
    );
};
