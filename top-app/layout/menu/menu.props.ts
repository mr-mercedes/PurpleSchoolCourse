import {DetailedHTMLProps, HTMLAttributes} from "react";
import {MenuItem} from "@/interfaces/menu.interfece";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    menu:MenuItem[];
}