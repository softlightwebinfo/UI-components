// Generated with util/create-component.js
import React from "react";
import { CardGoodJobWidgetProps } from "./CardGoodJobWidget.types";
import "./CardGoodJobWidget.scss";
import { BEM } from "../../libs/BEM";
import { Card, IconSvg, Typography } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const CardGoodJobWidget: React.FC<CardGoodJobWidgetProps> = ({title, rows, description, className, style, children}) => {
    const bem = new BEM("CardGoodJobWidget", {});
    bem.Append(className);
    return (
        <Card
            style={style}
            className={bem.toString()}
        >
            <div className={bem.Children("left")}>
                <IconSvg icon={"checklist"}/>
            </div>
            <div className={bem.Children("right")}>
                <Typography className={bem.Children("title")} component={"h3"} color={"white"}>{title}</Typography>
                <Typography variant={"caption"} color={"white"}>{description}</Typography>
                <div className={bem.Children("rows")}>
                    {rows.map((value, index) => (
                        <div key={index} className={bem.Children("item")}>
                            <FontAwesomeIcon icon={faCheckCircle}/>
                            <span>{value.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
};
export default CardGoodJobWidget;