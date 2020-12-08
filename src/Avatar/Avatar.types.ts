// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { TSize } from "../assets/types/TSize";
import { ReactElement } from "react";

export interface AvatarProps extends IProps {
    name: string | ReactElement;
    src?: string;
    title?: string;
    size?: TSize;
}