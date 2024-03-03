import {LayoutProps} from "@/layout/Layout.props";
import React, { FunctionComponent, JSX, useRef } from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from './Layout.module.css';
import {AppContextProvider, IAppContext} from "@/context/app.context";
import {Up} from "@/components";
import { SkipLink } from '@/components/SkipLink/SkipLink';



const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <SkipLink/>
            <Header className={styles.header}>
                <Sidebar className={styles.sidebar_mobile}/>
            </Header>
            <Sidebar className={styles.sidebar}/>
            <div
                id={'content_body'}
                className={styles.body}
                tabIndex={0}>
                {children}
            </div>
            <Footer className={styles.footer}/>
            <Up/>
        </div>
    )
}


export const withLayout = <T extends Record<string, never> & IAppContext & AliasProps>(
    Component: FunctionComponent<T>) => (props: T): JSX.Element => (
        <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
            <Layout>
                <Component {...props} />
            </Layout>
        </AppContextProvider>
    );

interface AliasProps {
    params: never
}