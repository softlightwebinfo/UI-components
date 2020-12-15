// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { HeaderHorizontalProps } from "../../components/HeaderHorizontal/HeaderHorizontal.types";
import { HeaderHorizontalMainProps } from "../../components/HeaderHorizontalMain/HeaderHorizontalMain.types";
import { HeaderHorizontalNavProps } from "../../components/HeaderHorizontalNav/HeaderHorizontalNav.types";

export interface HeaderLayoutProps extends IProps {
    headerTop: HeaderHorizontalProps;
    headerMain: HeaderHorizontalMainProps;
    headerNav: HeaderHorizontalNavProps;
}