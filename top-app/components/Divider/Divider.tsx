import {DividerProps} from "@/components/Divider/Divider.props";
import {JSX} from "react";
import cn from "classnames";
import styles from "./Divider.module.css";

export const Divider = ({className, ...props}:DividerProps):JSX.Element => {
    return (
        <hr className={cn(className, styles.hr)}{...props}/>
    )
}