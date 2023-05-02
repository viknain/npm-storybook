import React from "react";
import "./TraditionalToolTip.css";

export interface TraditionalToolTipProps {
  title: string;
  children: any;
  position: TraditionalToolTipPosition;
}

export enum TraditionalToolTipPosition {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right"
}

const TraditionalToolTip: React.FC<TraditionalToolTipProps> = ({
  title,
  position = TraditionalToolTipPosition.top,
  children,
}) => {
  return (
    <div className="customTooltipWrapper">
      {position === TraditionalToolTipPosition.top && (
        // @ts-ignore
        <span tooltip={title}> {children}</span>
      )}
      {position === TraditionalToolTipPosition.left && (
        // @ts-ignore
        <span tooltip={title} flow="left">
          {children}
        </span>
      )}
      {position === TraditionalToolTipPosition.right && (
        // @ts-ignore
        <span tooltip={title} flow="right">
          {children}
        </span>
      )}
      {position === TraditionalToolTipPosition.bottom && (
        // @ts-ignore
        <span tooltip={title} flow="down">
          {children}
        </span>
      )}


    </div>
  );
};

export default TraditionalToolTip;
