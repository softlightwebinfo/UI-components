// Generated with util/create-component.js
import React from "react";
import { FaqListProps } from "./FaqList.types";
import "./FaqList.scss";
import { BEM } from "../../libs/BEM";
import { Card, Faq } from "../index";

const FaqList: React.FC<FaqListProps> = ({className, rows, style, children}) => {
    const bem = new BEM("FaqList", {});
    bem.Append(className);
    return (
        <Card
            style={style}
            className={bem.toString()}
            multipleBody={rows.map((value, index) => (
                <Faq {...value} index={(index + 1).toString()} key={index}/>
            ))}
        />
    )
};
export default FaqList;