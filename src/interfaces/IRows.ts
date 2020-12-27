import { IProps } from "./IProps";

export interface IRows<TType> extends IProps {
    children: TType | any | any[];
}