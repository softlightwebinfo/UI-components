// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IRows } from "../../interfaces/IRows";
import { IListProps } from "../../interfaces/IListProps";

export interface UnorderedListProps extends IProps, IListProps {
    rows?: IRows<string>[],
    children: any[] | any;
}