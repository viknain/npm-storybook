import React from 'react';
import './NavLink.css';

export interface NavLinkProps {
    name: string;
    path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name, path }) => {
    return <a href={path} target="_blank" className="navLink">{name}</a>
}

export default NavLink