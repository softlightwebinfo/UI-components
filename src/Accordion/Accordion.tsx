// Generated with util/create-component.js
import React, { useState } from "react";
import { AccordionProps } from "./Accordion.types";
import "./Accordion.scss";
import { BEM } from "../assets/libs/BEM";

const Accordion: React.FC<AccordionProps> = (
    {
        className,
        id,
        style,
        children,
    }) => {
    const [state, setState] = useState({
        open: -1
    });
    const bem = new BEM("Accordion", {});
    bem.Append(className);
    return (
        <ul
            id={id}
            style={style}
            className={bem.toString()}
        >
            {React.Children.map(children, (child, index) => {
                // @ts-ignore
                return React.cloneElement(child, {
                    open: index == state.open,
                    onClick: () => {
                        let open = index;
                        if (open == state.open) {
                            open = -1;
                        }
                        setState({open});
                    }
                });
            })}
        </ul>
    )
};
export default Accordion;