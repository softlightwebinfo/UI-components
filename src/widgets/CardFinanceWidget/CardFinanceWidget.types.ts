// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { DropdownMenuProps } from "../../components/DropdownMenu/DropdownMenu.types";

export interface CardFinanceWidgetProps extends IProps {
    icon?: IconProp;
    title: string;
    subTitle: string;
    list: CardFinanceWidgetPropsList[];
    dropdown: DropdownMenuProps;
}

export interface CardFinanceWidgetPropsList {
    label: string;
    value: string;
}