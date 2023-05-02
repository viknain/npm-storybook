import classNames from 'classnames'
import React, { useState } from 'react'
import "./Navbar.css"
import Icon, { IconsNames } from '../../Atoms/Icon/Icon'
import NavLink from '../../Atoms/NavLink/NavLink'
import Logo from '../../Atoms/Logo/Logo'
import UserIcon from '../../Atoms/UserIcon/UserIcon'

let imageUrl = require('../../../assets/images/logo.png');

export interface NavbarProps {
    menuItems: MenuItem[],
    userInfo?: UserInfo
}

export type MenuItem = {
    title: string
    path: string
}

export type UserInfo = {
    userName: string,
    email: string,
    profileImage: string
}

const Navbar: React.FC<NavbarProps> = ({ menuItems, userInfo }) => {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

    return (
        <div>
            <div className={classNames("header")} >
                <div className={classNames("menuIcon")}>
                    <Icon
                        iconName={IconsNames.menuIcon}
                        fill="#fff"
                        onClick={() => setShowMobileMenu(true)}
                        className='mobileNavIcon'
                    />
                </div>
                <div className={classNames("headerLogo")}>
                    <Logo imageUrl={imageUrl} alt="Logo" />
                </div>
                <div className={classNames("navItem")}>
                    {menuItems?.map((menu) => <NavLink name={menu?.title} path="#" key={menu?.title}/>)}
                    {userInfo && <UserIcon iconName={IconsNames.userIcon} />}
                </div>
            </div>
            {showMobileMenu && <div className={classNames("sideMenu")}>
                <Icon
                    className={classNames("closeBtn")}
                    iconName={IconsNames.closeIcon}
                    fill="#fff"
                    onClick={() => setShowMobileMenu(false)}
                />
                <div className={classNames("sideMenuLogo")}>
                    <Logo imageUrl={imageUrl} alt="Logo" />
                </div>
                <div className={classNames("sideMenuItem")} >
                    {menuItems?.map((menu) => <NavLink name={menu?.title} path="#" key={menu?.title} />)}
                    <NavLink name="Logout" path="#" />
                </div>
            </div>}
        </div>
    )
}

export default Navbar