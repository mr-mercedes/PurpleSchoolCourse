import React, {JSX} from "react";
import {AdvantagesProps} from "@/components/Advantages/Advantages.props";
import styles from "./Advantages.module.css";
import AdvantageLogo from "@/public/ok.svg";
export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a=> {
                return (
                    <div key={a._id} className={styles.advantage}>
                        <AdvantageLogo/>
                        <div className={styles.title}>{a.title}</div>
                        <hr className={styles.vline}/>
                        {/*<div className={styles.vline}></div>*/}
                        <div>{a.description}</div>
                    </div>
                )
            })}
        </>
    );
};