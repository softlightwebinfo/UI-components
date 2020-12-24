// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface CalendarProps extends IProps {
    width?: number;

    onMonthChange?();

    onPrevMonth?();

    onNextMonth?();

    onDayClick?(e: any, day: any);

    onYearChange?(e: any, value: any);
}