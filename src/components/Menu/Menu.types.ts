// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface MenuProps extends IProps {
    active: string;
    menu: MenuPropsMenu;
    routeKey?: string;
}

export interface MenuPropsMenu {
    [p: string]: MenuPropsMenuItem;
}

export interface MenuPropsMenuItem {
    label: string;
    menu?: MenuPropsMenu;
}