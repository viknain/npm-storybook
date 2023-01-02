import React from "react";
import PropTypes from "prop-types";
import "./TraditionalToolTip.css";
import { DDTraditionalToolTipPosition } from "../../componentTypes/Tooltip";

export interface TraditionalToolTipProps {
  title: string;
  children: any;
  position: DDTraditionalToolTipPosition;
}

/**
 * Primary UI component for user interaction
 */
const DDTraditionalToolTip: React.FC<TraditionalToolTipProps> = ({
  title,
  position = DDTraditionalToolTipPosition.top,
  children,
}) => {
  return (
    <div className="custom-tooltip-wrapper">
      {position === DDTraditionalToolTipPosition.top && (
        // @ts-ignore
        <span tooltip={title}> {children}</span> 
      )}
      {position === DDTraditionalToolTipPosition.left && (
        // @ts-ignore
        <span tooltip={title} flow="left">
          {children}
        </span>
      )}
      {position === DDTraditionalToolTipPosition.right && (
        // @ts-ignore
        <span tooltip={title} flow="right">
          {children}
        </span>
      )}
      {position === DDTraditionalToolTipPosition.bottom && (
        // @ts-ignore
        <span tooltip={title} flow="down">
          {children}
        </span>
      )}

   
    </div>
  );
};

DDTraditionalToolTip.propTypes = {
  title: PropTypes.string.isRequired,
  position: PropTypes.oneOf<DDTraditionalToolTipPosition>(
    Object.values(DDTraditionalToolTipPosition)
  ).isRequired,
};

export default DDTraditionalToolTip;
