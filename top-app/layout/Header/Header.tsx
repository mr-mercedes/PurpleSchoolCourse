import {HeaderProps} from "@/layout/Header/Header.props";
import React, {JSX} from "react";
import styles from "@/app/home.module.css";
import Link from "next/link";

const Header = ({...props}:HeaderProps):JSX.Element => {
    return(<nav className={styles.nav} {...props}>
        <Link href={'/'}>Home</Link>
        <Link href={'/news'}>News</Link>
        <Link href={'/about'}>About</Link>
    </nav>)
}

export default Header;