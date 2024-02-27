import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PostCartTextProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    children: ReactNode;
    size: number;
}
