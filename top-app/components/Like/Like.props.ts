import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface LikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    count?: number
    showCircle?: boolean
}