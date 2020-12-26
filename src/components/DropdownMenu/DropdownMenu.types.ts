// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactElement } from "react";

export interface DropdownMenuProps extends IProps {
    menu: DropdownMenuPropsMenu[];

    onClick?(evt: any);

    wrapperRow?: (component: ReactElement, row: DropdownMenuPropsMenu) => ReactElement;
}

export interface DropdownMenuPropsMenu {
    label?: string;
    separator?: boolean;
    icon?: IconProp;
}