// Generated with util/create-component.js
import React, { useState } from "react";
import HeaderLayout from "./HeaderLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { DropdownPropsData } from "../../components/Dropdown/Dropdown.types";

export default {
    title: "Layouts/HeaderLayout"
};
export const Default = () => {
    const [state, setState] = useState({
        select: "",
    });
    return (
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
                    menu: {}
                },
            }}
        />
    );
}
