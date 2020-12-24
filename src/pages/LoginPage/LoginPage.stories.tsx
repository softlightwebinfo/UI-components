// Generated with util/create-component.js
import React from "react";
import LoginPage from "./LoginPage";
import { ContextProvider } from "../../components";

export default {
    title: "Pages/LoginPage"
};

export const Default = () => {
    return (
        <ContextProvider
            lang={"en"}
            translations={{
                fr: {
                    needHelp: "besoin d'aide"
                }
            }}
        >
            <LoginPage
                backgroundImage={"https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg"}
                login={{
                    logoTitle: "Codeunic",
                    logoSrc: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
                    initPassword: "Test123",
                    initEmail: "email@email.com",
                    linkCreateAccountWrapper: (component) => (
                        <a href="/register">{component}</a>
                    ),
                    linkNeedHelpWrapper: (component) => (
                        <a href="/help">{component}</a>
                    ),
                    onChange(e, value, id) {

                    },
                    onSubmit(e) {

                    }
                }}
                footer={{
                    title: "Codeunic",
                    textRight: "@2020, Designed by codeunic",
                    links: {
                        list: [
                            {label: "BLOG", route: "blog"},
                            {label: "ABOUT US", route: "about"},
                            {label: "HELP", route: "help"},
                        ]
                    }
                }}
            />
        </ContextProvider>
    );
}
