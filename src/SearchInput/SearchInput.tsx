// Generated with util/create-component.js
import React from "react";
import { SearchInputProps } from "./SearchInput.types";
import "./SearchInput.scss";
import { BEM } from "../assets/libs/BEM";
import { Field } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput: React.FC<SearchInputProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("SearchInput", {});
    bem.Append(className);
    return (
        <Field
            {...props}
            style={style}
            className={bem.toString()}
        >
            <span className={bem.Children("icon")}><FontAwesomeIcon icon={faSearch}/></span>
            <input
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                type="text"
            />
        </Field>
    )
};
export default SearchInput;