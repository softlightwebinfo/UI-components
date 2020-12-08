// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";

export interface PaginationProps extends IProps {
    activePage: number;//1
    itemsPerPage?: number;//20
    rows: any[];

    onChange();
}