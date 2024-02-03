import {LayoutProps} from "@/layout/Layout.props";
import React, {FunctionComponent, JSX} from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";


const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return (props: T):JSX.Element => {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};