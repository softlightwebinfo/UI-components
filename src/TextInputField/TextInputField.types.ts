// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { ReactElement } from "react";

export interface TextInputFieldProps extends IProps {
    label: string;
    required?: boolean;
    description?: string;
    value?: string;
    placeholder?: string;
    id?: string;
    hint?: ReactElement | string;
    inputHeight?: number;
    inputWidth?: number | string;
    validationMessage?: ReactElement | string;
    isValid?: boolean;

    onChange?(evt);
}