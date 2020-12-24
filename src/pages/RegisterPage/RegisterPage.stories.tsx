// Generated with util/create-component.js
import React from "react";
import RegisterPage from "./RegisterPage";
import { ContextProvider } from "../../components";

export default {
    title: "Pages/RegisterPage"
};

export const Default = () => (
    <ContextProvider
        lang={"es"}
        translations={{
            fr: {
                needHelp: "besoin d'aide"
            }
        }}
    >
        <RegisterPage
            backgroundImage={"https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg"}
            register={{
                logoTitle: "Codeunic",
                logoSrc: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
                linkLoginWrapper: (component) => (
                    <a href="/login">{component}</a>
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