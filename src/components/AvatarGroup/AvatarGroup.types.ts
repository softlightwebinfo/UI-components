// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface AvatarGroupProps extends IProps {
    avatars: IAvatarGroupAvatar[];
    maxAvatars: number;
    showCounter?: boolean;
}

export interface IAvatarGroupAvatar {
    src: string;
    assistiveText: string;
    title: string;
}