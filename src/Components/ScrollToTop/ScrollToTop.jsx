import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({children}) => {
    useEffect(() => {   
          window.scrollTo(0, 0);
      }, []);
    return  children
};

export default ScrollToTop;