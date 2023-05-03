import React from "react";
import "./TraditionalToolTip.css";
export interface TraditionalToolTipProps {
    title: string;
    children: any;
    position: TraditionalToolTipPosition;
}
export declare enum TraditionalToolTipPosition {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
}
declare const TraditionalToolTip: React.FC<TraditionalToolTipProps>;
export default TraditionalToolTip;
