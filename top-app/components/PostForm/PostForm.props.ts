import {DetailedHTMLProps, HTMLAttributes} from "react";


export interface PostFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    postId: string;
}