import {getMenu} from "@/api/menu";
import {JSX} from "react";
import {FirstLevelMenuItem, MenuItem, PageItem} from "@/interfaces/menu.interfece";
import styles from './Menu.module.css';
import CourseIcon from './icons/graduation-hat.svg';
import ServicesIcon from './icons/cloud.svg';
import BookIcon from './icons/book.svg';
import BoxIcon from './icons/box.svg';
import {TopLevelCategory} from "@/interfaces/page.interfece";
import cn from "classnames";

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BookIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <BoxIcon/>, id: TopLevelCategory.Products},
];

export const Menu = async (): Promise<JSX.Element> => {
    const menu = await getMenu(0);
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id == 0
                            })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </a>
                        {menu.id == 0 && buildSecondLevel(menu)}
                    </div>
                ))}
            </>
        )
    };
    const buildSecondLevel = (menuItem:FirstLevelMenuItem) => {
        return(
            <div className={styles.secondBlock}>
                {menu.map(m=> (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpen]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        )
    };
    const buildThirdLevel = (pages:PageItem[], route: string) => {
        return (
            pages.map(p=>(<a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel,{
                [styles.thirdLevelActive]: false
            })}>
                {p.category}
            </a>))
        )
    };
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};