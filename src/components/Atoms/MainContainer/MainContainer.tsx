import React, { FC } from 'react';
import "./MainContainer.css";

interface MainContainerProps {
    children: JSX.Element
}
const MainContainer: FC<MainContainerProps> = ({ children }) => {
    return (
        <div className="contentWrapper">
            {children}
        </div>
    )
}

export default MainContainer