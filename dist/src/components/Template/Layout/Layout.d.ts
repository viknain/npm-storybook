import React from 'react';
import { MenuItem, UserInfo } from '../../Molecules/Navbar/Navbar';
import "./Layout.css";
interface Layoutprops {
    menuItems: MenuItem[];
    children: JSX.Element;
    userInfo: UserInfo;
}
declare const Layout: React.FC<Layoutprops>;
export default Layout;
