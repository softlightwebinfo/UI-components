// Generated with util/create-component.js
import React, { useState } from "react";
import ContactPage from "./ContactPage";
import { Button, ContextProvider } from "../../components";
import { faBox, faBoxes, faCog, faFire, faList, faMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownPropsData } from "../../components/Dropdown/Dropdown.types";
import { MenuPropsMenuItem } from "../../components/Menu/Menu.types";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import { FooterBigWidget } from "../../widgets";

export default {
    title: "Pages/ContactPage"
};
export const Default = () => {
    const [state, setState] = useState({
        select: "",
    });
    return (
        <ContextProvider
            translations={{}}
            lang={"en"}
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
            <ContactPage
                image={"https://therushaway.com/wp-content/uploads/2019/02/website-development-banner-png-1.png"}
                title={"Send us a Message"}
                description={"You can contact us with anything related to our Products. We will get in touch with you as soon as possible."}
                onChange={console.log}
                onSubmit={console.log}
                address={"inca mallorca españa"}
                information={[
                    {
                        icon: faMarker,
                        title: "Find us at the office",
                        description: ["Desaparecido, nr 90", "41122 El inquieto", "La esperanza"]
                    },
                    {
                        icon: faPhone,
                        title: "Give us a ring",
                        description: ["Michael Jordan", "+40 125 123 456", "Mon - Fri, 08:00 - 22:00"]
                    },
                    {
                        icon: faBox,
                        title: "Legal information",
                        description: ["Nombre empresa", "VAT 2124542EN", "IBAN EN98 12345678912345678945", "Bank Espe"]
                    },
                ]}
            />
            <FooterBigWidget
                top={{
                    titleLeft: "Cientos de anuncios",
                    descriptionLeft: "Probably the best UI Kit in the world! We know you've been waiting for it, so don't be shy!",
                    titleRight: "Subscribe to newsletter",
                    descriptionRight: "Probably the best UI Kit in the world! We know you've been waiting for it, so don't be shy!",
                    links: [
                        {title: "About", links: ["Blog", "About us", "Presentation", "Contact us"]},
                        {title: "Menu", links: ["Home", "Articles", "Login", "Create account"]},
                        {title: "Legal", links: ["FAQ", "Terms & Conditions", "Licences", "Cookies"]},
                    ],
                }}
                bottom={{
                    title: "Codeunic UI Components",
                    textRight: "Copyright © 2020 Codeunic All Rights Reserved.",
                    links: {
                        wrapper: (component, row) => (
                            <a href={row.route}>{component}</a>
                        ),
                        list: [
                            {label: "Blog", route: "blog"},
                            {label: "Presentation", route: "blog"},
                            {label: "Discover", route: "blog"},
                            {label: "Payment", route: "blog"},
                            {label: "Contact us", route: "blog"},
                        ]
                    }
                }}
            />
        </ContextProvider>
    );
}
