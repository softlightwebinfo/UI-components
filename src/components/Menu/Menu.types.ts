// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";

export interface MenuProps extends IProps {
    active: string;
    menu: MenuPropsMenu;
    routeKey?: string;
    icons?: boolean;

    onClick?(key: string, value: MenuPropsMenuItem, index: number);
}

export interface MenuPropsMenu {
    [p: string]: MenuPropsMenuItem;
}

export interface MenuPropsMenuItem {
    label: string | ReactElement;
    menu?: MenuPropsMenu;
}