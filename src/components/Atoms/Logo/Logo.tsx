import React from 'react'

export interface NavbarLogoProps {
    imageUrl: string;
    alt: string
}

const Logo: React.FC<NavbarLogoProps> = ({ imageUrl, alt }) => {
    return <img src={imageUrl} alt={alt} />
}

export default Logo