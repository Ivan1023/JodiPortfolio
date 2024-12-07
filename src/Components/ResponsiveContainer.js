import React, { useState, useEffect } from 'react';

const ResponsiveContainer = ({ isStickyColumn, children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 550);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = isSmallScreen
    ? { width: '100%', marginLeft: '0px' }
    : isStickyColumn
    ? { width: '100%', marginLeft: '360px' }
    : { width: '100%', marginLeft: '15px' };

  return <div style={style}>{children}</div>;
};

export default ResponsiveContainer;