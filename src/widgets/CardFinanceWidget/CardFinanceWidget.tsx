// Generated with util/create-component.js
import React, { useState } from "react";
import { CardFinanceWidgetProps } from "./CardFinanceWidget.types";
import "./CardFinanceWidget.scss";
import { BEM } from "../../libs/BEM";
import { Badge, Button, Card, Flex, Popover, Typography } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const CardFinanceWidget: React.FC<CardFinanceWidgetProps> = ({className, style, ...props}) => {
    const [open, setOpen] = useState<boolean>(false);
    const {
        icon,
        title,
        subTitle,
        list,
        dropdown,
    } = props;
    const bem = new BEM("CardFinanceWidget", {});
    bem.Append(className);

    return (
        <Card
            border
            style={style}
            className={bem.toString()}
        >
            <Flex className={bem.Children("top")}>
                <div>
                    <Typography className={bem.Children("title")} variant={"body2"}>{title}</Typography>
                    <Typography variant={"caption"}>{subTitle}</Typography>
                </div>
                <div>
                    <Popover
                        trigger={<Button hasIcon><FontAwesomeIcon icon={faEllipsisV}/></Button>}
                        open={open}
                        onOpen={setOpen}
                    >
                        <DropdownMenu {...dropdown}/>
                    </Popover>
                </div>
            </Flex>
            <div className={bem.Children("content")}>
                <Flex className={bem.Children("list")}>
                    {list.map((value, index) => (
                        <div key={index}>
                            <Badge>{value.label}</Badge>
                            <Typography variant={"h5"}>{value.value}</Typography>
                        </div>
                    ))}
                </Flex>
                {icon && (
                    <div>
                        <div className={bem.Children("icon")}>
                            <FontAwesomeIcon icon={icon}/>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    )
};
export default CardFinanceWidget;