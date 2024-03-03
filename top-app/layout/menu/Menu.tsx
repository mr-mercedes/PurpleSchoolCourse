'use client';
import { JSX, KeyboardEvent, useState } from 'react';
import {FirstLevelMenuItem, MenuItem, PageItem} from "@/interfaces/menu.interfece";
import styles from './Menu.module.css';
import cn from "classnames";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {MenuProps} from "@/layout/menu/menu.props";
import {firstLevelMenu} from "@/helpers/helpers";
import {motion} from 'framer-motion';

export const Menu = ({menu}: MenuProps): JSX.Element => {
    const [innerMenu, setInnerMenu] = useState<MenuItem[]>(menu)
    const pathname = usePathname();
    const firstCategory = firstLevelMenu.find(f => f.route === pathname.split('/')[1])
    const firstCategoryId = firstCategory ? firstCategory.id : 0;
    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {marginBottom: 0}
    }
    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29
        },
        hidden: {opacity: 0,height: 0}
    }
    const openSecondLevel = (secondCategory: string) => {
        setInnerMenu(innerMenu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }))
    }
    const openSecondLevelKey = (key:KeyboardEvent, secondCategory: string) => {
        if (key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            openSecondLevel(secondCategory);
        }
    }
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <Link href={`/${menu.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id == firstCategoryId
                            })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </Link>
                        {menu.id == 0 && buildSecondLevel(menu)}
                    </div>
                ))}
            </>
        )
    };
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {innerMenu.map(m => {
                    if (m.pages.map(p => p.alias).includes(pathname.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel}
                                 tabIndex={0}
                                 onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                                 onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                            <motion.div
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                className={cn(styles.secondLevelBlock)}>
                                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        )
    };
    const buildThirdLevel = (pages: PageItem[], route: string, isOpened:boolean) => {
        return (
            pages.map(p => (
                <motion.div
                    variants={variantsChildren}
                    key={p.alias}>
                    <Link
                        tabIndex={isOpened ? 0 : -1}
                        href={`/${route}/${p.alias}`}
                        className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname
                    })}>
                        {p.category}
                    </Link>
                </motion.div>))
        )
    };
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};