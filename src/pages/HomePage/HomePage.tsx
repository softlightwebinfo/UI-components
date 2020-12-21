// Generated with util/create-component.js
import React, { useState } from "react";
import { HomePageProps } from "./HomePage.types";
import "./HomePage.scss";
import { BEM } from "../../libs/BEM";
import TitleArrow from "../../components/TitleArrow/TitleArrow";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes, faCog, faFire, faList, faUser } from "@fortawesome/free-solid-svg-icons";
import { DropdownPropsData } from "../../components/Dropdown/Dropdown.types";
import { MenuPropsMenuItem } from "../../components/Menu/Menu.types";
import { Button, Carousel, Col, Container, Row } from "../../components";
import { CardAboutSimpleWidget, CardArticleFeaturedWidget, CardListCategoriesWidget } from "../../widgets";
import { randomInteger } from "../../functions/generator";

const HomePage: React.FC<HomePageProps> = ({className, style, children}) => {
    const [state, setState] = useState({
        select: "",
    });
    const bem = new BEM("HomePage", {});
    bem.Append(className);
    return (
        <section
            style={style}
            className={bem.toString()}
            data-testid="HomePage"
        >
            <HeaderLayout
                headerTop={{
                    message: {
                        icon: <FontAwesomeIcon icon={faFire}/>,
                        message: "A new version will be released on December 25th. Stay tuned!"
                    },
                    rows: {
                        rows: [
                            {children: "LOGIN"},
                            {children: "SIGNUP"},
                        ]
                    }
                }}
                headerMain={{
                    leftProps: {
                        logo: {
                            image: "https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png",
                            title: "Logo",
                        },
                        input: {
                            input: {
                                placeholder: `Search in ${state.select || "all"}`,
                            },
                            dropdown: {
                                onClick: (value: string, row: DropdownPropsData, index: number) => {
                                    setState({
                                        select: value,
                                    });
                                },
                                select: state.select,
                                data: [
                                    {label: "App", value: "app"},
                                    {label: "Products", value: "products"},
                                    {label: "Blogs", value: "blogs"},
                                ]
                            }
                        }
                    }
                }}
                headerNav={{
                    rowsLeft: {
                        active: "main/dashboard/crypto",
                        onClick(key: string, value: MenuPropsMenuItem, index: number) {
                            console.log(key, value, index);
                        },
                        menu: {
                            "main": {
                                label: "Main",
                                menu: {
                                    "dashboard": {
                                        label: "Dashboard",
                                        menu: {
                                            "crypto": {
                                                label: "Crypto",
                                            },
                                            "crm": {
                                                label: "Crm",
                                            },
                                            "listing": {
                                                label: "Listing",
                                            }
                                        }
                                    },
                                    "widgets": {
                                        label: "Widgets",
                                    },
                                    "metrics": {
                                        label: "Metrics",
                                    },
                                    "angolia": {
                                        label: "Angolia",
                                    }
                                }
                            },
                            "build-apps": {
                                label: "In-Built Apps",
                                menu: {
                                    "test": {
                                        label: "Test dashboard",
                                        menu: {
                                            "crypto": {
                                                label: "Crypto",
                                            },
                                            "crm": {
                                                label: "Crm",
                                            },
                                            "listing": {
                                                label: "Listing",
                                            }
                                        }
                                    },
                                    "test-2": {
                                        label: "Test dashboard 2",
                                        menu: {
                                            "crypto": {
                                                label: "Crypto",
                                            },
                                            "crm": {
                                                label: "Crm",
                                            },
                                            "listing": {
                                                label: "Listing",
                                            }
                                        }
                                    },
                                    "test-3": {
                                        label: "Test dashboard 3",
                                        menu: {
                                            "crypto": {
                                                label: "Crypto",
                                            },
                                            "crm": {
                                                label: "Crm",
                                            },
                                            "listing": {
                                                label: "Listing",
                                            }
                                        }
                                    },
                                }
                            },
                            "components": {
                                label: "Components",
                            },
                            "extra-components": {
                                label: "Extra Components",
                            },
                            "extensions": {
                                label: "Extensions",
                            },
                            "custom-views": {
                                label: "Custom Views",
                            },
                        }
                    },
                    rowsRight: {
                        active: "",
                        icons: true,
                        onClick(key: string, value: MenuPropsMenuItem, index: number) {
                            console.log("right", key, value, index);
                        },
                        menu: {
                            "list": {
                                label: <Button hasIcon><FontAwesomeIcon icon={faList}/></Button>
                            },
                            "setting": {
                                label: <Button hasIcon><FontAwesomeIcon icon={faCog}/></Button>
                            },
                            "app": {
                                label: <Button hasIcon><FontAwesomeIcon icon={faBoxes}/></Button>
                            }
                        }
                    },
                }}
            />
            <Carousel
                images={[
                    {src: "https://digivizer.com/wp-content/uploads/2020/05/carousel-blogheader-1024x536-1.png"},
                    {src: "https://mk0pollfishcomghx3kd.kinstacdn.com/wp-content/uploads/2017/12/Mobile_AD_FORMATS3-1.png"},
                    {src: "https://blog.applovin.com/wp-content/uploads/2019/09/1440x810_popular-banner.jpg"},
                    {src: "https://i.ytimg.com/vi/1OoNautKkX4/maxresdefault.jpg"},
                ]}
            />
            <TitleArrow
                title={"About Us"}
                subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
            />
            <Container>
                <Row>
                    {[...new Array(8)].map((value, index) => (
                        <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                            <a href="/hello">
                                <CardAboutSimpleWidget
                                    icon={faUser}
                                    title={"What is Lorem Ipsum?"}
                                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book."}
                                />
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
            <TitleArrow
                spaceTop
                title={"Featured Articles"}
                subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
            />
            <Container>
                <Row>
                    {[...new Array(12)].map((value, index) => (
                        <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                            <a href="/article/drum">
                                <CardArticleFeaturedWidget
                                    description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book.`}
                                    title={"Bateria DW en venta en Mallorca"}
                                    breadCrumb={[
                                        {label: "Venta", onClick: (e) => console.log(e)},
                                        {label: "Instrumentos", onClick: (e) => console.log(e)},
                                        {label: "Bateria", onClick: (e) => console.log(e)},
                                    ]}
                                    image={"https://i.pinimg.com/474x/77/f7/1c/77f71c8a34780da8c8ea90331ce002b9.jpg"}
                                    avatar={"https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg"}
                                    label={index % 2 == 0 ? "En oferta" : null}
                                    isFeatured={index / (Math.random() * 3) >= 3}
                                />
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
            <TitleArrow
                spaceTop
                title={"Categories"}
                subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
            />
            <Container>
                <Row>
                    {[...new Array(9)].map((value, index) => (
                        <Col paddingBottom xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                            <CardListCategoriesWidget
                                title={"Instruments"}
                                total={randomInteger(0, 100)}
                                list={[...new Array(randomInteger(0, 20))].map((_, i) => ({
                                    title: `Bateria ${i}`,
                                    label: randomInteger(0, 10).toString(),
                                }))}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
};
export default HomePage;