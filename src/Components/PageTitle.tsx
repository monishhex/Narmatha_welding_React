import React, { type CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTitleProps {
  style?: CSSProperties;
}
const routeTitles: Record<string, string> = {
    '/workers/attendance': 'Attendance',

}

const PageTitle: React.FC<PageTitleProps> = ({ style }) => {
  const location = useLocation();
  const title = routeTitles[location.pathname] || '';

  return (
    <h1
      style={{
        margin: 0,
        fontSize: '15px',
        fontWeight: 500,
        color: 'rgb(103, 117, 122)',
        ...style,
      }}
    >
      {title}
    </h1>
  );
};

export default PageTitle;