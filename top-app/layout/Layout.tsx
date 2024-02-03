import {LayoutProps} from "@/layout/Layout.props";
import React, {FunctionComponent, JSX} from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from './Layout.module.css';

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
                <div className={styles.body}>
                    {children}
                </div>
            <Footer className={styles.footer}/>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return (props: T): JSX.Element => {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};