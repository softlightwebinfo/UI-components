// Generated with util/create-component.js
import React from "react";
import CardFinanceWidget from "./CardFinanceWidget";
import { Col, Row } from "../../components";
import { faBan, faCheckCircle, faEnvelope, faIdCard, faMoneyBill, faPrint } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "CardFinanceWidget"
};

export const Default = () => {
    const menu = [
        {label: "View Statement", icon: faIdCard},
        {label: "Spending", icon: faMoneyBill},
        {label: "Tax breakdown", icon: faBan},
        {separator: true},
        {label: "Print statement", icon: faPrint},
        {label: "Email statement", icon: faEnvelope}
    ];
    return (
        <Row style={{padding: 20}}>
            <Col md={4}>
                <CardFinanceWidget
                    dropdown={{menu}}
                    title={"PREVIOUS STATEMENT"}
                    subTitle={"Paid on December 10, 2020"}
                    icon={faCheckCircle}
                    list={[
                        {label: "CARD LIMIT", value: "34,500.00"},
                        {label: "SPENT", value: "27,224.21"},
                        {label: "MINIMUM", value: "7,331.94"},
                    ]}
                />
            </Col>
            <Col md={4}>
                <CardFinanceWidget
                    dropdown={{menu}}
                    title={"PREVIOUS STATEMENT"}
                    subTitle={"Paid on December 10, 2020"}
                    icon={faCheckCircle}
                    list={[
                        {label: "CARD LIMIT", value: "34,500.00"},
                        {label: "SPENT", value: "27,224.21"},
                        {label: "MINIMUM", value: "7,331.94"},
                    ]}
                />
            </Col>
            <Col md={4}>
                <CardFinanceWidget
                    dropdown={{menu}}
                    title={"PREVIOUS STATEMENT"}
                    subTitle={"Paid on December 10, 2020"}
                    icon={faCheckCircle}
                    list={[
                        {label: "CARD LIMIT", value: "34,500.00"},
                        {label: "SPENT", value: "27,224.21"},
                        {label: "MINIMUM", value: "7,331.94"},
                    ]}
                />
            </Col>
        </Row>
    );
}
