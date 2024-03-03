import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import up from '@/public/up.svg';
import menu from '@/public/menu.svg';
import close from  '@/public/cross.svg';

export const icons = {
    up,
    close,
    menu
};
export type  IconName = keyof  typeof icons;
export interface ButtonIconProps extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: 'primary' | 'white';
    icon: IconName;
}