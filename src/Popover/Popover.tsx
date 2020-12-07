// Generated with util/create-component.js
import React from "react";
import { PopoverProps } from "./Popover.types";
import "./Popover.scss";
import { BEM } from "../assets/libs/BEM";
import { OutsideClickDetector } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Popover: React.FC<PopoverProps> = (
    {
        className,
        style,
        children,
        showClose = false,
        ...props
    }) => {
    const bem = new BEM("Popover", {
        open: props.open,
    });
    bem.Append(className);

    const onFocus = () => {
        props.onOpen(true);
    }
    const onClose = () => props.onOpen(false);
    return (
        <OutsideClickDetector onOutsideClick={onClose}>
            <div style={style} className={bem.toString()}>
                <div className={bem.Children("trigger")} onFocus={onFocus}>
                    {props.trigger}
                    {showClose && (
                        <FontAwesomeIcon
                            onClick={props.onClear}
                            className={bem.Children("close")}
                            icon={faTimes}
                        />
                    )}
                </div>
                <div className={bem.Children("menu")}>{children}</div>
            </div>
        </OutsideClickDetector>
    )
};
export default Popover;