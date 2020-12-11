// Generated with util/create-component.js
import React from "react";
import { DialogProps } from "./Dialog.types";
import "./Dialog.scss";
import { BEM } from "../../libs/BEM";
import { CloseButton, OutsideClickDetector, Typography } from "../../index";

const Dialog: React.FC<DialogProps> = ({className, footer, size, title, style, children, onClose}) => {
    const bem = new BEM("Dialog", {
        [size]: !!size,
    });
    bem.Append(className);
    return (
        <OutsideClickDetector onOutsideClick={onClose}>
            <section style={style} className={bem.toString()} data-testid="Dialog">
                <CloseButton onClick={onClose}/>
                {title && (
                    <header className={bem.Children("header")}>
                        <Typography
                            className={bem.Children("title")}
                            variant={"body1"}
                            align={"center"}
                            component={"h2"}
                        >
                            {title}
                        </Typography>
                    </header>
                )}
                <section className={bem.Children("body")}>{children}</section>
                {footer && (<footer className={bem.Children("footer")}>{footer}</footer>)}
            </section>
        </OutsideClickDetector>
    )
};
export default Dialog;