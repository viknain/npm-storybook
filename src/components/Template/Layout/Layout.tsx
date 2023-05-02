import classNames from 'classnames'
import React from 'react'
import Navbar, { MenuItem, UserInfo } from '../../Molecules/Navbar/Navbar'
import MainContainer from '../../Atoms/MainContainer/MainContainer'
import "./Layout.css"

interface Layoutprops {
  menuItems: MenuItem[],
  children: JSX.Element,
  userInfo: UserInfo
}

const Layout: React.FC<Layoutprops> = ({ menuItems, userInfo, children }) => {
  return (
    <div className={classNames("authWrapper")}>
      <Navbar userInfo={userInfo} menuItems={menuItems} />
      <MainContainer>
        {children}
      </MainContainer>
    </div>
  )
}

export default Layout