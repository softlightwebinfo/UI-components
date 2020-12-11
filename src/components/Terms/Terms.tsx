// Generated with util/create-component.js
import React from "react";
import { TermsProps } from "./Terms.types";
import "./Terms.scss";
import { BEM } from "../../libs/BEM";
import { Button, Card, Center, Typography } from "../index";

const Terms: React.FC<TermsProps> = (
    {
        className,
        onYes,
        onNo,
        rows,
        style,
        children
    }) => {
    const bem = new BEM("Terms", {});
    bem.Append(className);
    return (
        <section
            style={style}
            className={bem.toString()}
        >
            {rows.map((value, index) => (
                <Card
                    isBody
                    key={index}
                >
                    <Typography component={"h4"}>{value.title}</Typography>
                    <Typography variant={"body2"}>{value.description}</Typography>
                </Card>
            ))}
            <Card isBody>
                <Center>
                    <Typography style={{marginBottom: 10}}>Was this information is Helpful?</Typography>
                    <Button
                        variant={"solid"}
                        theme={"info"}
                        appearance={"primary"}
                        style={{marginRight: 10}}
                        onClick={onYes}
                    >
                        Yes
                    </Button>
                    <Button onClick={onNo}>No</Button>
                </Center>
            </Card>
        </section>
    )
};
export default Terms;