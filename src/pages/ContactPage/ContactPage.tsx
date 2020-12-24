// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import { ContactPageProps } from "./ContactPage.types";
import "./ContactPage.scss";
import { BEM } from "../../libs/BEM";
import { Button, Col, Form, Image, Info, Row, Section, Textarea, TextInputField, Typography } from "../../components";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useGeneralContext } from "../../context/generalContext";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

function LocationMarker({address}) {
    const [position, setPosition] = useState<any>([37.885963680860755, -4.774589538574219,]);
    const map = useMapEvents({
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })
    useEffect(() => {
        fetch(location.protocol + '//nominatim.openstreetmap.org/search?format=json&q=' + address)
            .then(value => value.json())
            .then(value => {
                setPosition([value[0].lat, value[0].lon]);
                map.flyTo([value[0].lat, value[0].lon], map.getZoom())
            });
    }, [])
    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

const ContactPage: React.FC<ContactPageProps> = ({className, style, children, ...props}) => {
    const {
        title,
        description,
        image,
        address,
        information,
        onSubmit,
        onChange,
    } = props;
    const bem = new BEM("ContactPage", {});
    bem.Append(className);
    const use = useGeneralContext();
    const styleMap = {"width": "100%", "height": "60vh"}
    const [position] = useState<any>([37.885963680860755, -4.774589538574219,]);

    return (
        <section
            style={style}
            className={bem.toString()}
        >
            <Image title={title} src={image}/>
            <Section>
                <Row>
                    <Col md={4} offset={2}>
                        <Typography gutterBottom component={"h2"}>{title}</Typography>
                        <Typography gutterBottom>{description}</Typography>
                        <Form custom onChange={onChange} onSubmit={onSubmit} id={"form-contact"}>
                            <TextInputField
                                placeholder={use.getTranslation("name")}
                                rounded icon={faUser}
                                label={use.getTranslation("name")}
                            />
                            <TextInputField
                                placeholder={use.getTranslation("email")}
                                rounded
                                icon={faUser}
                                label={use.getTranslation("email")}
                            />
                            <TextInputField
                                placeholder={use.getTranslation("phone")}
                                rounded
                                icon={faUser}
                                label={use.getTranslation("phone")}
                            />
                            <Textarea label={use.getTranslation("message")} placeholder={use.getTranslation("message")}
                                      rounded/>
                            <Button>{use.getTranslation("contactUs")}</Button>
                        </Form>
                    </Col>
                    <Col md={4} offset={2}>
                        {information.map((row, indexRow) => (
                            <Info horizontal key={indexRow}{...row}/>
                        ))}
                    </Col>
                </Row>
            </Section>
            <MapContainer
                style={styleMap}
                center={position}
                zoom={12}
            >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <LocationMarker address={address}/>
            </MapContainer>
        </section>
    )
};
export default ContactPage;