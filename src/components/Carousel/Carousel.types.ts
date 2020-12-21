// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface CarouselProps extends IProps {
    images: CarouselPropsImage[];
    auto?: boolean;
    autoTime?: number;
}

export interface CarouselPropsImage {
    src: string;
}