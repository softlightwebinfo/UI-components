// Generated with util/create-component.js
import React from "react";
import CardImage from "./CardImage";
import { Col, Row } from "../index";

export default {
    title: "CardImage"
};
export const Default = () => (
    <CardImage
        image={"https://lh3.googleusercontent.com/proxy/vyPaIB-Sh-PpWO9YgaW6ndZfZTp_Pzcxs02VjdoGE9egGooQ1OP5yujz_PPUTeWKfgVEWfRBu83-lgbHPxKOvNpWN4OnMcCOSG7PT36umlJsXcBiPUL1Cw"}
        title={`Title`}
    />
);
export const List = () => (
    <Row>
        {[...new Array(4 * 9)].map((value, index) => (
            <Col noPadding xs={12} sm={6} md={6} lg={3} xl={3} key={index}>
                <CardImage
                    key={index}
                    image={"https://lh3.googleusercontent.com/proxy/vyPaIB-Sh-PpWO9YgaW6ndZfZTp_Pzcxs02VjdoGE9egGooQ1OP5yujz_PPUTeWKfgVEWfRBu83-lgbHPxKOvNpWN4OnMcCOSG7PT36umlJsXcBiPUL1Cw"}
                    title={`Title ${index}`}
                />
            </Col>
        ))}
    </Row>
);
