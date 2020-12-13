// Generated with util/create-component.js
import React from "react";
import Menu from "./Menu";
import { Card, Navbar } from "../index";

export default {
    title: "Menu"
};
export const Default = () => (
    <Menu
        active={"build-apps/test-2"}
        menu={{
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
        }}
    />
);
export const MenuCard = () => (
    <Navbar>
        <Menu
            active={"build-apps/test-2"}
            menu={{
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
            }}
        />
    </Navbar>
);
