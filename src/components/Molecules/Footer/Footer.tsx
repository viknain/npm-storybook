import React, { useEffect, useState } from 'react'

export enum FooterYearOptions {
  fixed = "fixed",
  currentYear = "currentYear"
}

export interface FooterProps {
  copyRightLbl: string;
  backGroundColor: any;
  yearOptions: FooterYearOptions;
  year: string;
}

const Footer: React.FC<FooterProps> = ({
  copyRightLbl = "",
  backGroundColor = "",
  yearOptions = FooterYearOptions.fixed,
  year = "2022",
  ...props
}) => {

  const [currentYear, setCurrentYear] = useState(year);

  useEffect(() => {

    if (yearOptions == FooterYearOptions.currentYear) {
      setCurrentYear(new Date().getFullYear().toString());
    }
    else {
      setCurrentYear(year);
    }

  }, [year, yearOptions]);

  return (
    <div className="footer">
      <p className="footer-item" style={{ backgroundColor: backGroundColor }}>
        {`${copyRightLbl}${currentYear}`}
      </p>
    </div>
  )
};

export default Footer;