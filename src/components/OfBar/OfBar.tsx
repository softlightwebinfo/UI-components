// Generated with util/create-component.js
import React from "react";
import { OfBarProps } from "./OfBar.types";
import "./OfBar.scss";
import { BEM } from "../../libs/BEM";
import { AvatarUser, Button } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const OfBar: React.FC<OfBarProps> = ({className, style, ...props}) => {
    const {
        message,
        avatar,
        name,
        role,
        labelButton,
        onClickButton,
        onClose,
        show,
    } = props;
    const bem = new BEM("OfBar", {});
    bem.Append(className);
    if (!show) return null;

    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <div className={bem.Children("logo")}>
                <AvatarUser horizontal name={name} avatar={avatar} subTitle={role}/>
            </div>
            <div className={bem.Children("message")}>
                {message}
            </div>
            <div className={bem.Children("actions")}>
                <Button className={bem.Children("button")} onClick={onClickButton}>{labelButton}</Button>
                <FontAwesomeIcon onClick={onClose} icon={faTimes}/>
            </div>
        </div>
    )
};
export default OfBar;