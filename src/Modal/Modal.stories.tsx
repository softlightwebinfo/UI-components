// Generated with util/create-component.js
import React, { useState } from "react";
import Modal from "./Modal";
import { Button, Flex, Form, Textarea, TextInputField, Typography } from "../index";

export default {
    title: "Modal"
};
export const Default = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(!open)} element>Open modal</Button>
            <Modal size={"alert"} id={"Modal-1"} isOpen={open} onRequestClose={() => setOpen(false)}>
                <img
                    src="https://img.freepik.com/free-vector/beautiful-gradient-spring-landscape_23-2148448598.jpg?size=626&ext=jpg"
                    alt="landscape with rainbows, birds and colorful balloons"
                />
            </Modal>
        </div>
    )
};
export const Text = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(!open)} element>Open modal</Button>
            <Modal size={"alert"} id={"Modal-1"} isOpen={open} onRequestClose={() => setOpen(false)}>
                <Typography component={"p"}>
                    A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of
                    light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of
                    a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky
                    directly opposite the sun. Rainbows can be full circles. However, the observer normally sees only an
                    arc formed by illuminated.
                </Typography>
            </Modal>
        </div>
    )
};
export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(!open)} element>Open modal</Button>
            <Modal title="Modal Header" size={"alert"} id={"Modal-1"} isOpen={open}
                   onRequestClose={() => setOpen(false)}>
                <Typography component={"p"}>
                    A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of
                    light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of
                    a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky
                    directly opposite the sun. Rainbows can be full circles. However, the observer normally sees only an
                    arc formed by illuminated.
                </Typography>
            </Modal>
        </div>
    )
};
export const Footer = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(!open)} element>Open modal</Button>
            <Modal
                title="Modal Header"
                size={"alert"}
                id={"Modal-1"}
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                footer={
                    <Flex>
                        <Button element>Previous</Button>
                        <Button theme={"info"} color={"info"} variant={"solid"} element>Save</Button>
                    </Flex>
                }
            >
                <Typography component={"p"}>
                    A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of
                    light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of
                    a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky
                    directly opposite the sun. Rainbows can be full circles. However, the observer normally sees only an
                    arc formed by illuminated.
                </Typography>
            </Modal>
        </div>
    )
};
export const FormModal = () => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});
    return (
        <div>
            <Button onClick={() => setOpen(!open)} element>Open modal</Button>
            <Modal
                title="Modal Header"
                size={"alert"}
                id={"Modal-1"}
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                footer={
                    <Flex>
                        <Button element>Previous</Button>
                        <Button theme={"info"} color={"info"} variant={"solid"} element>Save</Button>
                    </Flex>
                }
            >
                <Form id={"formExample"} noValidate onSubmit={console.log} onChange={console.log}>
                    <TextInputField formGroup rounded id={"company"} label={"Company"}/>
                    <TextInputField formGroup rounded id={"location"} label={"Location"}/>
                    <Textarea rounded id={"description"} label={"Description"}/>
                </Form>
            </Modal>
        </div>
    )
};