// Generated with util/create-component.js
import React from "react";
import { CardListCategoriesWidgetProps } from "./CardListCategoriesWidget.types";
import "./CardListCategoriesWidget.scss";
import { BEM } from "../../libs/BEM";
import { Card, RowLabelCount } from "../../components";

const CardListCategoriesWidget: React.FC<CardListCategoriesWidgetProps> = (
    {
        className,
        style,
        title,
        list,
        total
    }) => {
    const bem = new BEM("CardListCategoriesWidget", {});
    bem.Append(className);
    return (
        <Card
            isBody
            isTitleLabel
            title={`${title} (${total})`}
            style={style}
            className={bem.toString()}
        >
            {list.map((row, index) => (
                <RowLabelCount key={index}{...row}/>
            ))}
        </Card>
    )
};
export default CardListCategoriesWidget;