// Generated with util/create-component.js
import React from "react";
import { SearchDropdownProps } from "./SearchDropdown.types";
import "./SearchDropdown.scss";
import { BEM } from "../../libs/BEM";
import { Dropdown, SearchInput } from "../index";

const SearchDropdown: React.FC<SearchDropdownProps> = ({className, input, dropdown, style, children}) => {
    const bem = new BEM("SearchDropdown", {});
    bem.Append(className);
    return (
        <div style={style} className={bem.toString()} data-testid="SearchDropdown">
            <SearchInput
                {...input}
                dark
                className={bem.Children("search")}
            />
            <Dropdown
                {...dropdown}
                className={bem.Children("dropdown")}
            />
        </div>
    )
};
export default SearchDropdown;