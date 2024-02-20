'use client';
import {JSX, useState} from "react";
import {FirstLevelMenuItem, MenuItem, PageItem} from "@/interfaces/menu.interfece";
import styles from './Menu.module.css';
import cn from "classnames";
import Link from "next/link";
import {notFound, usePathname} from "next/navigation";
import {MenuProps} from "@/layout/menu/menu.props";
import {firstLevelMenu} from "@/helpers/helpers";

export const Menu = ({menu}: MenuProps): JSX.Element => {
    const [innerMenu, setInnerMenu] = useState<MenuItem[]>(menu)
    const pathname = usePathname();
    const firstCategory  = firstLevelMenu.find(f=> f.route === pathname.split('/')[1])
    const firstCategoryId = firstCategory? firstCategory.id : 0;
    const openSecondLevel = (secondCategory: string) => {
        setInnerMenu(innerMenu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }))
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
                                 onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpen]: m.isOpened
                            })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (<Link href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname
            })}>
                {p.category}
            </Link>))
        )
    };
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};