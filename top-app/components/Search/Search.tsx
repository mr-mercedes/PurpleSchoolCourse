'use client';
import { SearchProps } from '@/components/Search/Search.props';
import { JSX, useState } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import { Button, Input } from '@/components';
import SearchIcon from '@/public/search.svg';
import { useRouter } from 'next/navigation';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const goToSearch = () => {
        router.push(`/search?q=${search}`);
    };
    const handleKeyDown = (event: any) => {
        if (event.key == 'Enter') {
            goToSearch();
        }
    };

    return (
        <form
            role={'search'}
            className={cn(className, styles.search)}
            {...props}
        >
            <Input
                className={styles.input}
                placeholder={'Поиск...'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            ></Input>
            <Button
                appearance={'primary'}
                className={styles.button}
                onClick={() => goToSearch()}
                aria-label={'Искать по сайту'}
            >
                <SearchIcon />
            </Button>
        </form>
    );
};
