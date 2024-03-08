import {SidebarProps} from "@/layout/Sidebar/Sidebar.props";
import {JSX} from "react";
import {Menu} from "@/layout/menu/Menu";
import {getMenu} from "@/api/menu";
import Logo from "@/public/logo.svg";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import {Search} from "@/components";

const Sidebar = async ({className, ...props}: SidebarProps): Promise<JSX.Element> => {
    const menu = await getMenu(0)
    return (
        <div {...props} className={cn(className, styles.sidebar)}>
            <Logo className={styles.logo}/>
            <Search/>
            <Menu menu={menu}/>
        </div>);
}

export default Sidebar;