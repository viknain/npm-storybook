import React from 'react';
import './NavLink.css';
export interface NavLinkProps {
    name: string;
    path: string;
}
declare const NavLink: React.FC<NavLinkProps>;
export default NavLink;
