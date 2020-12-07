import { IStyle } from "./IStyle";

export interface IProps {
    style?: IStyle;
    className?: string;
    [p: string]: any;
}