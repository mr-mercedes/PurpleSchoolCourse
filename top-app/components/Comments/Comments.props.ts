import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CommentsModel } from '@/interfaces/comments.interface';

export interface CommentsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    comments: CommentsModel[];
}
