import React from 'react';
import { Layout } from 'antd';
// import { useResponsiveStyles } from '../utils/Styles';

const ResponsiveTableLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const responsiveStyles = useResponsiveStyles();
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default ResponsiveTableLayout;
