import {LayoutProps} from "@/layout/Layout.props";
import {FunctionComponent, JSX} from "react";
import {Header} from "@/layout/Header/Header";
import styles from './Layout.module.css';

const Layout = ({children}:LayoutProps):JSX.Element => {
  return (
      <>
        <Header/>
          <div>{children}</div>
      </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return (props: T):JSX.Element => {
        return (
            <div className={styles.main_content}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </div>
        );
    };
};