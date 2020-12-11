// Generated with util/create-component.js
import React, { useState } from "react";
import { TagInputProps } from "./TagInput.types";
import "./TagInput.scss";
import { BEM } from "../../libs/BEM";
import { KeyCode } from "../../mappings/constants";
import { Tag } from "../../index";

const TagInput: React.FC<TagInputProps> = ({className, style, children, ...props}) => {
    const [textValue, setTextValue] = useState("");
    const bem = new BEM("TagInput", {});
    bem.Append(className);

    const onEnter = (evt) => {
        if (evt.keyCode === KeyCode.ENTER) {
            evt.preventDefault();
            if (props.values.indexOf(textValue) == -1) {
                props.onChange([...props.values, textValue]);
                setTextValue("");
            }
        }
    };

    const onDelete = (index: number) => {
        props.onChange(props.values.filter((value, index1) => index1 != index));
    }
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <div className={bem.Children("tags")}>
                {props.values.map((value, index) => (
                    <Tag onClick={() => onDelete(index)} key={value}>{value}</Tag>
                ))}
                <input
                    onKeyUp={onEnter}
                    placeholder={props.inputProps?.placeholder}
                    type="text" value={textValue}
                    onChange={e => setTextValue(e.target.value)}
                />
            </div>
        </div>
    )
};
export default TagInput;