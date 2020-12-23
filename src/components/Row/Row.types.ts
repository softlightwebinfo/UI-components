// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TAlignContent, TAlignItems } from "../../types/TAlign";

export interface RowProps extends IProps {
    grid?: boolean;
    marginCollapse?: boolean;
    smVertical?: boolean;
    mdVertical?: boolean;
    lgVertical?: boolean;
    reverse?: boolean;
    containerFluid?: boolean;
    alignContent?: TAlignContent;
    alignItems?: TAlignItems;
}