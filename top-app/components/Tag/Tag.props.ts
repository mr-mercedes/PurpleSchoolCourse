import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: number;
    color?: 'ghost' | 'red' | 'green' | 'gray' | 'primary';
    href?: string;
}