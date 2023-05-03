import React from 'react';
export declare enum FooterYearOptions {
    fixed = "fixed",
    currentYear = "currentYear"
}
export interface FooterProps {
    copyRightLbl: string;
    backGroundColor: any;
    yearOptions: FooterYearOptions;
    year: string;
}
declare const Footer: React.FC<FooterProps>;
export default Footer;
