import React, { useState } from 'react'
import "./UserIcon.css"
import Icon from '../Icon/Icon';

export interface UserIconProps {
  iconName: any;
  onClick?: () => void;
}

const UserIcon = ({ iconName, onClick }: UserIconProps) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(iconName, "iconName")
  // TODO: Need to add logout and user info stuff
  return (
    <>
      <Icon
        iconName={iconName}
        fill="#fff"
        onClick={() => setIsOpen((s) => !s)}
        className='userIcon'
      />
      {isOpen && <div className='logoutSection'>
        <span>Logout</span>
      </div>}
    </>
  )
}

export default UserIcon