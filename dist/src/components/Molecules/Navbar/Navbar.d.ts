import React from 'react';
import "./Navbar.css";
export interface NavbarProps {
    menuItems: MenuItem[];
    userInfo?: UserInfo;
}
export type MenuItem = {
    title: string;
    path: string;
};
export type UserInfo = {
    userName: string;
    email: string;
    profileImage: string;
};
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
