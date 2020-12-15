// Generated with util/create-component.js
import React from "react";
import { HeaderHorizontalProps } from "./HeaderHorizontal.types";
import "./HeaderHorizontal.scss";
import { BEM } from "../../libs/BEM";
import { AlertText, Container, Flex, List } from "../index";

const HeaderHorizontal: React.FC<HeaderHorizontalProps> = (
    {
        className,
        style,
        children,
        message,
        rows,
        left,
        right,
        ...props
    }) => {
    const bem = new BEM("HeaderHorizontal", {});
    bem.Append(className);
    const Component = props.noContainer ? "div" : Container;
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <Component>
                <Flex>
                    <div className={bem.Children("left")}>
                        {message && <AlertText {...message}/>}
                        {left}
                    </div>
                    <div className={bem.Children("right")}>
                        {right}
                        {rows && (<List{...rows}/>)}
                    </div>
                </Flex>
            </Component>
        </div>
    )
};

export default HeaderHorizontal;