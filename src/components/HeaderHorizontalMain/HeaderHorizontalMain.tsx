// Generated with util/create-component.js
import React from "react";
import { HeaderHorizontalMainProps } from "./HeaderHorizontalMain.types";
import "./HeaderHorizontalMain.scss";
import { BEM } from "../../libs/BEM";
import { Avatar, Button, Container, HeaderHorizontal, LogoSearchDropdown } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope, faLanguage } from "@fortawesome/free-solid-svg-icons";

const HeaderHorizontalMain: React.FC<HeaderHorizontalMainProps> = ({className, rightChildren, leftProps, style, children}) => {
    const bem = new BEM("HeaderHorizontalMain", {});
    bem.Append(className);
    return (
        <header
            style={style}
            className={bem.toString()}
        >
            <Container>
                <HeaderHorizontal
                    noContainer
                    left={<LogoSearchDropdown {...leftProps} />}
                    right={(
                        <>
                            {rightChildren}
                            <Button hasIcon><FontAwesomeIcon icon={faBell}/></Button>
                            <Button hasIcon><FontAwesomeIcon icon={faEnvelope}/></Button>
                            <Button hasIcon><FontAwesomeIcon icon={faLanguage}/></Button>
                            <Avatar name={"Rafa Gonzalez"} src={"https://bit.ly/dan-abramov"}/>
                        </>
                    )}
                />
            </Container>
        </header>
    )
};
export default HeaderHorizontalMain;