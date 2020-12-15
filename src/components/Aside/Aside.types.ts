// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { AvatarUserProps } from "../AvatarUser/AvatarUser.types";
import { AsideHeaderProps } from "../AsideHeader/AsideHeader.types";

export interface AsideProps extends IProps {
    header?: AsidePropsHeader;
    user?: AsidePropsUser;
}

export interface AsidePropsHeader extends AsideHeaderProps {

}

export interface AsidePropsUser extends AvatarUserProps {

}