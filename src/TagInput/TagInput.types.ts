// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";

export interface TagInputProps extends IProps {
    values: string[];
    inputProps?: { placeholder?: string };

    onChange(values: string[]);
}