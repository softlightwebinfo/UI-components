// Generated with util/create-component.js
import React from "react";
import { ModalProps } from "./Modal.types";
import "./Modal.scss";
import { BEM } from "../../libs/BEM";
import { Dialog, Overlay } from "../../index";

const Modal: React.FC<ModalProps> = ({className, title, footer, isOpen, size, id, style, onRequestClose, children}) => {
    const bem = new BEM("Modal", {});
    bem.Append(className);
     if (!isOpen) return null;
    return (
        <Overlay isOpen={isOpen} id={id} style={style} className={bem.toString()}>
            <Dialog footer={footer} title={title} size={size} onClose={onRequestClose}>
                {children}
            </Dialog>
        </Overlay>
    )
};
export default Modal;