// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { IField } from "../assets/interfaces/IField";

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