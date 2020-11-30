// Generated with util/create-component.js
import React from "react";
import { ListProps } from "./List.types";
import "./List.scss";
import { BEM } from "../assets/libs/BEM";
import { OrderedList, UnorderedList } from "../index";

const List: React.FC<ListProps> = (
    {
        className,
        isOrder = false,
        ...rest
    }) => {
    const bem = new BEM("List", {});
    bem.Append(className);
    const TagComponent = isOrder ? OrderedList : UnorderedList
    return (
        <TagComponent
            {...rest}
            className={bem.toString()}
        />
    )
};
export default List;