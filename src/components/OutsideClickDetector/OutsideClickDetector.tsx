// Generated with util/create-component.js
import React, { Children, cloneElement, Component } from "react";
import { OutsideClickDetectorProps } from "./OutsideClickDetector.types";
import "./OutsideClickDetector.scss";
import { htmlIdGenerator } from "../../functions/generator";
import { KeyCode } from "../../mappings/constants";
import { elementBlur } from "../../functions/dom";

export default class OutsideClickDetector extends Component<OutsideClickDetectorProps, any> {
    private capturedDownIds: any[];
    private id: any;

    constructor(props) {
        super(props);
        this.id = htmlIdGenerator();
        this.capturedDownIds = [];
    }

    onClickOutside = event => {
        const {
            isDisabled,
            onOutsideClick,
        } = this.props;

        if (isDisabled) {
            this.capturedDownIds = [];
            return;
        }

        if (
            (event.generatedBy && event.generatedBy.includes(this.id))
            || this.capturedDownIds.includes(this.id)
        ) {
            this.capturedDownIds = [];
            return;
        }

        this.capturedDownIds = [];
        return onOutsideClick(event);
    };

    componentDidMount() {
        document.addEventListener('mouseup', this.onClickOutside);
        document.addEventListener('touchend', this.onClickOutside);
        document.addEventListener('keydown', this.onScape);
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.onClickOutside);
        document.removeEventListener('touchend', this.onClickOutside);
        document.removeEventListener('keydown', this.onScape);
    }

    onScape = (evt) => {
        evt = evt || window.event;
        if (evt.keyCode == KeyCode.SCAPE) {
            // @ts-ignore
            elementBlur();
            this.onClickOutside(evt);
        }
    }
    onChildClick = (event, cb) => {
        if (event.nativeEvent.hasOwnProperty('generatedBy')) {
            event.nativeEvent.generatedBy.push(this.id);
        } else {
            event.nativeEvent.generatedBy = [this.id];
        }

        cb && cb(event);
    }

    onChildMouseDown = event => {
        this.onChildClick(event, e => {
            this.capturedDownIds = e.nativeEvent.softGeneratedBy;
            if (this.props.onMouseDown) this.props.onMouseDown(e);
            if (this.props.onTouchStart) this.props.onTouchStart(e);
        });
    }

    onChildMouseUp = event => {
        this.onChildClick(event, e => {
            if (this.props.onMouseUp) this.props.onMouseUp(e);
            if (this.props.onTouchEnd) this.props.onTouchEnd(e);
        });
    }

    render(): any {
        const props = ({
            ...this.props.children.props, ...{
                onMouseDown: this.onChildMouseDown,
                onTouchStart: this.onChildMouseDown,
                onMouseUp: this.onChildMouseUp,
                onTouchEnd: this.onChildMouseUp,
            }
        });

        const child = Children.only(this.props.children);
        return cloneElement(child, props);
    }
}