import {SidebarProps} from "@/layout/Sidebar/Sidebar.props";
import {JSX} from "react";
import {Menu} from "@/layout/menu/Menu";


const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <Menu/>
        </div>);
}

export default Sidebar;