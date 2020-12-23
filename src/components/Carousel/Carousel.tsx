// Generated with util/create-component.js
import React, { useEffect } from "react";
import { CarouselProps } from "./Carousel.types";
import "./Carousel.scss";
import { BEM } from "../../libs/BEM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel: React.FC<CarouselProps> = (
    {
        className,
        style,
        images,
        auto = true,
        autoTime = 3500,
    }) => {

    const [state, setState] = React.useState({
        position: 0,
        auto: auto,
    });

    const bem = new BEM("Carousel", {});
    bem.Append(className);

    const positionTransform: number = 100 * state.position;
    const carouselLength: number = images.length;

    const onClickArrow = (position: "left" | "right") => {
        setState((value) => {
            let currentPosition: number = Number(value.position);
            if (position == "left") {
                currentPosition -= 1;
            } else {
                currentPosition += 1;
            }

            if (Number(currentPosition) > carouselLength - 1) {
                currentPosition = 0;
            }

            if (Number(currentPosition) < 0) {
                currentPosition = carouselLength - 1;
            }
            return {
                ...value,
                position: currentPosition,
            };
        })
    };

    const Arrow = ({position}: { position: "left" | "right" }) => {
        return (
            <div onClick={() => onClickArrow(position)} className={bem.Children("arrow")}>
                <FontAwesomeIcon icon={position == "right" ? faChevronRight : faChevronLeft}/>
            </div>
        );
    };

    const onMouseEnter = () => auto && setState({...state, auto: false})

    const onMouseLeave = () => auto && setState({...state, auto: true});

    useEffect(() => {
        let interval = null;
        if (state.auto) {
            interval = setInterval(() => {
                onClickArrow("right");
            }, autoTime);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    }, [state.auto]);

    return (
        <section
            style={style}
            className={bem.toString()}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            <div className={bem.Children("content")}>
                <Arrow position={"left"}/>
                <div
                    style={{
                        transform: `translateX(-${positionTransform}%)`,
                    }}
                    className={bem.Children("images")}>
                    {images.map((value, index) => (
                        <article key={index} className={bem.Children("image")}>
                            <img src={value.src} alt=""/>
                        </article>
                    ))}
                </div>
                <Arrow position={"right"}/>
            </div>
        </section>
    )
};
export default Carousel;