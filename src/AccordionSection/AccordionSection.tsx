// Generated with util/create-component.js
import React from "react";
import { AccordionSectionProps } from "./AccordionSection.types";
import "./AccordionSection.scss";
import { BEM } from "../assets/libs/BEM";
import { Typography } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const AccordionSection: React.FC<AccordionSectionProps> = ({className, disabled, icon, open = false, style, label, children, ...props}) => {
    const bem = new BEM("AccordionSection", {
        open: open,
        disabled: disabled,
    });
    bem.Append(className);
    return (
        <li style={style} className={bem.toString()}>
            <section>
                <header className={bem.Children("summary")} onClick={!disabled && props.onClick}>
                    <Typography variant={"body1"} component={"h3"}>
                        {icon && (<span className={bem.Children("header-icon")}>{icon}</span>)}
                        {label}
                    </Typography>
                    <FontAwesomeIcon
                        className={bem.Children("icon")}
                        icon={open ? faAngleUp : faAngleDown}
                    />
                </header>
                <section className={bem.Children("content")}>
                    {children}
                </section>
            </section>
        </li>
    )
};
export default AccordionSection;