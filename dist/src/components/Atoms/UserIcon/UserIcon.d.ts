/// <reference types="react" />
import "./UserIcon.css";
export interface UserIconProps {
    iconName: any;
    onClick?: () => void;
}
declare const UserIcon: ({ iconName, onClick }: UserIconProps) => JSX.Element;
export default UserIcon;
