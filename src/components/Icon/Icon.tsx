import React from "react";
import { DDIconsNames } from "../../componentTypes/Icon";
import { iconMap } from ".";

export interface IconProps {
  iconName: DDIconsNames;
  onClick?: any;
  fill?: string;
}

const DDIcon: React.FC<IconProps> = ({ iconName,fill="#ffffff", ...rest }) => {
  const IconComponent = iconMap[iconName];

  if (IconComponent === undefined) {
    console.warn(`Icon with name: ${iconName} not found.`);
    return <></>;
  }
  return <IconComponent {...rest} fill={fill}/>;
};

export default DDIcon;
