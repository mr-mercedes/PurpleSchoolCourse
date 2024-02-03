import {SidebarProps} from "@/layout/Sidebar/Sidebar.props";
import styles from './Sidebar.module.css';
import {JSX} from "react";

const Sidebar = ({...props}:SidebarProps):JSX.Element => {
    return(<div {...props}>Sidebar</div>)
}

export default Sidebar;