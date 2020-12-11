// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IField } from "../../interfaces/IField";

export interface AutocompleteProps extends IProps {
    title: string;
    items: string[];

    children(props: AutocompleteTypesChildren);

    onChange(evt: any, index: number);
}

export type AutocompleteTypesChildren = {
    inputValue: string;
    inputProps: AutocompleteTypesChildrenInput,
}

export type AutocompleteTypesChildrenInput = IField & {}