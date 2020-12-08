// Generated with util/create-component.js
import React from "react";
import { CloseButtonProps } from "./CloseButton.types";
import "./CloseButton.scss";
import { BEM } from "../assets/libs/BEM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CloseButton: React.FC<CloseButtonProps> = ({className, onClick, style, children}) => {
    const bem = new BEM("CloseButton", {});
    bem.Append(className);
    return (
        <button onClick={onClick} className={bem.toString()} style={style}>
            <FontAwesomeIcon icon={faTimes}/>
        </button>
    )
};
export default CloseButton;