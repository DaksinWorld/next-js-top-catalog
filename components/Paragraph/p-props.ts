import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PaProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size: 'big' | 'medium' | 'small',
    children: ReactNode
}