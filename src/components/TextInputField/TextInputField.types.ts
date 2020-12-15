// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";
import { FieldProps } from "../Field/Field.types";

export interface TextInputFieldProps extends IProps, FieldProps {
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